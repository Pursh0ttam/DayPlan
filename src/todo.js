import React,{useState} from 'react'




const Todo = () => {

    const [name,setName]=useState("");
    const [isShow,setIsShow]=useState(false);
  const handlechange=(e)=>{
    console.log(e);
    setName(e.target.value)
    
  }

  const handleAdd=()=>{
     setIsShow(true)
  }


  return (
    <div>

      <input type="text" name='list' value={name} onChange={(e)=>handlechange(e)} />
      <button onClick={handleAdd}> Add</button>

      { isShow && <h1>{name}</h1>}

    </div>
  )
}

export default Todo