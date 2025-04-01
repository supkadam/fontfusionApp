import './App.css'

export default function App(){
    const changeTextColor = (colorName) => {
      document.getElementById('textContent').style.color = colorName
    }

    const changeBgColor = (colorName) => {
      document.getElementById('textContent').style.backgroundColor = colorName
    }

    return(
      <>
        <div className='heading'>
          <h1 id="heading">Font Fusion</h1>
        </div>

        <div className='parent'>
            <div id='child1'>
              <h1 contentEditable='true' id='textContent'>Write your text here ....</h1>
              <button id='download-btn'>Download</button>
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
                  <input type='color'></input>
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
                  <input type='color' ></input>

                </div>
                  
              </div>
              
            </div>

        </div>
        
      </>
    );
}