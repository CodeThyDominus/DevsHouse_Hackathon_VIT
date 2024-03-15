import { useState } from 'react'
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
function App() {
  const[index,SetIndex]=useState(null);

  const handleIndex=(ind)=>{
         SetIndex(ind);
  }
  console.log(index);
  return (
    <>
    <NavBar/>

    <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/dashboard" element={ <DashBoard handleIndex={handleIndex}/> } />
        <Route path="/dex" element={ <Dex /> } />
        <Route path="/ptop" element={ <PtoP /> } />
        <Route path="/transaction" element={ <Transaction /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/signup" element={ <SignUp /> } />
        <Route path="/graph" element={ <Graph data={index}/> } />
      </Routes>
   
    </>
  )
}

export default App
