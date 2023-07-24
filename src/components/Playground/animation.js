import React from 'react';

export default function Animation() {

    return (
        <section class="py-5 px-5 mt-5 md:mt-0 flex md:flex-col items-center justify-around bg-c-black border-2 border-c-gold flex-wrap sm:flex-col">
            {/* <!-- scale --> */}
            <div class="h-32 w-32 relative cursor-pointer mb-10 rounded-lg bg-gradient-to-t from-green-400 to-blue-500">
                <div class="absolute inset-0 opacity-25 rounded-lg shadow-2xl"></div>
                <div class="absolute inset-0 transform  hover:scale-75 transition duration-300">
                    <div class="h-full w-full bg-white rounded-lg shadow-2xl text-center">
                        <h1 className='absolute inset-x-0 bottom-3 '> Hover me </h1>
                    </div>
                </div>
            </div>

            {/* <!-- roatate and scale --> */}
            <div class="h-32 w-32 relative cursor-pointer mb-10 rounded-lg bg-gradient-to-t from-purple-400 via-pink-500 to-red-500">
                <div class="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl"></div>
                <div class="absolute inset-0 transform hover:rotate-90 hover:scale-75 transition duration-300">
                    <div class="h-full w-full bg-white rounded-lg shadow-2xl text-center">
                    <h1 className='absolute inset-x-0 bottom-3'> Hover me </h1>
                    </div>
                </div>
            </div>

            {/* <!-- rotate --> */}
            <div class="h-32 w-32 relative cursor-pointer mb-10 rounded-lg bg-gradient-to-t from-pink-500 to-yellow-400">
                <div class="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl"></div>
                <div class="absolute inset-0 transform  hover:rotate-45 transition duration-300">
                    <div class="h-full w-full bg-white rounded-lg shadow-2xl text-center">
                        <h1 className='absolute inset-x-0 bottom-3'> Hover me </h1>
                    </div>
                </div>
            </div>

            {/* <!-- rotate minus --> */}
            <div class="h-32 w-32 relative cursor-pointer mb-10 rounded-lg bg-gradient-to-t from-green-400 to-blue-500">
                <div class="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl"></div>
                <div class="absolute inset-0 transform  hover:-rotate-45 transition duration-300">
                    <div class="h-full w-full bg-white rounded-lg shadow-2xl text-center">
                        <h1 className='absolute inset-x-0 bottom-3'> Hover me </h1>
                    </div>
                </div>
            </div>

            {/* <!-- Origin --> */}
            <div class="h-32 w-32 relative cursor-pointer mb-10 rounded-lg bg-gradient-to-t from-purple-400 to-blue-500">
                <div class="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl"></div>
                <div class="absolute inset-0 transform origin-left hover:-rotate-45 transition duration-300">
                    <div class="h-full w-full bg-white rounded-lg shadow-2xl text-center pb-10">
                        <h1 className='absolute inset-x-0 bottom-5'> Hover me </h1>
                    </div>
                </div>
            </div>

            {/* <!-- translate --> */}
            <div class="h-32 w-32 relative cursor-pointer mb-10 rounded-lg bg-gradient-to-t from-yellow-400 to-red-500">
                <div class="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl"></div>
                <div class="absolute inset-0 transform hover:-translate-x-10 transition duration-300">
                    <div class="h-full w-full bg-white rounded-lg shadow-2xl text-center">
                        <h1 className='absolute inset-x-0 bottom-3'> Hover me </h1>
                    </div>
                </div>
            </div>

            {/* <!-- skew --> */}
            <div class="h-32 w-32 relative cursor-pointer mb-10 rounded-lg bg-gradient-to-t from-indigo-600 to-red-500">
                <div class="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl"></div>
                <div class="absolute inset-0 transform hover:skew-y-12 transition duration-300">
                    <div class="h-full w-full bg-white rounded-lg shadow-2xl text-center">
                        <h1 className='absolute inset-x-0 bottom-3'> Hover me </h1>
                    </div>
                </div>
            </div>

            <div class="h-32 w-32 relative cursor-pointer mb-10 rounded-lg bg-gradient-to-t from-indigo-800 to-green-500">
                <div class="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl"></div>
                <div class="absolute inset-0 transform hover:rotate-90 hover:translate-x-full hover:scale-150 transition duration-300">
                <div class="h-full w-full bg-white rounded-lg shadow-2xl text-center">
                        <h1 className='absolute inset-x-0 bottom-3'> Hover me </h1>
                    </div>
                </div>
            </div>

        </section>
    );
}


