import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IDetailPages} from "../../Types/DetailMoviesTypes/DetailTypes";

interface IDetailPageSlice {
    detail: Partial<IDetailPages>
    loader: boolean
    error: string
}

const initialState: IDetailPageSlice = {
    detail: {},
    loader: false,
    error: ""
}
export const DetailPagesSlice = createSlice({
    name: 'detail-pages',
    initialState,
    reducers: {
        fetchingDetailPage(state ){
            state.loader = true
        },
        fetchingDetailPageSuccess(state, action:PayloadAction<IDetailPages>){
            state.loader = false
            state.detail = action.payload
            state.error = ''
        },
        fetchingDetailPageError(state, action: PayloadAction<string>) {
            state.loader = false
            state.detail = {}
            state.error = action.payload
        }
    }
})
export default DetailPagesSlice.reducer
export const {fetchingDetailPage, fetchingDetailPageSuccess, fetchingDetailPageError} = DetailPagesSlice.actions
