import React from "react";
import profilePic from '../images/ProfilePic.JPG';

export default function About(){ 

    return (
       <main className="relative h-screen bg-gray-200">
           {/* <img src={image} alt="Background" className="absolute w-full" /> */}
           <div className="p-10 lg:pt-20 mx-auto relative bg-c-black">
               <section className="bg-green-800 rounded-lg shadow-2xl lg:flex p-20 mb-32">
                   <img src={profilePic} alt="Patrik Profile" className="rounded mr-8 w-auto h-80" />
                   <div className="text-lg flex flex-col justify-center">
                       <h1 className="cursive text-6xl text-green-600 mb-4">
                           Hey There. I'm <span className="text-green-100">Patrik</span>
                       </h1>
                       <div className="prose lg:prose-xl text-white">
                       <p> Computer Science Graduate from the University of Auckland. </p>
                       </div>
                   </div>
               </section>
           </div>

           <div className=" w-screen text-center h-24 pt-5">
               <h1 className=" font-medium text-6xl italic text-gray-600"  >More Coming soon!</h1>
           </div>
           
       </main>
    )
}