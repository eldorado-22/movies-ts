import {combineReducers, configureStore} from "@reduxjs/toolkit";
import popularSlice from "./../PopularSlice";
import TopRatedSlice from "../TopRatedSlice";
import NowPlayingSlice from "../NowPlayingSlice";
import DetailPagesSlice from "./../DetailPagesSlice/DetailPagesSlice"
import actorsSlice from "../DetailPagesSlice/DetailPagesActors/DetailPageActorsSlice";
import fetchTrailers from "../TrailerSlice";

const rootReducer = combineReducers({
    popularSlice,
    TopRatedSlice,
    NowPlayingSlice,
    DetailPagesSlice,
    actorsSlice,
    fetchTrailers
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    })
}

export  type rootState = ReturnType<typeof rootReducer>
type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
