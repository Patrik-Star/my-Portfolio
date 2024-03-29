import React, { useEffect } from "react";
import Typical from 'react-typical';
import profileImage from '../../images/profileFinal.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

function HomeAboutMe() {

    useEffect(() => {
        AOS.init();

    }, []);

    return (
        <div className="bg-c-black border-t-2 border-gray-600">

            <p className='text-white font-bold text-xl font-mono ml-6 pt-5'>
                <Typical loop={Infinity} wrapper="b"
                    steps={['A little bit about me...',
                        14000,
                        '',
                        100
                    ]} />

            </p>
            <div className="h-auto flex flex-col items-center justify-center ">
                {/* card */}
                <div data-aos="fade-left" data-aos-duration="2000" className="flex items-center p-4 bg-white rounded-lg shadow-sm w-4/5 md:w-1/2 my-8">
                    <img src={profileImage} alt="Patrik Profile" className="hidden md:block w-45 rounded-md h-40 " />
                    <div id="body" className="flex flex-col ml-5">
                        <h4 id="name" className="text-xl font-semibold mb-2">Hi, Nice to meet you, I'm Patrik</h4>
                        <p id="job" className="text-gray-800 mt-2">
                            I recently graduated from the University of Auckland in October 2021, 
                            fueled by a strong passion for Full-Stack and Cloud development. 
                            I thrive on continuous learning and eagerly embrace new and 
                            exciting situations to further expand my skills and knowledge.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default HomeAboutMe;
