import React, {useState} from 'react';
import './App.css';
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import {Route, Routes} from "react-router-dom";
import Popular from "./pages/Popular/Popular";

function App() {
    return (
        <div>
            <Header/>
            <Routes>
                <Route path={"/popular"} element={<Popular/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
