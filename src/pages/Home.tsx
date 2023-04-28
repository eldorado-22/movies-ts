import React from 'react';
import "./home.scss";

const Home = () => {
    return (
        <section id="home">
            <div className="container">
                <div className="home">
                    <h1 className="text-5xl font-semibold pt-56 px-10">NICE AND FRIENDLY WORLD OF <br/>
                        WARCRAFT BOOSTING <br/>
                        SERVICE
                    </h1>
                    <div className="btn-group flex pl-10 py-10 ">
                        <button className="px-4 py-3 rounded-xl text-2xl bg-red-900 shadow-xl shadow-orange-500/50">Get Started</button>
                        <button className="mx-5 px-4 rounded-xl py-13 text-2xl bg-red-800 shadow-xl shadow-orange-500/50">Let's Go</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;