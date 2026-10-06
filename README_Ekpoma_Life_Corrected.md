# EKPOMA LIFE

> A browser-based life-simulation game set in Ekpoma and centered around Ambrose Alli University (AAU).

**Status:** Production product/design and implementation specification  
**Primary goal:** Build the actual Ekpoma Life project as quickly as practical, while preserving the intended production architecture and Three.js world from the beginning.  
**Document role:** Source of truth for implementation in Cursor.  
**Important:** This document distinguishes confirmed project decisions from implementation recommendations where the earlier discussion available to this conversation did not contain a final decision.

---

## Critical Technology / Scope Decision

**Ekpoma Life is the actual project, not a disposable initial release or 2D prototype.**

The schedule may be aggressive, but speed does **not** change the intended technology or world architecture. The production game is a browser-based **3D experience built with Three.js from day one**. React/TypeScript provides the application layer, and React Three Fiber is the recommended bridge between React and Three.js.

There is no planned “2D first, 3D later” stage. Simple geometry and a smaller initial world are acceptable for speed; replacing the 3D world with a 2D placeholder is not.

## 1. Product Vision

**Ekpoma Life** is a browser-based life-simulation game inspired by the current Lagos Life-style game hype, but built around the culture, geography, student experience, businesses, social life, humor, and everyday situations of **Ekpoma, Edo State**, with **Ambrose Alli University (AAU)** as a major part of the world.

The game should feel locally recognizable rather than like a generic life simulator with an Ekpoma label attached.

The core fantasy is:

> **Create a character, enter Ekpoma/AAU life, make choices, earn and spend money, meet people, survive everyday situations, build a reputation, and shape your character's life.**

The initial build is focused and fast, but it is the real project—not a disposable prototype. The architecture, world rendering, gameplay systems, and data model should grow into the full Ekpoma Life experience.

### Product principles

1. **Ekpoma authenticity over generic features.**
2. **Playable prototype over technical complexity.**
3. **Fast feedback over premature architecture.**
4. **Systems should interact with one another.**
5. **Local humor and recognizable situations are core product features.**
6. **The real Ekpoma/AAU geography should influence the game world.**
7. **The game should be expandable without forcing the initial release to contain every future feature.**

---

# 2. What The Initial Build Must Establish

The initial build should establish five things:

1. Can a new player understand the game quickly?
2. Is the Ekpoma/AAU setting immediately recognizable?
3. Is the basic life loop fun enough to replay?
4. Do money, time, energy, movement, choices, and social interactions create meaningful consequences?
5. Does the game create situations that players will want to share or talk about?

The first build does not need every eventual multiplayer feature to be finished immediately, but all foundational systems should be production systems rather than temporary prototypes.

A good first build is a focused, fully playable vertical slice of the real game.

---

# 3. Core Player Journey

## 3.1 Welcome page

The welcome page is the first screen.

Confirmed direction:

- A navigation bar at the top.
- The navbar should show:
  - number of people who have visited the game;
  - number of people currently online.
- Login and sign-up should be available toward the bottom of the welcome experience.
- The background should feature the **Ekpoma map/world**.
- The intended long-term map should be based on Ekpoma geography and can be developed using a 3D/map-design workflow (the earlier discussion referenced 3DDS for the map).

The welcome screen should feel like entering a living version of Ekpoma rather than entering a normal SaaS application.

### Initial implementation simplification

For the accelerated first release, the visitor/online numbers can use a simple but replaceable presence implementation. Do not let analytics/presence infrastructure block the game, but do not introduce a fake architecture that requires rebuilding later.

---

# 4. Account Creation and First-Time Experience

A player should be able to:

1. Sign up.
2. Log in.
3. Create/confirm a character.
4. Enter a first-time tutorial.
5. Receive starter funds.
6. Purchase required beginner equipment.
7. Enter the main game.

## 4.1 Beginner tutorial

The first-time player must be **shown the ropes**.

The tutorial should teach:

- how the game world works;
- how to move between locations;
- how to interact with people/places;
- how money works;
- how to earn money;
- how to spend money;
- how time/energy works;
- how to use inventory;
- how to view character information;
- how decisions/events affect the character.

