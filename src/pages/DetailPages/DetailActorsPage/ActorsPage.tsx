import React, {useEffect} from 'react';
import "./style.scss";
import {IDetailActors} from "../../../Types/DetailMoviesTypes/DetailActorsPage/DetailActorsTypes";
import {useAppSelector} from "../../../hooks/useAppSelector";
import {useAppDispatch} from "../../../hooks/useAppDispatch";
import {Link, useParams} from "react-router-dom";
import {getActor, getDetailPages} from "../../../Reducer/ActionCreators";
import user from "./../../../images/user.png"
import {IoVideocam} from "react-icons/io5";

interface ICast {
    cast: IDetailActors[],
}

const ActorsPage = () => {
    const dispatch = useAppDispatch()
    const {actor, error, loader} = useAppSelector(state => state.actorsSlice)
    const {detail} = useAppSelector(state => state.DetailPagesSlice)

    const {movieId} = useParams()
    useEffect(() => {
        dispatch(getActor(movieId))
        dispatch(getDetailPages(movieId))

    }, [movieId])
    // console.log(actor)
    // console.log(movieId)

    return (
        <>
            <div id="actors">
                <div className="container">
                    <h1 className="text-white text-4xl font-extrabold py-10">В главных ролях</h1>
                    <div className="actors flex flex-nowrap overflow-x-auto">
                        {
                            actor.map(el => (
                                <div key={el.id} className="actors--img py-10">

                                    <div className="actors--img__group">
                                        <Link to={`/actor-info/${el.id}`}>
                                            {!el.profile_path ? <img src={user} alt="img" width="210px"/>
                                                :
                                                <img src={`https://image.tmdb.org/t/p/w138_and_h175_face${el.profile_path}`}
                                                     alt="img" className="actors--img__group"
                                                />
                                            }
                                        </Link>
                                        <IoVideocam className="text-center icons"/>
                                        <div className="actors--img__group--block"></div>
                                    </div>
                                    <h6 className="py-4 px-3 text-white text-2xl">{el.name}</h6>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

        </>
    );

};


export default ActorsPage;