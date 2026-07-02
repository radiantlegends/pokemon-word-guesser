export const state = {
    hintIndex: 0,
    hintGiver: 0,
    roundComplete: false,
    players: [
        { score: 0, color: "red", element: null },
        { score: 0, color: "blue", element: null },
        { score: 0, color: "green", element: null },
        { score: 0, color: "yellow", element: null }
    ],
    answers: [
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
};