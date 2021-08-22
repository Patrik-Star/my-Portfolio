import React, {useEffect, useState} from "react";
import sanityClient from "../client.js";
import imageUrlBuilder from "@sanity/image-url/";
import BlockContent from "@sanity/block-content-to-react";
import myCV from "../CV.pdf";


const builder = imageUrlBuilder(sanityClient);
function urlFor(source){
    return builder.image(source)
}

export default function About(){
    const [author, setAuthor] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "author"]{
            name,
            bio,
            "authorImage": image.asset->url
        }`)
        .then((data) => setAuthor(data[0]))
        .catch(console.error);
    }, []);

    if(!author) return <div className="flex justify-center w-screen">
        <div className="loader animate-spin"></div>
    </div>;

    return (
       <main className="relative bg-c-black h-screen">
           {/* <img src={image} alt="Background" className="absolute w-full" /> */}
           <div className="p-10 lg:pt-48 mx-auto relative">
               <section className="bg-green-800 rounded-lg shadow-2xl lg:flex p-20">
                   <img src={urlFor(author.authorImage).url()} alt={author.name} className="rounded mr-8 w-auto h-80" />
                   <div className="text-lg flex flex-col justify-center">
                       <h1 className="cursive text-6xl text-green-600 mb-4">
                           Hey There. I'm{" "}
                           <span className="text-green-100">{author.name}</span>
                       </h1>
                       <div className="prose lg:prose-xl text-white">
                        <BlockContent 
                            blocks={author.bio} 
                            projectId="qs9e1fib" 
                            dataset="production"
                        />
                       </div>
                   </div>
               </section>
           </div>
           <a href={myCV} download="Patrik Bolander CV" target='_blank' rel="noreferrer" className="bg-red-700 rounded p-10">My Example Doc</a>
       </main>
    )
}