The tutorial should be short and interactive rather than a long text manual.

## 4.2 Starter fund

A beginner receives a basic starting fund.

The starter fund is intentionally part of the onboarding system rather than simply free money.

The tutorial should require the beginner to purchase basic accessories/equipment, with a **phone** explicitly identified as a compulsory early purchase.

The purpose is to establish:

- the economy;
- the importance of possessions;
- the player's first spending decision;
- the phone as a future interaction/interface object.

---

# 5. Character System

The player controls a persistent character.

The character should have a simple set of attributes that can change through gameplay.

Suggested initial release attributes:

| Attribute | Purpose |
|---|---|
| Cash | Money available to the player |
| Energy | Ability to perform activities |
| Health | General physical condition |
| Reputation | Social standing |
| Academic status | Represents school performance/progression |
| Social status | Represents relationships/network |
| Inventory | Owned items |
| Location | Current place |
| Day/time | Current game time |
| Skills | Abilities relevant to jobs/hustles |

Keep the initial release stat count low. More stats can be added later.

---

# 6. Character Types / Ways of Living

The game should support different character archetypes/playstyles.

The earlier product discussion explicitly established that **each character type should have illegal means of earning a living**.

This should be treated carefully in implementation:

- illegal activities are fictional gameplay systems;
- they should be represented as risk/reward choices;
- the game should model consequences such as money, reputation, police/legal trouble, injury, social consequences, or loss of opportunities;
- the implementation should not turn the product into a real-world instruction manual for committing crimes.

The important game-design principle is:

> Different characters should have different ways to survive and progress, including risky/illegal choices with meaningful consequences.

The legal/illegal distinction should be part of the economy and event systems, not a separate disconnected feature.

---

# 7. Core Gameplay Loop

The initial release loop should be:

```text
START DAY
   ↓
Check money / energy / needs
   ↓
Choose where to go
   ↓
Choose an activity
   ↓
Spend time + energy
   ↓
Earn money / lose money / gain reputation / trigger event
   ↓
Interact with people or locations
   ↓
Handle random or scheduled events
   ↓
Return / rest / spend / plan
   ↓
NEXT DAY
```

The loop should be fast.

A player should not have to click through dozens of screens to complete one action.

---

# 8. Time System

The game needs a lightweight time/day cycle.

For initial release:

- Use a simplified day.
- Activities consume time.
- Activities can consume energy.
- Certain events should only occur at certain times.
- Sleeping/resting advances time or starts the next day.
- Time should affect availability of jobs, school, social activities, and events.

A real-time clock is unnecessary for the first prototype.

Recommended approach:

```text
Day 1
Morning
Afternoon
Evening
Night
```

Later versions can replace these with finer-grained time.

---

# 9. Economy

Money is one of the central systems.

Players should be able to:

- receive starter funds;
- earn through work/hustles;
- spend on equipment;
- spend on food/basic needs;
- pay for transport;
- pay for school-related needs;
- participate in social activities;
- buy optional items;
- lose money through bad decisions/events;
- potentially make high-risk/high-reward choices.

The economy must be understandable.

Avoid dozens of currencies in the initial release.

### Economy rule

Use one primary currency in the first version.

All income and expenses should be represented through that currency unless a later feature genuinely requires another currency.

---

# 10. Inventory

The player needs a simple inventory.

Initial inventory should support:

- phone;
- basic accessories;
- food/basic consumables;
- school-related items;
- future collectible/utility items.

Every item should have a purpose.

Do not build a complex crafting system in the initial release.

---

# 11. Phone System

The phone is important because it is a required beginner purchase and can become a major gameplay interface later.

initial release phone functions can include:

- basic notifications;
- messages/events;
- player status;
- local announcements;
- future social features.

Do not build a full simulated smartphone operating system in the first version.

The phone can initially be a single UI panel with several actions.

---

# 12. AAU / Student Life

Ambrose Alli University should be a major part of the game world.

The game should represent student life as something players actually experience rather than merely placing an AAU logo on a generic map.

Potential student activities:

