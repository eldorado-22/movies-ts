import React, {useEffect, useState} from 'react';
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {useAppSelector} from "../../hooks/useAppSelector";
import {fetchingTopRatedS} from "../../Reducer/ActionCreators";
import {NavLink} from "react-router-dom";
import {MdSavedSearch} from "react-icons/md";

const TopRated = () => {
    const dispatch = useAppDispatch()

    const {topRated, error, loader} = useAppSelector(state => state.TopRatedSlice)

    useEffect(() => {
        dispatch(fetchingTopRatedS)
    }, [])
    console.log(topRated)


    ///////////// SCROLL WINDOW ////////
    const [scroll, setScroll] = useState(0)

    const toScroll = () => {
        setScroll(window.scrollY)
    }

    useEffect(() => {
        window.addEventListener('scroll', toScroll)
    }, [])


    return (
        <div style={{
            background: scroll > 50 ? '#6103ad' : '',
            backdropFilter: "blur(10px)",
        }} id="topRated">
            <div className="container">
                <div className=" flex pl-10">
                    <input
                        type="text" className="w-[100%] rounded py-1.5 text-gray-500 p-4"
                        placeholder="Search Movies"/>
                    <MdSavedSearch className="text-4xl text-red-700 relative top-0 right-10"/>
                </div>
                <h1 style={{
                    color: scroll > 50 ? 'rgba(23,20,20,0.89)' : ''
                }} className="text-center pt-7 font-medium text-3xl">Welcome To <span>Top Rated</span></h1>
                <div className="topRated basis-2/5 flex-wrap">
                    {
                        topRated.map(el => (
                            <div className="flex flex-col basis-1/4 px-5 py-8">
                                <NavLink to={`/detail-pages/${el.id}`}>
                                    <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${el.poster_path}`}
                                         alt="img" width={300}/>
                                </NavLink>

                                <div className="">
                                    <h1 style={{
                                        color: scroll > 50 ? '#ffce03' : ''
                                    }} className="pl-1 py-2 font-semibold text-center text-xl">{el.title}</h1>
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