import React, {useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";
import logo from "./../../images/loho.svg"

const Header = () => {
    // const [scroll, setScroll] = useState(0)
    //
    // const toScroll = () => {
    //     setScroll(window.scrollY)
    // }

    // useEffect(() => {
    //     window.addEventListener('scroll', toScroll)
    // }, [])
    // style={{
    //     background: scroll > 50 ? '#fff' : '',
    //         backdropFilter: "blur(10px)"
    // }}
    return (
        <header  id="header" className="header" >
            <div className="header">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <NavLink to="/"  className="flex items-center">
                        <img src={logo} className="h-8 mr-3" alt="Flowbite Logo"/>
                        {/*<span*/}
                        {/*    className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Movies TV*/}
                        {/*</span>*/}
                    </NavLink>
                    <div className="flex md:order-2">
                        <button type="button"
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Sign In
                        </button>
                        <button type="button"
                                className="mx-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-red-800 dark:hover:bg-red-700 dark:focus:ring-white">
                            Dark
                        </button>
                    </div>

                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4   md:flex-row md:space-x-8 md:mt-0">
                        <NavLink to={"/"}
                                 className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-red-600 md:p-0 md:dark:text-red-600"
                                 aria-current="page">Home
                        </NavLink>
                        <NavLink to={"/popular"}
                                 className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-red-600 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                 aria-current="page">Popular
                        </NavLink>
                        <NavLink to={"/top-rated"}
                                 className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-red-600 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                            Top Rated
                        </NavLink>
                        <NavLink to={"/now-playing"}
                                 className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-red-600 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                            Now Playing
                        </NavLink>
                    </ul>
                </div>
            </div>


        </header>
    );
};

export default Header;