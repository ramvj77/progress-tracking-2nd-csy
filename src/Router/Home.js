import React from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate=useNavigate();
    const handleBack=()=>{
        navigate('/Signin');
    }
  return (
    <button onClick={handleBack}>BACK</button>
  )
}

export default Home