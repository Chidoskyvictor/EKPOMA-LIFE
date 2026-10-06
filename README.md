# Ekpoma Life

> A browser-based life-simulation game inspired by the current Lagos Life-style gaming hype, but built around the real social, academic, commercial, and cultural character of Ekpoma and Ambrose Alli University (AAU).

**Project status:** Product/design definition + rapid MVP  
**Primary goal:** Build a playable prototype as quickly as possible, potentially within one day.  
**Source of truth:** This README is intended to become the implementation contract for Cursor.

---

## 1. Vision

Ekpoma Life is a browser game in which a player creates a character and lives a simulated life in Ekpoma, with Ambrose Alli University (AAU) forming a major part of the world.

The game should feel recognizably local rather than like a generic life simulator with Nigerian names pasted onto it.

The central design principle is:

> **Make the player feel like they are actually living a chaotic, funny, financially difficult, socially connected life in Ekpoma.**

The first release is not intended to simulate every part of Ekpoma. It should instead provide a small, coherent, replayable slice of the world that is immediately fun.

---

## 2. Product Principles

### 2.1 Ekpoma authenticity

The geography, locations, institutions, slang, businesses, social situations, events, and characters should be inspired by the actual Ekpoma/AAU environment.

The map should be based on real Ekpoma geography where practical, while allowing game-specific changes for playability.

### 2.2 Playability over completeness

A small playable world is more valuable than a huge unfinished world.

The MVP should avoid unnecessary systems, infrastructure, and visual complexity.

### 2.3 Local identity

The game should have situations that could realistically happen in Ekpoma/AAU.

Examples include:
- Student life
- Hostel life
- Academic pressure
- Transportation
- Food and daily expenses
- Hustling for money
- Social relationships
- Campus events
- Local businesses
- Unexpected encounters

### 2.4 Systems should create stories

The game should not rely only on scripted stories.

A simple combination of:
- money,
- energy,
- time,
- location,
- relationships,
- jobs/hustles,
- choices,
- random events,

should naturally create memorable situations.

### 2.5 MVP-first engineering

Prefer the simplest implementation that can prove the game loop.

Do not introduce:
- microservices,
- complex real-time multiplayer,
- elaborate AI,
- large-scale procedural generation,
- unnecessary abstractions,
- complex infrastructure,

until the product actually needs them.

---

# 3. What the Player Does

The basic player loop is:

1. Open Ekpoma Life.
2. See the Ekpoma-themed welcome screen.
3. Create an account or sign in.
4. Create/initialize a character.
5. Receive an introductory tutorial.
6. Receive a small starter fund.
7. Spend the starter fund on required beginner accessories, beginning with a phone.
8. Enter the Ekpoma world.
9. Move between locations.
10. Attend school / interact with campus.
11. Work, hustle, or pursue other legitimate and illegal ways of earning money.
12. Spend money on food, transportation, accessories, activities, etc.
13. Meet/interact with NPCs.
14. Make choices that affect money, reputation, relationships, energy, and progression.
15. Experience random/local events.
16. Continue improving the character and discovering the world.

The loop should be short enough to understand immediately but open-ended enough that the player can decide how to live.

---

# 4. Character System

The character is the player's representation in the Ekpoma world.

## 4.1 Character types / lifestyles

The project discussion established that different character types should have different ways of making a living.

Each character/lifestyle should have:
- legitimate earning opportunities,
- risky/illegal earning opportunities,
- different strengths,
- different risks,
- different progression paths.

The illegal systems are fictional gameplay mechanics and should be implemented as risk/reward gameplay rather than as real-world instructions.

For MVP, do not create a complicated class system. A simple archetype or starting-background system is enough.

Potential starting archetypes can include:
- Student
- Hustler
- Entrepreneur
- Skilled worker
- Social/party-oriented character

These should remain easy to expand later.

---

# 5. Starter Tutorial

A first-time player must be taught the basics instead of being dropped into the world without context.

## Required first-session flow

