import {AppDispatch} from "./redux/store";
import {fetchingPopular, fetchingPopularError, fetchingPopularSuccess,} from "./PopularSlice";
import {fetchingTopRated, fetchingTopRatedError, fetchingTopRatedSuccess} from "./TopRatedSlice"
import axios from "axios";
import {ApiKey} from "../ApiKey/ApiKey";
import {fetchingNowPlaying, fetchingNowPlayingError, fetchingNowPlayingSuccess} from "./NowPlayingSlice";



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
export const fetchingTopRatedS = async (dispatch: AppDispatch)=>{
    try{
        dispatch(fetchingTopRated())
        const res = await axios (`https://api.themoviedb.org/3/movie/top_rated?api_key=${ApiKey}&language=en-US&page=20`)
        dispatch(fetchingTopRatedSuccess(res.data.results))
    }catch (e: any){
        dispatch(fetchingTopRatedError(e.message))
    }
}

/////////////////// Now Playing ///////////////////
export const fetchingNowPlayingS = async (dispatch: AppDispatch)=>{
    try{
        dispatch(fetchingNowPlaying())
        const res = await axios (`https://api.themoviedb.org/3/movie/now_playing?api_key=${ApiKey}&language=en-US&page=10`)
        dispatch(fetchingNowPlayingSuccess(res.data.results))
    }catch (e: any){
        dispatch(fetchingNowPlayingError(e.message))
    }
}