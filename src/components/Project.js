import React, {useEffect, useState} from 'react';
import SanityClient from '../client.js';

export default function Project(){

    const [projectData, setProjectData] = useState(null);

    useEffect(() => {
        SanityClient.fetch(`*[_type == "project"]{
            title,
            date,
            place,
            description,
            projectType,
            link,
            tags,
            "projectImage": image.asset->url
        }`)
        .then((data) => setProjectData(data))
        .catch(console.error);
    }, []);

    return(
        <main className="min-h-screen p-12 bg-gradient-to-b from-c-black to-gray-700">
            <section className="container mx-auto ">
                <h1 className="text-5xl flex justify-center text-white font-mono ">My Project</h1>  {/*cursive*/}
                <h2 className="text-lg text-gray-800 flex justify-center mb-12 ">Welcome to my projects page</h2>
                <section className="grid md:grid-cols-2 gap-8 sm:grid-cols-1">

                    {projectData && projectData.map((project, index) => (
                        <article className="relative rounded-lg shadow-xl bg-white p-16">
                            <h3 className="text-gray-800 text-3xl fond-bold mb-2 hover:text-red-700">
                                <a href={project.link} alt={project.title} target="_blank" rel="noopener noreferrer">{project.title}</a>
                            </h3>
                            <div className="text-gray-500 text-xs space-x-4 ">                          
                                <span>
                                    <strong className="font-bold "> Finished on </strong>:{" "}
                                    {new Date(project.date).toLocaleDateString()}
                                </span>
                                <span>
                                    <strong className="font-bold">Company</strong>: {" "}
                                    {project.place}
                                </span>
                                <span>
                                    <strong className="font-bold">Type</strong>: {" "}
                                    {project.projectType}
                                </span>
                                <p className="my-6 text-lg text-gray-700 leading-relaxed">{project.description}</p>
                                <a href={project.link} rel="noopener noreferrer" target="_blank" className="text-red-500 font-bold text-2xl hover:underline hover:text-red-400">
                                    View the project{" "}
                                    <span aria-label="right pointer">
                                    👉  
                                    </span>
                                </a>
                            </div>
                        </article>
                    ))}
                </section>
            </section>
        </main>
    )
}