- attending lectures;
- studying;
- moving between campus locations;
- meeting students;
- dealing with school-related expenses;
- socializing;
- finding work/hustles;
- managing academic performance;
- dealing with unexpected campus situations.

Academic progression should be simple in initial release.

---

# 13. Locations and World Design

The world should use Ekpoma as the geographic foundation.

The long-term map should include both:

- **AAU/campus locations**
- **Ekpoma/off-campus locations**

The earlier discussion identified real/local locations and concepts that should be represented in the world, including:

- College of Medicine
- MBC
- Igbinedion Hostel
- Maryvale Hostel
- other AAU/campus areas
- surrounding Ekpoma streets and businesses
- the team's own Innovation Hub

The location list should grow from actual local knowledge.

## 13.1 Map philosophy

The map should not attempt to model the entire town in full detail on day one.

Instead:

```text
Real Ekpoma geography
        ↓
Identify important landmarks
        ↓
Create simplified game map
        ↓
Connect playable locations
        ↓
Add richer 3D/detail later
```

The game world is built with **Three.js from the beginning**. The initial world can be geographically focused and less detailed than the eventual full map, but it is still a real Three.js 3D world—not a 2D placeholder.

---

# 14. Innovation Hub

The project team discussed creating its own location/building in the game.

The agreed direction was to call this the:

## Innovation Hub

The Innovation Hub can act as the team's in-game home/community center.

Long-term functions:

- players can leave reviews;
- players can suggest features;
- players can discuss the game;
- players can interact with developers/community;
- the team can announce things;
- it can become a social/feedback location.

For initial release, this can be represented as a simple location with a review/feedback interaction.

Do not build a full social network inside the Innovation Hub initially.

---

# 15. Real-Life Ekpoma Events

A major authenticity feature is an avenue for announcing **real-life events happening in Ekpoma**.

Examples:

- campus events;
- social events;
- student activities;
- community events;
- public happenings;
- developer/community announcements.

The purpose is to connect the digital game to the real Ekpoma community.

This is a product differentiator.

### initial release implementation

Start with an event feed containing:

- event title;
- date/time;
- location;
- short description;
- optional image;
- source/organizer;
- status.

Admin/moderator users can create events.

Later, community submissions can be added with moderation.

---

# 16. NPCs

The world needs people.

initial release NPC categories can include:

- students;
- lecturers/school staff;
- hostel residents;
- shop owners;
- food vendors;
- transport operators;
- employers;
- friends;
- strangers;
- community members.

NPCs do not need advanced AI.

Use:

```text
NPC
→ location
→ personality/type
→ available interactions
→ conditions
→ outcomes
```

This creates the appearance of a living world without requiring expensive AI simulation.

---

# 17. Events and Consequences

Events are a key replayability system.

An event can be:

- scheduled;
- location-specific;
- time-specific;
- random;
- triggered by player stats;
- triggered by previous decisions.

Example structure:

```json
{
  "id": "event_example",
  "title": "Unexpected Situation",
  "location": "campus",
  "time": "afternoon",
  "choices": [
    {
      "label": "Choice A",
      "effects": {
        "cash": -100,
        "reputation": 2
      }
    },
    {
      "label": "Choice B",
      "effects": {
        "energy": -10,
        "reputation": -1
      }
    }
  ]
}
```

The actual event content should be locally authentic and written for Ekpoma/AAU.

---

# 18. Realism vs Humor

The game should be grounded in real life but entertaining.

The design target is:

**recognizable reality + exaggeration + consequences + humor**

Do not make every event serious.

The game should contain:

- funny situations;
- frustrating situations;
- lucky situations;
- embarrassing situations;
- social drama;
- financial problems;
- opportunities;
- unexpected encounters.

The player should feel that the world has personality.

---

# 19. Social System

Social relationships are important, but the initial release should keep them simple.

A relationship can initially be represented as:

```text
NPC
  ↓
relationship score
  ↓
relationship state
```

For example:

- stranger
- acquaintance
- friend
- close friend
- rival

Actions can modify the relationship score.

Later versions can add:

