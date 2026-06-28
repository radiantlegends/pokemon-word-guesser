const input = document.getElementById("hint-input");
const button = document.getElementById("add-hint-btn");
const slots = document.querySelectorAll("#hints-list li");

let hintIndex = 0;

function addHint() {
    const text = input.value.trim();

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
}

button.addEventListener("click", addHint);
input.addEventListener("keydown", (e) => {
    if(e.key === "Enter") {
        addHint();
    }
});

const answers = [
    "Lunatone",
    "Gengar",
    "Pikachu",
    "Torterra",
    "Mareep",
    "Gardevoir",
    "Wailord",
    "Metagross",
    "Sableye",
    "Rayquaza"
]

document.querySelectorAll("#answers-list li").forEach((li, index) => {
    const revealBtn = li.querySelector(".reveal-btn");
    const answerText = li.querySelector(".answer-text");

    revealBtn.addEventListener("click", () => {
        answerText.textContent = answers[index];
        revealBtn.disabled = true;
        revealBtn.textContent = "Revealed";
        li.classList.add("revealed");
    });
});