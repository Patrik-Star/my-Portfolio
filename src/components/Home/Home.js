import React, {Suspense} from "react";

const HomeHero = React.lazy(() => import('./HomeHero'));
const HomeStack = React.lazy(() => import('./HomeStack'));
const HomeAboutMe = React.lazy(() => import('./HomeAboutMe'));
const HomeTestimonial = React.lazy(() => import('./HomeTestimonial'));
const HomeContactMe = React.lazy(() => import('./HomeContactMe'));
const Footer = React.lazy(() => import('../Footer'));
const HomeWhatIDo = React.lazy(() => import('./HomeWhatIDo'));

export default function Home(){
    
    return (
        <div className="">
            
            <Suspense fallback={<span>Loading...</span>}>
                <HomeHero />
            </Suspense>

            <Suspense fallback={<span>Loading...</span>}>
                <HomeAboutMe />
            </Suspense>

            <Suspense fallback={<span>Loading...</span>}>
                <HomeWhatIDo />
            </Suspense>

            <Suspense fallback={<span>Loading...</span>}>
                <HomeStack />
            </Suspense>

            <Suspense fallback={<span>Loading...</span>}>
                <HomeTestimonial />
            </Suspense>

            <Suspense fallback={<span>Loading...</span>}>
                <HomeContactMe />
            </Suspense>

            <Suspense fallback={<span>Loading...</span>}>
                <Footer />
            </Suspense>
            
        </div>
    )
}



