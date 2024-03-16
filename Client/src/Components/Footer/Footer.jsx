import React from 'react'
import { Link } from 'react-router-dom'
import TrustChain from "../../assets/TrustChain.png"
const Footer = () => {
    return (
        <div className='footer bg-[#080808] flex justify-evenly items-center gap-28 border-t-2 border-white' data-aos="fade-up">
            <div className='flex gap-20'>
                <div className="h-[300px] w-[300px]">
                    <Link to="/">
                        <img src={TrustChain} alt="" />
                    </Link></div>
                <nav className='flex justify-center items-center'>
                    <ul className='flex flex-col items-center justify-center gap-4 text-white w-[100px] text-center p-3'>
                        <li><Link to='/dashboard'>Dashboard</Link></li>
                        <li><Link to='/dex'>Dex</Link></li>
                        <li><Link to='/ptop'>P2P</Link></li>
                        <li><Link to='/transaction'>Transaction</Link></li>
                    </ul>
                </nav>
            </div>
            <div className='w-[200px]'>
                <form action="" className='flex gap-3'>
                    <input type="email" placeholder='Email id' className='p-2 rounded' />
                    <button className='bg-pink-600 text-white p-1 rounded'>Subscribe</button>
                </form>
                <div className='w-[300px] mt-7'> <p className='text-2xl text-white font-bold'>Trust Chain - Mace Windu</p></div>
               
            </div>
        </div>
    )
}

export default Footer