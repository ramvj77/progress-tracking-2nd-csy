import { ReactDOM } from 'react';
import Signin from './Signin';
import Signup from './Signup';
import Home from './Home';
import { Routes,Route,BrowserRouter } from 'react-router-dom';


const Navigate = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Signup/>}/>
    <Route path="/Signup" element={<Signup/>}/>
    <Route path="/Signin" element={<Signin/>}/>
    <Route path="/Home" element={<Home/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default Navigate;