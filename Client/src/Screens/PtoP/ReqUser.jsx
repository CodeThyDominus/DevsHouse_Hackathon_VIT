import React from 'react'

function ReqUser({name,email,amount,UpdateBalance}) {
    const Update=()=>{
      const pass=window.prompt("Enter the password");
        
        UpdateBalance(amount,email,pass);
    }
  return (
    <div className='m-2 bg-blue-200 flex w-[25%] gap-2'>
      <h1>{name}</h1>
      <h3>{email}</h3>
      <h2>{amount}</h2>
      <h1 className='bg-red-200' onClick={Update}>Send</h1>
     </div>
  )
}

export default ReqUser