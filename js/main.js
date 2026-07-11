import { loadState } from "./state.js";
import { setupHints } from "./hints.js";
import { setupAnswers } from "./answers.js";
import { setupPlayers, updateHintGiver } from "./players.js";
import { skipRound, resetGame } from "./reset.js";

loadState();
setupHints();
setupPlayers();
setupAnswers();
updateHintGiver();
requestAnimationFrame(() => {
    document.body.classList.remove("loading");
});

document.getElementById("new-round-btn").addEventListener("click", skipRound);
document.getElementById("restart-game-btn").addEventListener("click", resetGame);