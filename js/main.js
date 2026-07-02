import { setupHints } from "./hints.js";
import { setupAnswers } from "./answers.js";
import { setupPlayers, updateHintGiver } from "./players.js";
import { skipRound, resetGame } from "./reset.js";

setupHints();
setupPlayers();
setupAnswers();
updateHintGiver();

document.getElementById("new-round-btn").addEventListener("click", skipRound);
document.getElementById("restart-game-btn").addEventListener("click", resetGame);