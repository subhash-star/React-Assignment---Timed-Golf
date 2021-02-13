import React, { Component, useEffect, useState } from "react";
import "../styles/App.css";
const App =()=> {
  
  const [time,setTime]=useState(0);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [movement, setMovement] = useState(false);
  const [timer,setTimer]=useState();
  // componentDidMount() { 
  // }
  // componentWillUnmount() { 
  // }
  const changePosition=(event)=>{
    switch(event.keyCode){
      case 39:
          setX(x=>x+5)
          break;
      case 40:
          setY(y=> y+5)
          break;
      case 37:
          setX(x=> x-5)
          break;
      case 38:
          setY(y=> y-5)
          break;
    }
  }
  useEffect(()=>{
    if(x==250 && y==250){
      setMovement(movement=> false); 
      // REMOVE SETINTERVAL
      clearInterval(timer);
    }
    if(movement){
      document.addEventListener("keydown",changePosition);
      return()=>(
        document.removeEventListener("keydown",changePosition)
      )
    }
  },[movement,x,y])
  
  const startMovement=()=>{
    setMovement(movement=> true);
    //console.log(time) 
    setTimer(timer=> setInterval(() => {
      setTime(time=>time+1)
    },1000))
  }
  useEffect(()=>{
    document.querySelector('.heading-timer').innerText=`${time}`;    
  },[time])
  return (
    <>
      <div className="ball" style={{left:x+"px" , top:y+"px"}}></div>
      <div className="hole"></div>
      <div className="heading-timer">0</div>
      <button className="start" onClick={startMovement}>start</button>
    </>
  );
  
}

export default App;
