# Project Roadmap

A structured development plan for building a browser‑based version of the “25 Words of Less”‑style Pokémon hint game. This roadmap outlines the Minimum Viable Product (MVP), core features, stretch goals, and long‑term enhancements.

## Project Goal

Create a simple, fun, web‑based game where:
- A hint‑giver enters hints.
- Guessers try to identify 10 Pokémon/items/characters.
- The hint‑giver is scored based on how many hints they use.
- Guessers earn points for correct answers.

The project should be lightweight, easy to host on GitHub Pages, and expandable over time.

---

## Minimum Viable Product

### **Basic Page Structure**
- `index.html` with:
  - Header/title
  - Hint input field + “Add Hint” button
  - Hint list display
  - List of 10 answers (hidden or revealable)
  - Score display

### **Core Game Logic**
- Array of 10 answers (hardcoded for now)
- Function to add hints
- Buttons to reveal each answer
- Button to mark who won the guess
- Function to calculate score:
  - Score = 25 − hintsUsed
  - Negative scores allowed if hintsUsed > 25

### **Basic Styling**
- Simple layout with three blocks:
  - Left: hints
  - Right: answers
  - Bottom: scoring
- Responsive enough to work on desktop and mobile

### **Reset / New Game**
- Reset the round
   - When all answers are revealed
   - With a button
- Reset the game

---

## Phase 2: Quality of Life Improvements

### **UI Enhancements**
- Better layout and spacing
- Color themes (light/dark)
- Animated hint additions
- Animated answer reveals

### **Game Flow Improvements**
- Replace "Add Hint" with input for next hint slot
- Progress indicator (e.g., “3/10 guessed”)
- Auto‑scroll to newest hint

### **Data Handling**
- Save game state in `localStorage`
- Allow custom lists of answers
- Copy list to clipboard

---

## Phase 3 — Pokémon Integration

### **PokéAPI Features**
- Auto‑fetch Pokémon sprites
- Auto‑fetch Pokémon names for randomization
- Categories:
  - Pokémon
  - Items
  - Moves
  - Abilities
  - Gym Leaders

### **Random Game Generator**
- Button to generate a new set of 10 Pokémon/items

---

## Phase 4 — Advanced Features

### **Modes**
- Presenter Mode (hint‑giver)
- Guesser Mode (clean UI with no answers visible)
- Party Mode (multiple guessers)

### **Scoring Enhancements**
- Leaderboard (local only)
- Score history

### **Sharing**
- “Share Game” link with encoded answer list
- Export/import game state

---

## Stretch Goals (Long‑Term)

- Multiplayer with WebSockets
- Timer mode
- Hint categories (color-coded)
- Sound effects
- Custom themes
- Mobile‑optimized layout
- Accessibility improvements (keyboard navigation, ARIA labels)

---

## Development Checklist

### MVP
- [x] Basic HTML structure
- [x] Hint input + display
- [x] Hint counter
- [x] Score calculation
- [x] Answer list + reveal buttons
- [x] Correct guess tracking
- [x] Reset button
- [x] Basic CSS layout

### Phase 2
- [x] Refactor JS to modules
- [x] Improved styling
- [ ] Animations and visual feedback
- [x] LocalStorage saving
- [ ] Custom answer lists

### Phase 3
- [ ] PokéAPI integration
- [ ] Copy answers to clipboard
- [ ] Random Pokémon generator
- [ ] Sprite display
- [ ] Refined styling
- [ ] Highlight/ping hint
- [ ] Input player names

### Phase 4
- [ ] Presenter/Guesser modes
- [ ] Leaderboard
- [ ] Shareable game links