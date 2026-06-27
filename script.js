const input = document.getElementById("hint-input");
const button = document.getElementById("add-hint-btn");
const slots = document.querySelectorAll("#hints-list li");

let hintIndex = 0;

button.addEventListener("click", () => {
    const text = input.value.trim();

    if(!text || hintIndex >= slots.length) return;

    if(!text) {
        console.warn("No hint entered.");
        return;
    }

    if(hintIndex >= slots.length) {
        console.warn("No slots available for a new hint.");
        return;
    }

    slots[hintIndex].textContent = text;
    hintIndex++;

    input.value = "";
    input.focus();
})