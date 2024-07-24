import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    player: {
        activePosition: 1,
        score: 0,
        owner: null

    }
};


export const playerLineSlice = createSlice({
    name: "playerLine",
    initialState,
    reducers: {
        setPositionPlayer: (state, {payload}) => {
            state.player.activePosition = payload

        },
        setScore: (state, {payload}) => {
            state.player.score = state.player.score + 1
        },
        resetScore: (state, {payload}) => {
            state.player.score = 0
        },
        setOwner: (state, {payload}) => {
            state.player.owner = payload
        }

    },
});

export const {setPositionPlayer, setScore, setOwner, resetScore} =
    playerLineSlice.actions;

export default playerLineSlice.reducer;
