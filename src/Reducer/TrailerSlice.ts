import {ITrailers} from "../Types/TypesTrailers";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface ITrailersSlice {
    trailers: ITrailers[]
    loader: boolean
    error: string
}

const initialState: ITrailersSlice = {
    trailers: [],
    loader: false,
    error: ""
}
export const fetchTrailers = createSlice({
    name: 'top-rated',
    initialState,
    reducers: {
        fetchingTrailers(state ){
            state.loader = true
        },
        fetchingTrailersSuccess(state, action:PayloadAction<ITrailers[]>){
            state.loader = false
            state.trailers = action.payload
            state.error = ''
        },
        fetchingTrailersError(state, action: PayloadAction<string>) {
            state.loader = false
            state.trailers = []
            state.error = action.payload
        }
    }
})
export default fetchTrailers.reducer
export const {fetchingTrailers, fetchingTrailersSuccess, fetchingTrailersError} = fetchTrailers.actions
