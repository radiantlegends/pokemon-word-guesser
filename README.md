# Pokémon Word Guesser

A browser‑based guessing game inspired by ZaneGames’s video:\
[“Guess The Pokémon But FEWEST Hints Wins!”](https://youtu.be/10x-S7t1Tq0)

This project recreates the format of the game in an interactive web interface.

## How the Game Works

Each round, there is one hint giver and any number of guessers. The hint giver's role is to use as little hints as possible to get the other players to guess their list of prompts.

### **Roles**
- **Hint Giver** — Provides hints to help guessers identify 10 Pokémon, items, or characters.
- **Guessers** — Try to guess each answer correctly.

### **Scoring**
- The hint giver starts with **25 points**.
- Each hint reduces their score by **1**.
- If they use fewer than 25 hints, they keep the remaining points.
- If they exceed 25 hints, their score becomes negative.
- Each guesser earns **1 point per correct guess**.

## Project Status

This project is currently in active development. You can view the live version here:

**https://radiantlegends.github.io/pokemon-word-guesser/**

The goal is to create a lightweight, fun, and expandable version of the game that runs entirely in the browser and is easy to host on GitHub Pages.

## Roadmap

A full development roadmap is available in:\
**`ROADMAP.md`**

It includes:
- MVP features
- UI plans
- Game logic milestones
- PokéAPI integration goals
- Stretch features (leaderboards, modes, animations, etc.)

## Tech Stack

- **HTML5** — Structure
- **CSS3** — Styling and layout
- **JavaScript (ES6+)** — Game logic and interactivity
- **GitHub Pages** — Hosting

No backend or frameworks required.

## Legal

This project is not affiliated with Nintendo or The Pokémon Company and does not own or claim any copyrighted material referencing the Pokémon franchise.

All Pokémon names, sprites, and related assets belong to their respective owners.

## Contributions

This is a personal project, but suggestions, issues, and feature ideas are welcome.

## Acknowledgments

Inspired by ZaneGames and their community challenge to create a web‑based version of the game.
