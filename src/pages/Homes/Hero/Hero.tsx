import React from 'react';
import "./home.scss";
import {MdSavedSearch} from "react-icons/md";
import home from "../../../images/home.svg"

const Hero = () => {
    return (
        <section id="home">
            <div className="container">
                <div className="home">
                    <div className=" flex pl-10 py-10">
                        <input type="text" className="w-[100%] rounded py-1.5 text-gray-500 p-4"
                                placeholder="Search Movies"/>
                        <MdSavedSearch className="text-4xl text-red-700 relative top-0 right-10"/>
                    </div>

                    <div className="btn-group flex pl-10 py-10 ">
                        <button className="px-4 py-3 rounded-xl text-2xl bg-red-900 shadow-xl shadow-orange-500/50">Get Started</button>
                    </div>
                    <div className="home--images  py-10 gap-6">
                        <img src={home} alt="img"/>
                        <img
                            src="https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/lBX2EklMBEK5I0OIJWVJFr3DtmS.jpg"
                            alt="img"/>
                        <img
                            src="https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/5i6SjyDbDWqyun8klUuCxrlFbyw.jpg"
                            alt="img"/>
                        <img
                            src="https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/sx9AV4zhzAwS9XIcRh5f9GFzXS9.jpg"
                            alt="img"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;