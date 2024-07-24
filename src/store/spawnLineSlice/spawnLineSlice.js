import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    lines: {

        leftSpawn: {
            items: []
        },
        centerSpawn: {
            items: []
        },
        rightSpawn: {
            items: []
        },
    },
    interval: true,
    intervalNumberSpawn: ''
};


export const spawnLineSlice = createSlice({
    name: "spawnLine",
    initialState,
    reducers: {

        addItem: (state, {payload}) => {
            switch (payload) {
                case 1:
                    state.lines.leftSpawn.items.push({top: 0, id: Math.random(), scale: false})
                    break
                case 2 :
                    state.lines.centerSpawn.items.push({top: 0, id: Math.random(), scale: false})
                    break
                case 3:
                    state.lines.rightSpawn.items.push({top: 0, id: Math.random(), scale: false})
                    break
            }
        },
        deleteItem: (state, {payload}) => {
            state.lines[payload.positionLine].items = state.lines[payload.positionLine].items.filter(el => el.id !== payload.id)
        }, deleteAllItem: (state, {payload}) => {
            state.lines.leftSpawn.items = []
            state.lines.centerSpawn.items = []
            state.lines.rightSpawn.items = []
        },
        deleteNotScale: (state, {payload}) => {
            state.lines.leftSpawn.items = state.lines.leftSpawn.items.filter(el => el.scale === true)
            state.lines.centerSpawn.items = state.lines.centerSpawn.items.filter(el => el.scale === true)
            state.lines.rightSpawn.items = state.lines.rightSpawn.items.filter(el => el.scale === true)
        },
        stopInterval: (state, {payload}) => {
            state.interval = payload
        },
        setIntervalSpawn: (state, {payload}) => {
            state.intervalNumberSpawn = payload
        },
        setScale: (state, {payload}) => {
            state.lines[payload.positionLine].items = state.lines[payload.positionLine].items.map(el => {
                if (el.id === payload.id) {
                    return {
                        ...el, scale: true
                    }
                }
                return el
            })

        }
    },
});

export const {addItem, deleteItem, stopInterval, setScale, deleteNotScale, setIntervalSpawn, deleteAllItem} =
    spawnLineSlice.actions;

export default spawnLineSlice.reducer;
