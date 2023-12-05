import React,{useState} from 'react'

const Hook = () => {
    const[Count,setCount] = useState(0)
  return (
    <div>
    <p>Count:{Count}</p>
    <button onClick={()=>setCount(Count+1)}>Increment</button>
    <button onClick={()=>{
        if(Count>0)
        setCount(Count-1)
    }}>Decrement</button>
    </div>
  )
}  

export default Hook