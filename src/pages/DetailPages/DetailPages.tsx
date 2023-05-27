import React, {useEffect} from 'react';
import "./detaliM.scss";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {useAppSelector} from "../../hooks/useAppSelector";
import {useParams} from "react-router-dom";
import {getActor, getDetailPages} from "../../Reducer/ActionCreators";
import {FaListUl} from "react-icons/fa";
import {FiStar} from "react-icons/fi";
import {BsFillSuitHeartFill} from "react-icons/bs";
import {AiOutlineFullscreen} from "react-icons/ai";
import ActorsPage from "./DetailActorsPage/ActorsPage";
import Trailers from "../Trailers/trailers";


const DetailPages = () => {

    const dispatch = useAppDispatch()
    const {movieId} = useParams()
    const {detail, error, loader} = useAppSelector(state => state.DetailPagesSlice)


    useEffect(() => {
        dispatch(getDetailPages(movieId))
        dispatch(getActor(movieId))
    }, [movieId])

    console.log(detail)


    return (
        <>
            {loader && <p>Loading...</p>}
            {error && <p>Error...</p>}
            <div style={{
                background: `url("https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${detail.backdrop_path}")no-repeat center/cover`
            }} id="detailPages">
                <div className="container">
                    <div className="detailPages flex items-start py-28 px-10">

                        <div className="detailPages--images w-[100%]">
                            <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${detail.poster_path}`}
                                 alt="img"/>
                            <div className="detailPages--images__text">
                                <h2 className="textTwo text-gray-400 text-xl text-center flex items-center">
                                    <AiOutlineFullscreen className="pr-1 text-3xl text-white"/> Расширить
                                </h2>
                            </div>
                        </div>

                        <div className="detailPages--text px-10 ">
                            <h1 className="text text-3xl font-medium ">{detail.title}
                                <span className="text-gray-400"> ({detail.release_date})</span>
                            </h1>
                            <ul className="detailPages--text__rain flex items-center ">
                                <a href="#">
                                    <h3 className="py-6  bg-green text-xl text-white  font-medium">{detail.vote_average} %</h3>
                                </a>
                                <a href="#" title="Войти для создания и правки своих списков"
                                   className="list text-white">
                                    <FaListUl/>
                                </a>
                                <a href="#" title="Войти для добавления этого фильма в свой список избранных"
                                   className="heart text-white ">
                                    <BsFillSuitHeartFill/>
                                </a>
                                <a href="#" title="Войти для для оценки этого фильма" className="star text-white">
                                    <FiStar/>
                                </a>
                            </ul>
                            <i className="text-gray-300 text-xl ">{detail.tagline}</i>

                            <div className="pt-2">
                                <h2 className="text-white text-3xl font-semibold py-3">Обзор</h2>
                                <p className="text text-white text-xl">{detail.overview}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ActorsPage/>
            <Trailers/>

        </>
    );
};

export default DetailPages;