### Step 1 — Account
Sign up or log in.

### Step 2 — Character introduction
Introduce the player's character and basic situation.

### Step 3 — Tutorial
Teach:
- movement/navigation,
- money,
- energy,
- time,
- interactions,
- inventory/accessories,
- earning money,
- spending money.

### Step 4 — Starter money
Deposit a basic amount into the player's account.

The exact amount should be configurable in game data rather than hard-coded into gameplay logic.

### Step 5 — Mandatory phone purchase
The tutorial should require the beginner to use part of the starter fund to obtain a phone/accessory.

The phone is not just cosmetic. It can later become a central interface for:
- communication,
- events,
- announcements,
- social features,
- future services.

### Step 6 — Release into the world
After the tutorial, the player is free to explore.

---

# 6. Economy

Money is one of the central game systems.

The economy should be intentionally simple for the MVP.

## Player money

The player should have a cash/balance value.

Possible future separation:
- cash
- bank balance
- mobile wallet

For MVP, a single balance can be sufficient.

## Sources of income

The world should contain different ways to earn money.

### Legal/legitimate income
Examples:
- jobs
- small businesses
- services
- campus work
- errands
- skill-based tasks

### Illegal/risky income

Each character/lifestyle can have risky opportunities.

These should be represented as abstract game activities such as:
- high-risk jobs,
- shady deals,
- black-market-style missions,
- other fictional criminal activities.

The game should model consequences such as:
- losing money,
- reputation damage,
- failed missions,
- being caught,
- temporary restrictions,
- other gameplay consequences.

Do not build the MVP around realistic instructions for committing crimes.

## Expenses

Players should have reasons to spend money:
- phone/accessories
- food
- transport
- accommodation/hostel-related expenses
- social activities
- clothing
- entertainment
- progression items

---

# 7. Time and Energy

Time and energy make the game feel like a life simulation.

## Time

The MVP should use a simple simulated day.

Possible model:

```text
Morning
Afternoon
Evening
Night
```

Actions consume time.

Later, this can become a more granular clock.

## Energy

Actions consume energy.

Examples:
- attending class
- walking/traveling
- working
- hustling
- social activities

Energy can be restored through:
- sleep,
- rest,
- food,
- other activities.

The exact numbers should be configurable.

---

# 8. World and Map

The map is one of the most important identity features.

## Core rule

Use the real geography of Ekpoma as the foundation, then simplify or alter it where necessary for gameplay.

The game does not need to reproduce every building in the real city for the MVP.

Instead, build a recognizable playable subset.

## AAU

Ambrose Alli University is a major part of the world.

Campus should contain recognizable categories of locations, including:
- academic buildings,
- hostels,
- social areas,
- food spots,
- transport points,
- student gathering points,
- other campus landmarks.

The project discussion specifically referenced **College of Medicine** and hostels including **Igbinedion Hostel** and **Maryvale Hostel** as examples of recognizable locations.

These should be treated as real-world-inspired locations and verified during implementation if exact naming/geography matters.

## World layering

Use three layers conceptually:

### Layer 1 — Geographic foundation
Ekpoma streets and important areas.

### Layer 2 — Gameplay locations
Buildings/places the player can actually interact with.

### Layer 3 — Dynamic activity
NPCs, jobs, events, shops, missions, and social interactions.

---

# 9. Navigation / UI

The interface should be designed for browser use first, while remaining usable on phones.

## Welcome / homepage

The welcome page should be intentionally simple.

The discussion established:

- Navigation bar at the top.
- Visitor count displayed.
- Current online-user count displayed.
- Login and sign-up positioned toward the bottom of the welcome experience.
- Ekpoma map imagery/design as the background.
- The map can ultimately be produced as a 3D-styled visual asset, but the MVP should not depend on expensive 3D technology.

The welcome page should sell the setting before the player enters the game.

## Suggested structure

