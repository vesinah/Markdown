# Project: MDBrowse Desktop Pet System Upgrade

## Architecture
MDBrowse is a high-performance offline Markdown browser and document reader running on modern browsers.
The Desktop Pet Subsystem is structured into clean, modular components under src/js/pet/ bundled into MDBrowse.html via uild.js:
- src/js/pet/pet-breeds.js: Genetic definitions (breeds, coat patterns, 5 tail shapes, 3 body builds).
- src/js/pet/pet-render.js: Vector SVG rendering engine for cat parts, patterns, facial features, postures, and props.
- src/css/pet.css: CSS styles and keyframe animations (waddles, tail wagging/flicks, poses, fly swarm, poop, props).
- src/js/pet/pet-hygiene.js: Hygiene subsystem managing poop lifecycle, click-to-clean, cleanliness score, neglected timer, and fly swarm physics.
- src/js/pet/pet-personality.js: 6-Axis Personality Engine (mathematical behavioral models, decision scaling, speed scaling, state lottery).
- src/js/pet/pet-dialogues.js: Contextual Thai dialogue lines responsive to 6 personality axes, doc context, social and environmental states.
- src/js/pet/pet-social.js: Multi-pet autonomous social dynamics (detection auras, compatibility, greeting, chasing, cuddling, neck-bite play).
- src/js/pet/pet-environment.js: Environmental props (ball, laser dot, feather wand, box, condo, bed), drag-and-drop, and 2D physics.
- src/js/pet/pet-ui.js: UI management (modal tabs, context menu, and on-screen Pet Control Bar dock).
- src/js/pet/pet-manager.js: Main orchestration facade, 60 FPS rAF loop, input event tracking (keystroke velocity, idle), persistence via Store.
- uild.js: Bundler compiling src/ into single-file MDBrowse.html, syntax check via m.Script, and DOM contract verification.

