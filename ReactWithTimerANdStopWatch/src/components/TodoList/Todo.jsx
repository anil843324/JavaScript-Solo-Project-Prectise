import React, { useEffect, useState } from 'react'
import "./Todo.css"

// get the local stoage data 

const getLocalData = () => {

  const lists = localStorage.getItem("Mytodo")

  if (lists) {
    return JSON.parse(lists);
  } else {
    return [];
  }

}




const Todo = () => {


  const [inputData, setInputData] = useState("")

  const [items, setItems] = useState(getLocalData())

  const [isEditItem,setIsEditItem]=useState("")

  const [toggle,setToggle]=useState(false)


  // add items
  const addItems = () => {

    if (!inputData) {
      alert("fill the data")
    }else if (inputData && toggle  ){

           setItems(

             items.map((ele)=>{
               
               if(ele.id===isEditItem){
                   return {...ele, name:inputData}
               }else{
                  return ele;
               }

             })

           )
           setInputData("")
           setToggle(false)


    }
    
    
    else {

      const newInputData = {
        id: new Date().getTime().toString(),
        name: inputData
      }

      setItems([...items, newInputData])
      setInputData("")

    }

  }
 // edit items

 const editItem=(index)=>{

       const items_edited=items.find((ele)=>{

          return ele.id===index

       }) 
      
       setInputData(items_edited.name)
       setIsEditItem(index)
      setToggle(true)

 }








  // delte item one by one

  const delteItems = (index) => {

    let filterData = items.filter((ele) => {

      return ele.id !== index
    })

    setItems(filterData)

  }



  // clear all items

  const clearAllItmes = () => {

    setItems([])
  }


  //  adding local stoarge 
  useEffect(() => {

    localStorage.setItem("Mytodo", JSON.stringify(items))




  }, [items])

 






  return (
    <>


      <h1>Todo list</h1>

      <div className='addItems'>

        <input type="text"
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
          placeholder='✍🏻 Add Items' />
          {toggle ? <button onClick={addItems}>Edit</button>
 : <button onClick={addItems}>+</button> }
         
      </div>
      {/* Show all items Items */}

      <div className='showitems'>

        {items.map((currel, index) => {
          return (

            <div className='eachItems' key={index}>
              <h3>{currel.name}</h3>

              <div className='icondiv'>

                <button onClick={()=>editItem(currel.id)} >Edit</button>
                <button onClick={() => delteItems(currel.id)} >Delete</button>
              </div>

            </div>
          )

        })}




      </div>


      {/*  remove all items */}
      <div className='showItems'>

        <button onClick={clearAllItmes}>Remove All Items</button>

      </div>


    </>
  )
}

export default Todo