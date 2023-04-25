import {AppDispatch} from "./redux/store";
import {fetchingPopular, fetchingPopularError, fetchingPopularSuccess} from "./PopularSlice";
import axios from "axios";



export const fetchingPopulars = async (dispatch: AppDispatch) => {
    try {
        dispatch(fetchingPopular())
        const res = await axios('https://api.themoviedb.org/3/movie/popular?api_key=45d1d56fc54beedb6c0207f9ac6cab7c&language=en-US&page=1')
        dispatch(fetchingPopularSuccess(res.data.results))
    } catch (e: any) {
        dispatch(fetchingPopularError(e.message))
    }
}