```text
------------------------------------------------
| EKPOMA LIFE | Visitors: 000 | Online: 000   |
------------------------------------------------

              [ Ekpoma map / world ]

              Welcome to Ekpoma

              [ SIGN UP ]
              [ LOGIN ]

------------------------------------------------
```

The visitor/online numbers should be treated as live metrics only if the backend supports them. For an MVP, they can be simple counters or clearly labeled prototype metrics rather than a complex presence system.

---

# 10. Main Game Interface

The main gameplay screen should expose the most important information without overwhelming the player.

Suggested HUD:

```text
------------------------------------------------
| ₦ Balance | Energy | Time | Reputation       |
------------------------------------------------

              GAME WORLD / LOCATION

      [Interactable world content]

------------------------------------------------
| Home | Map | Phone | Inventory | Profile     |
------------------------------------------------
```

The exact visual design can evolve.

The first implementation should favor clarity and responsiveness over elaborate visual effects.

---

# 11. Phone System

The phone is introduced during the tutorial and should become an important game interface.

Potential phone functions:

- Contacts
- Messages
- Notifications
- Events
- Local announcements
- Jobs/hustles
- Social interactions
- Future marketplace/services

Not all of these need to exist in the MVP.

## MVP phone

At minimum:
- phone exists as an inventory/accessory item;
- player can open a basic phone UI;
- phone can display useful notifications/events.

---

# 12. Real-Life Ekpoma Events

A major product idea is to provide an avenue for announcing real-life events happening in Ekpoma.

This is important because it creates a bridge between the virtual world and the actual community.

Possible events:
- campus events,
- student programs,
- parties,
- seminars,
- competitions,
- business promotions,
- community activities.

## MVP approach

Do not build a complicated public event platform initially.

Start with a simple event data model:

```text
Event
- id
- title
- description
- location
- date
- image
- category
- organizer
- status
```

Events can appear:
- on the phone,
- on the map,
- in a news/announcement panel.

## Future

A verified organizer/event-submission system can be added later.

The goal is to make Ekpoma Life feel connected to what is actually happening around Ekpoma.

---

# 13. Innovation Hub

The project also discussed having an in-game location that acts as a community/product feedback and innovation center.

The chosen name is:

> **Innovation Hub**

Conceptually, the Innovation Hub can be a physical place in the game where players can:
- leave reviews,
- suggest features,
- share feedback,
- interact with other developers/creators in future versions,
- discover opportunities,
- potentially pitch ideas.

For the MVP, this can simply be a location with a feedback/review interaction.

Do not build a full startup ecosystem into the first release.

---

# 14. NPCs and Social Life

NPCs should make the world feel alive.

Initial NPC categories can include:
- students,
- lecturers,
- vendors,
- transport workers,
- business owners,
- hostel residents,
- security personnel,
- hustlers,
- friends,
- rivals.

Each NPC does not need advanced AI.

A simple data-driven NPC can have:

```text
NPC
- id
- name
- type
- location
- personality
- dialogue
- available_actions
- relationship
```

Interactions can initially be menu-driven.

Later, NPCs can receive schedules, memory, dynamic relationships, and more sophisticated behavior.

---

# 15. Relationships and Reputation

Relationships are a natural extension of the social-life concept.

## MVP relationship model

Keep it simple:

```text
relationship_score: -100 to +100
```

Interactions modify the score.

Possible states:
- stranger
- acquaintance
- friend
- close friend
- rival

## Reputation

A separate reputation value can represent how the wider world perceives the player.

Actions can affect reputation positively or negatively.

Reputation can later affect:
- jobs,
- social access,
- NPC behavior,
- opportunities,
- risky activities.

---

# 16. Random Events

Random events are essential for replayability.

Example structure:

```text
Event
- id
- title
- description
- requirements
- choices[]
```

Each choice can have:

```text
Choice
- label
- effects
- probability
- requirements
```

Effects can modify:
- money,
- energy,
- time,
- reputation,
- relationships,
- inventory,
- location.

This allows a small content library to generate many different stories.

---

# 17. Content/Data-Driven Design

