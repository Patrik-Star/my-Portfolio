import React, {useEffect, useState} from 'react';
import projectData from '../content/ProjectsData.json';

export default function Project(){

    return(
        <main className="min-h-screen p-12 bg-gradient-to-b from-c-black to-gray-700">
            <section className="container mx-auto ">
                <h1 className="text-5xl flex justify-center text-white font-mono ">My Projects</h1>  {/*cursive*/}
                <h2 className="text-lg text-gray-500 flex justify-center mb-12 mt-3 ">Welcome to my projects page</h2>
                <section className="grid md:grid-cols-2 gap-8 sm:grid-cols-1">

                    {projectData && projectData.map((project, index) => (
                        <article className={`relative rounded-2xl shadow-xl bg-white p-7 ${project.place.includes("Datacom") ? "rounded-3xl border-8 border-c-datacom-blue border-double ": ""}`}>
                            <h3 className="text-gray-800 text-3xl fond-bold mb-2 hover:text-red-700">
                                <a href={project.link} alt={project.title} target="_blank" rel="noopener noreferrer">{project.title}</a>
                            </h3>
                            <div className="text-gray-500 text-xs">                          
                                <span>
                                    <strong className="font-bold "> Finished on </strong>:{" "}
                                    {project.date}{" "}
                                </span>
                                <span>
                                    <strong className="font-bold">Place</strong>: {" "}
                                    {project.place}{" "}
                                </span>
                                <span>
                                    <strong className="font-bold">Type</strong>: {" "}
                                    {project.projectType}
                                </span>
                                <p className="my-6 text-lg text-gray-700 leading-relaxed">{project.body}</p>
                                <a href={project.link} rel="noopener noreferrer" target="_blank" className="text-red-500 font-bold text-xl hover:underline hover:text-red-400">
                                    View the project{" "}
                                    <span aria-label="right pointer">
                                    👉  
                                    </span>
                                </a>
                                <div class="justify-left my-8 select-none flex">
                                    {project.tags && project.tags.map((tag, index) => (
                                        <div class="py-2 px-4 shadow-md rounded-full bg-gray-100 text-gray-700 font-mono text-xs mr-2">
                                            {tag}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </article>
                    ))}
                </section>
            </section>
        </main>
    )
}

