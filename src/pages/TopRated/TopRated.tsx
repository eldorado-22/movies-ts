import React, {useEffect} from 'react';
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {useAppSelector} from "../../hooks/useAppSelector";
import {fetchingTopRatedS} from "../../Reducer/ActionCreators";

const TopRated = () => {
    const dispatch = useAppDispatch()

    const {topRated, error, loader} = useAppSelector(state => state.TopRatedSlice)

    useEffect(() => {
        dispatch(fetchingTopRatedS)
    }, [])

    return (
       <div id="topRated">
           <div  className="container">
               <h1 className="text-center pt-7 font-medium text-3xl">Welcome To <span>Top Rated</span></h1>
               <div className="topRated basis-1/5">
                   {
                       topRated.map(el => (
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

export default TopRated;