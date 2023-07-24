import { useState } from 'react';

export default function DynamicCard() {
  
  // Change the width
  const [width, setWidth] = useState(280);
  const changeWidth = (event) => {
    setWidth(event.target.value);
  };
  
  // Change height of the box
  const [height, setHeight] = useState(230);
  const changeHeight = (event) => {
    setHeight(event.target.value);
  };
  
  // Changes the color
  const [color, setColor] = useState('');
  const changeColor = (event) => {
    setColor(event.target.value);
  };
  
  const [border, setBorder] = useState('solid');
  const changeBorder = (event) => {
    setBorder(event.target.value);
  };
  
  const [borderSize, setBorderSize] = useState(2);
  const changeBorderSize = (event) => {
    setBorderSize(event.target.value);
  };
  
  const [borderColor, setBorderColor] = useState('');
  const changeBorderColor = (event) => {
    setBorderColor(event.target.value);
  };
  
  return (
    <div>
      <div className="flex overflow-x-scroll overflow-auto w-full">
       
      <div className="block flex-nowrap w-80 h-auto bg-green-400 p-3 rounded-lg mx-5 text-white font-bold" style={{ width: `${width}px`, height: `${height}px`, backgroundColor: color, border: `${borderSize}px ${borderColor} ${border}`}} > 
        <p className={color !== '' ? 'mix-blend-difference' : ''}> Customizable me! </p>
                                                                                             
        <div className="flex font-bold text-white my-1"> 
          <p className={color !== '' ? 'mix-blend-difference' : ''}>  Width: </p> 
          <input type='range' onChange={changeWidth} min={280} max={600} step={1} value={width} className="ml-2"></input>
        </div>
        
        <div className="flex font-bold text-white my-1">
          <p className={color !== '' ? 'mix-blend-difference' : ''}>  Height: </p> 
          <input type='range' onChange={changeHeight} min={230} max={400} step={1} value={height} className="ml-2"></input>
        </div>
         
        <div className="flex font-bold text-white my-1">
          <p className={color !== '' ? 'mix-blend-difference' : ''}>  Color: </p> 
          <input type="color" value={color} onChange={changeColor} className="ml-2"/>
        </div>
        
        <div className="flex font-bold text-white my-1">
          <p className={color !== '' ? 'mix-blend-difference' : ''}>  Border: </p> 
          <form onChange={changeBorder} className="ml-2 text-black">
            <select id="cars" name="cars">
              <option value="solid">solid</option>
              <option value="dotted">dotted</option>
              <option value="dashed">dashed</option>
              <option value="double">double</option>
              <option value="ridge">ridge</option>
            </select>
          </form>
        </div>
        
        <div className="flex font-bold text-white mt-1">
          <p className={color !== '' ? 'mix-blend-difference' : ''}>  Border Size: </p> 
          <input type='range' onChange={changeBorderSize} min={2} max={10} step={1} value={borderSize} className="ml-2"></input>
        </div>
        
        <div className="flex font-bold text-white my-1">
          <p className={color !== '' ? 'mix-blend-difference' : ''}> Border Color: </p> 
          <input type="color" value={color} onChange={changeBorderColor} className="ml-2"/>
        </div>
        
      </div>
    </div>
    </div>
  )
}