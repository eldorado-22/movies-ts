import React, {useState} from 'react';
import './App.css';
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import {Route, Routes} from "react-router-dom";
import Popular from "./pages/Popular/Popular";
import Home from "./pages/Home";
import NowPlaying from "./pages/NowPlaying/NowPlaying";
import TopRated from "./pages/TopRated/TopRated";
import DetailPages from "./pages/DetailPages/DetailPages";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ActorsPages from "./pages/DetailPages/DetailActorsPage/ActorsPage";


function App() {

    return (
        <div>
            <Header/>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/popular"} element={<Popular/>}/>
                <Route path={"/now-playing"} element={<NowPlaying/>}/>
                <Route path={"/top-rated"} element={<TopRated/>}/>
                <Route path={"/detail-pages/:movieId"} element={<DetailPages/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