- dating;
- family;
- deeper friendships;
- group dynamics;
- betrayal;
- networking;
- reputation propagation.

---

# 20. Navigation and UI

The game should feel like a game, not a corporate dashboard.

The main game UI should expose:

- character status;
- money;
- energy;
- time/day;
- current location;
- navigation;
- interactions;
- inventory;
- phone;
- events.

The interface should work on desktop first but remain responsive enough for mobile browsers.

## Suggested layout

```text
┌──────────────────────────────────────────────┐
│ LOGO │ Location │ Day/Time │ Online │ Money │
├──────────────────────────────────────────────┤
│                                              │
│                 GAME WORLD                   │
│                                              │
│                                              │
├───────────────┬──────────────────────────────┤
│ CHARACTER     │ ACTIONS / INTERACTIONS       │
│ Energy        │ • Move                       │
│ Health        │ • Work                       │
│ Reputation    │ • Study                      │
│               │ • Socialize                  │
├───────────────┴──────────────────────────────┤
│ Map │ Phone │ Inventory │ Events │ Profile   │
└──────────────────────────────────────────────┘
```

This is a structural recommendation, not a locked visual design.

---

# 21. Visual Design Direction

The design should combine:

- Nigerian/Ekpesoma visual identity;
- student/campus energy;
- game-like cards and panels;
- strong typography;
- readable status indicators;
- recognizable local map elements;
- playful micro-interactions.

Avoid making it look like:

- a generic banking app;
- a generic university portal;
- a generic SaaS dashboard.

The world/map should be visually important.

---

# 22. Design File Organization

The team expressed a preference for keeping design separate from application logic.

Recommended project organization:

```text
EKPOMA-LIFE/
├── README.md
├── design/
│   ├── design.html
│   ├── assets/
│   └── prototypes/
├── frontend/
├── backend/
├── data/
├── public/
└── docs/
```

`design/design.html` should be used as a visual prototype/reference and should not become the production application's logic.

The final production UI should be implemented in the frontend framework.

---

# 23. Production Technology Stack

Because the project is being built on an accelerated schedule, the stack should minimize unnecessary setup while still using the intended production architecture.

## Frontend

**Recommended:**

- React
- TypeScript
- Vite
- **Three.js**
- **@react-three/fiber** for React integration with Three.js
- **@react-three/drei** where practical
- CSS/Tailwind or a lightweight custom design system
- React Router where routes are genuinely needed
- Lucide or another lightweight icon library

Why:

- fast development;
- component reuse;
- strong Cursor support;
- easy browser deployment;
- TypeScript catches state/data mistakes;
- Vite provides fast local development.

## Backend

For the first prototype, keep backend responsibilities small.

**Recommended option: Supabase**

Use:

- Supabase Auth;
- PostgreSQL;
- Realtime only where actually needed;
- Storage only when necessary.

This avoids building and deploying a separate API server for basic account and persistence features.

If a custom backend becomes necessary later, introduce it deliberately.

## Hosting

Recommended initial release direction:

- Frontend: Vercel or Netlify
- Database/Auth: Supabase
- Repository: GitHub

The exact provider is an implementation choice unless the team has already selected one.

---

# 24. Three.js World Architecture

Three.js is a **core production technology**, not a temporary prototype layer.

The world should be structured so that the first locations can grow into a richer Ekpoma simulation without replacing the renderer.

```text
Three.js / React Three Fiber
        │
        ├── Scene
        ├── Camera
        ├── Lighting
        ├── Environment
        ├── World / Map
        │     ├── Roads
        │     ├── Buildings
        │     ├── Campus
        │     ├── Hostels
        │     └── Landmarks
        ├── Player
        ├── NPCs
        ├── Interactive objects
        └── Location triggers
```

### Three.js rules

