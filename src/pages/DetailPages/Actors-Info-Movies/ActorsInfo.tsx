import React, {useEffect} from 'react';
import "./style.scss";
import {useAppDispatch} from "../../../hooks/useAppDispatch";
import {useParams} from "react-router-dom";
import {useAppSelector} from "../../../hooks/useAppSelector";
import {getActorsInfo} from "../../../Reducer/ActionCreators";
import {AiFillFacebook, AiFillLinkedin, AiFillYoutube} from "react-icons/ai";
import {BsInstagram} from "react-icons/bs";
import {SiTiktok} from "react-icons/si";


const ActorsInfo = () => {
    const {actorId} = useParams()
    const dispatch = useAppDispatch()
    const {actorsInfo, loader, error} = useAppSelector(state => state.ActorsInfoSlice)

    useEffect(() => {
        dispatch(getActorsInfo(actorId))
    }, [actorId])
    console.log(actorsInfo)

    return (
        <>
            {loader && <p>Loading...</p>}
            {error && <p>Error...</p>}
            <div id="info">
                <div className="container">
                    <div className="info flex justify-between">
                        <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${actorsInfo.profile_path}`}
                             alt="img"/>


                        <div>

                            <h1>{actorsInfo.name}</h1>
                            <div className="social flex gap-2 items-center text-center">
                                <a title="Welcome Instagram from Eldorado.JM"
                                   className="instagram text-2xl text-red-700"
                                   href="https://www.instagram.com/zhumashevv_996/">
                                    <BsInstagram/>
                                </a>
                                <a title="Welcome TikTok from Eldorado.JM" className="tiktok text-2xl "
                                   href="https://www.tiktok.com/@iamedya_996?lang=ru-RU">
                                    <SiTiktok/>
                                </a>
                                <a title="Welcome Linkedin from Eldorado.JM" className="linkedin text-3xl text-blue-600"
                                   href="https://www.linkedin.com/in/eldorado-jumashevv-51a792259/">
                                    <AiFillLinkedin/>
                                </a>
                                <a title="Welcome YouTube from Eldorado.JM"
                                   className="youtube text-3xl text-center text-red-700"
                                   href="https://www.youtube.com/channel/UCM4GdMSYh-zgfNwlY27vTgg">
                                    <AiFillYoutube/>
                                </a>
                                <a title="Welcome Facebook from Eldorado.JM" className="facebook text-3xl text-blue-800"
                                   href="https://www.facebook.com/eldoradojumashevv/">
                                    <AiFillFacebook/>
                                </a>

                            </div>
                            <h6><i>Биография</i></h6>
                            <i style={{color: "white"}}>{actorsInfo.biography}</i>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ActorsInfo;