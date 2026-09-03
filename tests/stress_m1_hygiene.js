/**
 * tests/stress_m1_hygiene.js
 * Adversarial Stress Test Suite for Desktop Pet Hygiene Subsystem (Milestone 1, Features 9, 10, 11)
 *
 * Focus Areas:
 * 1. Rapid concurrent spawning of 50-500 poops, coordinate boundary clamping, NaN handling.
 * 2. Click-to-clean on active, expired, and non-existent poop IDs; score exactness (+10) and persistence.
 * 3. Neglected timer transition (<30s: 0 flies; >=30s: 4-6 flies spawned).
 * 4. 60 FPS fly swarm kinematics: screen bounds compliance, velocity damping, NaN coordinates avoidance.
 * 5. Cleanup of neglected poop: DOM node removal, scattering animation physics, memory leaks & orphaned nodes.
 */

const fs = require('fs');
const path = require('path');
const vm = require('vm');
const harness = require('./e2e/harness');

const ROOT = path.resolve(__dirname, '..');
if (harness.MockDOMElement && !harness.MockDOMElement.prototype.hasOwnProperty('parentNode')) {
  Object.defineProperty(harness.MockDOMElement.prototype, 'parentNode', {
    get() { return this.parentElement; },
    configurable: true
  });
}

// Test tracking
let totalTests = 0;
let passedTests = 0;
let failedTests = 0;
const failures = [];

function assert(condition, message) {
  if (!condition) {
    throw new Error('ASSERTION FAILED: ' + message);
  }
}

async function runTest(name, fn) {
  totalTests++;
  try {
    await fn();
    console.log('  [PASS] ' + name);
    passedTests++;
  } catch (err) {
    console.error('  [FAIL] ' + name);
    console.error('         Reason: ' + err.message);
    failedTests++;
    failures.push({ name, error: err.message, stack: err.stack });
  }
}

/**
 * Creates an isolated test environment with fresh PetHygiene instance
 */
function createEnvironment(options = {}) {
  const sandbox = harness.createSandboxContext(options.initialStore || {});
  const s = harness.loadPetSystem(sandbox);
  const container = s.document.createElement('div');
  container.id = 'desktop-pet-layer';
  s.document.body.appendChild(container);

  s.PetHygiene.init(container, s.Store);

  return {
    sandbox: s,
    PetHygiene: s.PetHygiene,
    Store: s.Store,
    container,
    window: s.window,
    document: s.document
  };
}

