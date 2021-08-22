import React from 'react';

function HomeWhatIDo() {
    return (
        <div className="bg-c-black w-full justify-center flex border-t-2 border-gray-600 pb-10">
            <div className="container bg-c-black h-auto flex flex-col items-center justify-center">

                <h1 className="text-5xl font-bold text-white py-10">What I Do</h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 w-full ">
                    <div className="bg-white rounded-lg p-8 text-center md:col-span-2">
                        <h1 className="text-xl font-bold">iPhone iOS Development</h1>
                    </div>

                    <div className="bg-white rounded-lg p-8 text-center md:col-span-2 md:col-start-2">
                        <h1 className="text-xl font-bold">UI design</h1>
                    </div>

                    <div className="bg-white rounded-lg p-8 text-center md:col-span-2">
                        <h1 className="text-xl font-bold">Web Development</h1>
                    </div>
                    
                </div>
                
            </div>
        </div>
    )
}

export default HomeWhatIDo;
