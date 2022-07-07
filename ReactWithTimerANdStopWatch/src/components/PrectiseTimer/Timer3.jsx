import React, { useEffect, useState } from 'react'

const Timer3 = () => {

    const [timerOn,setTimerOn]=useState(false)

     const [min,setMin]=useState(0);
     const [sec,setSec]=useState(0);

     const [time,setTime]=useState(0)

   
    
   
     
     useEffect(() => {

           let interval=null;

            if(min && sec){
                 setTime(    (Number(min)*60)+(Number(sec))  )

                
                setMin(0)
                setSec(0)
            }

            if(timerOn){
               interval= setInterval(()=>{

                    setTime((prevt)=> prevt >0 ? prevt-1:prevt )
                    
                  },1000)
            }else if(!timerOn){
                 clearInterval(interval)
            }
          
            return ()=> clearInterval(interval)

      
     }, [timerOn,setMin,setSec])
     



let hours=Math.floor(time/3600)

let mins= Math.floor(  ( time -(hours *3600))/60  )
let secs=time%60; 








  return (
    <div>

            <h1>Timer</h1>

           <div >
        <input type="number" value={min} placeholder="Enter min" onChange={(e)=>setMin(e.target.value)} />
        <br />
        <input type="number" value={sec} placeholder="Enter sec" onChange={(e)=>setSec(e.target.value)} />

           </div>
            
            <div>
              
               <span> { (mins) < 10 ? ("0"+ mins) : (mins) } :</span>
               <span> { (secs) < 10 ? ("0"+ secs) : (secs) } </span>

            </div>
          
           <div>
              <button onClick={()=> {setTimerOn(true)}} >Start</button>
              <button onClick={()=> {setTimerOn(false)}}>Stop</button>
              <button onClick={()=> (setTimerOn(false),setTime(0))}>Reset</button>
           </div>







    </div>
  )
}

export default Timer3