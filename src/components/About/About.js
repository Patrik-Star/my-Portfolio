import React, { useState } from 'react';
import AboutTimelineCard from "./AboutTimelineCard";
import AboutSection from "./AboutSection";
import timelineData from "../../content/timelineData.json";
import profilePic from '../../images/ProfilePic.JPG';

export default function About() {

    const [Chrono, setChrono] = useState(true);
    // const [OrderArray, setOrderArray] = useState([]);

    // useEffect(() => {
    //     let tempOrderArray = [];
    //     timelineData.forEach((sectionElement) => {
    //         tempOrderArray.push((sectionElement.cards).length)
    //     });

    //     setOrderArray(tempOrderArray);
    // }, []);

    return (
        <main className="relative h-screen justify-center px-10">
            <div className="pt-10 lg:pt-20 mx-auto relative bg-c-black">
                <section className="bg-gray-200 rounded-lg shadow-2xl lg:flex p-10 md:p-20">
                    <img src={profilePic} alt="Patrik Profile" className="rounded mr-8 h-50 md:h-80" />
                    <div className="text-lg flex flex-col justify-center">
                        <h1 className="cursive text-6xl text-gray-700 mb-4">
                            Hey There. I'm <span className="text-yellow-400">Patrik</span>
                        </h1>
                        <div className="prose lg:prose-xl text-gray-800">
                            <p className="text-gray-800 mt-2"> A Full-stack software developer</p>
                        </div>
                    </div>
                </section>
            </div>
            <div className="w-full flex md:justify-end justify-center pb-10 md:pb-0 pt-3 ">
                <div className="shadow rounded-2xl flex p-1 relative items-center bg-gray-200">
                    <div className={`w-full rounded-xl flex justify-center ${Chrono ? 'bg-indigo-600 text-white' : 'bg-gray-300'}`}>
                        <button className='text-sm px-10 py-1' onClick={() => setChrono(true)}>Chronological</button>
                    </div>
                    <div className={`ml-1 w-full rounded-xl flex justify-center ${!Chrono ? 'bg-indigo-600 text-white' : 'bg-gray-300'}`}>
                        <button className='text-sm px-10 py-1' onClick={() => setChrono(false)}>Latest</button>
                    </div>

                </div>
            </div>

            <div className={`flex flex-col ${!Chrono && 'flex-col-reverse'}`}>
                {timelineData && timelineData.map((sectionElement, i) => (
                    <AboutSection 
                        subtitle={sectionElement.subtitle}
                        main={sectionElement.main}
                        body={sectionElement.body}
                        key={i}>
                        {/* Normal order */}
                        {sectionElement.cards && (Chrono) && sectionElement.cards.map((cardElement, k) => (
                            <AboutTimelineCard
                                date={cardElement.date}
                                title={cardElement.title}
                                body={cardElement.body}
                                key={k}
                                side={(k % 2 === 0)? "left" : "right"}
                            />
                        ))}
                        {/* Reverse cards within each section */}
                        {sectionElement.cards && (!Chrono) && sectionElement.cards.map((cardElement, j) => (
                            <AboutTimelineCard
                                date={cardElement.date}
                                title={cardElement.title}
                                body={cardElement.body}
                                key={j}
                                side={(j % 2 === 0) ? "left" : "right"}
                            />
                        )).reverse()}

                    </AboutSection>
                ))}
                

            </div>

        </main>
    )
}