import React, { useEffect, useState } from 'react'

const StopWatch2 = () => {

 
     const [timeOn,setTimeOn]=useState(false);

     const [time,setTime]=useState(0)
       
      useEffect(() => {

           let interval=null;

           if(timeOn){

            interval=setInterval(()=>{
               
                setTime((prevTime)=>prevTime+1)
      
              },1)

           }else if(!timeOn){

             clearInterval(interval)
           }

      return ()=>clearInterval(interval)
       
      }, [timeOn])
      
         
   let hour=Math.floor(time/3600)

   let min= Math.floor( (time-(hour*3600)) /60);
   let sec=time%60;



  return (
    <div>



        <h1>Stop watch</h1>

           <div>
                <span  style={{fontSize:"20px"}}> {(hour) <10 ?("0"+hour): (hour) }:</span>
                <span  style={{fontSize:"20px"}}>  {(min) <10 ?("0"+min): (min) } :</span>
                <span  style={{fontSize:"20px"}}>{(sec) <10 ?("0"+sec): (sec) }</span>
             
           </div>
          <div>

             <button onClick={()=>{setTimeOn(true)}}  >Start</button>
             <button  onClick={()=>{setTimeOn(false)}} >Stop</button>
             <button  onClick={()=> (setTimeOn(false), setTime(0) ) } >Reset</button>
          </div>



    </div>
  )
}

export default StopWatch2