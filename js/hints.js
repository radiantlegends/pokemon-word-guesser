import { state } from "./state.js";

export function setupHints() {
    const input = document.getElementById("hint-input");
    const button = document.getElementById("add-hint-btn");
    const slots = document.querySelectorAll("#hints-list li");
    const errorEl = document.getElementById("hint-error");

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

        //Clear previous errors.
        errorEl.textContent = "";
        errorEl.classList.add("hidden");

        const li = slots[state.hintIndex];

        //Wrap the text in a span to animate it.
        const span = document.createElement("span");
        span.textContent = text;
        span.classList.add("hint-text-enter");
        li.textContent = "";
        li.appendChild(span);

        requestAnimationFrame(() => {
            span.classList.add("hint-text-enter-active");
        })
        span.addEventListener("transitionend", () => {
            span.classList.remove("hint-text-enter", "hint-text-enter-active");
        })

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