Game content should be separated from core code wherever practical.

Examples:

```text
data/
  locations.json
  items.json
  jobs.json
  events.json
  npcs.json
  dialogues.json
  character_types.json
```

This makes it possible to add content without rewriting game logic.

The MVP can use JSON/static data even if the eventual game moves more data into a database.

---

# 18. Recommended MVP Tech Stack

The priority is speed.

## Frontend

Recommended:

- **React**
- **Vite**
- **TypeScript**
- **Tailwind CSS**

Why:
- fast setup,
- component-based UI,
- easy iteration,
- good Cursor support,
- strong browser/mobile support.

## Map/world

For the first prototype, avoid building a complete 3D engine unless absolutely necessary.

Recommended MVP options:

### Option A — 2D interactive map
Use:
- SVG,
- HTML/CSS,
- React components,
- or a lightweight map library.

This is the fastest path.

### Option B — 2.5D/visual map
Use a designed map image/SVG with clickable zones.

This is probably the best one-day MVP.

### Later
If the product proves fun, evaluate:
- Phaser,
- Three.js,
- Babylon.js,
- or another game-focused renderer.

Do not make the one-day MVP dependent on 3D.

## Backend

For a rapid MVP:

- **Node.js**
- **TypeScript**
- **Express** or a lightweight equivalent
- **SQLite** for the first persistent database

Alternatively, a hosted backend such as Supabase can accelerate:
- authentication,
- database,
- realtime features.

### Recommended rapid-production direction

If the team wants the least infrastructure to manage:

**React + Vite + TypeScript + Supabase**

This can provide:
- authentication,
- PostgreSQL,
- APIs,
- realtime capabilities,
- hosting integrations.

If the objective is purely a one-day local prototype:

**React + localStorage + JSON**

is acceptable.

The architecture should allow persistence to be upgraded later.

---

# 19. Suggested Architecture

Start with a modular monolith.

```text
Browser
  |
  v
React UI
  |
  +---- Game State
  |
  +---- Game Systems
  |       +-- Economy
  |       +-- Time
  |       +-- Energy
  |       +-- Inventory
  |       +-- Relationships
  |       +-- Events
  |       +-- Jobs
  |
  +---- World Data
  |
  v
Backend/API
  |
  +---- Authentication
  +---- Player Save
  +---- Events
  +---- Community Data
  |
  v
Database
```

Do not split this into microservices.

---

# 20. Proposed Project Structure

The team expressed interest in separating the design/frontend and backend logic.

A practical structure is:

```text
ekpoma-life/
│
├── README.md
│
├── design/
│   └── design.html
│
├── public/
│   ├── images/
│   ├── maps/
│   └── icons/
│
├── src/
│   ├── components/
│   ├── pages/
│   ├── game/
│   │   ├── economy/
│   │   ├── events/
│   │   ├── inventory/
│   │   ├── relationships/
│   │   ├── time/
│   │   └── world/
│   ├── data/
│   ├── hooks/
│   ├── lib/
│   ├── state/
│   ├── styles/
│   └── main.tsx
│
├── backend/
│   ├── src/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── models/
│   │   └── server.ts
│   └── ...
│
└── tests/
```

For the one-day MVP, the `backend/` directory can initially be minimal or postponed if local persistence is sufficient.

The important architectural rule is that UI code should not contain all game rules directly.

---

# 21. Game State

A minimal player state can look conceptually like:

```ts
type PlayerState = {
  id: string;
  name: string;

  money: number;
  energy: number;
  reputation: number;

  time: {
    day: number;
    period: "morning" | "afternoon" | "evening" | "night";
  };

  locationId: string;

  inventory: string[];

  relationships: Record<string, number>;

  tutorialComplete: boolean;
};
```

Do not copy this blindly into production. Treat it as the baseline contract and evolve it as systems become clearer.

---

# 22. Authentication

The MVP needs:

- Sign up
- Login
- Logout
- Persistent player identity

If Supabase is used, use its authentication system rather than building password handling from scratch.

