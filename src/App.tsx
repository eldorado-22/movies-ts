import React, {useState} from 'react';
import './App.css';
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import {Route, Routes} from "react-router-dom";
import Popular from "./pages/Popular/Popular";
import Home from "./pages/Home";
import NowPlaying from "./pages/NowPlaying/NowPlaying";
import TopRated from "./pages/TopRated/TopRated";

function App() {
    return (
        <div>
            <Header/>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/popular"} element={<Popular/>}/>
                <Route path={"/now-playing"} element={<NowPlaying/>}/>
                <Route path={"/top-rated"} element={<TopRated/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
