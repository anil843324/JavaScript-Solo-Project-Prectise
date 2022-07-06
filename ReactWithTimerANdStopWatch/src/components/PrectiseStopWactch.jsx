import React, { useEffect, useState } from 'react'
import "./StopWatch.css"
const PrectiseStopWactch = () => {

    const [time, setTime] = useState(70);

    const [timerOn, setTimerOn] = useState(false);

  

    useEffect(() => {

        let interval = null;

        if (timerOn) {

           interval= setInterval(() => {

                setTime((prev) => prev + 1)

            }, 1000);

        } else if (!timerOn) {


            clearInterval(interval)
        }


        return () => clearInterval(interval)

    }, [timerOn])


    return (
        <div>

            <div>
                <h1>Second Timer</h1>
                <span className='time'> {  (Math.floor(time/3600)) < 10 ? ("0"+Math.floor(time/3600)) :( Math.floor(time/3600)) } :</span>

                <span className='time'>{ ( Math.floor((time -((Math.floor(time/3600)) *3600))/60 ) ) < 10  ? ('0'+Math.floor((time -((Math.floor(time/3600)) *3600))/60 ) ) : ( Math.floor((time -((Math.floor(time/3600)) *3600))/60 ) ) } :</span>
                {/* seacond */}
                <span className='time'>{(time % 60) < 10 ? ("0"+(time % 60)):(time % 60)}</span>
            </div>

            <button onClick={() => setTimerOn(true)} >Start</button>
            <button onClick={() => setTimerOn(false)} >Stop</button>
            <button onClick={() => (setTime(0), setTimerOn(false))} >Reset</button>


        </div>
    )
}

export default PrectiseStopWactch