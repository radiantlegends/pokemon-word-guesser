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

//Attach the player select button to the reveal button.
document.querySelectorAll("#answers-list li").forEach((li, index) => {
    const revealBtn = li.querySelector(".reveal-btn");

    revealBtn.addEventListener("click", (e) => {
        const selector = document.getElementById("player-select");
        const rect = revealBtn.getBoundingClientRect();

        //Position the player selector.
        selector.style.top = `${rect.bottom + window.scrollY}px`;
        selector.style.left = `${rect.left + window.scrollX}px`;

        selector.classList.remove("hidden");

        //Store which li is being marked.
        selector.dataset.currentIndex = index;
    });
});

//Attach a listener to the guesser tag to allow host to change guesser.
document.querySelectorAll("#answers-list li").forEach((li, index) => {
    const tag = li.querySelector(".guesser-tag");

    tag.addEventListener("click", () => {
        //If no one has been assigned, do nothing.
        if(li.dataset.player === undefined) return;

        const selector = document.getElementById("player-select");
        const rect = tag.getBoundingClientRect();

        //Position the player selector.
        selector.style.top = `${rect.bottom + window.scrollY}px`;
        selector.style.left = `${rect.left + window.scrollX}px`;

        selector.classList.remove("hidden");
        selector.dataset.currentIndx = index;
        selector.dataset.isChange = "true";
    });
});

const players = [
    { score: 0, element: document.querySelector(".player.red .player-score") },
    { score: 0, element: document.querySelector(".player.blue .player-score")},
    { score: 0, element: document.querySelector(".player.green .player-score")},
    { score: 0, element: document.querySelector(".player.yellow .player-score")},
]

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

document.querySelectorAll("#player-select button").forEach(btn => {
    btn.addEventListener("click", () => {
        const playerIndex = Number(btn.dataset.player);
        const selector = document.getElementById("player-select");
        const answerIndex = Number(selector.dataset.currentIndex);
        const isChange = selector.dataset.isChange === "true";

        const li = document.querySelectorAll("#answers-list li")[answerIndex];
        const answerText = li.querySelector(".answer-text");
        const revealBtn = li.querySelector(".reveal-btn");
        const tag = li.querySelector(".guesser-tag");

        //If this is a change, remove the old point first.
        if(isChange && li.dataset.player !== undefined) {
            const oldPlayer = Number(li.dataset.player);
            players[oldPlayer].score--;
            players[oldPlayer].element.textContent = players[oldPlayer].score;
        } else {
            //First time: reveal the answer and disable the button.
            answerText.textContent = answers[answerIndex];        revealBtn.disabled = true;
            revealBtn.textContent = "Revealed";
        }

        //Assign the player.
        li.dataset.player = playerIndex;

        //Mark the guesser.
        const colors = ["red", "blue", "green", "yellow"];
        tag.className = "guesser-tag"; //reset classes
        tag.classList.add(colors[playerIndex]);
        tag.textContent = `P${playerIndex + 1}`;

        //Give the player a point.
        players[playerIndex].score++;
        players[playerIndex].element.textContent = players[playerIndex].score;

        //Reset the selector state.
        selector.classList.add("hidden");
        delete selector.dataset.isChange;
    });
});