Never store plaintext passwords.

---

# 23. Persistence

At the earliest prototype stage:

```text
localStorage
```

can persist:
- player state,
- tutorial completion,
- inventory,
- money,
- basic progression.

For a multi-user online MVP:

```text
Supabase/PostgreSQL
```

should store the authoritative player state.

The client should not be trusted to freely modify money or other important values once the game becomes competitive or persistent online.

---

# 24. Online/Visitor Counts

The homepage concept includes:
- total visitors,
- current online users.

For the one-day prototype:

### Prototype
Use simple counters or mock values.

### Later
Use backend analytics/presence.

Do not build a complex realtime presence architecture before the core game is playable.

---

# 25. Visual Design Direction

The visual identity should feel:

- Nigerian
- youthful
- energetic
- slightly chaotic
- game-like
- modern
- locally recognizable

Avoid making the interface look like a generic corporate dashboard.

## Main visual elements

### Background
Ekpoma map / stylized local environment.

### Cards
Use cards for:
- jobs,
- events,
- inventory,
- NPC interactions,
- notifications.

### Typography
Large readable headings with compact UI text.

### Mobile
The UI must remain usable on a phone browser.

### Animation
Use small purposeful animations:
- money changes,
- notifications,
- transitions,
- event popups.

Avoid heavy animations in the MVP.

---

# 26. Design.html

The preferred design workflow is to maintain a separate visual design artifact:

```text
design/design.html
```

This can serve as:
- a visual playground,
- layout reference,
- component prototype,
- style guide,
- screen mockup.

It should not become the source of game logic.

The README is the architectural/product source of truth.

---

# 27. MVP Screens

The first playable version should aim for these screens:

## 1. Landing page

Contains:
- Ekpoma map background
- navbar
- visitor count
- online count
- sign up
- login

## 2. Sign-up/login

Minimal authentication UI.

## 3. Character setup

Player:
- chooses name,
- selects starting archetype/background,
- enters the world.

## 4. Tutorial

Explains:
- movement,
- money,
- time,
- energy,
- phone,
- first earning opportunity.

## 5. Starter purchase

Player uses starter funds to acquire the required phone/accessory.

## 6. Main game

Shows:
- player state,
- current location,
- available actions,
- navigation,
- NPCs/events.

## 7. Map

Shows:
- AAU,
- selected Ekpoma locations,
- player position,
- interactable locations.

## 8. Phone

Shows basic:
- notifications,
- announcements,
- events.

## 9. Inventory

Shows owned items.

## 10. Profile

Shows:
- name,
- money,
- energy,
- reputation,
- relationships/progression.

---

# 28. MVP Location Strategy

Do not attempt to model all of Ekpoma.

Start with a compact connected set.

Suggested categories:

```text
AAU
├── Academic area
├── College of Medicine
├── Igbinedion Hostel
├── Maryvale Hostel
└── Other selected campus locations

Ekpoma
├── Food area
├── Transport area
├── Shops
├── Social/entertainment area
├── Jobs/hustle area
└── Innovation Hub
```

Exact additional locations should be selected based on actual geography and what creates useful gameplay.

---

# 29. Core Gameplay Systems for MVP

Priority ranking:

| System | MVP? | Priority |
|---|---:|---:|
| Character creation | Yes | P0 |
| Tutorial | Yes | P0 |
| Starter money | Yes | P0 |
| Phone | Yes | P0 |
| Map/navigation | Yes | P0 |
| Money/economy | Yes | P0 |
| Time | Yes | P0 |
| Energy | Yes | P0 |
| Basic jobs/hustles | Yes | P0 |
| Basic illegal/risky activities | Yes, abstracted | P1 |
| NPC interactions | Yes | P1 |
| Random events | Yes | P1 |
| Inventory | Yes | P1 |
| Relationships | Basic | P1 |
| Reputation | Basic | P1 |
| Real-life event announcements | Basic | P1 |
| Innovation Hub | Basic | P1 |
| Multiplayer | No | Later |
| Advanced NPC AI | No | Later |
| Full 3D world | No | Later |
| Complex economy | No | Later |
| Player marketplace | No | Later |

