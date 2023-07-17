import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import { useState, useEffect } from 'react';

export default function NavBar() {

    const [className, setClassName] = useState('')
    const [activeClassName, setActiveClassName] = useState('')

    const [mobileClassName, setMobileClassName] = useState('')
    const [mobileActiveClassName, setMobileActiveClassName] = useState('')

    const [isOpen, setIsOpen] = useState(false);
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }

    useEffect(() => {
        setClassName("inline-flex items-center text-yellow-400 hover:text-yellow-300 px-3")
        setActiveClassName("border-b border-yellow-500");

        setMobileClassName("border-b border-yellow-600 items-center text-yellow-400 hover:text-yellow-300 pl-3 py-8 bg-c-black");
        // setMobileClassName("bg-blue-500 w-full");
        setMobileActiveClassName("font-bold text-xl");
    }, [])

    return (
        <nav className="flex justify-between bg-c-black text-white w-screen border-b-2 border-gray-600 " >
            <div className="xl:px-12 flex w-full content-center md:items-center py-3 px-4 my-4 space-around justify-between ">
                    <div className="flex w-full content-center md:items-center">
                    <h1 className="text-3xl font-bold font-heading text-yellow-400 cursive tracking-widest">
                        Patrik
                    </h1>
                    {/* <!-- Nav Links --> */}
                    <ul className="hidden md:flex mx-auto font-semibold font-heading space-x-12">
                        <NavLink to="/"
                            exact
                            activeClassName={activeClassName}
                            className={className}>
                            Home
                        </NavLink>
                        <NavLink
                            to="/playground"
                            activeClassName={activeClassName}
                            className={className}>
                            myPlayground
                        </NavLink>
                        <NavLink
                            to="/project"
                            activeClassName={activeClassName}
                            className={className}>
                            Projects
                        </NavLink>
                        <NavLink
                            to="/about"
                            activeClassName={activeClassName}
                            className={className}>
                            My Story
                        </NavLink>
                    </ul>
                    <div className="inline-flex px-3">
                        <SocialIcon url="https://www.linkedin.com/in/patrik-bolander-2737aa1a4/" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 40, width: 40 }} />
                        <SocialIcon url="https://www.instagram.com/patrikbolander/" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 40, width: 40 }} />
                    </div>
                    </div>
                {/* <!-- Responsive navbar --> */}
                <div>
                    <button onClick={toggleDrawer}>
                        <div className="md:hidden space-y-2 pt-2">
                            <span className="block h-1 w-8 rounded bg-gray-400"></span>
                            <span className="block h-1 w-8 rounded bg-gray-400"></span>
                            <span className="block h-1 w-8 rounded bg-gray-400"></span>
                        </div>
                    </button>
                    {isOpen && <div className="">
                        <div className=" fixed top-0 right-0 z-40 h-screen bg-c-black w-80 ">
                            <h5 id="drawer-right-label" className="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                            </h5>
                            <button type="button" onClick={toggleDrawer} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 right-2.5 inline-flex items-center justify-center" >
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                                <span className="sr-only"></span>
                            </button>
                            <div class="flex flex-col">
                                <NavLink to="/"
                                    exact
                                    activeClassName={mobileActiveClassName}
                                    className={mobileClassName}
                                    onClick={toggleDrawer}>
                                    Home
                                </NavLink>
                                <NavLink to="/playground"
                                    exact
                                    activeClassName={mobileActiveClassName}
                                    className={mobileClassName}
                                    onClick={toggleDrawer}>
                                    myPlayground
                                </NavLink>
                                <NavLink to="/project"
                                    exact
                                    activeClassName={mobileActiveClassName}
                                    className={mobileClassName}
                                    onClick={toggleDrawer}>
                                    Projects
                                </NavLink>
                                <NavLink to="/about"
                                    exact
                                    activeClassName={mobileActiveClassName}
                                    className={mobileClassName}
                                    onClick={toggleDrawer}>
                                    My Story
                                </NavLink>
                            </div>
                        </div>
                        <div onClick={toggleDrawer} className="fixed top-0 left-0 z-30 h-screen bg-gray-900 opacity-75 w-full"></div>
                    </div>}
                </div>
            </div>
        </nav >
    )
}