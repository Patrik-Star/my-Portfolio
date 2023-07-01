import React from 'react';
import HomeTestimonialCard from './HomeTestimonialCard';
import Typical from 'react-typical';
import personImage from '../../images/person.png';

const statementObj ={
    Rob: {
        title: "Committment to quality",
        body: "Patrik is our Apple app go to guy. He brings a flair for coding and a committment to quality. ",
        image: personImage,
        link: "https://appworx.nz",
        jobPosition: "Head of Technology"
    },
    Diane: {
        title: "A courteous young man",
        body: "Patrik is a courteous young man, always enthusiastic about learning something new and taking on a project with an intense desire to see a successful end result.  He is proactive, diligent and a really nice, honest young man.",
        image: personImage,
        link: "https://appworx.nz",
        jobPosition: "Head of Sales & Marketing"
    }
}

function HomeTestimonial() {
    var items = [];

    for (var key in statementObj) {
        if (statementObj.hasOwnProperty(key)) {
            var obj = statementObj[key]
            items.push(<HomeTestimonialCard key={key} name={key} title={obj.title} body={obj.body} image={obj.image} link={obj.link} jobPosition={obj.jobPosition}/>);
        }
    }

    return (
        <div className="w-full bg-c-black p-10 sm:justify-center">
            <h1 className="text-3xl md:text-4xl text-white mx-1 md:mx-10 font-mono text-center md:text-left">
                <Typical loop={Infinity} wrapper="b"
                        steps={['Some Testimonials...', 
                        14000, 
                        '',
                        100
                        ]} />
            </h1>
            
            <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 justify-self-center justify-center mt-10 md:mt-0"> {/** block md:flex items-center justify-center*/}
                {items}
            </div>
        </div>
    )
}

export default HomeTestimonial;