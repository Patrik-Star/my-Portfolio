import React from "react";
import HomeWhatIDo from "./HomeWhatIDo";

import HomeHero from "./HomeHero";
import HomeStack from "./HomeStack";
import HomeAboutMe from "./HomeAboutMe";
import HomeTestimonial from "./HomeTestimonial";
import HomeContactMe from "./HomeContactMe";
import Footer from "./Footer";

export default function Home(){
    
    return (
        <div className="test">
            <HomeHero />
            <HomeAboutMe />
            <HomeWhatIDo />
            <HomeStack />
            <HomeTestimonial />
            <HomeContactMe />
            <Footer />
        </div>
    )
}



