import {INowPlaying} from "../Types/TypesNowPlaying";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface INowPlayingSlice {
    nowPlaying: INowPlaying[]
    loader: boolean
    error: string
}

const initialState: INowPlayingSlice = {
    nowPlaying: [],
    loader: false,
    error: ""
}
export const NowPlayingSlice = createSlice({
    name: 'now-playing',
    initialState,
    reducers: {
        fetchingNowPlaying(state ){
            state.loader = true
        },
        fetchingNowPlayingSuccess(state, action:PayloadAction<INowPlaying[]>){
            state.loader = false
            state.nowPlaying = action.payload
            state.error = ''
        },
        fetchingNowPlayingError(state, action: PayloadAction<string>) {
            state.loader = false
            state.nowPlaying = []
            state.error = action.payload
        }
    }
})
export default NowPlayingSlice.reducer
export const {fetchingNowPlaying, fetchingNowPlayingSuccess, fetchingNowPlayingError} = NowPlayingSlice.actions
