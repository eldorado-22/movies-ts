import React, {useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";
import logo from "./../../images/loho.svg"
import "./header.scss";

// interface IProps{
//     getDark: any,
//     dark: any
// }


const Header = () => {
    const [scroll, setScroll] = useState(0)
    const [signIn, setSignIn] = useState(false)

    const toScroll = () => {
        setScroll(window.scrollY)
    }

    useEffect(() => {
        window.addEventListener('scroll', toScroll)
    }, [])

    return (
        <header style={{
            background: scroll > 50 ? '#3f2500' : '',
            backdropFilter: "blur(10px)"
        }} id="header" className="header">
            <div className="header">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <NavLink to="/" className="flex items-center">
                        <img src={logo} className="h-8 mr-3" alt="Flowbite Logo"/>
                        {/*<span*/}
                        {/*    className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Movies TV*/}
                        {/*</span>*/}
                    </NavLink>

                    <div className="flex md:order-2">
                        <div style={{display: signIn === true ? "block" : "none"}}
                             className="header--signIn w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                            <form className="space-y-6 " action="#">
                                <div className="header--signIn__esc ">
                                    <h5 className="text-xl font-medium text-gray-900 dark:text-white">
                                        Sign in to our platform
                                    </h5>
                                    <button className="esc" onClick={() => setSignIn(false)}>&times;</button>
                                </div>
                                <div>
                                    <label htmlFor="email"
                                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Your email
                                    </label>
                                    <input type="email" name="email" id="email"
                                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                           placeholder="name@company.com" required/>
                                </div>
                                <div>
                                    <label htmlFor="password"
                                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                                        password
                                    </label>
                                    <input type="password" name="password" id="password" placeholder="••••••••"
                                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                           required
                                    />
                                </div>
                                <div className="flex items-start">
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input id="remember" type="checkbox" value=""
                                                   className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                                                   required
                                            />
                                        </div>
                                        <label htmlFor="remember"
                                               className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                            Remember me
                                        </label>
                                    </div>
                                    <a href="#"
                                       className="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500">Lost
                                        Password?</a>
                                </div>
                                <button type="submit"
                                        className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login
                                    to your account
                                </button>
                                <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                                    Not registered?
                                    <a href="#"
                                       className="text-blue-700 hover:underline dark:text-blue-500">
                                        Create account
                                    </a>
                                </div>
                            </form>
                        </div>
                        <button onClick={() => setSignIn(true)} className="header--btnOne">Sign In</button>

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