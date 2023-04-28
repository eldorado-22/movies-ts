import {AppDispatch} from "./redux/store";
import {fetchingPopular, fetchingPopularError, fetchingPopularSuccess,} from "./PopularSlice";
import {fetchingTopRated, fetchingTopRatedError, fetchingTopRatedSuccess} from "./TopRatedSlice"
import axios from "axios";
import {ApiKey} from "../ApiKey/ApiKey";
import {fetchingNowPlaying, fetchingNowPlayingError, fetchingNowPlayingSuccess} from "./NowPlayingSlice";
import {
    fetchingDetailPage,
    fetchingDetailPageError,
    fetchingDetailPageSuccess
} from "./DetailPagesSlice/DetailPagesSlice";
import {useParams} from "react-router-dom";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {IDetailPages} from "../Types/DetailMoviesTypes/DetailTypes";


////////////////// Popular //////////////////
export const fetchingPopulars = async (dispatch: AppDispatch) => {
    try {
        dispatch(fetchingPopular())
        const res = await axios(`https://api.themoviedb.org/3/movie/popular?api_key=${ApiKey}&language=en-US&page=1`)
        dispatch(fetchingPopularSuccess(res.data.results))
    } catch (e: any) {
        dispatch(fetchingPopularError(e.message))
    }
}


///////////////////// Top Rated ////////////////////////
export const fetchingTopRatedS = async (dispatch: AppDispatch) => {
    try {
        dispatch(fetchingTopRated())
        const res = await axios(`https://api.themoviedb.org/3/movie/top_rated?api_key=${ApiKey}&language=en-US&page=20`)
        dispatch(fetchingTopRatedSuccess(res.data.results))
    } catch (e: any) {
        dispatch(fetchingTopRatedError(e.message))
    }
}

/////////////////// Now Playing ///////////////////
export const fetchingNowPlayingS = async (dispatch: AppDispatch) => {
    try {
        dispatch(fetchingNowPlaying())
        const res = await axios(`https://api.themoviedb.org/3/movie/now_playing?api_key=${ApiKey}&language=en-US&page=10`)
        dispatch(fetchingNowPlayingSuccess(res.data.results))
    } catch (e: any) {
        dispatch(fetchingNowPlayingError(e.message))
    }
}


///////////////////////// DETAIL PAGES //////////////////////////////
export const getDetailPages = (id: any) =>  async (dispatch: AppDispatch)  => {
    try {
        dispatch(fetchingDetailPage())
        const url = await axios<IDetailPages>(`https://api.themoviedb.org/3/movie/${id}?api_key=${ApiKey}&language=en-US`)
        const {data} = await url
        dispatch(fetchingDetailPageSuccess(data))
    } catch (e: any) {
        fetchingDetailPageError(e.message)
    }
}
