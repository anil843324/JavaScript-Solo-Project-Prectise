import React, { useEffect, useState } from 'react'
import "./Slider.css"

import {FaGreaterThan} from "react-icons/fa"
import {FaLessThan} from "react-icons/fa"

const Slider = () => {

  const imgarr=[

    {
        pic:"https://www.thediaryofanomad.com/wp-content/w3-webp/uploads/2021/02/waterfall-quotes-waterfall-captions-10-1.jpgw3.webp"
    },
    {
        pic:"https://media.istockphoto.com/photos/beautiful-waterfall-in-forest-at-erawan-national-park-in-thailand-picture-id1323033650?b=1&k=20&m=1323033650&s=170667a&w=0&h=ZXxTlFUI62q-o2mpVHlpeQEgDBa3ehFJars-IQRvuSQ="
    },
    {
        pic:"https://c4.wallpaperflare.com/wallpaper/390/414/515/waterfall-trees-fall-laos-rainbows-wallpaper-preview.jpg"
    },
    {
        pic:"https://www.thewanderlustwithin.com/wp-content/uploads/2019/12/waterfalls-in-laos.jpeg"
    },
    {
        pic:"https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_960_720.jpg"
    }
  ]

  
    const [next,setNext]=useState(0)

    const Next=()=>{
         setNext((next + 1) % imgarr.length  )
    }  


  const Back=()=>{
      if(next>=1){
        setNext(next-1)
      }else{
        setNext(imgarr.length-1)
      }

  }

  useEffect(() => {
    const intervalId = setInterval(() => {

        setNext((imgSource) => (imgSource + 1) % imgarr.length);

    }, 4000);
    return () => clearInterval(intervalId);
}, [])



  return (
    <div>

       
       <div className='slider'>
       
        <button onClick={()=> {Back()}} > <FaLessThan/> </button>

         
          <img src={imgarr[next].pic} alt="img" />
         
  
            
          
        <button onClick={()=>{Next()}} > <FaGreaterThan/> </button>

       </div>



    </div>
  )
}

export default Slider