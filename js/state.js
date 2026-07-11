const STORAGE_KEY = "pokemon-word-guesser-state";

export const state = {
    hintInput: "",
    hints: [],
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
    ],
    answerStates: Array.from({ length: 10 }, () => ({ revealed: false, player: null }))
};

function getStorage() {
    if (typeof window !== "undefined" && window.localStorage) {
        return window.localStorage;
    }

    if (typeof globalThis !== "undefined" && globalThis.localStorage) {
        return globalThis.localStorage;
    }

    return null;
}

export function saveState() {
    const storage = getStorage();
    if (!storage) return;

    const payload = {
        hintInput: state.hintInput,
        hints: [...state.hints],
        hintIndex: state.hintIndex,
        hintGiver: state.hintGiver,
        roundComplete: state.roundComplete,
        players: state.players.map(({ score, color }) => ({ score, color })),
        answerStates: state.answerStates.map(({ revealed, player }) => ({ revealed, player }))
    };

    storage.setItem(STORAGE_KEY, JSON.stringify(payload));
}

export function loadState() {
    const storage = getStorage();
    if (!storage) return;

    const rawState = storage.getItem(STORAGE_KEY);
    if (!rawState) return;

    try {
        const persisted = JSON.parse(rawState);
        state.hintInput = persisted.hintInput ?? "";
        state.hints = Array.isArray(persisted.hints) ? persisted.hints : [];
        state.hintIndex = persisted.hintIndex ?? state.hints.length;
        state.hintGiver = persisted.hintGiver ?? 0;
        state.roundComplete = Boolean(persisted.roundComplete);

        state.players = state.players.map((player, index) => {
            const persistedPlayer = persisted.players?.[index];
            return {
                ...player,
                ...(persistedPlayer ? { score: Number(persistedPlayer.score) || 0, color: persistedPlayer.color || player.color } : {})
            };
        });

        state.answerStates = Array.isArray(persisted.answerStates)
            ? persisted.answerStates.map((answerState) => ({
                revealed: Boolean(answerState?.revealed),
                player: answerState?.player ?? null
            }))
            : Array.from({ length: state.answers.length }, () => ({ revealed: false, player: null }));
    } catch (error) {
        console.warn("Unable to load saved game state.", error);
    }
}