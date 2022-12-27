import React, {useEffect} from "react";
import Typical from 'react-typical';
import profileImage from '../images/profileFinal.png';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import HomeAboutMeData from '../content/HomeAboutMe.json'

function HomeAboutMe() {

    useEffect(() => {
        AOS.init();

    }, []);

    return (
        <div className="bg-c-black border-t-2 border-gray-600"> {/** bg-gradient-to-t from-c-black to-gray-700 */}

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
                    <img loading='lazy' src={profileImage} alt="Patrik Profile" className="w-45 rounded-md h-40 " />
                    <div id="body" className="flex flex-col ml-5">
                        <h4 id="name" className="text-xl font-semibold mb-2">{HomeAboutMeData.title}</h4>
                        <p id="job" className="text-gray-800 mt-2">{HomeAboutMeData.body}</p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default HomeAboutMe;