## Feature Inventory
| # | Feature | Description | Milestone | Source |
|---|---------|-------------|-----------|--------|
| 1 | Coat Patterns & Markings | Tuxedo (ทักซิโด้), cow print (ลายวัว), calico (คาลิโก), special markings/spots | M1 | ORIGINAL_REQUEST §R1 |
| 2 | 5 Tail Variations | Tailless/bobtail, short, long, kinked, curved with dedicated CSS keyframe animations | M1 | ORIGINAL_REQUEST §R1 |
| 3 | 3 Body Types | Chubby, skinny (slim), normal with cheeks, paws, body scale, and waddle animations | M1 | ORIGINAL_REQUEST §R1 |
| 4 | Two-Legged Standing Posture | Two-legged standing / begging / curious posture (SVG & CSS animation) | M1 | ORIGINAL_REQUEST §R1 |
| 5 | Ball Batting Posture | Batting / chasing ball posture (SVG & CSS animation) | M1 | ORIGINAL_REQUEST §R1 |
| 6 | Scratching / Fetching Posture | Scratching / fetching posture (SVG & CSS animation) | M1 | ORIGINAL_REQUEST §R1 |
| 7 | Playful Pounce / Neck-Bite Posture | Pouncing / neck-bite play posture on another pet (SVG & CSS animation) | M1 | ORIGINAL_REQUEST §R1 |
| 8 | Pooping Posture | Squatting pooping posture (SVG & CSS animation) | M1 | ORIGINAL_REQUEST §R1 |
| 9 | Poop Object Spawn | Poop object spawns on screen at pooping location with SVG graphic | M1 | ORIGINAL_REQUEST §R1 |
| 10 | Click-to-Clean Poop | Click poop to clean with +10 cleanliness score and visual sparkle/puff effect | M1 | ORIGINAL_REQUEST §R1 |
| 11 | Neglected Poop Fly Swarm | Swarm of flies flying and buzzing across screen when poop is neglected | M1 | ORIGINAL_REQUEST §R1 |
| 12 | 6-Axis Personality Engine | 6 Axes: Intelligence, Diligence, Energy, Talkativeness, Affection, Sociability | M2 | ORIGINAL_REQUEST §R2 |
| 13 | Mathematical Behavior Scaling | Decision interval, movement speed, and state lottery scaled by personality axes | M2 | ORIGINAL_REQUEST §R2 |
| 14 | Talkativeness Speech Frequency | Speech frequency directly governed by talkativeness axis | M2 | ORIGINAL_REQUEST §R2 |
| 15 | Dynamic Contextual Dialogues | Rich Thai dialogues reflecting 6-axis polarities, postures, and doc context | M2 | ORIGINAL_REQUEST §R2 |
| 16 | Multi-Pet Detection & Compatibility | Detection aura based on sociability and compatibility formula between cats | M2 | ORIGINAL_REQUEST §R2 |
| 17 | Multi-Pet Autonomous Social Dynamics | Sniffing greeting, chasing/tag, cuddling, playful pounce and neck-bite sequence | M2 | ORIGINAL_REQUEST §R2 |
| 18 | Smart User Interactions | Keystroke typing tracker (>4 keys/s), idle inactivity monitor (>50s), cursor stalking & petting | M2 | ORIGINAL_REQUEST §R2 |
| 19 | Rolling Yarn Ball Prop | Interactive ball with 2D rolling & bounce physics | M3 | ORIGINAL_REQUEST §R3 |
| 20 | Laser Pointer Dot Prop | Laser dot with cursor following and autonomous darting modes | M3 | ORIGINAL_REQUEST §R3 |
| 21 | Feather Teaser Wand Prop | Interactive teaser wand with damped pendulum kinematics | M3 | ORIGINAL_REQUEST §R3 |
| 22 | Cat House / Box Furniture | Box furniture with in_box pet sleeping/peeking interaction | M3 | ORIGINAL_REQUEST §R3 |
| 23 | Cat Condo / Tree Furniture | Cat condo with perching (on_condo) and scratching post interaction | M3 | ORIGINAL_REQUEST §R3 |
| 24 | Cat Bed Furniture | Cat bed with sleep_curl nap interaction | M3 | ORIGINAL_REQUEST §R3 |
| 25 | Pet Control Bar On-Screen UI | Floating/docked toolbar with 1-click prop spawn/despawn and active indicators | M3 | ORIGINAL_REQUEST §R3 |
| 26 | Prop Drag-and-Drop | Full mouse/touch drag-and-drop to position props freely on screen | M3 | ORIGINAL_REQUEST §R3 |
| 27 | Prop Navigation & State Preservation | 	argetAction preservation in motion physics upon arrival at props | M3 | ORIGINAL_REQUEST §R3 |
| 28 | 100% E2E Test Suite Pass | Complete verification of Tiers 1-4 opaque-box E2E test suite | M4 | ORIGINAL_REQUEST §Acceptance |
| 29 | Tier 5 Adversarial Hardening | White-box stress testing, edge-case coverage hardening and bug elimination | M4 | Orchestration Requirement |

## Milestones
| # | Name | Scope | Dependencies | Status |
|---|------|-------|-------------|--------|
| E2E | E2E Testing Suite | Requirements-driven test runner, harness, and test cases (Tiers 1-4) | None | COMPLETED |
| M1 | Physical Genetics, Diverse Postures & Hygiene System | Features 1–11: Breeds, patterns, 5 tails, 3 builds, 5 poses, Poop & Flies | None | COMPLETED |
| M2 | 6-Axis AI Personality Engine & Autonomous Social Dynamics | Features 12–18: 6-axis engine, speech, dialogues, multi-pet social, user interactions | M1 | COMPLETED |
| M3 | Interactive Environment, Draggable Props & Pet Control Bar | Features 19–27: Props, physics, Pet Control Bar dock, drag & drop, navigation | M1, M2 | COMPLETED |
| M4 | Final Milestone: 100% E2E Test Pass & Adversarial Hardening | Features 28–29: Tiers 1-4 test pass, Tier 5 adversarial testing & hardening | E2E, M1, M2, M3 | COMPLETED |
| M5 | Cloudflare Pages Cloud Deployment & Research Sync | Production live at https://markmakk.pages.dev/, dual-mode remote reader, 1-click sync script | M4 | COMPLETED |
| M6 | Smartphone UI/UX Transformation & Mobile Ergonomics | Mobile bottom dock, responsive slide-in drawers, 2-tier root card, layout shift hotfix, zero desktop regression | M5 | COMPLETED |

