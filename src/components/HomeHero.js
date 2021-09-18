import React from "react";
import image from '../images/profileFinal.png';
// import Typist from "react-typist";
import Typical from 'react-typical';

function HomeHero() {

    return (
        <div className="md:flex justify-between py-0 px-10 bg-c-black text-c-white">

            {/* Left */}
            <div className="md:w-1/2 mb-10 md:mb-0 mt-20 mx-auto">
                <h2 className="text-xl md:text-3xl text-gray-400 mb-6 mt-0 sm:text-5xl font-semibold italic">Hi, I'm</h2>
                <h2 className="text-2xl md:text-4xl lg:text-6xl text-white mb-6 mt-0 sm:text-5xl">Patrik Bolander</h2>
                {/* <h1 className="text-blue-200 text-xl font-bold"></h1> */}
                <p className='text-blue-200 font-bold text-xl font-mono'>
                    <Typical loop={Infinity} wrapper="b" className=''
                        steps={['I\'m a Computer science Graduate.🎓🎉', 
                        2000, 
                        'I\'m a software Developer. 💻',
                        2000,
                        'I\'m a iOS app Developer. 📱',
                        2000,
                        'I\'m a Website Designer. ✏️',
                        2000,
                        'I love to learn new things. 📚',
                        2000,
                        'I love being creative. 💡',
                        2000
                        ]} />
                </p>

                <a href="mailto:patrik@patrikbolander.com">
                    <button className="bg-c-light-blue hover:bg-c-dark-blue hover:border-c-dark-blue text-white font-bold py-3 px-5 rounded mt-5 border-2 border-c-light-blue">
                        Email Me
                    </button>
                </a>
                <a href="/about"><button className="text-white bg-opacity-0 border-2 border-c-light-blue hover:border-c-dark-blue font-bold rounded py-3 px-6 ml-4"> 
                    My Story
                    </button>
                </a>
            </div>

            {/* right */}
            <div className="md:w-1/3 mb-0 mr-40 mt-10 border-0 border-red-500 align-bottom justify-end">
                <img src={image} alt="Patrik profile" class="w-full py-0" />
            </div>

        </div>
    )
}

export default HomeHero;
