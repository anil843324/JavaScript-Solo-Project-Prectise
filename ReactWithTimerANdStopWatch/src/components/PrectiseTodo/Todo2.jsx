import React, { useState } from 'react'
import "../PrectiseTodo/Todo.css"
const Todo2 = () => {

  const [inputData, setInputData] = useState("")

  const [items, setItems] = useState([])

  const [isEditId, setIsEditId] = useState('')

  const [toogle, setToggle] = useState(false)


  //  add items in list

  const addItems = () => {

    if (!inputData) {
      alert("Please fill the data")
    }else if(inputData && toogle){
      setItems(

        items.map((ele)=>{
          
          if(ele.id===isEditId){
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

      let data = {
        id: new Date().getTime().toString(),
        name: inputData
      }
      setItems([...items, data])
      setInputData("")
    }

  }
  //  edit items

  const editItems = (index) => {

    let findData = items.find((ele) => {

      return ele.id === index;
    })

   setInputData(findData.name)
   setToggle(true)
   setIsEditId(index)
  }




  // delte item

  const delteItem = (index) => {

    let fileterData = items.filter((ele) => {

      return ele.id !== index
    })

    setItems(fileterData)


  }


  return (
    <div>

      <h1>Todo List</h1>


      {/* Input item */}

      <div>
        <input type="text" value={inputData}
          placeholder='Enter Items'
          onChange={(e) => { setInputData(e.target.value) }}
        />

        {toogle ? <button
          onClick={addItems}
        >Edit</button> : <button
          onClick={addItems}
        >+</button>}
        

      </div>
      {/*  Show items */}

      <div className='showContainer'>

        {

          items.map((ele) => {

            return (
              <div className='showitms' key={ele.id}>
                <h4>{ele.name}</h4>
                <div className='buttonDiv'>

                  <button onClick={() => { editItems(ele.id) }}>Edit</button>
                  <button onClick={() => { delteItem(ele.id) }}  >Delete</button>
                </div>
              </div>
            )
          })

        }






      </div>

      <div>
        <button onClick={() => { setItems([]) }} >Clear items</button>
      </div>




    </div>



  )
}

export default Todo2