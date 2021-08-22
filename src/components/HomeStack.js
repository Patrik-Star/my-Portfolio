import React from "react";

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
                'pycharm',
                'intellij',
                'CLion',
                'sublime'];

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
      return item;
    };
}

var chooser = randomNoRepeats();

function createElements(n){
    var elements = [];
    for(let i = 0; i < n; i++){
        elements.push(<div className={`bg-white rounded p-4 border-2 border-c-light-blue`}>{chooser()}</div>);
    }
    return elements;
}

function HomeStack() {
    return (
        <div className="h-auto flex flex-col items-center justify-center bg-gradient-to-b from-white to-gray-200 pb-44">
            <h1 className="text-5xl font-bold pt-10">Stack I use</h1>
            <div className="flex flex-wrap justify-center mt-10">
                <span><img src={process.env.PUBLIC_URL + '/swiftLogo.png'} alt="Swift Logo" className="stackIcon"/></span>
                <span><img src={process.env.PUBLIC_URL + '/logo512.png'} alt="React Logo" className="stackIcon"/></span>
                <span><img src={process.env.PUBLIC_URL + '/pythonLogo.png'} alt=" Python Logo" className="stackIcon"/></span>
                <span><img src={process.env.PUBLIC_URL + '/awsLogo.jpg'} alt="AWS Logo" className="stackIcon"/></span>
            </div>

            <p className="w-11/12 md:max-w-xl text-xl text-center mt-10 pb-10 font-mono">
                In my free time I always like to improve on my coding and software development ability. I'm always down to learn new skills and technologies. 
                I am still learning ReactJS and AWS to make me a better Web developer with the ability to work with the cloud. 
                I plan on extending my ReactJS knowledge to make cross platform smartphone apps using React-Native.
            </p>

            <h1 className="text-5xl font-bold">Other Tools</h1>
            <div className="grid grid-cols-4 gap-4 w-4/5 text-center text-black">
                {createElements(16)}
                            
            </div>
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