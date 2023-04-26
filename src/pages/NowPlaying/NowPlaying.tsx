import React, {useEffect} from 'react';
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {useAppSelector} from "../../hooks/useAppSelector";
import {fetchingNowPlayingS} from "../../Reducer/ActionCreators";

const NowPlaying = () => {
    const dispatch = useAppDispatch()

    const {nowPlaying, error, loader} = useAppSelector(state => state.NowPlayingSlice)

    useEffect(() => {
        dispatch(fetchingNowPlayingS)
    }, [])

    return (
     <div id="nowPlaying">
         <div className="container">
             <h1 className="text-center pt-7 font-medium text-3xl">Welcome To <span>Now Playing</span></h1>
             <div className="topRated basis-1/5">
                 {
                     nowPlaying.map(el => (
                         <div className="flex flex-col basis-1/4 px-5 py-8">
                             <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${el.poster_path}`} alt="img"/>
                             <div className="">
                                 <h1 className="text-center py-2 font-semibold text-xl">{el.title}</h1>
                             </div>
                         </div>
                     ))
                 }
             </div>
         </div>
     </div>
    );
};

export default NowPlaying;