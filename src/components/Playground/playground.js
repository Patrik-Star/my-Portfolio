import React from "react";
import Calculator from "./calculator";
// import DynamicCard from "./playground_dynamicCard";
// import Animation from "./animation";

export default function Post() {

    return (
        <main className="min-h-screen from-c-black to-gray-700 block p-10 ">
            <section className="mx-auto p-12 block justify-center">
                <h1 className="text-5xl flex justify-center text-white font-mono">My Playground</h1>
                <h2 className="text-lg text-gray-500 flex justify-center mt-3">welcome to my playground page</h2>
                <h2 className="text-lg text-gray-500 flex justify-center mb-12 ">This is my showcase of cool Reactjs Components</h2>
            </section>

            <br />
            <div className="block md:flex mx-1 md:mx-5 ">
                <Calculator />
                {/* <DynamicCard /> */}
            </div>
            {/* <div className="w-full flex flex-row justify-between">
                <Animation />
            </div> */}
        </main>
    )
}