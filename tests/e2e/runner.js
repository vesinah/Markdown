/**
 * tests/e2e/runner.js
 * CLI Test Runner for Desktop Pet System E2E Test Suite
 *
 * Usage:
 *   node tests/e2e/runner.js
 *   node tests/e2e/runner.js --tier=1
 *   node tests/e2e/runner.js --milestone=M1
 *   node tests/e2e/runner.js --tier=1 --milestone=M1
 *   node tests/e2e/runner.js --feature=8
 *   node tests/e2e/runner.js --verbose
 */

const path = require('path');
const harness = require('./harness');

// Registry of tests across all tiers
const registry = [];

/**
 * Register a test case
 * @param {Object} spec
 * @param {string} spec.id - e2e identifier (e.g. T1-F01-01)
 * @param {number} spec.tier - 1, 2, 3, or 4
 * @param {number} spec.feature - Feature ID 1 to 27 (or 0 for meta/cross-feature)
 * @param {string} spec.milestone - 'M1', 'M2', 'M3', or 'M4'
 * @param {string} spec.name - Descriptive test name
 * @param {Function} spec.fn - async function(context)
 */
function registerTest(spec) {
  if (!spec.id || !spec.tier || !spec.name || typeof spec.fn !== 'function') {
    throw new Error('Invalid test specification: ' + JSON.stringify(spec));
  }
  registry.push({
    milestone: 'M1',
    feature: 0,
    ...spec
  });
}

// Global test registration helper exposed to test files
global.__E2E_REGISTER__ = registerTest;

// Parse CLI flags
function parseArgs() {
  const args = process.argv.slice(2);
  const options = {
    tiers: null,
    milestone: null,
    features: null,
    verbose: false,
    help: false
  };

  for (const arg of args) {
    if (arg.startsWith('--tier=')) {
      options.tiers = arg.slice(7).split(',').map(Number);
    } else if (arg.startsWith('--milestone=')) {
      options.milestone = arg.slice(12).toUpperCase();
    } else if (arg.startsWith('--feature=')) {
      options.features = arg.slice(10).split(',').map(Number);
    } else if (arg === '--verbose' || arg === '-v') {
      options.verbose = true;
    } else if (arg === '--help' || arg === '-h') {
      options.help = true;
    }
  }
  return options;
}

// Milestone dependency filter
function isMilestoneIncluded(testMilestone, targetMilestone) {
  if (!targetMilestone) return true;
  const rank = { M1: 1, M2: 2, M3: 3, M4: 4 };
  const testRank = rank[testMilestone] || 1;
  const targetRank = rank[targetMilestone] || 4;
  return testRank <= targetRank;
}

