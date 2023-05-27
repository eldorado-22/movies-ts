import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface IDetailPageActorsSlice {
    actor: any[]
    loader: boolean
    error: string
}
const initialState: IDetailPageActorsSlice = {
    actor: [],
    loader: false,
    error: ""
}
export const actorsSlice = createSlice({
    name: 'actors',
    initialState,
    reducers: {
        fetchingActor(state) {
            state.loader = true
        },
        fetchingActorSuccess(state, action: PayloadAction<any[]>) {
            state.loader = false
            state.actor = action.payload
            state.error = ''
        },
        fetchingActorError(state, action: PayloadAction<string>) {
            state.loader = false
            state.actor = []
            state.error = action.payload
        }
    }
})
export default actorsSlice.reducer
export const {fetchingActor, fetchingActorSuccess, fetchingActorError} = actorsSlice.actions
