import React from 'react'
import WorkFlow from "../../assets/home/workflow.png"
const HowItWorks = () => {
  return (
    <div className="howitworks w-screen h-[300vh] flex flex-1 cursor-pointer justify-center">
        <img src={WorkFlow} alt="" className='w-[70%]' />
    </div>
  )
}

export default HowItWorks