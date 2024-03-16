import React, { useEffect, useState } from 'react'
import NavBar from './Components/NavBar/NavBar'
import { Routes, Route } from "react-router-dom"
import Home from './Screens/Home/Home'
import DashBoard from './Screens/DashBoard/DashBoard'
import Dex from './Screens/DeskPage/Dex'
import PtoP from './Screens/PtoP/PtoP'
import Transaction from './Screens/Transaction/Transaction'
import Login from './Screens/Login/Login'
import SignUp from './Screens/SignUp/SignUp'
import Graph from './Components/Graph/Graph'
import Cookies from 'js-cookie'
import { ToastContainer, toast } from 'react-toastify';
import Footer from './Components/Footer/Footer'
function App() {
  const[index,SetIndex]=useState(null);

  const handleIndex=(ind)=>{
         SetIndex(ind);
  }
  console.log(index);
  const [token,SetToken]=useState(null)
  useEffect(()=>{
    const pass=Cookies.get('token'); 
     SetToken(pass);
  },[token]);
  return (
    <>
    <NavBar/>

    <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/dashboard" element={token? <DashBoard handleIndex={handleIndex}/>:<Login/> } />
        <Route path="/dex" element={token?<Dex />:<Login/> } />
        <Route path="/ptop" element={token? <PtoP />:<Login/> } />
        <Route path="/transaction" element={token? <Transaction />:<Login/> } />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={ <SignUp /> } />
        <Route path="/graph" element={token? index && <Graph data={index}/>:<Login/> } />
      </Routes>
    
    <Footer/>
    </>
  )
}

export default App