1. Do not create a separate 2D production map and plan to replace it later.
2. The playable world must be rendered by Three.js from the beginning.
3. Keep world content separate from rendering logic.
4. Locations should have stable IDs so gameplay systems can refer to them independently of their visual implementation.
5. Buildings and landmarks should be reusable scene components/assets.
6. Player movement, camera behavior, interaction detection, and world state should be separated.
7. Use simple geometry where necessary to move quickly, but use it **inside the real Three.js world**.
8. Add higher-detail models, textures, animations, and environmental systems incrementally without changing the underlying architecture.
9. Optimize geometry, textures, lighting, draw calls, and asset loading as the world grows.
10. Do not allow Three.js scene objects to become the database or game-state source of truth.

# 26. Architecture

The core architecture should be:

```text
Browser
  │
  ├── React UI
  │
  ├── Game State
  │
  ├── Game Rules / Services
  │
  └── API/Data Layer
          │
          ▼
      Supabase
       ├── Auth
       ├── Database
       └── Realtime (later/optional)
```

The game rules must not be embedded randomly inside UI components.

Prefer:

```text
UI
 ↓
Game Action
 ↓
Game Service / Rule
 ↓
State Update
 ↓
Persistence
 ↓
UI refresh
```

---

# 26. Separation of Concerns

Cursor must maintain these boundaries:

### UI layer

Responsible for:

- rendering;
- input;
- navigation;
- animations;
- loading/error states.

### Game logic layer

Responsible for:

- actions;
- calculations;
- stat changes;
- event resolution;
- economy rules;
- time advancement;
- requirements.

### Data layer

Responsible for:

- loading;
- saving;
- authentication;
- persistence;
- database queries.

### Content layer

Responsible for:

- locations;
- NPCs;
- items;
- jobs;
- events;
- dialogue;
- prices.

Content should be data-driven wherever practical.

---

# 27. Suggested Repository Structure

```text
EKPOMA-LIFE/
│
├── README.md
│
├── design/
│   ├── design.html
│   ├── assets/
│   └── prototypes/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── features/
│   │   │   ├── character/
│   │   │   ├── map/
│   │   │   ├── economy/
│   │   │   ├── inventory/
│   │   │   ├── events/
│   │   │   ├── social/
│   │   │   └── phone/
│   │   ├── game/
│   │   ├── services/
│   │   ├── data/
│   │   ├── hooks/
│   │   ├── types/
│   │   └── styles/
│   ├── public/
│   ├── package.json
│   └── vite.config.ts
│
├── backend/
│   └── README.md
│
├── data/
│   ├── locations/
│   ├── npcs/
│   ├── items/
│   ├── jobs/
│   └── events/
│
├── docs/
│   ├── architecture/
│   ├── gameplay/
│   └── decisions/
│
└── .env.example
```

For a one-day build, the backend directory can remain empty or contain only documentation if Supabase is used directly.

---

# 28. initial release Data Model

A minimal player record:

```text
players
- id
- user_id
- character_name
- location_id
- cash
- energy
- health
- reputation
- academic_status
- current_day
- current_period
- created_at
- updated_at
```

Inventory:

```text
inventory
- id
- player_id
- item_id
- quantity
```

Locations:

```text
locations
- id
- name
- type
- description
- coordinates
- available_actions
```

Items:

```text
items
- id
- name
- description
- price
- category
- effects
```

Events:

```text
events
- id
- title
- description
- location_id
- period
- requirements
- choices
```

NPCs:

```text
npcs
- id
- name
- type
- location_id
- personality
```

Relationships:

```text
relationships
- id
- player_id
- npc_id
- score
- state
```

Real-life events:

```text
community_events
- id
- title
- description
- location
- starts_at
- ends_at
- organizer
- image_url
- status
```

---

# 29. Authentication

initial release requirements:

- sign up;
- login;
- logout;
- persistent session;
- protected game area;
- first-time player detection.

Do not build:

- complicated account recovery flows beyond provider defaults;
- social login for every provider;
- account-level permission complexity.

Supabase Auth can handle the initial implementation if selected.

---

# 30. Online / Visitor Counter

The welcome page has a requirement to show:

- total visitors;
- current online users.

For the prototype:

### Total visitors

Can be represented by a simple database counter or analytics-backed value.

### Current online

Can initially be approximate.

A later production version should use:

- presence heartbeat;
- active-session expiry;
- realtime presence.

Do not allow this requirement to delay the core gameplay.

