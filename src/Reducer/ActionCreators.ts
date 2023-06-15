import axios from "axios";
import {ApiKey} from "../ApiKey/ApiKey";
import {AppDispatch} from "./redux/store";
import {fetchingPopular, fetchingPopularError, fetchingPopularSuccess,} from "./PopularSlice";
import {fetchingTopRated, fetchingTopRatedError, fetchingTopRatedSuccess} from "./TopRatedSlice"
import {fetchingNowPlaying, fetchingNowPlayingError, fetchingNowPlayingSuccess} from "./NowPlayingSlice";
import {fetchingDetailPage, fetchingDetailPageError, fetchingDetailPageSuccess} from "./DetailPagesSlice/DetailPagesSlice";
import {IDetailPages} from "../Types/DetailMoviesTypes/DetailTypes";
import {fetchingActor, fetchingActorError, fetchingActorSuccess} from "./DetailPagesSlice/DetailPagesActors/DetailPageActorsSlice";
import {fetchingTrailers, fetchingTrailersError, fetchingTrailersSuccess} from "./TrailerSlice";
import {fetchingActorsInfo, fetchingActorsInfoError, fetchingActorsInfoSuccess} from "./DetailPagesSlice/Actors-Info-Movies/ActorsMoviesSlice";
import {IActorsInfo} from "../Types/DetailMoviesTypes/ActorInfoTypes/actorInfoTypes";


////////////////// POPULAR ////////////////////
export const fetchingPopulars = async (dispatch: AppDispatch) => {
    try {
        dispatch(fetchingPopular())
        const res = await axios(`https://api.themoviedb.org/3/movie/popular?api_key=${ApiKey}&language=en-US&page=1`)
        dispatch(fetchingPopularSuccess(res.data.results))
    } catch (e: any) {
        dispatch(fetchingPopularError(e.message))
    }
}
///////////////////// TOP RATED ////////////////////////
export const fetchingTopRatedS = async (dispatch: AppDispatch) => {
    try {
        dispatch(fetchingTopRated())
        const res = await axios(`https://api.themoviedb.org/3/movie/top_rated?api_key=${ApiKey}&language=en-US&page=20`)
        dispatch(fetchingTopRatedSuccess(res.data.results))
    } catch (e: any) {
        dispatch(fetchingTopRatedError(e.message))
    }
}

/////////////////// NOW PLAYING ///////////////////
export const fetchingNowPlayingS = async (dispatch: AppDispatch) => {
    try {
        dispatch(fetchingNowPlaying())
        const res = await axios(`https://api.themoviedb.org/3/movie/now_playing?api_key=${ApiKey}&language=en-US&page=10`)
        dispatch(fetchingNowPlayingSuccess(res.data.results))
    } catch (e: any) {
        dispatch(fetchingNowPlayingError(e.message))
    }
}

/////////////////// DETAIL PAGES ////////////////////
export const getDetailPages = (id: any) => async (dispatch: AppDispatch) => {
    try {
        dispatch(fetchingDetailPage())
        const url = await axios<IDetailPages>(`https://api.themoviedb.org/3/movie/${id}?api_key=${ApiKey}&language=en-US`)
        const {data} = await url
        dispatch(fetchingDetailPageSuccess(data))
    } catch (e: any) {
        fetchingDetailPageError(e.message)
    }
}

//////////////////// ACTORS PAGES ///////////////////////
export const getActor = (id:any) => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(fetchingActor())
            const responsive= await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${ApiKey}&language=en-US`)
            dispatch(fetchingActorSuccess(responsive.data.cast))
        } catch (e: any) {
            dispatch(fetchingActorError(e))
        }
    }
}

//////////////////// TRAILERS //////////////////////
// https://api.themoviedb.org/3/movie/${id}/videos?api_key=${key}&language=en-US
export const getTrailer = (id:any) => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(fetchingTrailers())
            const responsive= await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${ApiKey}&language=en-US`)
            dispatch(fetchingTrailersSuccess(responsive.data.results))
            console.log(responsive)
        } catch (e: any) {
            dispatch(fetchingTrailersError(e))
        }
    }
}


//////////////////// ACTORS INFO //////////////////
export const getActorsInfo = (id: any) => async (dispatch: AppDispatch) => {
    try {
        dispatch(fetchingActorsInfo())
        const url = await axios<IDetailPages>(`https://api.themoviedb.org/3/person/${id}?api_key=${ApiKey}&language=en-US`)
        const {data} = await url
       dispatch(fetchingActorsInfoSuccess(<IActorsInfo>data))
        // dispatch(fetchingActorsInfoSuccess((<IActorsInfo>data))
    } catch (e: any) {
        fetchingActorsInfoError(e.message)
    }
}