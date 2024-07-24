import {configureStore} from "@reduxjs/toolkit";
import gameParamsSlice from "./gameParamsSlice/gameParamsSlice";
import spawnLineSlice from "./spawnLineSlice/spawnLineSlice";
import playerLineSlice from "./playerLineSlice/playerLineSlice";

export const store = configureStore({
    reducer: {
        params: gameParamsSlice,
        spawnLine: spawnLineSlice,
        playerLine: playerLineSlice,
    },
});

