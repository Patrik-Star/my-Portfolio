import React, {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
// import WireframeCarousel from './WireframeCarousel';

import ReachScreenshot from '../images/Reach iPhone11.png';
import wireframeScreenshot from '../images/wireframeScreenshot.png';
import figmaScreenshot from '../images/figma.png';
import XDScreenshot from '../images/adobeXDLogo.png';
import xcodeLogo from '../images/xcodeLogo.png';
import swiftLogo from '../images/swiftLogo.png';
import postmanLogo from '../images/postmanLogo.png';

const paragraphs = {
    ios: `During my last year of university, I did an internship at Appworx where I was responsible for making an iPhone iOS app called Reach!
    I thoroughly enjoyed working at Appworx part time as I continued my computer science degree at university. During this time I mainly used Swift and the UIKit framework to develop the UI components of the app. This app was different to most other apps whereby it used push notifications as the core function of the app, which made it one of the most challenging, but equally rewarding parts in developing this iOS app.
    
    While learning iOS development I also learnt topics such as database management, mySQL and RESTful API's. This was through working closely with the backend developer who made the database and API before I started my internship.
    I was exposed to these topics as the iOS app I was developing was highly dependent on doing GET and POSTS requests to his RESTful API and to his database.
    `,
    uiDesign: `I've always been facinated with UI design and User Experience.
    I took a very enjoyable course at the University of Auckland, where I learnt useful knowledge such as colour theory,
    nielsen's heuristics, user experience and design rules that can be applied to any user interface.

    I then used this knowledge to inform my design desicions for my iOS internship. However, the Reach! app didnt have a complex UI, so it didn't allow me to showcase my UI techniques and knowledge.
    I always love a challenge and always want to find ways to challenge my UI design skills.
    `,
    webDev: ""
}

function HomeWhatIDo() {

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className="bg-c-black w-full justify-center flex border-t-2 border-gray-600 pb-10">
            <div className="container bg-c-black h-auto flex flex-col items-center justify-center">

                <h1 className="text-5xl font-bold text-white py-10">What I Do</h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full px-10 sm:px-0">
                    <div data-aos="fade-right" className="bg-gray-100 rounded-lg p-8 text-center md:col-span-2 justify-center items-center" > {/** CARD */}
                        <h1 className="text-3xl font-bold">iPhone iOS Development</h1>
                        <div className="grid bg-gray-100 grid-cols-5 gap-5 p-5 "> 
                            <div className="bg-gray-100 p-2 rounded row-span-4 col-span-2 flex justify-center">
                                <img src={ReachScreenshot} alt="" className="w-full" />
                            </div>
                            
                            <div className="bg-white rounded" style={{
                                backgroundImage: `url(${swiftLogo})`,
                                backgroundPosition: 'center',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat'
                                }}>
                                <div className="w-full h-full bg-gradient-to-t from-gray-700 to-transparent align-bottom flex flex-wrap justify-center content-end rounded p-10">
                                    <h2 className=" text-2xl text-white -mb-10"> Swift</h2>
                                </div>
                            </div>
                            
                            <div className="bg-white rounded" style={{
                                backgroundImage: `url(${xcodeLogo})`,
                                backgroundPosition: 'center',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat'
                                }}>
                                <div className="w-full h-full bg-gradient-to-t from-gray-700 to-transparent align-bottom flex flex-wrap justify-center content-end rounded p-10">
                                    <h2 className=" text-2xl text-white -mb-10"> xCode</h2>
                                </div>
                            </div>

                            <div className="bg-white rounded" style={{
                                backgroundImage: `url(${postmanLogo})`,
                                backgroundPosition: 'center',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat'
                                }}>
                                <div className="w-full h-full bg-gradient-to-t from-gray-700 to-transparent align-bottom flex flex-wrap justify-center content-end rounded p-10">
                                    <h2 className=" text-2xl text-white -mb-10"> Postman</h2>
                                </div>
                            </div>
                            
                            <div className="bg-white p-2 rounded col-span-3 row-span-3">
                                <p className=" text-left p-2 text-gray-700" style={{whiteSpace: 'pre-line'}}> {paragraphs.ios}</p>
                            </div>
                            
                        </div>
                        
                    </div>

                    <div data-aos="fade-left" className="bg-gray-100 rounded-lg p-8 text-center mt-2 md:col-span-2 md:col-start-2">{/** CARD */}
                        <h1 className="text-3xl font-bold">UI design</h1>
                        <div className="grid bg-gray-100 grid-cols-4 gap-5 p-5">
                            <div className="bg-gray-200 rounded-xl col-span-3 row-span-2 p-1 ">
                                <img src={wireframeScreenshot} alt="Patrik's figma wireframe" />
                                {/* <WireframeCarousel /> */}
                            </div>
                            <div className="rounded"> <img src={figmaScreenshot} alt="figma logo" /></div>
                            <div className="rounded"><img src={XDScreenshot} alt="adobeXD logo" /></div>
                             
                            <div className="bg-white p-2 rounded col-span-4">
                                <p className=" text-left p-2 text-gray-700" style={{whiteSpace: 'pre-line'}}> {paragraphs.uiDesign} </p>
                            </div>
                        </div>
                    </div>

                    <div data-aos="fade-right" className="bg-white rounded-lg p-8 text-center mt-2 md:col-span-2">{/** CARD */}
                        <h1 className="text-3xl font-bold">Web Development</h1>
                    </div>
                    
                </div>
                
            </div>
        </div>
    )
}

export default HomeWhatIDo;


/* <img src={wireframeScreenshot} alt="Patrik's figma wireframe" /> */