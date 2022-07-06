import React, { useEffect } from "react";
import './StopWatch.css'

const StopWatch = () => {
  const [time, setTime] = React.useState(0);

  const [timerOn, setTimerOn] = React.useState(false);

  useEffect(() => {
    let interval = null;

    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else if (!timerOn) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
    
  }, [timerOn]);

  // Math.floor(second / 3600);
  //let min = Math.floor((second - ( hour* 3600)) / 60);

  return (
    <div className="Timers">
      <h2>Stopwatch</h2>
      <div id="display">
        <span className="time">{  (Math.floor(time / 3600)) <10 ?    ("0" + Math.floor(time / 3600)) :(Math.floor(time / 3600))  }:</span>
        <span className="time">{   ( Math.floor((time - ((Math.floor(time / 3600)) * 3600)) / 60)) <10 ? ("0" + Math.floor((time - ((Math.floor(time / 3600)) * 3600)) / 60)) :   (Math.floor((time - ((Math.floor(time / 3600)) * 3600)) / 60))  }:</span>
        <span className="time">{  (time % 60) <10 ?  ("0" + (time % 60 ) ) : (time % 60 )}</span>
      </div>



      <button onClick={() => setTimerOn(true)}>Start</button>

      <button onClick={() => setTimerOn(false)}>Stop</button>

      <button onClick={() => (setTime(0), setTimerOn(false) ) }>Reset</button>




    </div>
  );
};

export default StopWatch