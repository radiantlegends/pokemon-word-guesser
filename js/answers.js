import { state } from "./state.js";
import { updateScore } from "./players.js";
import { completeRound } from "./reset.js";

export function setupAnswers() {
    const list = document.querySelectorAll("#answers-list li");
    const selector = document.getElementById("player-select");

    function showPlayerSelector(element, index) {
        const rect = element.getBoundingClientRect();
        selector.style.top = `${rect.bottom + window.scrollY}px`;
        selector.style.left = `${rect.left + window.scrollX}px`;

        selector.classList.remove("hidden");
        selector.dataset.currentIndex = index;
    }

    list.forEach((li, index) => {
        const revealBtn = li.querySelector(".reveal-btn");

        revealBtn.addEventListener("click", () => {
            if (revealBtn.disabled) return;
            showPlayerSelector(revealBtn, index);
        });
    });

    list.forEach((li, index) => {
        const tag = li.querySelector(".guesser-tag");

        tag.addEventListener("click", () => {
            if (!li.dataset.player) return;

            showPlayerSelector(tag, index);
            selector.dataset.isChange = "true";
        });
    });

    selector.querySelectorAll("button").forEach((button) => {
        button.addEventListener("click", () => {
            const playerIndex = Number(button.dataset.player);
            const answerIndex = Number(selector.dataset.currentIndex);
            const isChange = selector.dataset.isChange === "true";

            if (playerIndex === state.hintGiver) {
                console.warn("Hint giver cannot guess.");
                return;
            }

            const li = list[answerIndex];
            const answerText = li.querySelector(".answer-text");
            const revealBtn = li.querySelector(".reveal-btn");
            const tag = li.querySelector(".guesser-tag");

            if (isChange && li.dataset.player !== undefined) {
                const oldPlayer = Number(li.dataset.player);
                updateScore(oldPlayer, -1);
            } else {
                answerText.textContent = state.answers[answerIndex];
                revealBtn.disabled = true;
                revealBtn.textContent = "Revealed";
            }

            li.dataset.player = playerIndex;
            li.classList.add("revealed");

            tag.className = "guesser-tag";
            tag.classList.add(state.players[playerIndex].color);
            tag.textContent = `P${playerIndex + 1}`;

            updateScore(playerIndex, 1);

            selector.classList.add("hidden");
            delete selector.dataset.isChange;

            completeRound(list);
        });
    });
}