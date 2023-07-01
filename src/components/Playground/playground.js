import React from "react";
import video from '../../images/starFields.mp4';
import Calculator from "./calculator";
import DynamicCard from "./playground_dynamicCard";

export default function Post(){

    return (
        <main className="min-h-screen from-c-black to-gray-700 block pb-10 ">
            <section className="container mx-auto block p-12">
                <h1 className="text-5xl flex justify-center text-white font-mono">My Playground</h1>
                <h2 className="text-lg text-gray-500 flex justify-center mb-12 mt-3 ">welcome to my playground page</h2>
            </section>

            <section className="showcase">
                <video src={video} autoPlay={true} loop={true} muted={true}></video>
                <h1 className="title text-center h-54 bg-black">PLAYGROUND</h1>
            </section>

            <br />
            <div className="flex">
                <Calculator />
                <DynamicCard />
            </div>
        </main>
    )
}