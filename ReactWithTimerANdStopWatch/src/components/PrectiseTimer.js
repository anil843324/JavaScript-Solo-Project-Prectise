import React, { useEffect, useState } from 'react'
import "./StopWatch.css"

const PrectiseTimer = () => {


    const [timerOn, setTimerOn] = useState(false);


    const [min, setMin] = useState(0);
    const [sec, setSec] = useState(0);

    const [time, setTime] = useState(0);

    useEffect(() => {

        let interval = null;

         if(min && sec){
     
             setTime( Number(min*60)+Number(sec) )
             console.log(Number(min*60)+Number(sec) )
           setSec(0)
            setMin(0)
         }
    
        if (timerOn) {
            interval = setInterval(() => {

                setTime((prevT) => prevT > 0 ? prevT - 1 : prevT)

            }, 1000)
        } else if (!timerOn) {

            clearInterval(interval)

        }


        return () => clearInterval(interval)


    }, [timerOn ,setMin,setSec])




    return (
        <div className='precTimer'>

            <h1>Timer</h1>
            <div style={{ display: "flex" }} >
                <div style={{ display: "flex" }} >
                    <span>Min</span>
                    <input type="number" placeholder='Enter Minute' value={min} onChange={(e) => setMin(e.target.value) } />

                </div>
                <div style={{ display: "flex" }} >
                    <span>Sec</span>
                    <input type="number" placeholder='Enter Sec' value={sec} onChange={(e) =>  setSec(e.target.value) } />
                </div>
            </div>

            <div>
                <span className='time'>{(Math.floor((time - ((Math.floor(time / 3600)) * 3600)) / 60)) < 10 ? ("0" + (Math.floor((time - ((Math.floor(time / 3600)) * 3600)) / 60))) : (Math.floor((time - ((Math.floor(time / 3600)) * 3600)) / 60))} :</span>
                <span className='time'>{(time % 60) < 10 ? ("0" + (time % 60)) : (time % 60)} </span>
            </div>

            <div>
                <button onClick={() => { setTimerOn(true) }}>Start</button>
                <button onClick={() => { setTimerOn(false) }}>Stop</button>
                <button onClick={() => (setTimerOn(false), setTime(0))}>Reset</button>
            </div>




        </div>
    )
}

export default PrectiseTimer