import { useState } from 'react'
import NavBar from './Components/NavBar/NavBar'
import { Routes, Route } from "react-router-dom"
import Home from './Screens/Home/Home'
import DashBoard from './Screens/DashBoard/DashBoard'
import Dex from './Screens/DeskPage/Dex'
import PtoP from './Screens/PtoP/PtoP'
import Transaction from './Screens/Transaction/Transaction'
import Registration from './Screens/Registration/Registration'

function App() {
 

  return (
    <>
    <NavBar/>

    <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/dashboard" element={ <DashBoard /> } />
        <Route path="/dex" element={ <Dex /> } />
        <Route path="/ptop" element={ <PtoP /> } />
        <Route path="/transaction" element={ <Transaction /> } />
        <Route path="/registration" element={ <Registration /> } />
      </Routes>
   
    </>
  )
}

export default App