---

# 31. Game-State Rules

All game actions should produce predictable state changes.

Example:

```ts
type GameState = {
  playerId: string;
  cash: number;
  energy: number;
  health: number;
  reputation: number;
  locationId: string;
  day: number;
  period: "morning" | "afternoon" | "evening" | "night";
};
```

Example action:

```text
WORK
→ validate location
→ validate time
→ validate energy
→ consume energy
→ advance time
→ calculate income
→ apply risk/event
→ update reputation if needed
→ persist
```

Do not let components directly mutate arbitrary game state.

---

# 32. Game Rules Should Be Testable

Every important rule should have tests.

Minimum test targets:

- starter funds;
- compulsory phone purchase;
- movement;
- energy consumption;
- time advancement;
- legal income;
- illegal/high-risk income;
- item purchase;
- inventory update;
- event choice effects;
- relationship changes;
- death/game-over rules if introduced;
- save/load;
- first-time tutorial state.

---

# 33. Tutorial Acceptance Criteria

A new player passes the tutorial when:

- account is created;
- character is initialized;
- starter money exists;
- player is informed about the basic controls;
- player purchases the required phone;
- player understands how to move;
- player completes at least one earning activity;
- player sees the resulting money/state change;
- tutorial can be completed without developer intervention.

---

# 34. Initial Release Acceptance Criteria

The initial release is functionally complete when a new user can:

1. Open the welcome page.
2. See the Ekpoma-themed environment.
3. See visitor/online information.
4. Sign up.
5. Enter the tutorial.
6. Receive starter funds.
7. Purchase the required phone.
8. Enter the game.
9. See character status.
10. See current location.
11. Move to another available location.
12. Perform an activity.
13. Spend time/energy.
14. Earn or lose money.
15. Trigger an event.
16. Make a choice.
17. See consequences.
18. View inventory.
19. Use the phone panel.
20. View local/community events.
21. Visit the Innovation Hub.
22. Save progress.
23. Reload the page.
24. Continue the game.

---

# 35. Accelerated Production Build Plan

## Phase 0 — Project setup

**Goal:** Working application shell.

Tasks:

- initialize Git repository;
- initialize React + TypeScript + Vite;
- install required dependencies;
- configure linting;
- configure formatting;
- create environment variables;
- create frontend folder structure;
- create initial Supabase project if using Supabase.

Acceptance:

- application runs locally;
- production build succeeds;
- no major console errors.

---

## Phase 1 — Visual shell

Build:

- welcome page;
- navbar;
- visitor/online counters;
- Ekpoma map background;
- login/signup controls;
- game dashboard shell.

Acceptance:

- app already looks like Ekpoma Life before game logic is added.

---

## Phase 2 — Authentication

Build:

- sign up;
- login;
- logout;
- protected game route;
- first-time user detection.

Acceptance:

- new users can enter;
- returning users can continue.

---

## Phase 3 — Character initialization

Build:

- character creation;
- starter state;
- starter funds;
- tutorial flag;
- starting location.

Acceptance:

- every new account receives a valid game state exactly once.

---

## Phase 4 — Tutorial

Build:

- movement explanation;
- economy explanation;
- first earning action;
- compulsory phone purchase;
- completion state.

Acceptance:

- a new user can complete onboarding without instructions from the developers.

---

## Phase 5 — Core game state

Implement:

- money;
- energy;
- health;
- reputation;
- location;
- day;
- period.

Acceptance:

- actions reliably change state.

---

## Phase 6 — Map and locations

Implement a small playable map.

Initial locations should include a representative set of:

- AAU campus;
- College of Medicine;
- MBC;
- Igbinedion Hostel;
- Maryvale Hostel;
- Innovation Hub;
- several generic shops/food/transport locations.

Do not wait for a perfect 3D map.

Acceptance:

- player can move between several meaningful locations.

---

## Phase 7 — Economy and activities

Implement:

- one or more legal jobs;
- at least one high-risk/illegal gameplay path;
- food/basic expense;
- transport expense;
- phone/item purchase;
- income/outcome feedback.

Acceptance:

