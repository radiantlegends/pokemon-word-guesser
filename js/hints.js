import { saveState, state } from "./state.js";

export function setupHints() {
    const input = document.getElementById("hint-input");
    const button = document.getElementById("add-hint-btn");
    const slots = document.querySelectorAll("#hints-list li");
    const errorEl = document.getElementById("hint-error");

    function renderHints() {
        slots.forEach((slot, index) => {
            slot.textContent = "";

            if (index < state.hints.length) {
                const span = document.createElement("span");
                span.textContent = state.hints[index];
                slot.appendChild(span);
            }
        });
    }

    function showHintError(message) {
        errorEl.textContent = message;
        errorEl.classList.add("show");
        input.classList.add("input-error");

        input.addEventListener("animationend", () => {
            input.classList.remove("input-error");
        }, { once: true });
    }

    function addHint() {
        const text = input.value.trim();

        if (!text) {
            showHintError("No hint entered.");
            return;
        }

        if (text.includes(" ")) {
            showHintError("Hints must be a single word.");
            return;
        }

        if (state.hintIndex >= slots.length) {
            showHintError("No slots available for a new hint.");
            return;
        }

        // errorEl.textContent = "";
        errorEl.classList.remove("show");

        const li = slots[state.hintIndex];
        const span = document.createElement("span");
        span.textContent = text;
        span.classList.add("hint-text-enter");
        li.textContent = "";
        li.appendChild(span);

        requestAnimationFrame(() => {
            span.classList.add("hint-text-enter-active");
        });
        span.addEventListener("transitionend", () => {
            span.classList.remove("hint-text-enter", "hint-text-enter-active");
        });

        state.hints.push(text);
        state.hintIndex += 1;
        state.hintInput = "";
        input.value = "";
        input.focus();
        saveState();
    }

    input.value = state.hintInput;
    renderHints();

    button.addEventListener("click", addHint);
    input.addEventListener("input", () => {
        state.hintInput = input.value;
        saveState();
    });
    input.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            addHint();
        }
    });
}