## Live Deployment Status
- **Production URL:** [https://markmakk.pages.dev/](https://markmakk.pages.dev/)
- **Hosting Provider:** Cloudflare Pages (Free Tier)
- **Deployment Pipeline:** GitHub Commit Webhook (`vesinah/Markdown` branch `master`)
- **Data Source:** Automated incremental sync from `D:\01_APP\Research\output` to `docs/` & `catalog.json`
- **1-Click Sync Launcher:** `อัปเดตเอกสาร_และขึ้นคลาวด์.bat` / `sync_and_deploy.bat`

## Interface Contracts

### M1 ↔ Core Pet Manager (pet-hygiene.js & pet-render.js ↔ pet-manager.js)
- PetHygiene.init(containerEl, store): Initializes hygiene layer and binds cleanup event listeners.
- PetHygiene.spawnPoop(x, y, petId): Spawns poop object at coordinates, starts neglect timer (default 30s).
- PetHygiene.cleanPoop(poopId): Cleans poop, awards +10 cleanliness, triggers sparkle FX.
- PetHygiene.update(dt): Advances fly swarm 60 FPS kinematics and flies buzz animation.
- PetHygiene.getPoops(): Returns array of active poop objects.
- PetRenderer.renderPetSvg(pet, options): Returns complete SVG string incorporating pet.breed, pet.pattern, pet.tailType, pet.build, pet.state, pet.specialMarking.
- PetRenderer.updatePetVisuals(petEl, pet): Dynamically updates DOM SVG classes and paths without recreating root element.

### M2 ↔ Core Pet Manager & Social (pet-personality.js & pet-social.js ↔ pet-manager.js)
- PetPersonality.getDecisionInterval(pet): Returns decision delay in ms based on Energy and Diligence.
- PetPersonality.getSpeechInterval(pet, baseInterval): Returns speech delay in ms based on Talkativeness.
- PetPersonality.getMovementSpeed(pet, baseSpeed): Returns scaled speed based on Energy and Body Build.
- PetPersonality.evaluateNextState(pet, availableStates): Returns next state chosen by personality lottery matrix.
- PetSocial.checkMultiPetInteractions(petA, petB, dt): Computes compatibility, triggers sniff/tag/cuddle/neck-bite sequences.
- PetManager.recordUserKeystroke(): Updates keystroke rolling window for typing speed detection.
- PetManager.checkUserInactivity(): Monitors idle time (>50s) to trigger idle pet reactions.

### M3 ↔ Core Pet Manager & UI (pet-environment.js & pet-ui.js ↔ pet-manager.js)
- PetEnvironment.spawnItem(type, x, y): Spawns item (ball, laser, wand, box, condo, bed) and registers for physics/interaction.
- PetEnvironment.removeItem(itemId): Removes item and resets any pets currently targeting/interacting with it.
- PetEnvironment.updatePhysics(dt): Simulates 2D rolling bounce, laser dot motion, and feather wand pendulum.
- PetUI.renderPetControlBar(): Renders sleek on-screen Pet Control Bar dock with 1-click prop toggles.
- PetManager.navigateToItem(pet, itemId, targetAction): Sets pet.targetX, pet.targetY and preserves 	argetAction upon arrival (in_box, on_condo, scratch, sleep_curl, play_toy).

## Code Layout
- src/js/pet/pet-breeds.js: Tail definitions, body build definitions, breed presets (including tuxedo).
- src/js/pet/pet-render.js: SVG cat rigging, coat pattern paths, tail geometries, postures (standing, batting, scratching, pouncing, pooping).
- src/js/pet/pet-hygiene.js: Poop object data structure, click-to-clean handler, cleanliness score, fly swarm kinematics.
- src/css/pet.css: Visual styling, waddle animations, tail flick keyframes, fly swarm animation, Pet Control Bar styling.
- src/js/pet/pet-personality.js: 6-Axis AI mathematical formulas, decision intervals, speed scaling, state lottery.
- src/js/pet/pet-dialogues.js: Rich contextual Thai dialogues mapped across 6 axes and postures.
- src/js/pet/pet-social.js: Multi-pet aura detection, compatibility scoring, social sequence state machine.
- src/js/pet/pet-environment.js: Draggable props definitions, 2D physics engines, laser dot, feather wand.
- src/js/pet/pet-ui.js: Modal management and on-screen Pet Control Bar dock UI.
- src/js/pet/pet-manager.js: Core facade, 60 FPS motion loop, typing tracker, idle detector, targetAction resolution.
- uild.js: Module bundling, syntax validation, and DOM contract verification.
- 	ests/e2e/: Requirement-driven opaque-box test runner and test cases (Tiers 1-4).