- player can make and spend money.

---

## Phase 8 — Events

Implement:

- random event;
- location-specific event;
- choice buttons;
- consequences;
- event history if inexpensive.

Acceptance:

- at least several different events can occur.

---

## Phase 9 — Inventory and phone

Implement:

- inventory panel;
- phone panel;
- basic notifications;
- item ownership.

Acceptance:

- phone bought during tutorial remains owned and visible.

---

## Phase 10 — Community events

Implement:

- event list;
- event detail;
- basic admin seed data.

Acceptance:

- player can discover real-life-style Ekpoma event announcements inside the game.

---

## Phase 11 — Innovation Hub

Implement:

- location;
- description;
- feedback/review form;
- feature suggestion form.

Acceptance:

- player can submit feedback from inside the game.

---

## Phase 12 — Persistence and polish

Verify:

- reload;
- login again;
- state persistence;
- responsive layout;
- empty states;
- error states;
- loading states.

Then deploy.

---

# 36. What Not To Build During the Initial Accelerated Build

Explicitly defer:

- full multiplayer;
- real-time player-to-player movement;
- complex NPC AI;
- voice chat;
- sophisticated 3D physics;
- complete Ekpoma 3D reconstruction;
- huge item catalog;
- advanced dating system;
- detailed family simulation;
- player-owned businesses;
- complex police/legal simulation;
- sophisticated crime simulation;
- elaborate crafting;
- procedural world generation;
- multiple currencies;
- blockchain/crypto;
- unnecessary microservices;
- complex event moderation workflows;
- native mobile applications.

These can become later production phases without replacing the Three.js foundation or core architecture.

---

# 37. Future Expansion Roadmap

## Phase 2 — Deeper student life

- more AAU locations;
- departments/faculties;
- lectures;
- examinations;
- richer academic progression;
- more hostels;
- student organizations;
- more jobs.

## Phase 3 — Social world

- friendships;
- dating;
- rivalries;
- groups;
- networking;
- richer NPC relationships.

## Phase 4 — Economy

- businesses;
- entrepreneurship;
- player-owned shops;
- investments;
- larger item economy.

## Phase 5 — Multiplayer

- player presence;
- player-to-player interactions;
- trading;
- social spaces;
- multiplayer events.

## Phase 6 — Living Ekpoma

- community-submitted events;
- richer real-life event integration;
- local businesses;
- creator/community partnerships;
- expanded map;
- richer 3D presentation.

---

# 38. Safety, Moderation, and Real-World Authenticity

Because the game uses real places, real institutions, and potentially real events:

- distinguish fictional gameplay from real-world claims;
- do not present fictional NPC behavior as the behavior of real people;
- moderate user-submitted content;
- avoid defamatory claims about identifiable individuals;
- obtain appropriate permission before using protected branding/assets where necessary;
- label community/event content appropriately;
- keep illegal gameplay fictional and consequence-focused.

The goal is authenticity, not impersonation or misinformation.

---

# 39. Cursor Implementation Rules

Cursor must treat this README as the current product source of truth.

### Rule 1 — Do not over-engineer

If a simple implementation satisfies the acceptance criteria, choose it.

### Rule 2 — Do not invent major features

New major systems require product discussion before implementation.

### Rule 3 — Keep game logic separate from UI

Do not put economy/time/event rules directly inside React components.

### Rule 4 — Prefer data-driven content

Locations, NPCs, items, jobs, and events should be easy to add without rewriting the engine.

### Rule 5 — Build in vertical slices

Each phase should leave the application runnable.

### Rule 6 — Test rules, not only screens

Important game-state transitions must have automated tests.

### Rule 7 — Preserve local identity

Do not replace local content with generic filler merely to finish faster.

### Rule 8 — initial release before polish

A playable system is more valuable than a beautiful screen with no gameplay.

### Rule 9 — Avoid premature backend complexity

Use the simplest persistence architecture that satisfies the feature.

### Rule 10 — No secrets in source code

Use environment variables for credentials and API keys.

---

# 40. Definition of Done

A feature is complete only when:

