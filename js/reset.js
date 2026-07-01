import { state } from "./state.js";
import { updateHintGiver } from "./players.js";

function resetBoard() {
    const input = document.getElementById("hint-input");
    const slots = document.querySelectorAll("#hints-list li");

    state.hintIndex = 0;

    slots.forEach((slot) => {
        slot.textContent = "";
    });

    document.querySelectorAll("#answers-list li").forEach((li) => {
        li.querySelector(".answer-text").textContent = "";
        const revealBtn = li.querySelector(".reveal-btn");
        revealBtn.disabled = false;
        revealBtn.textContent = "Reveal";

        const tag = li.querySelector(".guesser-tag");
        tag.className = "guesser-tag";
        tag.textContent = "";

        delete li.dataset.player;
    });

    const selector = document.getElementById("player-select");
    selector.classList.add("hidden");
    delete selector.dataset.currentIndex;
    delete selector.dataset.isChange;

    input.value = "";
    input.focus();
}

export function resetRound() {
    resetBoard();
    state.hintGiver = (state.hintGiver + 1) % 4;
    updateHintGiver();
}

export function resetGame() {
    resetBoard();
    state.hintGiver = 0;

    state.players.forEach((player) => {
        player.score = 0;
        if(player.element) {
            player.element.textContent = player.score;
        }
    });

    updateHintGiver();
}