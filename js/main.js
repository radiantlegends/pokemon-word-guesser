import { setupHints } from "./hints.js";
import { setupAnswers } from "./answers.js";
import { setupPlayers, updateHintGiver } from "./players.js";
import { resetRound, resetGame } from "./reset.js";

setupHints();
setupPlayers();
setupAnswers();
updateHintGiver();

document.getElementById("new-round-btn").addEventListener("click", resetRound);
document.getElementById("restart-game-btn").addEventListener("click", resetGame);