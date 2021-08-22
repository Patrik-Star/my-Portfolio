import React from "react";
import Typical from 'react-typical';
import profileImage from '../profileFinal.png';

function HomeAboutMe() {

    return (
        <div className="bg-gradient-to-b from-c-black to-gray-700">

            <p className='text-white font-bold text-xl font-mono'>
                    <Typical loop={Infinity} wrapper="b"
                        steps={['A little bit about me...', 
                        14000, 
                        '',
                        100
                        ]} />
            
            </p>
            <div className="h-auto flex flex-col items-center justify-center ">
                {/* card */}
                <div class="flex items-center p-4 bg-white border-2 border-gray-200 rounded-lg shadow-sm w-1/2 my-8">
                    <img src={profileImage} alt="Patrik Profile" className="w-45 rounded-md border-2 h-40 w-40" />
                    <div id="body" className="flex flex-col ml-5">
                        <h4 id="name" className="text-xl font-semibold mb-2">Hi, Nice to meet you, Im Patrik</h4>
                        <p id="job" className="text-gray-800 mt-2">Just graduating from the University of Auckland, i'm passionate about software development and UI/UX design. I always love learning new thing and also try to adapt to new and exciting situations</p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default HomeAboutMe;
