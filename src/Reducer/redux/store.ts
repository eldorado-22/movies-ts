import {combineReducers, configureStore} from "@reduxjs/toolkit";
import popularSlice from "./../PopularSlice";
import TopRatedSlice from "../TopRatedSlice";
import NowPlayingSlice from "../NowPlayingSlice";

const rootReducer = combineReducers({
    popularSlice,
    TopRatedSlice,
    NowPlayingSlice,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    })
}

export  type rootState = ReturnType<typeof rootReducer>
type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
