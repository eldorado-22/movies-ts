import React, {useEffect} from 'react';
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {useAppSelector} from "../../hooks/useAppSelector";
import {fetchingPopulars} from "../../Reducer/ActionCreators";
import {NavLink} from "react-router-dom";

const Popular = () => {
    const dispatch = useAppDispatch()

    const {popular, error, loader} = useAppSelector(state => state.popularSlice)

    useEffect(() => {
        dispatch(fetchingPopulars)
    }, [])



    return (
        <div id="popular">
            <div  className="container">
                <h1 className="text-center pt-7 font-medium text-3xl">Welcome To <span>POPULAR</span></h1>
                <div className="popular basis-1/5 flex-wrap">
                    {
                        popular.map(el      => (
                            <div key={el.id} className="flex flex-col basis-1/4 px-5 py-8">
                                <NavLink to={`/detail-pages/${el.id}`}>
                                    <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${el.poster_path}`} width={300} alt="img"/>
                                </NavLink>
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

export default Popular;