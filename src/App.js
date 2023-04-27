
import './App.css';
import { useState } from 'react';


function App() {
  const[start,end]=useState("");
  const[headingText,setHeading]=useState(" ");

  function handlechange(event){
    end(event.target.value)
  }
  function handleClick(){
    setHeading(start);
  }

  return (
    <div className="App">
    <input 
      className='inputTag'
      placeholder='Add your name....'
      onChange={handlechange}
      value={start}

    />

    <button onClick={handleClick}>Submit</button>
    <h1>Hi, my name is {headingText}</h1>

    </div>
  );
}

export default App;