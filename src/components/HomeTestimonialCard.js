import React from 'react';

function HomeTestimonialCard(props) {

    return (
        <div className="max-w-md py-4 px-8 bg-white rounded-lg my-10 md:my-20 mx-1 md:mx-10 h-80 md:h-60 relative drop-shadow-lg"> {/* CARD */}
            <div className="flex justify-center md:justify-end -mt-16">
                <img loading='lazy' className="w-20 h-20 object-cover rounded-full border-2 border-c-light-blue bg-white" alt="" src={props.image} />
            </div>
            <div>
                <h2 className="text-gray-800 text-2xl font-semibold italic">{props.title}</h2> 
                <p className="mt-2 text-gray-600 break-words line-clamp-5">{props.body}</p>
            </div>
            <div className="static ">
                <a href={props.link} target="_blank" rel="noreferrer noopener" className="text-xl font-medium text-c-light-blue absolute bottom-6 right-7 hover:text-c-dark-blue">{props.name}</a> <br />
                <h6 className="text-sm text-gray-400 absolute bottom-2 right-7 ">{props.jobPosition}</h6>
            </div>
            
        </div>
    )
}

export default HomeTestimonialCard;