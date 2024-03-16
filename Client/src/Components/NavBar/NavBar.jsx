import React from 'react'
import './NavBar.css'
import { Link } from "react-router-dom";
import TrustChain from "../../assets/TrustChain.png"

const NavBar = () => {
  return (
    <div className='navbarCss w-screen h-[15vh] bg-black flex justify-between items-center p-10 sticky top-0 z-20'>
        <div className="logo">
          <Link to="/">
            <img src={TrustChain} alt="" />
            </Link></div>
        <nav>
            <ul className='flex  gap-4'>
                <li><Link to='./dashboard'>Dashboard</Link></li>
                <li><Link to='./dex'>Dex</Link></li>
                <li><Link to='./ptop'>P2P</Link></li>
                <li><Link to='./transaction'>Transaction</Link></li>
            </ul>
        </nav>
        <div className='register gap-3 flex items-center'>
        <Link to='./login' className='text-white'>Login</Link>
        <Link to='./signup' className='text-black bg-white p-2 rounded-sm'>Signup</Link>
        </div>
    </div>
  )
}

export default NavBar