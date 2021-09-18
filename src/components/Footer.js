import React from 'react';

function Footer() {
    return (
        <footer className="w-full block justify-center border-t p-5 bg-c-black place-items-center">
            <span className="w-full flex justify-center ">
                <p className="font-bold font-sans text-white ">  &lt;/ The End &gt;  </p>
            </span>
            <div className=""></div>
            <div className="flex flex-row-reverse ">
                <button className="text-c-light-blue font-bold -mt-6 mr-4" onClick={() => (
                    window.scroll({top: 0, left: 0, behavior: 'smooth' })
                )} >scroll to top</button>
            </div>
        </footer>
    )
}

export default Footer;
