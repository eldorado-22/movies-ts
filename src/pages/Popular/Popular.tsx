import React, {useEffect, useState} from 'react';
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {useAppSelector} from "../../hooks/useAppSelector";
import {fetchingPopulars} from "../../Reducer/ActionCreators";
import {NavLink} from "react-router-dom";
import {MdSavedSearch} from "react-icons/md";

const Popular = () => {
    const dispatch = useAppDispatch()

    const {popular, error, loader} = useAppSelector(state => state.popularSlice)

    useEffect(() => {
        dispatch(fetchingPopulars)
    }, [])

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
            background: scroll > 50 ? '#b22222' : '',
            color: scroll > 50 ? '#000000' : ''
        }} id="popular">
            <div  className="container">
                <div className=" flex pl-10 ">
                    <input
                        type="text" className="w-[100%] rounded py-1.5 text-gray-500 p-4"
                        placeholder="Search Movies"/>
                    <MdSavedSearch className="text-4xl text-red-700 relative top-0 right-10"/>
                </div>

                <h1 style={{
                    color: scroll > 50 ? 'rgba(23,20,20,0.89)' : ''
                }} className="text-center pt-7 font-medium text-3xl">Welcome To <span>POPULAR</span></h1>
                <div className="popular basis-1/5 flex-wrap">
                    {
                        popular.map(el      => (
                            <div key={el.id} className="flex flex-col basis-1/4 px-5 py-8">
                                <NavLink to={`/detail-pages/${el.id}`}>
                                    <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${el.poster_path}`} width={300} alt="img"/>
                                </NavLink>
                                <div className="">
                                    <h1 style={{
                                        color: scroll > 50 ? '#000' : ''
                                    }} className="text-center py-2 font-semibold text-xl">{el.title}</h1>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Popular;