import { state } from "./state.js";

export function setupPlayers() {
    state.players.forEach((player, index) => {
        player.element = document.querySelector(`.player:nth-child(${index + 1}) .player-score`);
    });
}

export function updateScore(playerIndex, amount) {
    state.players[playerIndex].score += amount;
    state.players[playerIndex].element.textContent = state.players[playerIndex].score;
}

export function updateHintGiver() {
    document.querySelectorAll(".player").forEach((player, index) => {
        const label = player.querySelector(".hint-label");
        label.textContent = index === state.hintGiver ? "Hinter" : "";
    });

    document.querySelectorAll("#player-select button").forEach((button) => {
        button.disabled = false;
    });

    const hintGiverButton = document.querySelector(`#player-select button[data-player="${state.hintGiver}"]`);
    if (hintGiverButton) {
        hintGiverButton.disabled = true;
    }
}