---

# 30. One-Day Build Plan

The goal is not to finish the entire product in one day.

The goal is to produce a vertical slice.

## Phase 0 — Project setup

**Tasks**
- Create repository.
- Initialize React/Vite/TypeScript.
- Add Tailwind.
- Establish folder structure.
- Create basic routing.
- Establish design tokens.

**Acceptance criteria**
- App starts locally.
- Main routes load.
- No TypeScript errors.

---

## Phase 1 — Landing page

**Tasks**
- Build navbar.
- Add visitor/online indicators.
- Add Ekpoma map background.
- Add login/signup buttons.
- Make page responsive.

**Acceptance criteria**
- Landing page looks like a game rather than an admin dashboard.
- Works on mobile and desktop.

---

## Phase 2 — Authentication

**Tasks**
- Build signup.
- Build login.
- Create user/session state.
- Add logout.

**Acceptance criteria**
- New user can create an account.
- Returning user can sign in.
- Protected game area cannot be accessed as an unauthenticated user if backend auth is enabled.

---

## Phase 3 — Character creation

**Tasks**
- Name.
- Starting archetype.
- Initialize stats.
- Initialize inventory.
- Initialize money.

**Acceptance criteria**
- Player can create a character.
- Character state is persisted.

---

## Phase 4 — Tutorial

**Tasks**
- Explain the game.
- Give starter money.
- Explain energy/time.
- Force phone purchase.
- Teach first earning action.
- Finish tutorial.

**Acceptance criteria**
- New player can understand the core loop without external instructions.
- Tutorial completion is saved.

---

## Phase 5 — Main game screen

**Tasks**
- HUD.
- Current location.
- Available actions.
- Navigation.
- Basic map.

**Acceptance criteria**
- Player can move between at least several locations.
- State updates correctly.

---

## Phase 6 — Economy

**Tasks**
- Add income actions.
- Add expenses.
- Add phone purchase.
- Add basic inventory.

**Acceptance criteria**
- Money cannot become inconsistent.
- Transactions update the UI immediately.
- Refreshing/reloading preserves state when persistence is enabled.

---

## Phase 7 — Jobs/hustles

Implement a small number first.

Example:

```text
Legal:
- Food delivery
- Errand
- Student service

Risky:
- Shady job
- High-risk deal
```

The names and exact activities should be refined during content design.

**Acceptance criteria**
- Each activity has:
  - requirements,
  - reward,
  - time cost,
  - energy cost,
  - possible outcome.

---

## Phase 8 — NPC interactions

**Tasks**
- Add several NPCs.
- Dialogue.
- Simple relationship score.
- Basic actions.

**Acceptance criteria**
- Player can interact with NPCs.
- At least one interaction changes state.

---

## Phase 9 — Events

**Tasks**
- Add random events.
- Add local announcement events.
- Connect events to the phone.

**Acceptance criteria**
- Events can appear.
- Choices produce consequences.

---

## Phase 10 — Innovation Hub

**Tasks**
- Add location.
- Add simple feedback interaction.
- Store/display basic feedback.

**Acceptance criteria**
- Player can visit it.
- Player can submit or interact with a basic feedback mechanism.

---

## Phase 11 — Polish

Fix:
- layout issues,
- broken states,
- confusing interactions,
- mobile responsiveness,
- loading states,
- error handling.

Do not spend the remaining MVP time polishing low-value details before the game loop works.

---

# 31. Testing Requirements

Every system must have simple acceptance tests.

## Core tests

### Authentication
- Signup works.
- Login works.
- Logout works.
- Invalid credentials produce a useful error.

### Player
- Character creation works.
- Starting values are correct.
- State persists.

### Economy
- Income increases balance.
- Purchases decrease balance.
- Player cannot spend more than allowed unless overdraft is explicitly designed.
- Failed actions do not accidentally award money.

