import React from 'react';
import AboutTimelineCard from "./AboutTimelineCard";
import AboutSection from "./AboutSection";

import profilePic from '../../images/ProfilePic.JPG';

export default function About() {

    return (
        <main className="relative h-screen bg-red-500">
            <div className="p-10 lg:pt-20 mx-auto relative bg-c-black">
                <section className="bg-gray-200 rounded-lg shadow-2xl lg:flex p-20 mb-5">
                    <img loading='lazy' src={profilePic} alt="Patrik Profile" className="rounded mr-8 w-auto h-80" />
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

            <AboutSection
                subtitle="high school"
                main="My spark for ICT"
                body="Went to Rangitoto college from years 9-13. ">
                <AboutTimelineCard
                    date="years 10-13"
                    title="ICT"
                    body="Learnt the fundementals of website development, which was just HTML and CSS. I learnt to make responsive websites using CSS and media queries."
                    side="left"
                />
                <AboutTimelineCard
                    date="years 10-13"
                    title="Programming"
                    body="Believe it or not, my high school had 2 seperate IT related classes. Where ICT was only around html, css and website design, Programming was about Python and algorithms. This is where I learnt Python for the first time! learning the basics such as arrays, functions, classes and Objected Oriented Programming (OOP)."
                    side="right"
                />

            </AboutSection>

            <AboutSection
                subtitle="Auckland University"
                main="Time to get a degree"
                body="Went to the univerity of Auckland, studying towards a bachalors of Computer Science.">
                <AboutTimelineCard
                    date="1st year"
                    title="Compsci 101"
                    body=""
                    side="left"
                />

                <AboutTimelineCard
                    date="2nd year"
                    title="Lots of Theory!"
                    body=""
                    side="right"
                />

                <AboutTimelineCard
                    date="3rd year"
                    title="branching out to infosys"
                    body=""
                    side="left"
                />
            </AboutSection>

            <AboutSection
                subtitle="Internship at Appworx"
                main="My first job"
                body="Finally! my first software devlopement job.">
                <AboutTimelineCard
                    date="2019"
                    title="Swift time!"
                    body=""
                    side="right"
                />

                <AboutTimelineCard
                    date="2019"
                    title="UI critical thinking"
                    body=""
                    side="left"
                />

                <AboutTimelineCard
                    date="2019"
                    title="Push notifications"
                    body=""
                    side="right"
                />
                <AboutTimelineCard
                    date="2019"
                    title="The apple way"
                    body=""
                    side="left"
                />
                <AboutTimelineCard
                    date="2019"
                    title="making this website"
                    body=""
                    side="right"
                />
            </AboutSection>

            <AboutSection
                subtitle="Datacom"
                main="Time to learn everything!"
                body="welcome to being a software developer in the largest software development company in New Zealand.">
                <AboutTimelineCard
                    date="2021"
                    title="Oribit aws cdk"
                    body=""
                    side="left"
                />
                <AboutTimelineCard
                    date="2021"
                    title="being on the bench"
                    body=""
                    side="right"
                />
                <AboutTimelineCard
                    date="2021"
                    title="Wise"
                    body=""
                    side="left"
                />
                <AboutTimelineCard
                    date="2021"
                    title="DJMIA"
                    body=""
                    side="right"
                />
                <AboutTimelineCard
                    date="2021"
                    title="going to IAG - carbon offset"
                    body=""
                    side="left"
                />
            </AboutSection>

        </main>
    )
}