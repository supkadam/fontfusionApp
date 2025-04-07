import './App.css'
import {useRef, useState} from 'react'
import screenshot from 'html2canvas';
import { FaFillDrip } from "react-icons/fa";

export default function App(){
    const changeTextColor = (colorName) => {
      document.getElementById('textContent').style.color = colorName
    }

    const changeBgColor = (colorName) => {
      document.getElementById('textContent').style.backgroundColor = colorName
    }

    const[tColor,setTColor] = useState('000');
    const image = useRef();
    const setTextColor = (colorname) =>{
        image.current.style.color = colorname;
    }

    const[bColor,setBColor] = useState('000');
    const setBGColor = (colorname) =>{
      image.current.style.backgroundColor = colorname;
    }

    const setFont = (fontname) =>{
      image.current.style.fontFamily = fontname;
    }

    const downloadImage = () => {
      screenshot(image.current).then(canvas => {
          const imageData = canvas.toDataURL("image/png")
          const link = document.createElement('a')
          link.href=imageData
          const currentdateTime = Date.now();
          link.download="font-fusion."+currentdateTime+".png";
          link.click()
      });
    }

    const setBGImage = (bgImage) => {
      image.current.style.backgroundImage = `url(${bgImage})`;
    }

    const resetContent = () => {
      image.current.style.color = 'black';
      image.current.backgroundColor = 'white';
      image.current.style.fontFamily = 'Times New Roman';
      image.current.style.backgroundImage = 'none';
    }

    return(
      <>
        <div id='outerDiv'>
        <div className='heading'>
          <h1 id="heading">Font Fusion</h1>
        </div>

        <div className='parent'>
            <div id='child1'>
              <h1 ref={image} contentEditable='true' id='textContent'>Write your text here ....</h1>
              <div id='buttonsDiv'>
                <button id='resetBtn' onClick={resetContent}>Reset</button>
                <button id='download-btn' onClick={downloadImage}>Download</button>
              </div>
            </div>
            <div id='child2'>
              <div id='text-colors'>
                <h2>Choose text color</h2>
                <div id='textcolors-name'>
                  <button id='red' onClick={()=>{changeTextColor('red')}}></button>
                  <button id='green' onClick={()=>{changeTextColor('green')}}></button>
                  <button id='blue' onClick={()=>{changeTextColor('blue')}}></button>
                  <button id='yellow' onClick={()=>{changeTextColor('yellow')}}></button>
                  <button id='purple' onClick={()=>{changeTextColor('purple')}}></button>
                  <button id='burlywood' onClick={()=>{changeTextColor('burlywood')}}></button>
                  <button id='violet' onClick={()=>{changeTextColor('violet')}}></button>
                  <button id='chocolate' onClick={()=>{changeTextColor('chocolate')}}></button>
                  <button id='darkturquoise' onClick={()=>{changeTextColor('darkturquoise')}}></button>
                  <button id='maroon' onClick={()=>{changeTextColor('maroon')}}></button>
                  <label htmlFor="colorPicker" style={{ cursor: "pointer" }}>
                    <FaFillDrip size={30} color={tColor} />
                  </label>
                  
                  <input type='color' value={tColor} id="colorPicker" onChange={(event)=>{
                    setTColor(event.target.value)
                    setTextColor(event.target.value)
                    }} title='more colors'></input>
                </div>
                
              </div>
              <div id='bg-colors'>
                <h2>Choose background color</h2>
                <div id='textcolors-name'> 
                  <button id='red' onClick={()=>{changeBgColor('red')}}></button>
                  <button id='green' onClick={()=>{changeBgColor('green')}}></button>
                  <button id='blue' onClick={()=>{changeBgColor('blue')}}></button>
                  <button id='yellow' onClick={()=>{changeBgColor('yellow')}}></button>
                  <button id='purple' onClick={()=>{changeBgColor('purple')}}></button>
                  <button id='burlywood' onClick={()=>{changeBgColor('burlywood')}}></button>
                  <button id='violet' onClick={()=>{changeBgColor('violet')}}></button>
                  <button id='chocolate' onClick={()=>{changeBgColor('chocolate')}}></button>
                  <button id='darkturquoise' onClick={()=>{changeBgColor('darkturquoise')}}></button>
                  <button id='maroon' onClick={()=>{changeBgColor('maroon')}}></button>
                  <label htmlFor="bcolorPicker" style={{ cursor: "pointer" }}>
                    <FaFillDrip size={30} color={bColor} />
                  </label>
                  <input type='color' value={bColor} id='bcolorPicker'
                  onChange={(event)=>{
                    setBColor(event.target.value)
                    setBGColor(event.target.value)
                  }}></input>

                </div>
                  
              </div>

              <div id='fonts'>
                <h2>Choose Font</h2>
                <div id='font-cells'>
                  <h1 id='times-new' onClick={()=>{setFont('Times New Roman')}}>Hello</h1>
                  <h1 id='cursive' onClick={()=>{setFont('cursive')}}>Hello</h1>
                  <h1 id='verdana' onClick={()=>{setFont('Verdana')}}>Hello</h1>
                  <h1 id='arial' onClick={()=>{setFont('Arial')}}>Hello</h1>
                  <h1 id='impact' onClick={()=>{setFont('Impact')}}>Hello</h1>
                  <h1 id='fantasy' onClick={()=>{setFont('fantasy')}}>Hello</h1>
                </div>
                
              </div>

              <div id='backgrounds'>
                <h2>Choose background picture</h2>
                <div id='bg-pic-cells'>
                  <img id='pic1' src='/pic1.jpg' onClick={()=>{setBGImage('pic1.jpg')}}></img>
                  <img src="/pic2.jpg" alt="" id="pic2" onClick={()=>{setBGImage('pic2.jpg')}}/>
                  <img src="/pic3.jpg" alt="" id="pic3" onClick={()=>{setBGImage('pic3.jpg')}}/>
                  <img src="/pic4.jpg" alt="" id="pic4" onClick={()=>{setBGImage('pic4.jpg')}}/>
                  <img src="/pic5.jpg" alt="" id="pic5" onClick={()=>{setBGImage('pic5.jpg')}}/>
                  <img src="/pic6.jpg" alt="" id="pic6" onClick={()=>{setBGImage('pic6.jpg')}}/>
                  <img src="/pic7.jpg" alt="" id="pic7" onClick={()=>{setBGImage('pic7.jpg')}}/>
                </div>
                
              </div>
              
            </div>

        </div>
        </div>
        
      </>
    );
}