import { useState, useCallback, useEffect } from 'react';
// import './App.css';

// to check if a character is a number
function isNumber(c) {
    return c >= '0' && c <= '9';
}

// to replace eval() sinces its bad practice
function evaluate(x) {
    // eslint-disable-next-line  
    return new Function('return ' + x)();
}

function Calculator() {
    const [view, setView] = useState('');
    const [lastWord, setLastWord] = useState('');

    // used for decimal point detection 
    useEffect(() => {
        let wordsArray = view.split(' ');
        setLastWord(wordsArray.pop());
    }, [view]);

    // adds each character to the view with logic
    const addToView = useCallback((item) => {
        let lastItem = view.toString().slice(-1); // get last char in string

        // to check the number already contains a decimal point
        if (item === '.' && lastWord.includes('.')) {
            alert('number already includes a decimal');
            return
        }

        // for formatting screen in the view
        if ((isNumber(lastItem) && isNumber(item)) || item === '.' || lastItem === '.') {
            setView(view + item);
        } else {
            setView(view + ' ' + item);
        }
    }, [view, lastWord])

    const buttonStyling = "w-full h-full bg-gray-500 border-2 border-green-300 text-center text-xl lg:text-2xl rounded-xl font-extrabold text-white"

    // used to generate grid of buttons for the UI
    const buttonSymbols = ['%', '/', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+'];
    var buttons = [];
    buttonSymbols.forEach(element => {
        buttons.push(<button className={buttonStyling} onClick={() => addToView(element)}>{element}</button>);
    });

    return (
        <div className="App bg-gray-400 text-center flex justify-center h-screen w-full md:w-1/3 rounded-2xl mr-5 md:mx-10">
            <div className="w-full h-full grid grid-cols-4 grid-rows-6 gap-3 py-10 px-10">
                <div className={`${buttonStyling} col-span-4 align-middle content-center`}>{view}</div>
                <button className={buttonStyling} onClick={() => setView('')}>Clear</button>
                <button className={buttonStyling} onClick={() => addToView('-')}>+-</button>
                {buttons}
                <button className={`${buttonStyling} col-span-2`} onClick={() => addToView('0')}>0</button>
                <button className={buttonStyling} onClick={() => addToView('.')}>.</button>
                <button className={buttonStyling} onClick={() => {
                    let newString = view.replace(/x/g, '*');
                    newString = newString.replace(' ', '')
                    setView(evaluate(newString).toString());
                }}>=</button>

            </div>
        </div>
    );
}

export default Calculator;