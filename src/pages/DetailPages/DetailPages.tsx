import React, {useEffect} from 'react';
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {useAppSelector} from "../../hooks/useAppSelector";
import {useParams} from "react-router-dom";
import {getDetailPages} from "../../Reducer/ActionCreators";


const DetailPages = () => {
    const dispatch = useAppDispatch()
    const {movieId} = useParams()
    const {detail, error, loader} = useAppSelector(state => state.DetailPagesSlice)


    useEffect(() => {
        dispatch(getDetailPages(movieId))
    },[movieId])

    console.log(detail)


    return (
      <>
          {loader && <p>Loading...</p>}
          {error && <p>Error...</p>}
          <div className="detailPages">
              <div className="container">
                  <div className="detaillPages flex py-20 px-10">
                      <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${detail.poster_path}`} alt=""/>
                      <div className="detailPages--text px-10 ">
                          <h1 className="text text-3xl font-medium text-center ">{detail.title}
                              <span className="text-gray-400"> ({detail.release_date})</span>
                          </h1>
                          <h3 className="py-3 bg-green text-xl text-white  font-medium">{detail.vote_average}%</h3>
                      </div>
                  </div>
              </div>
          </div>
      </>
    );
};

export default DetailPages;