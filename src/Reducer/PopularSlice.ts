import {IPopular} from "../Types/Types";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface IPopularSlice {
    popular: IPopular[]
    loader: boolean
    error: string
}

const initialState: IPopularSlice = {
    popular: [],
    loader: false,
    error: ""
}
export const popularSlice = createSlice({
    name: 'popular',
    initialState,
    reducers: {
        fetchingPopular(state ){
            state.loader = true
        },
        fetchingPopularSuccess(state, action:PayloadAction<IPopular[]>){
            state.loader = false
            state.popular = action.payload
            state.error = ''
        },
        fetchingPopularError(state, action: PayloadAction<string>) {
            state.loader = false
            state.popular = []
            state.error = action.payload
        }
    }
})
export default popularSlice.reducer
export const {fetchingPopular, fetchingPopularSuccess, fetchingPopularError} = popularSlice.actions
