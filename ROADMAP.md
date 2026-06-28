# Project Roadmap

A structured development plan for building a browser‑based version of the “25 Words of Less”‑style Pokémon hint game. This roadmap outlines the Minimum Viable Product (MVP), core features, stretch goals, and long‑term enhancements.

## Project Goal

Create a simple, fun, web‑based game where:
- A hint‑giver enters hints.
- Guessers try to identify 10 Pokémon/items/characters.
- The hint‑giver is scored based on how many hints they use.
- Guessers earn points for correct answers.

The project should be lightweight, easy to host on GitHub Pages, and expandable over time.

## Minimum Viable Product

### **Basic Page Structure**
- [x] `index.html` with:
  - [x] Header/title
  - [x] Hint input field + “Add Hint” button
  - [x] Hint list display
  - [x] List of 10 answers (hidden or revealable)
  - [x] Score display

### **Core Game Logic**
- [x] Array of 10 answers (hardcoded for now)
- [x] Function to add hints
- [x] Buttons to reveal each answer
- [x] Button to mark who won the guess
- [x] Function to calculate score:
  - [x] Score = 25 − hintsUsed
  - [x] Negative scores allowed if hintsUsed > 25

### **Basic Styling**
- [x] Simple layout with three blocks:
  - [x] Left: hints
  - [x] Right: answers
  - [x] Bottom: scoring
- [ ] Responsive enough to work on desktop and mobile

### **Reset / New Game**
- [x] Reset the round
   - [x] When all answers are revealed
   - [x] With a button
- [x] Reset the game

## Phase 2: Quality of Life Improvements

### **UI Enhancements**
- Remove "Add Hint" area and replace with enabling/focus next input.
- Better layout and spacing
- Color themes (light/dark)
- Animated hint additions
- Animated answer reveals

### **Game Flow Improvements**
- “Next Pokémon” button
- Progress indicator (e.g., “3/10 guessed”)
- Auto‑scroll to newest hint

### **Data Handling**
- Save game state in `localStorage`
- Allow custom lists of answers

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

## Stretch Goals (Long‑Term)

- Multiplayer with WebSockets
- Timer mode
- Hint categories (color-coded)
- Sound effects
- Custom themes
- Mobile‑optimized layout
- Accessibility improvements (keyboard navigation, ARIA labels)

## Development Checklist

### MVP
- [ ] Basic HTML structure
- [ ] Hint input + display
- [ ] Hint counter
- [ ] Score calculation
- [ ] Answer list + reveal buttons
- [ ] Correct guess tracking
- [ ] Reset button
- [ ] Basic CSS layout

### Phase 2
- [ ] Improved styling
- [ ] Animations
- [ ] LocalStorage saving
- [ ] Custom answer lists

### Phase 3
- [ ] PokéAPI integration
- [ ] Random Pokémon generator
- [ ] Sprite display

### Phase 4
- [ ] Presenter/Guesser modes
- [ ] Leaderboard
- [ ] Shareable game links

