import React from "react"
import { useState } from 'react';
import counter from './counter.css'
function Counter() {
    let [data,setData]=useState(1)
  
    function onClickEventUp(){
      setData(data+1)
    }
    function onClickEventDown(){
      setData(data-1)
      if(data==0){
        setData(0)
        alert("Sorry You can't Go Below Zero(0)")
      }
    }
  
    return(
      <>
      <div className='btn'>
        <h2>Counter App</h2>
        <p className='text'>{data}</p>
        <button className='button1' onClick={onClickEventUp}>Increasing</button>
        <button className='button1' onClick={onClickEventDown}>Decreasing</button>
      </div>
      
      </>
    )
  }
  
  export default Counter;