// Main Runner
async function main() {
  const opts = parseArgs();

  if (opts.help) {
    console.log(`
MDBrowse Desktop Pet System - Requirements-Driven E2E Test Runner

Usage:
  node tests/e2e/runner.js [options]

Options:
  --tier=<1|2|3|4>        Run specific test tier(s), comma-separated (e.g. --tier=1,2)
  --milestone=<M1|M2|M3|M4> Filter by milestone progress (e.g. --milestone=M1 runs M1 features)
  --feature=<1..27>       Run specific feature(s), comma-separated
  --verbose, -v           Show detailed test outputs and assertion traces
  --help, -h              Show this help menu
    `);
    process.exit(0);
  }

  // Load test suite files
  require('./tier1.test');
  require('./tier2.test');
  require('./tier3.test');
  require('./tier4.test');

  console.log('='.repeat(78));
  console.log('  MDBrowse Desktop Pet System — Opaque-Box E2E Test Suite');
  console.log('='.repeat(78));
  console.log(`Loaded ${registry.length} test cases from 4 tiers.`);
  if (opts.tiers) console.log(`Filter Tier: ${opts.tiers.join(', ')}`);
  if (opts.milestone) console.log(`Filter Milestone: <= ${opts.milestone}`);
  if (opts.features) console.log(`Filter Feature(s): ${opts.features.join(', ')}`);
  console.log('-'.repeat(78));

  // Filter tests based on CLI arguments
  const selectedTests = registry.filter(t => {
    if (opts.tiers && !opts.tiers.includes(t.tier)) return false;
    if (opts.milestone && !isMilestoneIncluded(t.milestone, opts.milestone)) return false;
    if (opts.features && !opts.features.includes(t.feature)) return false;
    return true;
  });

  console.log(`Selected ${selectedTests.length} tests to execute.`);
  console.log('-'.repeat(78));

  const stats = {
    total: selectedTests.length,
    passed: 0,
    failed: 0,
    skipped: 0,
    byTier: { 1: { pass: 0, fail: 0 }, 2: { pass: 0, fail: 0 }, 3: { pass: 0, fail: 0 }, 4: { pass: 0, fail: 0 } },
    byMilestone: { M1: { pass: 0, fail: 0 }, M2: { pass: 0, fail: 0 }, M3: { pass: 0, fail: 0 }, M4: { pass: 0, fail: 0 } },
    failures: []
  };

  const startTime = Date.now();

  for (let i = 0; i < selectedTests.length; i++) {
    const testCase = selectedTests[i];
    const testNum = `[${String(i + 1).padStart(3, ' ')}/${selectedTests.length}]`;
    const label = `${testCase.id} [T${testCase.tier}|${testCase.milestone}|F${String(testCase.feature).padStart(2, '0')}] ${testCase.name}`;

    try {
      // Execute each test in an isolated fresh sandbox context
      const sandbox = harness.createSandboxContext();
      await testCase.fn({
        sandbox,
        harness,
        FileCache: harness.FileCache,
        CssAssert: harness.CssAssert,
        SvgAssert: harness.SvgAssert
      });

      stats.passed++;
      if (stats.byTier[testCase.tier]) stats.byTier[testCase.tier].pass++;
      if (stats.byMilestone[testCase.milestone]) stats.byMilestone[testCase.milestone].pass++;

      if (opts.verbose) {
        console.log(`  PASS ${testNum} ${label}`);
      } else if ((i + 1) % 25 === 0 || i === selectedTests.length - 1) {
        process.stdout.write(`\rProgress: ${i + 1}/${selectedTests.length} executed (${stats.passed} passed, ${stats.failed} failed)...`);
      }
    } catch (err) {
      stats.failed++;
      if (stats.byTier[testCase.tier]) stats.byTier[testCase.tier].fail++;
      if (stats.byMilestone[testCase.milestone]) stats.byMilestone[testCase.milestone].fail++;

      const failureRecord = {
        id: testCase.id,
        label,
        tier: testCase.tier,
        milestone: testCase.milestone,
        feature: testCase.feature,
        error: err.message || String(err),
        stack: err.stack
      };
      stats.failures.push(failureRecord);

      if (opts.verbose) {
        console.log(`  FAIL ${testNum} ${label}`);
        console.log(`       Error: ${err.message}`);
      }
    }
  }

  const durationSec = ((Date.now() - startTime) / 1000).toFixed(2);
  console.log('\n' + '='.repeat(78));
  console.log(`Execution Summary (${durationSec}s)`);
  console.log('='.repeat(78));
  console.log(`Total Tests Run : ${stats.total}`);
  console.log(`Passed          : ${stats.passed} (${stats.total ? ((stats.passed / stats.total) * 100).toFixed(1) : 0}%)`);
  console.log(`Failed          : ${stats.failed}`);
  console.log('-'.repeat(78));

  console.log('Breakdown by Tier:');
  for (let t = 1; t <= 4; t++) {
    const s = stats.byTier[t];
    const tot = s.pass + s.fail;
    if (tot > 0) {
      console.log(`  Tier ${t}: ${s.pass}/${tot} passed (${((s.pass / tot) * 100).toFixed(1)}%)`);
    }
  }

  console.log('Breakdown by Milestone:');
  for (const m of ['M1', 'M2', 'M3', 'M4']) {
    const s = stats.byMilestone[m];
    const tot = s.pass + s.fail;
    if (tot > 0) {
      console.log(`  Milestone ${m}: ${s.pass}/${tot} passed (${((s.pass / tot) * 100).toFixed(1)}%)`);
    }
  }

  if (stats.failures.length > 0) {
    console.log('='.repeat(78));
    console.log(`Failures & Discrepancies (${stats.failures.length}):`);
    console.log('='.repeat(78));
    stats.failures.forEach((f, idx) => {
      console.log(`[${idx + 1}] ${f.label}`);
      console.log(`    Milestone: ${f.milestone} | Feature: ${f.feature}`);
      console.log(`    Discrepancy: ${f.error}`);
      if (opts.verbose && f.stack) {
        console.log(`    Stack: ${f.stack.split('\n').slice(1, 3).join('\n')}`);
      }
    });
    console.log('='.repeat(78));
  }

  // Return exit code
  process.exit(stats.failed > 0 ? 1 : 0);
}

if (require.main === module) {
  main().catch(err => {
    console.error('Fatal Runner Error:', err);
    process.exit(1);
  });
}

module.exports = {
  registerTest,
  registry
};
