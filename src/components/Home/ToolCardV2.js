import React from 'react';


function ToolCardV2(props) {
    return (
        <div data-aos="fade-down" data-aos-offset={props.aosDelay} className="bg-white rounded-3xl row-span-3 shadow-2xl" style={{
            backgroundImage: `url(${props.image})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
            }}>
            <div className="w-full h-full bg-gradient-to-t from-gray-700 to-transparent align-bottom flex flex-wrap justify-center content-end rounded-3xl pt-60 pb-2">
                <h2 className=" text-2xl text-white "> {props.name}</h2>
            </div>
        </div>
    )
}

export default ToolCardV2;
