import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import wireframeScreenshot from '../../images/wireframeScreenshot.png';
import figmaScreenshot from '../../images/figma.png';
import XDScreenshot from '../../images/adobeXDLogo.png';

import ReachScreenshot from '../../images/Reach_iPhone11.png';
import xcodeLogo from '../../images/xcodeLogo.png';
import swiftLogo from '../../images/swiftLogo.png';
import postmanLogo from '../../images/postmanLogo.png';

import reactLogo from '../../images/reactLogo.png';
import TypescriptLogo from '../../images/typescriptLogo.png';
import tailwindcssLogo from '../../images/tailwindcssLogo.png';

import ToolCard from './ToolCard';

const paragraphs = {
    ios: `During my last year of university, I did an internship at Appworx where I was responsible for making an iPhone iOS app called Reach!
    I thoroughly enjoyed working at Appworx part time as I continued my computer science degree at university. During this time I mainly used Swift and the UIKit framework to develop the UI components of the app. This app was different to most other apps whereby it used push notifications as the core function of the app, which made it one of the most challenging, but equally rewarding parts in developing this iOS app.
    
    While learning iOS development I also learnt topics such as database management, mySQL and RESTful API's. This was through working closely with the backend developer who made the database and API before I started my internship.
    I was exposed to these topics as the iOS app I was developing was highly dependent on doing GET and POSTS requests to his RESTful API and to his database.
    `,
    uiDesign: `I've always been facinated with UI design and User Experience.
    I took a very enjoyable course at the University of Auckland, where I learnt useful knowledge such as colour theory, nielsen's heuristics, user experience and design rules that can be applied to any user interface.

    I then used this knowledge to inform my design desicions for my iOS internship. However, the Reach! app didnt have a complex UI, so it didn't allow me to showcase my UI techniques and knowledge.
    I always love a challenge and always want to find ways to challenge my UI design skills.
    `,
    fullStack: `During my time at Datacom, ive been able to learn and understand what it takes to be a full stack developer. Learning frontend technologies such as Reactjs with Typescript and tailwindcss, and backend technologies such as Nodejs, Java springboot and a range of database technologies, and being able to incorporate them together into a full fledged web application.
    
    Ive also been exposed to the range of services AWS has to offer. Deploying infrastructure to AWS by writing Typescript to declare resources such as Lambda Functions, SNS, SQS, DynamoDB Tables, IAM roles, Security groups, and NACL's just to name a few. 
    `
}

function HomeWhatIDo() {

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const cardCSS = "bg-gray-100 rounded-lg p-3 lg:p-8 text-center col-span-1 lg:col-span-2 justify-center items-center"

    return (
        <div className="bg-c-black w-full justify-center flex border-t-2 border-gray-600 pb-10">
            <div className="container bg-c-black h-auto flex flex-col items-center justify-center">

                <h1 className="text-5xl font-bold text-white py-10">What I Do</h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 w-full px-4 lg:px-10">


                    <div data-aos="fade-right" className={cardCSS}>{/** CARD */}
                        <h1 className="text-3xl font-bold">Full Stack Development</h1>
                        <div className="grid bg-gray-100 grid-cols-5 ">

                            <div className="cols-span-1 col-start-1">
                                <ToolCard image={reactLogo} name="React" className='mb-2'/>
                                <ToolCard image={TypescriptLogo} name="Typescript" className='mb-2' />
                                <ToolCard image={tailwindcssLogo} name="Tailwindcss" className='mb-2' />
                            </div>

                            <div className="bg-white p-2 rounded col-start-2 col-span-4">
                                <p className=" text-left p-2 text-gray-700" style={{ whiteSpace: 'pre-line' }}> {paragraphs.fullStack}</p>
                            </div>
                        </div>
                    </div>

                    <div data-aos="fade-left" className={`${cardCSS} lg:col-start-2`} > {/** CARD */}
                        <h1 className="text-3xl font-bold">iPhone iOS Development</h1>

                        <div className="grid bg-gray-100 grid-cols-5 gap-5 p-1 md:p-5 ">
                            <div className="bg-gray-100 p-2 rounded row-span-3 md:row-span-4 col-span-2 flex justify-center ">
                                <img loading='lazy' src={ReachScreenshot} alt="" className="w-full object-contain" />
                            </div>
                            <ToolCard image={swiftLogo} name="swift" />
                            <ToolCard image={xcodeLogo} name="xCode" />
                            <ToolCard image={postmanLogo} name="Postman" />

                            <div className="bg-white p-2 rounded col-span-5 md:col-span-3 row-span-3">
                                <p className=" text-left p-2 text-gray-700" style={{ whiteSpace: 'pre-line' }}> {paragraphs.ios}</p>
                            </div>

                        </div>
                    </div>

                    <div data-aos="fade-right" className={cardCSS}>{/** CARD */}
                        <h1 className="text-3xl font-bold">UI design</h1>
                        <div className="grid bg-gray-100 grid-cols-4 gap-5 p-1 md:p-5">
                            <div className="bg-gray-200 rounded-xl col-span-3 row-span-2 p-1 ">
                                <img loading='lazy' src={wireframeScreenshot} alt="Patrik's figma wireframe" />
                            </div>
                            <div className="rounded"> <img loading='lazy' src={figmaScreenshot} alt="figma logo" /></div>
                            <div className="rounded"><img loading='lazy' src={XDScreenshot} alt="adobeXD logo" /></div>

                            <div className="bg-white p-2 rounded col-span-4">
                                <p className=" text-left p-2 text-gray-700" style={{ whiteSpace: 'pre-line' }}> {paragraphs.uiDesign} </p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default HomeWhatIDo;