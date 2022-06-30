// Global varibles


const time_el = document.querySelector('.watch .time');

const start_btn = document.getElementById('start');
const stop_btn = document.getElementById('stop');
const reset_btn = document.getElementById('reset');


let second = 0;

let inteval = null;


//  Event listners

start_btn.addEventListener('click',start)
stop_btn.addEventListener('click',stop)
reset_btn.addEventListener('click',reset)

//   Update the time


const timer = () => {


    second++;
    //   Format our time
    let hour = Math.floor(second / 3600);
    let min = Math.floor((second - (hour * 3600)) / 60);
    let secs = (second % 60);

    

    if (secs < 10) secs = '0' + secs;
    if (min < 10) min = '0' + min;
    if (hour < 10) hour = '0' + hour;

    time_el.innerText = `${hour}:${min}:${secs}`;


}


  function start(){
    if(inteval){
        return
    }
    inteval=setInterval(timer,1000)
    

 }

 function stop(){
  
    clearInterval(inteval)
     inteval=null;
}
function reset(){

      stop();
      time_el.innerText='00:00:00'
      second=0;


}
