- it works in the browser;
- it handles loading states;
- it handles failure/empty states;
- its game rules are correct;
- important state changes persist;
- it is usable on a normal laptop screen;
- it does not introduce obvious console errors;
- tests for critical logic pass;
- it does not violate the architecture rules.

---

# 41. Product Decision Log

This section records decisions surfaced from the project discussion available to this conversation.

### Confirmed / strongly established

- [x] Project name: **Ekpoma Life**
- [x] Browser-based life-simulation game.
- [x] Inspired by Lagos Life hype, but focused on Ekpoma/AAU.
- [x] Fast initial release is the priority.
- [x] Welcome page has a top navbar.
- [x] Welcome page shows visitor and online counts.
- [x] Login and signup belong on the welcome experience.
- [x] Welcome background uses an Ekpoma map/world.
- [x] Long-term map should use real Ekpoma geography as its foundation.
- [x] First-time users receive a tutorial.
- [x] New players receive starter funds.
- [x] Starter funds are used for compulsory beginner purchases, including a phone.
- [x] Different character types can have illegal/high-risk ways of earning money.
- [x] Real-life Ekpoma events should be announceable through the app/game.
- [x] The Innovation Hub is the team's in-game building/community location.
- [x] Innovation Hub should support reviews/feature feedback.
- [x] AAU is central to the world.
- [x] The world should contain recognizable local/campus locations.
- [x] College of Medicine, MBC, Igbinedion Hostel, and Maryvale Hostel were specifically surfaced in the project discussion.

### Implementation recommendations, not locked product decisions

- [x] React + TypeScript + Vite.
- [ ] Supabase for auth/database.
- [ ] Vercel/Netlify for frontend hosting.
- [ ] CSS/Tailwind or custom design-system decision.
- [x] **Three.js is the production 3D rendering technology from the beginning.**
- [x] React Three Fiber is the recommended React integration layer.
- [ ] Exact production backend architecture.
- [ ] Exact database schema.
- [ ] Exact character archetypes.
- [ ] Exact initial job list.
- [ ] Exact illegal activity list.
- [ ] Exact event list.
- [ ] Exact visual color palette.

These should be confirmed by the team if they differ from decisions made in branch conversations that are not available in the current context.

---

# 42. Immediate Production Build Order

If the team wants to start implementation immediately, Cursor should execute this order:

```text
1. Repository + Vite + React + TypeScript
2. Three.js + React Three Fiber scene foundation
3. Camera, lighting, environment, and world coordinate system
4. Global design system
5. Welcome page and production UI shell
6. Authentication
7. Character initialization
8. Tutorial
9. Player/game state
10. Ekpoma/AAU Three.js world
11. Locations and movement
12. Money/economy
13. Activities/jobs
14. Inventory
15. Phone
16. NPCs and interactions
17. Events and consequences
18. Innovation Hub
19. Community events
20. Persistence
21. Testing and performance checks
22. Production build
23. Deployment
```

The team should resist jumping ahead to secondary systems before the core Three.js world, player state, economy, interactions, and persistence are working. **Advanced 3D is not a later replacement for a 2D initial release—the project is 3D from the start.**

---

# 42. Final Product Test

Before calling the initial release successful, give it to someone who has not seen the implementation.

Do not explain the game.

Ask them to:

1. sign up;
2. complete the tutorial;
3. buy the phone;
4. find somewhere to go;
5. make money;
6. spend money;
7. encounter an event;
8. make a choice;
9. inspect their character;
10. tell you what they think the game is about.

Then ask:

> **“Does this feel like Ekpoma?”**

That answer is more important than the number of features.

---

## Important Source-of-Truth Note

This README was compiled from the Ekpoma Life project context that is actually available to this conversation, plus explicit implementation recommendations needed to turn those ideas into an executable build plan.

The full raw transcripts of all three branch chats were **not available to the assistant as retrievable documents**, and the linked GitHub repository was not accessible through the connected GitHub account at the time this document was prepared. Therefore, no unseen conversation was fabricated or represented as reviewed.

If the complete three chat transcripts are later made available/exported, this README should be reviewed against them and the decision log updated before implementation begins.
