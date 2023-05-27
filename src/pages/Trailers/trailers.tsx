import React, {useEffect} from 'react';
import "./trailers.scss";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {useAppSelector} from "../../hooks/useAppSelector";
import {useParams} from "react-router-dom";
import {getActor, getDetailPages, getTrailer} from "../../Reducer/ActionCreators";
import {fetchTrailers} from "../../Reducer/TrailerSlice";

const Trailers = () => {
    const dispatch = useAppDispatch()
    const { trailers,loader,error} = useAppSelector(state => state.fetchTrailers)
    // const {trailers} = useAppSelector(state => state.fetchTrailers)

    const {movieId} = useParams()
    useEffect(() => {
        dispatch(getTrailer(movieId))
        dispatch(getDetailPages(movieId))
    }, [movieId])

    console.log(trailers)
    console.log(movieId)
    return (
        <div id="trailers" className="py-20">
            <div className="container">
                <div className="trailers flex overflow-x-auto py-6">
                    {
                        trailers.map((el) => (
                            <div className="trailers--group">
                                <iframe className="px-5 trailers--group__videos transition " width="560" height="300"
                                        src={`https://www.youtube.com/embed/${el.id}`}
                                        title="YouTube video player" frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen>
                                </iframe>
                                <div className="trailers--group__col"></div>
                                <h3 className="text-white text-xl py-5 text-center">{el.name}</h3>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Trailers;