### Time
- Actions advance time correctly.
- Day progression works.
- Sleep/rest resets or restores energy according to game rules.

### Energy
- Energy decreases on relevant actions.
- Player cannot perform actions when energy is insufficient.

### Inventory
- Phone is acquired during tutorial.
- Items are added/removed correctly.

### Navigation
- Valid locations load.
- Invalid destinations cannot corrupt state.

### Events
- Choices trigger correct effects.
- Requirements are respected.

### Relationships
- Interaction changes relationship score as expected.

### Persistence
- Refresh does not erase the player.
- Save/load produces the same valid state.

---

# 32. Architectural Rules for Cursor

Cursor should follow these rules while implementing.

## Rule 1 — Do not over-engineer

Build the simplest working version first.

## Rule 2 — Separate game logic from UI

Do not put economy calculations, event resolution, and game-state mutations directly inside visual components.

Bad:

```text
Button click -> giant component -> manually modify five unrelated states
```

Better:

```text
UI
  -> game action
  -> game system
  -> state update
```

## Rule 3 — Data-driven content

Keep locations, items, NPCs, events, and jobs in structured data.

## Rule 4 — One source of truth for player state

Do not maintain duplicate copies of:
- money,
- energy,
- inventory,
- location.

## Rule 5 — No magic numbers

Game values should be configurable.

Avoid:

```ts
money -= 750;
```

Prefer configuration/data:

```ts
money -= item.price;
```

## Rule 6 — Mobile-first compatibility

The game must work in a mobile browser.

## Rule 7 — No premature 3D

A visual map is enough for the MVP.

## Rule 8 — No unnecessary external dependencies

Only install libraries that solve an actual problem.

## Rule 9 — Keep systems replaceable

For example, localStorage should be replaceable by a database without rewriting the entire UI.

## Rule 10 — Test each system before adding the next one

Do not build ten unfinished systems simultaneously.

---

# 33. Security Rules

Even though this begins as a game prototype:

- Never store plaintext passwords.
- Never trust client-submitted money values in a real online version.
- Validate all server-side transactions.
- Validate event submissions.
- Sanitize user-generated content.
- Rate-limit public endpoints.
- Keep secrets in environment variables.
- Never commit API keys.

---

# 34. Real-World Data and Naming

Because the game is based on a real place and institution:

- Verify geographical information before treating it as authoritative.
- Avoid falsely representing fictional businesses/events as real.
- Clearly distinguish fictional gameplay content from real announcements.
- For real-life event announcements, consider organizer verification before public launch.
- Avoid exposing private/personal information about real individuals.

The game can be inspired by local culture without pretending every fictional NPC or event is real.

---

# 35. Content Pipeline

New content should be easy to add.

Example:

```text
Add a new job
    ↓
Create job data
    ↓
Define requirements
    ↓
Define costs
    ↓
Define rewards
    ↓
Register job
    ↓
Job automatically appears where appropriate
```

Same principle for:
- locations,
- items,
- events,
- NPCs,
- dialogue.

---

# 36. Future Features

These are intentionally outside the first MVP unless implementation proves unusually fast.

## Multiplayer
- live player presence,
- player-to-player interactions,
- shared locations,
- competitive systems.

## Social economy
- player businesses,
- marketplaces,
- trading,
- services.

## Advanced phone
- messaging,
- social feed,
- maps,
- banking,
- delivery,
- event discovery.

## Community events
- verified event organizers,
- ticketing,
- event promotion,
- real-time announcements.

## Advanced NPC AI
- schedules,
- memory,
- personalities,
- dynamic relationships,
- autonomous movement.

## Larger world
- more Ekpoma neighborhoods,
- more AAU buildings,
- transportation network,
- surrounding communities.

## 3D
Potentially introduce a proper 3D world after the core gameplay has proven itself.

---

# 37. Product Success Criteria

The MVP is successful if a new player can:

