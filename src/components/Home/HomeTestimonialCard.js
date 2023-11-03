import React from 'react';
import personImage from '../../images/person.png';

function HomeTestimonialCard({ image, name, title, body, link, jobPosition, index }) {

    function checkIfImageExists(url, callback) {
        const img = new Image();
        img.src = url;
        
        if (img.complete) {
          return true;
        } else {
          img.onload = () => {
            return true;
          };
          
          img.onerror = () => {
            return false;
          };
        }
      }

    return (
        <div className={`relative max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-2 h-auto w-96 ${index === 0 ? "ml-10" : ""}`}>
            <div className="flex justify-center md:justify-end -mt-16 ">
                <img className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500 bg-white" alt={name} src={checkIfImageExists(image) ? image : personImage}/>
            </div>
            <div className='pb-10'>
                <h2 className="text-gray-800 text-2xl font-semibold">{title}</h2>
                <p className="mt-2 text-gray-600">{body}</p>
            </div>
            <div className="absolute bottom-2 right-8">
                <div className="block text-right">
                    <a href={link} target="_blank" rel="noreferrer" className="text-xl font-medium text-c-light-blue">{name}</a>
                    <h6 className="text-sm text-gray-400 ">{jobPosition}</h6>
                </div>
            </div>
        </div>
    )
}

export default HomeTestimonialCard;