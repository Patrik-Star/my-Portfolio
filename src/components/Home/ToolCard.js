import React from 'react';


function ToolCard(props) {
    return (
        <div className={`bg-white rounded col-span-3 md:col-span-1 ${props.className}`} style={{
            backgroundImage: `url(${props.image})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
            }}>
            <div className="w-full h-full bg-gradient-to-t from-gray-700 to-transparent align-bottom flex flex-wrap justify-center content-end rounded p-10 ">
                <h2 className=" text-2xl text-white -mb-10 "> {props.name}</h2>
            </div>
        </div>
    )
}

export default ToolCard
