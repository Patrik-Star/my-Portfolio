import React, {useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import reactLogo from '../images/reactLogo.png';

import PythonLogo from '../images/python_bg.png';
import JavaLogo from '../images/javaLogo.png';
import SwiftLogo from '../images/swiftLogo.png';
import AWSLogo from '../images/awsLogo.jpg';
import FigmaLogo from '../images/figma.png';
import AdobeXDLogo from '../images/adobeXDLogo.png';
import GithubLogo from '../images/githubLogo.png';
import PostmanLogo from '../images/postmanLogo.png';
import InsomniaLogo from '../images/insomniaLogo.png';
import DrawIOLogo from '../images/drawioLogo.png';
import XcodeLogo from '../images/xcodeLogo.png';
import VSCodeLogo from '../images/vscodeLogo.png';
import PycharmLogo from '../images/pycharmLogo.png';
import IntellijLogo from '../images/intellijLogo.png';
import HTMLLogo from '../images/htmlLogo.png';
import CSSLogo from '../images/cssLogo.png';
import JavascriptLogo from '../images/javascriptLogo.png';
import ReactLogo from '../images/reactLogo.png';
import TailwindcssLogo from '../images/tailwindcssLogo.png';
import ToolCardV2 from "./ToolCardV2";
import TypeScriptLogo from "../images/TypescriptLogo.png";
// import AWSCDK from "../images/CdkLogo.png";
// import nodejs
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
                'Typescript': TypeScriptLogo};

// var randomSpanArray = ['col-span-2', 'col-span-1', 'col-span-1', 'col-span-1', 'col-span-1', 'col-span-1'];

// const getUniqueFromRange = (max) => {
//     return Math.floor(Math.random() * max);
//   };
  
//   const getRandomItem = items => {
//     return items[getUniqueFromRange(items.length)];
//   };


function randomNoRepeats() {
    var copy = stackArray.slice(0);
    return function() {
      if (copy.length < 1) { copy = stackArray.slice(0); }
      var index = Math.floor(Math.random() * copy.length);
      var item = copy[index];
      copy.splice(index, 1);
      return [item, imageDict[item]];
    };
}

var chooser = randomNoRepeats();

function createElements(n){
    var elements = [];
    for(let i = 0; i < n; i++){
        let pair = chooser()
        // console.log(pair[0]);
        elements.push(<ToolCardV2 name={pair[0]} image={pair[1]}/>);
    }
    return elements;
}

function HomeStack() {

    useEffect(() => {
        AOS.init();

    }, []);

    return (
        <div className="h-auto flex flex-col items-center justify-center bg-gradient-to-b from-white to-gray-200 pb-44"> {/**pb-44 */}
            <h1 className="text-5xl font-bold pt-10">Stack I use</h1>
            <div data-aos="fade-down" className="flex flex-wrap justify-center mt-10">
                <span><img loading='lazy' src={SwiftLogo} alt="Swift Logo" className="stackIcon"/></span>
                <span><img loading='lazy' src={reactLogo} alt="React Logo" className="stackIcon"/></span>
                <span><img loading='lazy' src={PythonLogo} alt=" Python Logo" className="stackIcon"/></span>
                <span><img loading='lazy' src={AWSLogo} alt="AWS Logo" className="stackIcon"/></span>
            </div>

            <p className="w-11/12 md:max-w-xl text-xl text-center mt-10 pb-10 font-mono">
                In my free time I always like to improve on my coding and software development ability. I'm always down to learn new skills and technologies. 
                I am still learning ReactJS and AWS to make myself a better Web developer with the ability to work with the cloud. 
                I plan on extending my ReactJS knowledge to make cross platform smartphone apps using React-Native.
            </p>

            <h1 className="text-5xl font-bold mb-7 mt-5 text-center">Other Tools/Languages</h1>
            
            <div className="container w-full px-5 md:px-0 md:w-2/3 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 h-auto"> 
                {createElements(Object.keys(stackArray).length)}   
            </div>

        </div>
    )
}

export default HomeStack;


/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
<path fill="#0099ff" fill-opacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
</svg> */ 