1. Enter the game.
2. Understand what they are doing.
3. Create a character.
4. Receive starter money.
5. Buy their first phone.
6. Explore Ekpoma/AAU.
7. Earn money.
8. Spend money.
9. Make choices.
10. Experience consequences.
11. Interact with at least a few people/locations.
12. Finish a short session wanting to continue.

The goal is **not** feature count.

The goal is **fun + local identity + replayability**.

---

# 38. Recommended First Vertical Slice

If time becomes extremely limited, implement only:

```text
Landing page
     ↓
Sign up / login
     ↓
Character creation
     ↓
Tutorial
     ↓
Starter money
     ↓
Buy phone
     ↓
Main Ekpoma map
     ↓
Choose location
     ↓
Do activity
     ↓
Earn/spend money
     ↓
Encounter NPC/event
     ↓
Return to world
```

If that works, **Ekpoma Life is already a game.**

Everything else can be layered on afterward.

---

# 39. Definition of Done for MVP

The MVP is considered playable when:

- [ ] The app loads in a browser.
- [ ] Landing page is implemented.
- [ ] Ekpoma-themed map/world visual exists.
- [ ] Login/signup works or a clearly isolated prototype authentication mode exists.
- [ ] Character creation works.
- [ ] Tutorial works.
- [ ] Starter money is granted.
- [ ] Phone purchase is compulsory during the tutorial.
- [ ] Player can access the game world.
- [ ] Player can navigate between multiple locations.
- [ ] Money can be earned.
- [ ] Money can be spent.
- [ ] Time changes.
- [ ] Energy changes.
- [ ] At least one legal income activity exists.
- [ ] At least one abstracted risky/illegal activity exists.
- [ ] At least a few NPC interactions exist.
- [ ] At least one event exists.
- [ ] Inventory works.
- [ ] Basic persistence works.
- [ ] Game works on a mobile browser.
- [ ] No critical console/runtime errors remain.

---

# 40. Development Philosophy

Do not attempt to build the final Ekpoma Life immediately.

Build:

```text
Playable prototype
        ↓
Test with real people
        ↓
Observe what they actually enjoy
        ↓
Improve the core loop
        ↓
Add more Ekpoma content
        ↓
Add social/community systems
        ↓
Scale infrastructure
```

The first version should make players say:

> **"Omo, this is Ekpoma."**

That reaction is more valuable than having 100 technically impressive features.

---

# 41. Immediate Next Actions

When implementation begins, the recommended order is:

1. Create repository.
2. Initialize React + Vite + TypeScript.
3. Set up Tailwind and basic design system.
4. Build the landing page.
5. Create the map/world visual.
6. Implement authentication.
7. Implement player state.
8. Implement character creation.
9. Implement tutorial.
10. Implement starter money and phone purchase.
11. Implement map navigation.
12. Implement economy.
13. Implement jobs/hustles.
14. Implement NPCs.
15. Implement events.
16. Implement phone announcements.
17. Add Innovation Hub.
18. Persist state.
19. Test the complete loop.
20. Deploy the MVP.

---

# 42. Important Product Decisions Still Requiring Final Team Agreement

The following should remain configurable/TBD until the team explicitly decides them:

- Exact visual art style.
- Exact map implementation.
- Exact starting money.
- Exact character archetypes.
- Exact list of legal jobs.
- Exact list of illegal/risky activities.
- Exact daily time model.
- Exact energy model.
- Exact AAU/Ekpoma locations in the first map.
- Whether the first online version uses Supabase or a custom Node backend.
- Whether multiplayer is included in the first public release.
- Exact real-life event moderation/verification process.
- Final monetization strategy.

These are intentionally not invented as settled decisions.

---

# 43. Final Principle

**Ekpoma Life should start small, feel local, and become deep through systems rather than sheer feature count.**

The strongest MVP is not a miniature version of a giant open-world game.

It is a **small, playable Ekpoma life simulator** where money, time, energy, places, people, decisions, and unexpected events combine to create stories.

Build that first.
