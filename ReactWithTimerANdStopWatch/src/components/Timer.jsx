import React, { useEffect, useState } from "react";
import './StopWatch.css'

const Timer = () => {
  

  const [timerOn, setTimerOn] = React.useState(false);

   const [inputTime,setInputTime]=useState(0)
  

   const [time, setTime] = React.useState(0);

  
  
 
  useEffect(() => {
    let interval = null;

    if(inputTime){
      setTime(inputTime)
      setInputTime(0)
    }
  
    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime >0 ? prevTime-1:prevTime );
      }, 1000);
    } else if (!timerOn) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
    
  }, [timerOn,setInputTime]);

  // Math.floor(second / 3600);
  //let min = Math.floor((second - ( hour* 3600)) / 60);

  return (
    <div className="Timers">
      <h2>Coundown Timer</h2>
              <input type="number" placeholder="Enter Time" value={inputTime} onChange={(e)=>{setInputTime(e.target.value)}}/>
      <div id="display">
        <span className="time">{  (Math.floor(time / 3600)) <10 ?    ("0" + Math.floor(time / 3600)) :(Math.floor(time / 3600))  }:</span>
        <span className="time">{   ( Math.floor((time - ((Math.floor(time / 3600)) * 3600)) / 60)) <10 ? ("0" + Math.floor((time - ((Math.floor(time / 3600)) * 3600)) / 60)) :   (Math.floor((time - ((Math.floor(time / 3600)) * 3600)) / 60))  }:</span>
        <span className="time">{  (time % 60) <10 ?  ("0" + (time % 60 ) ) : (time % 60 )}</span>
      </div>



      <button onClick={() => setTimerOn(true)}>Start</button>

      <button onClick={() => setTimerOn(false)}>Stop</button>

      <button onClick={() => (setTime(0),setTimerOn(false))}>Reset</button>




    </div>
  );
};

export default Timer