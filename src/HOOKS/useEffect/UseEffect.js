import React,{ useState,useEffect } from 'react'
function Timer(){
    const [count,setCount]=useState(0);
useEffect(() => {
   setTimeout(() => {
    setCount((count) => count+1);
    alert("useeffect")
   },1000);
   },[]);
const update = () =>{
    setCount(count+1);
}
  return (
    <>
    <h1>I've rendered {count} times!</h1>
    <button onClick={update}>onClick</button>
    </>
  ) 
}
export default Timer