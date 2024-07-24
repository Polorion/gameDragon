import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    maxHeight: 900,
    maxWidth: 1,
    speedGame: 5,
    speedSpawn: 2000,
    playerTopPosition: 1,
    heightPerson: 0,
    heightContainer: 0,
    disable: false,
    gameEnd: false,
    resize: false

};


export const gameParamsSlice = createSlice({
    name: "params",
    initialState,
    reducers: {
        setSize: (state, {payload}) => {
            state.maxHeight = payload.height
            state.maxWidth = payload.width
        }, setResize: (state, {payload}) => {
            state.resize = !state.resize
        },
        setPositionTopPlayer: (state, {payload}) => {
            state.playerTopPosition = payload
        },
        speedGameSet: (state, {payload}) => {
            state.speedGame = state.speedGame - 0.8
            // state.speedSpawn = state.speedSpawn - 800
        },
        resetSpeed: (state, {payload}) => {
            state.speedGame = payload.speed
            state.speedSpawn = payload.spawn
        },

        heightPersonSet: (state, {payload}) => {
            state.heightPerson = payload
        },
        heightContainerSet: (state, {payload}) => {
            state.heightContainer = payload
        },
        setDisableGame: (state, {payload}) => {
            state.disable = payload
        },
        setGameEnd: (state, {payload}) => {
            state.gameEnd = payload
        }
    },
});

export const {
    setSize,
    resetSpeed,
    setPositionTopPlayer,
    speedGameSet,
    heightPersonSet,
    heightContainerSet,
    setDisableGame,
    setGameEnd,
    setResize
} =
    gameParamsSlice.actions;

export default gameParamsSlice.reducer;
