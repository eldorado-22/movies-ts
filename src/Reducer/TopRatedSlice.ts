import {ITopRated} from "../Types/TypesTopRated";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface ITopRatedSlice {
    topRated: ITopRated[]
    loader: boolean
    error: string
}

const initialState: ITopRatedSlice = {
    topRated: [],
    loader: false,
    error: ""
}
export const TopRatedSlice = createSlice({
    name: 'top-rated',
    initialState,
    reducers: {
        fetchingTopRated(state ){
            state.loader = true
        },
        fetchingTopRatedSuccess(state, action:PayloadAction<ITopRated[]>){
            state.loader = false
            state.topRated = action.payload
            state.error = ''
        },
        fetchingTopRatedError(state, action: PayloadAction<string>) {
            state.loader = false
            state.topRated = []
            state.error = action.payload
        }
    }
})
export default TopRatedSlice.reducer
export const {fetchingTopRated, fetchingTopRatedSuccess, fetchingTopRatedError} = TopRatedSlice.actions
