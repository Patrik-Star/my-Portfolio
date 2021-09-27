import React, {useEffect} from 'react';
// import profileImage from '../images/profileFinal.png';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import myCV from "../CV.pdf";
import Typical from 'react-typical';

function HomeContactMe() {

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className="bg-gray-200 p-10">
            {/* <h1 className="text-5xl p-5 font-semibold">Contact me</h1> */}
            <h1 className="text-4xl text-c-black mx-10 font-mono text-center md:text-left">
                <Typical loop={Infinity} wrapper="b"
                        steps={['Lets Work Together...', 
                        14000, 
                        '',
                        100
                        ]} />
            </h1>

            <div className="container flex justify-center mx-auto">
                {/* card */}
                <div data-aos="fade-right" className="block items-center p-4 bg-white border-2 border-gray-200 rounded-3xl shadow-sm w-full md:w-3/5 my-8 justify-center text-center">
                    <h1 className="text-4xl p-5 font-mono font-bold">My Curriculum Vitae (CV) </h1>
                    <a href={myCV} download="Patrik Bolander CV" target='_blank' rel="noreferrer">
                        <button className="bg-c-light-blue rounded-lg py-5 px-10 text-white hover:bg-c-dark-blue transform hover:-translate-y-2">Download</button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default HomeContactMe;
