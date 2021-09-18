import React, {useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

var stackArray = [
                'Python',
                'Java', 
                'Swift', 
                'AWS', 
                'Figma', 
                'Adobe XD', 
                'GitHub', 
                'Postman', 
                'Insomnia', 
                'Draw.io', 
                'XCode', 
                'VS Code',
                'Pycharm',
                'Intellij',
                'CLion',
                'Sublime'];

var imageDict = {
                Python: '/python_bg.png',
                'Java': '', 
                'Swift': '', 
                'AWS': '', 
                'Figma': '', 
                'Adobe XD': '', 
                'GitHub': '', 
                'Postman': '', 
                'Insomnia': '', 
                'Draw.io': '', 
                'XCode': '', 
                'VS Code': '',
                'Pycharm': '',
                'Intellij': '',
                'CLion': '',
                'Sublime': ''};
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
console.log(chooser())

function createElements(n){
    var elements = [];
    for(let i = 0; i < n; i++){
        elements.push(<div className={`bg-white rounded p-4 border-2 border-c-light-blue`}>{chooser()[0]}</div>);
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
                <span><img src={process.env.PUBLIC_URL + '/swiftLogo.png'} alt="Swift Logo" className="stackIcon"/></span>
                <span><img src={process.env.PUBLIC_URL + '/logo512.png'} alt="React Logo" className="stackIcon"/></span>
                <span><img src={process.env.PUBLIC_URL + '/pythonLogo.png'} alt=" Python Logo" className="stackIcon"/></span>
                <span><img src={process.env.PUBLIC_URL + '/awsLogo.jpg'} alt="AWS Logo" className="stackIcon"/></span>
            </div>

            <p className="w-11/12 md:max-w-xl text-xl text-center mt-10 pb-10 font-mono">
                In my free time I always like to improve on my coding and software development ability. I'm always down to learn new skills and technologies. 
                I am still learning ReactJS and AWS to make myself a better Web developer with the ability to work with the cloud. 
                I plan on extending my ReactJS knowledge to make cross platform smartphone apps using React-Native.
            </p>

            <h1 className="text-5xl font-bold mb-7">Other Tools</h1>
            <div className="grid grid-cols-4 gap-4 w-4/5 text-center text-black">
                {createElements(16)}    
            </div>

            {/* <div class="container mx-auto w-60 rounded-lg overflow-hidden shadow-lg my-2 bg-white">
                <div class="relative mb-6">
                    <img class="w-full" src={process.env.PUBLIC_URL + '/swiftLogo.png'} alt="#" />
                    <div class="text-center absolute w-full" >
                        <div class="mb-10">
                            <p class="text-gray-800 tracking-wide uppercase text-3xl font-bold -m-10">Swift</p>
                        </div> 
                    </div>
                </div>
            </div> */}

        </div>
    )
}

export default HomeStack;



/* <div className="bg-white rounded p-4">{chooser()}</div>
<div className="bg-white rounded p-4">{chooser()}</div>
<div className="bg-white rounded p-4">{chooser()}</div>
<div className="bg-white rounded p-4">{chooser()}</div>
<div className="bg-white rounded p-4">{chooser()}</div>
<div className="bg-white rounded p-4">{chooser()}</div>
<div className="bg-white rounded p-4">{chooser()}</div>
<div className="bg-white rounded p-4">{chooser()}</div>
<div className="bg-white rounded p-4">{chooser()}</div>
<div className="bg-white rounded p-4">{chooser()}</div>
<div className="bg-white rounded p-4">{chooser()}</div>
<div className="bg-white rounded p-4">{chooser()}</div>
<div className="bg-white rounded p-4">{chooser()}</div>
<div className="bg-white rounded p-4">{chooser()}</div>
<div className="bg-white rounded p-4">{chooser()}</div>
<div className="bg-white rounded p-4">{chooser()}</div> */


/* <img src={process.env.PUBLIC_URL + '/swiftLogo.png'} alt="Swift Logo" className="stackIconGrid"/>,
<img src={process.env.PUBLIC_URL + '/logo512.png'} alt="React Logo" className="stackIconGrid"/>,
<img src={process.env.PUBLIC_URL + '/pythonLogo.png'} alt=" Python Logo" className="stackIconGrid"/>,
<img src={process.env.PUBLIC_URL + '/awsLogo.jpg'} alt="AWS Logo" className="stackIconGrid"/>, */



/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
<path fill="#0099ff" fill-opacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
</svg> */ 