import React from 'react'

function ReqUser({name,email,amount,UpdateBalance}) {
    const Update=()=>{
      const pass=window.prompt("Enter the password");
        
        UpdateBalance(amount,email,pass);
    }
  return (
    <div className='m-2 bg-blue-200/10 flex w-96 gap-2 h-10 p-2 rounded-lg border-2 justify-between border-white' data-aos-easing="ease-right">
      <h1 className='text-white'>{name}</h1>
      <h3 className='text-white'>{email}</h3>
      <h2 className='text-white'>{amount}</h2>
      <button className='bg-green-900 text-white p-2 flex justify-center items-center rounded-xl' onClick={Update}>Send</button>
     </div>
  )
}

export default ReqUser