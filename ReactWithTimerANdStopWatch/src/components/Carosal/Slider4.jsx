import React, { useEffect, useState } from 'react'
import "../Carosal/Slider4.css"
const Slider4 = () => {

    const imgarr = [
        {
            url: "https://images.unsplash.com/photo-1604537529428-15bcbeecfe4d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8bmF0dXJhbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60"
        },
        {
            url: "https://images.unsplash.com/photo-1500622944204-b135684e99fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJhbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60"
        }
        , {
            url: "https://images.unsplash.com/reserve/bOvf94dPRxWu0u3QsPjF_tree.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bmF0dXJhbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60"
        }
        , {
            url: "https://images.unsplash.com/photo-1546587348-d12660c30c50?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bmF0dXJhbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60"
        }, {
            url: "https://images.unsplash.com/photo-1585016495481-91613a3ab1bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bmF0dXJhbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60"
        }
    ]

    const [count, setCount] = useState(0)

    

    const Next = () => {

        setCount((prev) => (prev + 1) % imgarr.length)


    }


    const Back = () => {

        if (count >= 1) {


            setCount((prev) => (prev - 1))

        } else {

            setCount(imgarr.length - 1)
        }


    }



    useEffect(() => {

        let interval = null;

        interval = setInterval(() => {

            setCount((prev) => (prev + 1) % imgarr.length)

        }, 4000);

        return () => clearInterval(interval)

    }, [])





    return (
        <div>

            <div className='container'>

                <button onClick={() => { Back() }} >Back</button>

                <img src={imgarr[count].url} alt="slider img" />
                <span>{count}</span>
                <button onClick={() => { Next() }}> Next </button>

            </div>




        </div>
    )
}

export default Slider4