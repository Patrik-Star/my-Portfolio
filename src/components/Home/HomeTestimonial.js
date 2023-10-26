import React from 'react';
import HomeTestimonialCard from './HomeTestimonialCard';
import Typical from 'react-typical';
import testimonialArray from '../../content/testimonialData'


function HomeTestimonial() {
    
    return (
        <div className="w-full bg-c-black pt-10 sm:justify-center">
            <h1 className="text-3xl md:text-4xl text-white mx-1 md:mx-10 font-mono text-center md:text-left">
                <Typical loop={Infinity} wrapper="b"
                        steps={['Some Testimonials...', 
                        14000, 
                        '',
                        100
                        ]} />
            </h1>
            <div className="w-full overflow-x-scroll">
                <div className="inline-flex overflow-x-scroll flex-nowrap space-x-10 py-20">
                    {testimonialArray && testimonialArray.map((el, index) => (
                        <HomeTestimonialCard index={index} name={el.Name} title={el.title} body={el.body} image={el.image} link={el.link} jobPosition={el.jobPosition}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default HomeTestimonial;