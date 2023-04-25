import {combineReducers, configureStore} from "@reduxjs/toolkit";
import popularSlice from "./../PopularSlice";

const rootReducer =  combineReducers({
    popularSlice
})

export const setupStore = () =>{
    return configureStore({
        reducer: rootReducer,
    })
}

export  type rootState = ReturnType<typeof rootReducer>
type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
