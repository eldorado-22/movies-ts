import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IActorsInfo} from "../../../Types/DetailMoviesTypes/ActorInfoTypes/actorInfoTypes";

interface IActorsInfoSlice {
    actorsInfo: Partial<IActorsInfo>
    loader: boolean
    error: string
}
const initialState: IActorsInfoSlice = {
    actorsInfo: {},
    loader: false,
    error: ""
}
export const ActorsInfoSlice = createSlice({
    name: 'actors-info',
    initialState,
    reducers: {
        fetchingActorsInfo(state) {
            state.loader = true
        },
        fetchingActorsInfoSuccess(state, action: PayloadAction<IActorsInfo>) {
            state.loader = false
            state.actorsInfo = action.payload
            state.error = ''
        },
        fetchingActorsInfoError(state, action: PayloadAction<string>) {
            state.loader = false
            state.actorsInfo = {}
            state.error = action.payload
        }
    }
})
export default ActorsInfoSlice.reducer
export const {fetchingActorsInfo, fetchingActorsInfoSuccess, fetchingActorsInfoError} = ActorsInfoSlice.actions
