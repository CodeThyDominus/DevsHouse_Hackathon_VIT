import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import banner from '../../assets/home/banner.png'
import HowItWorks from '../../Components/HowItWorks/HowItWorks'
const Home = () => {
  return (
    <>
      <div className='home w-screen h-[80vh] justify-around flex bg-[#080808] p-[2rem]'>
        <div data-aos="fade-right" className='transparent flex flex-col justify-center items-center w-[40%]'>
          <h1 className='text-5xl font-extrabold text-white'>Receive accurate signals on trading opportunities</h1>
          <Link to='/login' className='text-black bg-white mt-3 p-3'>Get Started</Link>
        </div>
        <div data-aos="fade-left" className='flex justify-center items-center flex-col p-3 w-[35%]'>

          <div className='w-[500px] h-[500px]'><img src={banner} alt="" /></div>
        </div>
      </div>
      <div className="banner w-screen h-[50vh] bg-[#080808] text-white flex justify-between p-[5rem] items-center">
        <div className='flex justify-center items-center flex-col w-[40%]' data-aos="fade-right">
          <div className='text-2xl'><span className="material-symbols-outlined text-pink-600">
            monitoring
          </span> Accurate Market Prediction</div>
          <div className='text-2xl'>
            <span className="material-symbols-outlined text-pink-600">
              trending_up
            </span>
            Avg income increas</div>
        </div>
        <div className='w-[30%]' data-aos="fade-left">
          <h1 className='text-white text-xl opacity-70'>Get daily precise cryptocurrency signals helping you automta your trading workflow via real-time forecasts and predications made by AI</h1>
        </div>
      </div>
      <div data-aos="fade-up-right" className='mt-[40vh]'><HowItWorks /></div>
    </>
  )
}

export default Home