import React, { useEffect, useState } from "react";
// import Markdown from 'markdown-to-jsx';
import ReactMarkdown from "react-markdown";

import profilePic from '../images/ProfilePic.JPG';

export default function About(){ 

    const [about, setAbout] = useState('');
    const [sectionArray, setSectionArray] = useState(null);

    useEffect(() => {
        import(`../content/Story.md`)
            .then(res => {
                fetch(res.default)
                    .then(res => res.text())
                    .then(res => setAbout(res))
            })
            .catch(err => console.log(err));
    },[]);

    useEffect(() => {
        var sectionArray = about.split("\n");
        setSectionArray(sectionArray);
        // let isInSection = false;
        // let divSectionArray = [];
        // let tempString = "";
// 
        // console.log(sectionArray);
        // sectionArray.forEach(element => {
        //     if(element.contains("#")){
        //         tempString += element;
        //     }else{
        //         tempString += "\n" + element;
        //     }
        // });

    }, [about])

    return (
       <main className="relative h-screen bg-gray-100">
           {/* <img src={image} alt="Background" className="absolute w-full" /> */}
           <div className="p-10 lg:pt-20 mx-auto relative bg-c-black">
               <section className="bg-gray-200 rounded-lg shadow-2xl lg:flex p-20 mb-32">
                   <img src={profilePic} alt="Patrik Profile" className="rounded mr-8 w-auto h-80" />
                   <div className="text-lg flex flex-col justify-center">
                       <h1 className="cursive text-6xl text-gray-700 mb-4">
                           Hey There. I'm <span className="text-yellow-400">Patrik</span>
                       </h1>
                       <div className="prose lg:prose-xl text-gray-800">
                       <p> Computer Science Graduate from the University of Auckland. </p>
                       </div>
                   </div>
               </section>
           </div>

           <div className=" w-screen text-center pt-5 bg-gray-100 flex justify-center align-middle">
               <h1 className=" font-medium text-6xl italic text-gray-600">More Coming soon!</h1>
                {/* <ReactMarkdown className="prose text-center bg-blue-500 w-full mb-10">
                    {about}
                </ReactMarkdown> */}

           </div>
           
       </main>
    )
}