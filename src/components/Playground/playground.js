import React from "react";
// import video from '../../images/starFields.mp4';
import Calculator from "./calculator";
import DynamicCard from "./playground_dynamicCard";
import Animation from "./animation";

export default function Post() {

    return (
        <main className="min-h-screen from-c-black to-gray-700 block p-10 ">
            <section className="container mx-auto block p-12">
                <h1 className="text-5xl flex justify-center text-white font-mono">My Playground</h1>
                <h2 className="text-lg text-gray-500 flex justify-center mt-3">welcome to my playground page</h2>
                <h2 className="text-lg text-gray-500 flex justify-center mb-12 ">This is my showcase of cool Reactjs Components</h2>
            </section>

            {/* <section className="showcase w-full">
                <video src={video} autoPlay={true} loop={true} muted={true}></video>
                <h1 className="title text-center h-54 bg-black">PLAYGROUND</h1>
            </section> */}

            <br />
            <div className="block md:flex mx-5 ">
                <Calculator />
                <DynamicCard />
                <Animation />
            </div>
        </main>
    )
}