import React from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './SignupForm.css'
const SignUpForm = () => {
  return (
    <div className='signupform w-[500px] h-[60vh] text-gray-500 flex justify-center flex-col gap-4 bg-slate-300'>
       <h1 className='text-center text-2xl'>Welcome User !</h1>
       <div>
       <form action="" className='flex flex-col gap-2'>
       <TextField id="outlined-basic" label="Full Name" variant="outlined" className='w-[100%]'/>
       <TextField id="outlined-basic" label="Email Id" variant="outlined" className='w-[100%]'/>
       <TextField id="outlined-basic" label="Password" variant="outlined" className='w-[100%]'/>
       <Button variant="outlined" className='bg-pink-600 text-white' type='submit'>Submit</Button>
       </form>
       </div>
        <div className='h-2/6 flex flex-col gap-2 w-5/6 m-auto'>
        <Button variant="contained" className='bg-black'>Login with WEB3 ID</Button>
        <Button variant="outlined" className='bg-pink-600 text-white'>Login with Google</Button>
        </div>
       
        
    </div>
  )
}

export default SignUpForm