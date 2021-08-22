import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import SanityClient  from "../client.js";

export default function Post(){
    const [postData, setPost] = useState(null);

    useEffect(() => {
        SanityClient.fetch(`*[_type == "post"]{
            title,
            slug,
            mainImage{
                asset->{
                    _id,
                    url
                },
                alt
            }
        }`)
        .then((data) => setPost(data))
        .catch(console.error)
    }, []);

    return (
        <main className="100 min-h-screen p-12 bg-gradient-to-b from-c-black to-gray-700">
            <section className="container mx-auto">
                <h1 className="text-5xl flex justify-center text-white font-mono">Blog Posts</h1> {/*cursive*/}
                <h2 className="text-lg text-gray-800 flex justify-center mb-12">welcome to my page of blog posts</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {postData && postData.map((post, index) => (
                    <article>
                        <Link to={"/post/" + post.slug.current} key={post.slug.current}>
                            <span className="block h-64 relative rounded shadow leading-snug bg-white border-l-4 border-green-400" key={index}>
                                <img src={post.mainImage.asset.url} alt={post.mainImage.alt} className="w-full h-full rounded-r object-cover absolute" />
                                <span className="relative h-full flex justify-center items-end pr-4 pb-4">
                                    <h3 className="text-white text-lg font-bold px-3 py-4 bg-red-700 bg-opacity-75 rounded">
                                        {post.title}
                                    </h3>
                                </span>
                            </span>
                        </Link>
                    </article>
                    ))}
                </div>
            </section>
        </main>
    )
}