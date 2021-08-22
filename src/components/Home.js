import React from "react";
import HomeWhatIDo from "./HomeWhatIDo";

import HomeHero from "./HomeHero";
import HomeStack from "./HomeStack";
import HomeAboutMe from "./HomeAboutMe";

export default function Home(){
    
    return (
        <div className="">
            <HomeHero />
            <HomeAboutMe />
            <HomeWhatIDo />
            <HomeStack />
        </div>
    )
}



