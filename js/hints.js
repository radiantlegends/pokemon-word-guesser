import { state } from "./state.js";

export function setupHints() {
    const input = document.getElementById("hint-input");
    const button = document.getElementById("add-hint-btn");
    const slots = document.querySelectorAll("#hints-list li");

    function addHint() {
        const text = input.value.trim();

        if (!text) {
            console.warn("No hint entered.");
            return;
        }

        if (state.hintIndex >= slots.length) {
            console.warn("No slots available for a new hint.");
            return;
        }

        slots[state.hintIndex].textContent = text;
        state.hintIndex += 1;
        input.value = "";
        input.focus();
    }

    button.addEventListener("click", addHint);
    input.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            addHint();
        }
    });
}