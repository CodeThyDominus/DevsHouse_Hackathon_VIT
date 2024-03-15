import React from 'react'
import './NavBar.css'
import { Link } from "react-router-dom";


const NavBar = () => {
  return (
    <div className='navbar w-screen h-[10vh] bg-black flex justify-between items-center p-10'>
        <div className="logo"><h1 className='text-white'>TrustChain</h1></div>
        <nav>
            <ul className='flex  gap-4'>
                <li><Link to='./dashboard'>Dashboard</Link></li>
                <li><Link to='./dex'>Dex</Link></li>
                <li><Link to='./ptop'>P2P</Link></li>
                <li><Link to='./transaction'>Transaction</Link></li>
                <li><Link to='./registration'>Registration</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default NavBar