async function runAllStressTests() {
  console.log('='.repeat(80));
  console.log('  ADVERSARIAL STRESS TEST HARNESS: HYGIENE SUBSYSTEM (M1 FEATURES 9, 10, 11)');
  console.log('='.repeat(80));

  // =========================================================================
  // GROUP 1: Rapid Concurrent Spawning & Capacity Stress (Feature 9)
  // =========================================================================
  console.log('\n--- Group 1: Rapid Concurrent Spawning & Capacity Stress ---');

  await runTest('1.1 Rapid burst spawning of 50 poops in tight loop produces 50 unique objects and DOM nodes', async () => {
    const env = createEnvironment();
    const poops = [];
    for (let i = 0; i < 50; i++) {
      const p = env.PetHygiene.spawnPoop(100 + (i % 10) * 40, 100 + Math.floor(i / 10) * 50, 'pet_' + (i % 3));
      poops.push(p);
    }

    assert(poops.length === 50, 'Expected 50 poops returned, got ' + poops.length);
    const active = env.PetHygiene.getPoops();
    assert(active.length === 50, 'Expected 50 active poops in getPoops(), got ' + active.length);

    // ID uniqueness collision check
    const idSet = new Set(poops.map(p => p.id));
    assert(idSet.size === 50, 'Expected 50 unique IDs, got ' + idSet.size + ' (ID collision detected!)');

    // DOM containment check
    const domPoops = env.container.querySelectorAll('.pet-poop-item');
    assert(domPoops.length === 50, 'Expected 50 DOM elements in container, got ' + domPoops.length);
  });

  await runTest('1.2 Massive stress burst spawning of 500 poops without array corruption or ID collision', async () => {
    const env = createEnvironment();
    const poops = [];
    for (let i = 0; i < 500; i++) {
      poops.push(env.PetHygiene.spawnPoop(200, 200));
    }
    assert(poops.length === 500, 'Expected 500 poops, got ' + poops.length);
    const idSet = new Set(poops.map(p => p.id));
    assert(idSet.size === 500, 'Expected 500 unique IDs, got ' + idSet.size);
  });

  await runTest('1.3 Boundary coordinates clamping (negative and massive out-of-screen values)', async () => {
    const env = createEnvironment();
    const pMin = env.PetHygiene.spawnPoop(-1000, -500);
    assert(pMin.x >= 15, 'Expected x clamped >= 15, got ' + pMin.x);
    assert(pMin.y >= 15, 'Expected y clamped >= 15, got ' + pMin.y);

    const pMax = env.PetHygiene.spawnPoop(999999, 888888);
    assert(pMax.x <= env.window.innerWidth - 60, 'Expected x clamped <= ' + (env.window.innerWidth - 60) + ', got ' + pMax.x);
    assert(pMax.y <= env.window.innerHeight - 55, 'Expected y clamped <= ' + (env.window.innerHeight - 55) + ', got ' + pMax.y);

    // Check style assignment
    assert(pMin.el.style.left === pMin.x + 'px', 'DOM style.left must match pMin.x: ' + pMin.el.style.left);
    assert(pMax.el.style.top === pMax.y + 'px', 'DOM style.top must match pMax.y: ' + pMax.el.style.top);
  });

  await runTest('1.4 Floating point coordinates are rounded to clean integer pixel values', async () => {
    const env = createEnvironment();
    const p = env.PetHygiene.spawnPoop(123.4567, 89.9876);
    assert(Number.isInteger(p.x), 'Expected p.x to be integer, got ' + p.x);
    assert(Number.isInteger(p.y), 'Expected p.y to be integer, got ' + p.y);
    assert(p.x === 123, 'Expected p.x === 123, got ' + p.x);
    assert(p.y === 90, 'Expected p.y === 90, got ' + p.y);
  });

  await runTest('1.5 Extreme/Corrupt input coordinates (NaN) do not produce NaN in DOM styles', async () => {
    const env = createEnvironment();
    const p = env.PetHygiene.spawnPoop(NaN, NaN);
    assert(!isNaN(p.x), 'p.x must not be NaN, got ' + p.x);
    assert(!isNaN(p.y), 'p.y must not be NaN, got ' + p.y);
    assert(!p.el.style.left.includes('NaN'), 'DOM style.left must not contain NaN, got ' + p.el.style.left);
    assert(!p.el.style.top.includes('NaN'), 'DOM style.top must not contain NaN, got ' + p.el.style.top);
  });

  // =========================================================================
  // GROUP 2: Click-to-Clean, Concurrency, Score Invariants & Persistence (Feature 10)
  // =========================================================================
  console.log('\n--- Group 2: Click-to-Clean, Concurrency & Score Persistence ---');

  await runTest('2.1 Single clean on active poop increments score by exactly +10 and marks cleaned', async () => {
    const env = createEnvironment();
    const initialScore = env.PetHygiene.getCleanlinessScore();
    const p = env.PetHygiene.spawnPoop(300, 300);

    env.PetHygiene.cleanPoop(p.id);

    assert(p.cleaned === true, 'Poop must be marked cleaned');
    assert(p.el.classList.contains('poop-popping'), 'Poop DOM element must receive poop-popping class');
    assert(env.PetHygiene.getCleanlinessScore() === initialScore + 10,
      'Expected score ' + (initialScore + 10) + ', got ' + env.PetHygiene.getCleanlinessScore());

    const sparkle = env.container.querySelector('.poop-clean-sparkle');
    assert(sparkle !== null, 'Clean sparkle element must be spawned');
    assert(sparkle.textContent.includes('+10'), 'Sparkle text must mention +10');
  });

  await runTest('2.2 Race condition & Idempotency: 10 rapid concurrent clicks on same poop award exactly +10 once', async () => {
    const env = createEnvironment();
    const initialScore = env.PetHygiene.getCleanlinessScore();
    const p = env.PetHygiene.spawnPoop(400, 400);

    // Concurrently trigger cleanPoop 10 times
    for (let i = 0; i < 10; i++) {
      env.PetHygiene.cleanPoop(p.id);
    }

    const finalScore = env.PetHygiene.getCleanlinessScore();
    assert(finalScore === initialScore + 10,
      'Expected score to increase by exactly 10, but got ' + (finalScore - initialScore) + ' (initial: ' + initialScore + ', final: ' + finalScore + ')');
  });

  await runTest('2.3 Clean on non-existent poop ID safely no-ops without error or score drift', async () => {
    const env = createEnvironment();
    const initialScore = env.PetHygiene.getCleanlinessScore();

    env.PetHygiene.cleanPoop('fake_poop_non_existent_99999');

    assert(env.PetHygiene.getCleanlinessScore() === initialScore,
      'Score must remain unchanged, got ' + env.PetHygiene.getCleanlinessScore());
  });

  await runTest('2.4 Clean on already-expired / previously cleaned poop ID produces zero score change', async () => {
    const env = createEnvironment();
    const p = env.PetHygiene.spawnPoop(250, 250);
    env.PetHygiene.cleanPoop(p.id);
    const scoreAfterClean = env.PetHygiene.getCleanlinessScore();

    // Secondary clean attempts
    env.PetHygiene.cleanPoop(p.id);
    env.PetHygiene.cleanPoop(p.id);

    assert(env.PetHygiene.getCleanlinessScore() === scoreAfterClean,
      'Score must not change on subsequent clean attempts: before=' + scoreAfterClean + ', after=' + env.PetHygiene.getCleanlinessScore());
  });

  await runTest('2.5 Batch cleaning 50 poops sequentially increases score by exactly 500 (+10 each)', async () => {
    const env = createEnvironment();
    const initialScore = env.PetHygiene.getCleanlinessScore();
    const poops = [];
    for (let i = 0; i < 50; i++) {
      poops.push(env.PetHygiene.spawnPoop(100 + i * 5, 200));
    }

    poops.forEach(p => env.PetHygiene.cleanPoop(p.id));

    const finalScore = env.PetHygiene.getCleanlinessScore();
    assert(finalScore === initialScore + 500,
      'Expected score ' + (initialScore + 500) + ', got ' + finalScore);
  });

  await runTest('2.6 Score persistence: Store faithfully captures score and restores on re-initialization', async () => {
    const env = createEnvironment();
    const p = env.PetHygiene.spawnPoop(300, 300);
    env.PetHygiene.cleanPoop(p.id);
    const currentScore = env.PetHygiene.getCleanlinessScore();

    // Verify Store received update
    const storedScore = await env.Store.get('pet_cleanliness_score');
    assert(storedScore === currentScore, 'Store value (' + storedScore + ') must match PetHygiene score (' + currentScore + ')');

    // Create a new PetHygiene instance loading the same Store
    const freshContainer = env.document.createElement('div');
    env.document.body.appendChild(freshContainer);
    const newEnv = createEnvironment();
    await newEnv.PetHygiene.init(freshContainer, env.Store);

    assert(newEnv.PetHygiene.getCleanlinessScore() === currentScore,
      'Restored score (' + newEnv.PetHygiene.getCleanlinessScore() + ') must equal previous score (' + currentScore + ')');
  });

  // =========================================================================
  // GROUP 3: Neglected Timer Transition & Fly Swarm Spawning (Feature 11)
  // =========================================================================
  console.log('\n--- Group 3: Neglected Timer Transition & Fly Swarm Spawning ---');

  await runTest('3.1 Freshly spawned poop has zero flies initially', async () => {
    const env = createEnvironment();
    const p = env.PetHygiene.spawnPoop(200, 200);
    assert(p.hasFlies === false, 'Fresh poop hasFlies must be false');
    assert(p.flies.length === 0, 'Fresh poop flies length must be 0, got ' + p.flies.length);
  });

  await runTest('3.2 Poop age at 29.9s (under 30s threshold) spawns zero flies on update()', async () => {
    const env = createEnvironment();
    const p = env.PetHygiene.spawnPoop(200, 200);

    // Fast-forward age to 29.9 seconds
    p.createdAt = Date.now() - 29900;
    env.PetHygiene.update(0.016);

    assert(p.hasFlies === false, 'Poop under 30s must not have flies');
    assert(p.flies.length === 0, 'Poop under 30s flies count must be 0, got ' + p.flies.length);
    const flyEls = env.container.querySelectorAll('.pet-fly');
    assert(flyEls.length === 0, 'Container must have 0 fly elements, got ' + flyEls.length);
  });

  await runTest('3.3 Poop age at 30.001s transitions to hasFlies=true and spawns exactly 4-6 flies', async () => {
    const env = createEnvironment();
    const p = env.PetHygiene.spawnPoop(300, 300);

    // Fast-forward age to 30.001 seconds
    p.createdAt = Date.now() - 30001;
    env.PetHygiene.update(0.016);

    assert(p.hasFlies === true, 'Poop over 30s must have hasFlies === true');
    assert(p.flies.length >= 4 && p.flies.length <= 6,
      'Expected between 4 and 6 flies, got ' + p.flies.length);

    // Check fly DOM elements
    const flyEls = env.container.querySelectorAll('.pet-fly');
    assert(flyEls.length === p.flies.length,
      'DOM fly elements (' + flyEls.length + ') must match poop.flies count (' + p.flies.length + ')');
  });

  await runTest('3.4 Monte Carlo distribution: across 100 neglected poops, 100% spawn between 4 and 6 flies', async () => {
    const env = createEnvironment();
    const flyCounts = [];
    for (let i = 0; i < 100; i++) {
      const p = env.PetHygiene.spawnPoop(100 + (i % 10) * 30, 100 + Math.floor(i / 10) * 30);
      p.createdAt = Date.now() - 31000;
      env.PetHygiene.update(0.016);
      flyCounts.push(p.flies.length);
    }

    const minFlies = Math.min(...flyCounts);
    const maxFlies = Math.max(...flyCounts);
    assert(minFlies >= 4, 'Minimum flies count was ' + minFlies + ', expected >= 4');
    assert(maxFlies <= 6, 'Maximum flies count was ' + maxFlies + ', expected <= 6');

    // Verify all counts 4, 5, 6 appear (random distribution check)
    const has4 = flyCounts.includes(4);
    const has5 = flyCounts.includes(5);
    const has6 = flyCounts.includes(6);
    assert(has4 && has5 && has6, 'Distribution should span 4, 5, and 6: 4=' + has4 + ', 5=' + has5 + ', 6=' + has6);
  });

  await runTest('3.5 Neglected poop does not spawn duplicate flies on subsequent updates', async () => {
    const env = createEnvironment();
    const p = env.PetHygiene.spawnPoop(200, 200);
    p.createdAt = Date.now() - 31000;
    env.PetHygiene.update(0.016);
    const initialFliesCount = p.flies.length;

    // Run 50 more updates
    for (let f = 0; f < 50; f++) {
      env.PetHygiene.update(0.016);
    }

    assert(p.flies.length === initialFliesCount,
      'Fly count should remain ' + initialFliesCount + ', but was ' + p.flies.length);
  });

  await runTest('3.6 Negative delta-time / clock skew backwards does not spawn premature flies', async () => {
    const env = createEnvironment();
    const p = env.PetHygiene.spawnPoop(200, 200);

    // Simulate clock jump into the future for createdAt
    p.createdAt = Date.now() + 50000;
    env.PetHygiene.update(-0.016);

    assert(p.hasFlies === false, 'Poop with future timestamp must not spawn flies');
    assert(p.flies.length === 0, 'Poop with future timestamp must have 0 flies');
  });

  // =========================================================================
  // GROUP 4: 60 FPS Fly Swarm Kinematics & Numerical Stability (Feature 11)
  // =========================================================================
  console.log('\n--- Group 4: 60 FPS Fly Swarm Kinematics & Numerical Stability ---');

  await runTest('4.1 Fly swarm positions stay strictly bounded within screen dimensions across 600 frames', async () => {
    const env = createEnvironment();
    // Spawn poop near top-left edge
    const pTopLeft = env.PetHygiene.spawnPoop(15, 15);
    pTopLeft.createdAt = Date.now() - 31000;

    // Spawn poop near bottom-right edge
    const pBottomRight = env.PetHygiene.spawnPoop(env.window.innerWidth - 60, env.window.innerHeight - 55);
    pBottomRight.createdAt = Date.now() - 31000;

    env.PetHygiene.update(0.016);

    let minX = Infinity;
    let minY = Infinity;
    let maxX = -Infinity;
    let maxY = -Infinity;

    for (let frame = 0; frame < 600; frame++) {
      env.PetHygiene.update(0.016);
      [...pTopLeft.flies, ...pBottomRight.flies].forEach(f => {
        if (f.x < minX) minX = f.x;
        if (f.y < minY) minY = f.y;
        if (f.x > maxX) maxX = f.x;
        if (f.y > maxY) maxY = f.y;
      });
    }

    assert(minX >= 0, 'Fly escaped left screen boundary: minX=' + minX);
    assert(minY >= 0, 'Fly escaped top screen boundary: minY=' + minY);
    assert(maxX <= env.window.innerWidth, 'Fly escaped right screen boundary: maxX=' + maxX + ' (innerWidth=' + env.window.innerWidth + ')');
    assert(maxY <= env.window.innerHeight, 'Fly escaped bottom screen boundary: maxY=' + maxY + ' (innerHeight=' + env.window.innerHeight + ')');
  });

  await runTest('4.2 Velocity damping stability: no runaway velocity explosion across 6,000 frames (100s at 60 FPS)', async () => {
    const env = createEnvironment();
    const p = env.PetHygiene.spawnPoop(500, 400);
    p.createdAt = Date.now() - 31000;
    env.PetHygiene.update(0.016);

    let maxVelocityMagnitude = 0;

    for (let frame = 0; frame < 6000; frame++) {
      env.PetHygiene.update(0.016);
      p.flies.forEach(f => {
        const vel = Math.hypot(f.vx, f.vy);
        if (vel > maxVelocityMagnitude) maxVelocityMagnitude = vel;
      });
    }

    assert(maxVelocityMagnitude < 500,
      'Velocity explosion detected: max velocity magnitude was ' + maxVelocityMagnitude + ' px/s (expected < 500)');
  });

  await runTest('4.3 Kinematics numerical health: 0 NaN or Infinity in fly coordinates, velocities, and transforms', async () => {
    const env = createEnvironment();
    const p = env.PetHygiene.spawnPoop(600, 350);
    p.createdAt = Date.now() - 31000;
    env.PetHygiene.update(0.016);

    for (let frame = 0; frame < 1200; frame++) {
      env.PetHygiene.update(0.016);
      p.flies.forEach(f => {
        assert(Number.isFinite(f.x), 'fly.x was not finite: ' + f.x + ' at frame ' + frame);
        assert(Number.isFinite(f.y), 'fly.y was not finite: ' + f.y + ' at frame ' + frame);
        assert(Number.isFinite(f.vx), 'fly.vx was not finite: ' + f.vx + ' at frame ' + frame);
        assert(Number.isFinite(f.vy), 'fly.vy was not finite: ' + f.vy + ' at frame ' + frame);
        assert(!f.el.style.transform.includes('NaN'), 'DOM transform contained NaN: ' + f.el.style.transform);
      });
    }
  });

  await runTest('4.4 Corrupted dt input (NaN, undefined, negative) does not corrupt kinematics into NaN', async () => {
    const env = createEnvironment();
    const p = env.PetHygiene.spawnPoop(450, 350);
    p.createdAt = Date.now() - 31000;
    env.PetHygiene.update(0.016);

    // Feed adversarial dt inputs
    env.PetHygiene.update(NaN);
    env.PetHygiene.update(undefined);
    env.PetHygiene.update(-1.0);
    env.PetHygiene.update(100.0); // massive stutter spike

    p.flies.forEach(f => {
      assert(Number.isFinite(f.x), 'fly.x corrupted to non-finite after adversarial dt: ' + f.x);
      assert(Number.isFinite(f.y), 'fly.y corrupted to non-finite after adversarial dt: ' + f.y);
      assert(!f.el.style.transform.includes('NaN'), 'Fly DOM transform corrupted: ' + f.el.style.transform);
    });
  });

  // =========================================================================
  // GROUP 5: Cleanup of Neglected Poop, DOM Node Lifecycle & Memory Leaks (Features 10, 11)
  // =========================================================================
  console.log('\n--- Group 5: Cleanup of Neglected Poop, DOM Lifecycle & Memory Leaks ---');

  await runTest('5.1 Cleaning neglected poop sets isScattering=true and assigns scattering velocities to flies', async () => {
    const env = createEnvironment();
    const p = env.PetHygiene.spawnPoop(400, 300);
    p.createdAt = Date.now() - 31000;
    env.PetHygiene.update(0.016);

    assert(p.flies.length > 0, 'Poop must have flies before cleaning');

    env.PetHygiene.cleanPoop(p.id);

    p.flies.forEach(f => {
      assert(f.isScattering === true, 'Fly ' + f.id + ' must have isScattering === true');
      assert(f.vy < 0, 'Fly ' + f.id + ' vy must be negative (flying upwards), got ' + f.vy);
    });
  });

  await runTest('5.2 Fly scattering kinematics: flies must actively move and update positions during scattering frames', async () => {
    const env = createEnvironment();
    const p = env.PetHygiene.spawnPoop(500, 300);
    p.createdAt = Date.now() - 31000;
    env.PetHygiene.update(0.016);

    const fly = p.flies[0];
    const initialX = fly.x;
    const initialY = fly.y;

    env.PetHygiene.cleanPoop(p.id);

    // Advance 5 physics frames
    for (let i = 0; i < 5; i++) {
      env.PetHygiene.update(0.016);
    }

    assert(fly.x !== initialX || fly.y !== initialY,
      'Fly was frozen in place during scattering! start: (' + initialX + ', ' + initialY + '), after 5 frames: (' + fly.x + ', ' + fly.y + ')');
  });

  await runTest('5.3 DOM removal after timeouts: poop element and fly elements are cleanly removed from DOM', async () => {
    const env = createEnvironment();
    const p = env.PetHygiene.spawnPoop(350, 250);
    p.createdAt = Date.now() - 31000;
    env.PetHygiene.update(0.016);

    const poopEl = p.el;
    const flyEls = p.flies.map(f => f.el);

    env.PetHygiene.cleanPoop(p.id);

    // In harness, timeouts run via mock setTimeout
    // Allow any pending async timeouts to fire
    await new Promise(resolve => setTimeout(resolve, 50));

    // Verify poop element detached
    assert(poopEl.parentElement === null, 'Poop DOM element must be removed from parentElement');

    // Verify all fly elements detached
    flyEls.forEach(fel => {
      assert(fel.parentElement === null, 'Fly DOM element ' + fel.id + ' must be removed from parentElement');
    });

    // Verify flies array emptied
    assert(p.flies.length === 0, 'poop.flies array must be empty, got ' + p.flies.length);
  });

  await runTest('5.4 Zero orphaned DOM nodes: 20 neglected poops spawned, cleaned, and verified 0 residue', async () => {
    const env = createEnvironment();
    const initialChildCount = env.container.children.length;

    const poops = [];
    for (let i = 0; i < 20; i++) {
      const p = env.PetHygiene.spawnPoop(100 + i * 20, 200);
      p.createdAt = Date.now() - 31000;
      poops.push(p);
    }
    env.PetHygiene.update(0.016);

    // Verify we have active elements
    assert(env.container.querySelectorAll('.pet-poop-item').length === 20, 'Expected 20 poop elements');
    assert(env.container.querySelectorAll('.pet-fly').length >= 80, 'Expected >= 80 fly elements');

    // Clean all 20 poops
    poops.forEach(p => env.PetHygiene.cleanPoop(p.id));

    // Wait for all timeouts
    await new Promise(resolve => setTimeout(resolve, 100));

    const remainingPoops = env.container.querySelectorAll('.pet-poop-item');
    const remainingFlies = env.container.querySelectorAll('.pet-fly');

    assert(remainingPoops.length === 0, 'Expected 0 remaining poop elements, found ' + remainingPoops.length);
    assert(remainingFlies.length === 0, 'Expected 0 remaining fly elements, found ' + remainingFlies.length);
    assert(env.PetHygiene.getPoops().length === 0, 'Expected 0 active poops in PetHygiene, found ' + env.PetHygiene.getPoops().length);
  });

  await runTest('5.5 PetHygiene.clearAll() cleanly disposes of all active and neglected poops and flies', async () => {
    const env = createEnvironment();
    for (let i = 0; i < 15; i++) {
      const p = env.PetHygiene.spawnPoop(100 + i * 30, 250);
      if (i % 2 === 0) {
        p.createdAt = Date.now() - 31000;
      }
    }
    env.PetHygiene.update(0.016);

    // Call clearAll()
    env.PetHygiene.clearAll();

    assert(env.PetHygiene.poops.length === 0, 'poops array must be empty after clearAll(), got ' + env.PetHygiene.poops.length);
    assert(env.container.querySelectorAll('.pet-poop-item').length === 0, 'All poop DOM elements must be removed');
    assert(env.container.querySelectorAll('.pet-fly').length === 0, 'All fly DOM elements must be removed');
  });

  // =========================================================================
  // Summary
  // =========================================================================
  console.log('\n' + '='.repeat(80));
  console.log('  STRESS TEST SUITE EXECUTION SUMMARY');
  console.log('='.repeat(80));
  console.log('Total Stress Tests Executed : ' + totalTests);
  console.log('Passed                      : ' + passedTests + ' (' + ((passedTests / totalTests) * 100).toFixed(1) + '%)');
  console.log('Failed                      : ' + failedTests + ' (' + ((failedTests / totalTests) * 100).toFixed(1) + '%)');
  console.log('='.repeat(80));

  if (failures.length > 0) {
    console.log('\nDiscovered Empirical Failures:');
    failures.forEach((f, idx) => {
      console.log('\n[' + (idx + 1) + '] ' + f.name);
      console.log('    Error: ' + f.error);
    });
  }

  return {
    total: totalTests,
    passed: passedTests,
    failed: failedTests,
    failures
  };
}

if (require.main === module) {
  runAllStressTests().then(result => {
    process.exit(result.failed > 0 ? 1 : 0);
  }).catch(err => {
    console.error('Fatal stress harness failure:', err);
    process.exit(1);
  });
}

module.exports = {
  runAllStressTests
};
