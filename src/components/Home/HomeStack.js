import React, { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import ToolCardV2 from "./ToolCardV2";

import PythonLogo from '../../images/python_bg.png';
import JavaLogo from '../../images/javaLogo.png';
import SwiftLogo from '../../images/swiftLogo.png';
import AWSLogo from '../../images/awsLogo.jpg';
import FigmaLogo from '../../images/figma.png';
import AdobeXDLogo from '../../images/adobeXDLogo.png';
import GithubLogo from '../../images/githubLogo.png';
import PostmanLogo from '../../images/postmanLogo.png';
import InsomniaLogo from '../../images/insomniaLogo.png';
import DrawIOLogo from '../../images/drawioLogo.png';
import XcodeLogo from '../../images/xcodeLogo.png';
import VSCodeLogo from '../../images/vscodeLogo.png';
import PycharmLogo from '../../images/pycharmLogo.png';
import IntellijLogo from '../../images/intellijLogo.png';
import HTMLLogo from '../../images/htmlLogo.png';
import CSSLogo from '../../images/cssLogo.png';
import JavascriptLogo from '../../images/javascriptLogo.png';
import ReactLogo from '../../images/reactLogo.png';
import TailwindcssLogo from '../../images/tailwindcssLogo.png';
import TypeScriptLogo from '../../images/typescriptLogo.png';
// import AWSCDK from "../images/CdkLogo.png";
// import nodejs
// import expressJS
// import Jira
// import Docker
// import Confluence

var stackArray = [
    'Python',
    'Java',
    'Swift',
    'AWS',
    'Figma',
    'AdobeXD',
    'Git/GitHub',
    'Postman',
    'Insomnia',
    'Draw.io',
    'XCode',
    'VS Code',
    'Pycharm',
    'Intellij',
    'HTML',
    'CSS',
    'Javascript',
    'ReactJS',
    'Tailwind CSS',
    'Typescript'];

var imageDict = {
    'Python': PythonLogo,
    'Java': JavaLogo,
    'Swift': SwiftLogo,
    'AWS': AWSLogo,
    'Figma': FigmaLogo,
    'AdobeXD': AdobeXDLogo,
    'Git/GitHub': GithubLogo,
    'Postman': PostmanLogo,
    'Insomnia': InsomniaLogo,
    'Draw.io': DrawIOLogo,
    'XCode': XcodeLogo,
    'VS Code': VSCodeLogo,
    'Pycharm': PycharmLogo,
    'Intellij': IntellijLogo,
    'HTML': HTMLLogo,
    'CSS': CSSLogo,
    'Javascript': JavascriptLogo,
    'ReactJS': ReactLogo,
    'Tailwind CSS': TailwindcssLogo,
    'Typescript': TypeScriptLogo
};

function randomNoRepeats() {
    var copy = stackArray.slice(0);
    return function () {
        if (copy.length < 1) { copy = stackArray.slice(0); }
        var index = Math.floor(Math.random() * copy.length);
        var item = copy[index];
        copy.splice(index, 1);
        return [item, imageDict[item]];
    };
}

var chooser = randomNoRepeats();

function createElements(n, itemsPerRow) {
    const defaultDelay = 120;
    const delayBetweenItems = 70;

    // Populating array with delay values for each item in the row
    let delayArray = []
    for (let i = 0; i < itemsPerRow; i++) {
        delayArray.push(defaultDelay + (i * delayBetweenItems));
    }
    const lgth = delayArray.length;

    // Populating elements array with actual card objects
    var elements = [];
    for (let i = 0; i < n; i++) {
        let pair = chooser()
        let delayItem = delayArray[(i % lgth + lgth) % lgth]
        elements.push(<ToolCardV2 key={i} name={pair[0]} image={pair[1]} aosDelay={delayItem} />);
    }
    return elements;
}

function HomeStack() {

    const [isDesktop, setDesktop] = useState(false); // window.innerWidth > 1024)
    const [isTablet, setTablet] = useState(false);
    const [isMobile, setMobile] = useState(false);

    useEffect(() => {
        AOS.init();
        updateMedia()
    }, []);

    const updateMedia = () => {
        // setDesktop(window.innerWidth > 1450);
        let windowWidth = window.innerWidth
        if (windowWidth >= 1024) {
            setDesktop(true);
        } else if (windowWidth >= 768) {
            setTablet(true);
        } else {
            setMobile(true);
        }
    };

    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    });

    return (
        <div className="h-auto flex flex-col items-center justify-center bg-gradient-to-b from-white to-gray-200 pb-44"> {/**pb-44 */}
            <h1 className="text-5xl font-bold pt-10">Stack I use</h1>
            <div data-aos="fade-down" className="flex flex-wrap justify-center mt-10">
                <span><img loading='lazy' src={ReactLogo} alt="React Logo" className="stackIcon" /></span>
                <span><img loading='lazy' src={TypeScriptLogo} alt="Typescript Logo" className="stackIcon" /></span>
                <span><img loading='lazy' src={JavascriptLogo} alt="jJavascript Logo" className="stackIcon" /></span>
                <span><img loading='lazy' src={AWSLogo} alt="AWS Logo" className="stackIcon" /></span>
            </div>

            <p className="w-11/12 md:max-w-xl text-xl text-center mt-10 pb-10 font-mono">
                In my free time I always like to improve on my coding and software development ability. I'm always down to learn new skills and technologies.
                With a few years under my belt by diverisifying in multiple tech such as javascript, Typescript, Java and python, im able to adapt to my surroundings.
                I am learning to master my ReactJS and AWS to make myself a better full stack developer with the ability to work with cloud. Checkout my
                <a href="/project" className="text-blue-700 font-semibold"> projects page</a> to learn more!
            </p>

            <h1 className="text-5xl font-bold mb-7 mt-5 text-center">Other Tools/Languages</h1>

            <div className="container w-full px-5 md:px-0 md:w-2/3 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 h-auto">
                {isDesktop && createElements(Object.keys(stackArray).length, 4)}
                {isTablet && createElements(Object.keys(stackArray).length, 3)}
                {isMobile && createElements(Object.keys(stackArray).length, 2)}
            </div>

        </div>
    )
}

export default HomeStack;

