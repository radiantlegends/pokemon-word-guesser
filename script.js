const input = document.getElementById("hint-input");
const button = document.getElementById("add-hint-btn");
const slots = document.querySelectorAll("#hints-list li");

let hintIndex = 0;
let hintGiver = 0;

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
        if(revealBtn.disabled) return;

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
    tag.addEventListener("click", changeGuesser);
});

function changeGuesser() {
    const li = this.closest("li");
    if(li.dataset.player === undefined) return;

    console.log(li.dataset.player);

    const selector = document.getElementById("player-select");
    const rect = tag.getBoundingClientRect();

    //Position the player selector.
    selector.style.top = `${rect.bottom + window.scrollY}px`;
    selector.style.left = `${rect.left + window.scrollX}px`;

    selector.classList.remove("hidden");
    selector.dataset.currentIndex = index;
    selector.dataset.isChange = "true";
}

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

//Select the player who guessed correctly.
document.querySelectorAll("#player-select button").forEach(btn => {
    btn.addEventListener("click", () => {
        const playerIndex = Number(btn.dataset.player);
        const selector = document.getElementById("player-select");
        const answerIndex = Number(selector.dataset.currentIndex);
        const isChange = selector.dataset.isChange === "true";

        if(playerIndex === hintGiver) {
            console.warn("Hint giver cannot guess.");
            return;
        }

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
            answerText.textContent = answers[answerIndex];
            revealBtn.disabled = true;
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

        //Score the hint giver when all answers are revealed.
        const lis = document.querySelectorAll("#answers-list li");
        if(Array.from(lis).every(li => li.dataset.player !== undefined)) {
            const score = 25 - hintIndex;
            players[hintGiver].score += score;
            players[hintGiver].element.textContent = players[hintGiver].score;
            resetRound();
        }
    });
});

function updateHintGiver() {
    document.querySelectorAll(".player").forEach((p, i) => {
        const label = p.querySelector(".hint-label");
        if (i === hintGiver) {
            label.textContent = "Hinter";
        } else {
            label.textContent = "";
        }
    });
    document.querySelectorAll("#player-select button").forEach(btn => {
        btn.disabled = false;
    });
    document.querySelector(`#player-select button[data-player="${hintGiver}"]`).disabled = true;
}

updateHintGiver();

function resetRound() {
    //Reset the hint index.
    hintIndex = 0;

    //Clear all hint slots.
    slots.forEach(li => {
        li.textContent = "";
    });

    //Clear all answers.
    document.querySelectorAll("#answers-list li").forEach(li => {
        li.querySelector(".answer-text").textContent = "";
        li.querySelector(".reveal-btn").disabled = false;
        li.querySelector(".reveal-btn").textContent = "Reveal";
        
        const tag = li.querySelector(".guesser-tag");
        tag.className = "guesser-tag";
        tag.textContent = "";

        delete li.dataset.player;
    });

    //Hide the selector, if it was open.
    const selector = document.getElementById("player-select");
    selector.classList.add("hidden");
    delete selector.dataset.currentIndex;
    delete selector.dataset.isChange;

    //Rotate to the next hint giver.
    hintGiver = (hintGiver + 1) % 4;
    updateHintGiver();

    //Refocus the hint input.
    input.value = "";
    input.focus();
}

function resetGame() {
    //Reset the hint index.
    hintIndex = 0;

    //Clear all hint slots.
    slots.forEach(li => {
        li.textContent = "";
    });

    //Clear all answers.
    document.querySelectorAll("#answers-list li").forEach(li => {
        li.querySelector(".answer-text").textContent = "";
        li.querySelector(".reveal-btn").disabled = false;
        li.querySelector(".reveal-btn").textContent = "Reveal";
        
        const tag = li.querySelector(".guesser-tag");
        tag.className = "guesser-tag";
        tag.textContent = "";

        delete li.dataset.player;
    });

    //Hide the selector, if it was open.
    const selector = document.getElementById("player-select");
    selector.classList.add("hidden");
    delete selector.dataset.currentIndex;
    delete selector.dataset.isChange;

    //Reset the hint giver.
    hintGiver = 0;

    //Clear the scores.
    players.forEach(player => {
        player.score = 0;
        player.element.textContent = player.score;
    });

    //Refocus the hint input.
    input.value = "";
    input.focus();
}

document.getElementById("new-round-btn").addEventListener("click", resetRound);
document.getElementById("restart-game-btn").addEventListener("click", resetGame);