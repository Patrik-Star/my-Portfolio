import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar(){
    return (
        <header className="bg-c-black shadow-xl border-b-2 border-gray-700 w-full ">
            <div className="container mx-auto flex justify-between ">
                <nav className="flex">
                    <NavLink to="/" 
                    exact
                    activeClassName="text-white" 
                    className="inline-flex items-center py-6 px-3 mr-4 text-yellow-400 hover:text-yellow-300 text-4xl font-bold cursive tracking-widest"> 
                        Patrik
                    </NavLink>
                    <NavLink 
                    to="/playground" 
                    activeClassName="text-white bg-gray-600"
                    className="inline-flex items-center py-3 px-3 my-6 rounded text-yellow-400 hover:text-yellow-300">
                        myPlayground
                    </NavLink>
                    <NavLink 
                    to="/project" 
                    activeClassName="text-white bg-gray-600"
                    className="inline-flex items-center py-3 px-3 my-6 rounded text-yellow-400 hover:text-yellow-300">
                        Projects
                    </NavLink>
                    <NavLink 
                    to="/about" 
                    activeClassName="text-white bg-gray-600"
                    className="inline-flex items-center py-3 px-3 my-6 rounded text-yellow-400 hover:text-yellow-300">
                        My Story
                    </NavLink>
                </nav>
                <div className="inline-flex py-3 px-3 my-6 invisible sm:visible">
                    <SocialIcon url="https://www.linkedin.com/in/patrik-bolander-2737aa1a4/" className="mr-4" target="_blank" fgColor="#fff" style={{height: 40, width: 40}} />
                    <SocialIcon url="https://www.instagram.com/patrikbolander/" className="mr-4" target="_blank" fgColor="#fff" style={{height: 40, width: 40}} />
                </div>
            </div>
        </header>
    )
}