import React from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './SignupForm.css'
const SignUpForm = () => {
  return (
    <div className='signupform w-[500px] h-[60vh] text-white flex justify-center flex-col gap-4'>
       <h1>SignUP Here</h1>
       <div>
       <form action="" className='flex flex-col gap-2'>
       <TextField id="outlined-basic" label="Full Name" variant="outlined" className='w-[100%]'/>
       <TextField id="outlined-basic" label="Email Id" variant="outlined" className='w-[100%]'/>
       <TextField id="outlined-basic" label="Password" variant="outlined" className='w-[100%]'/>
       </form>
       </div>
        <div className='h-2/6 flex flex-col gap-2 w-5/6 m-auto'>
        <Button variant="contained" className='bg-black'>Login with WEB3 ID</Button>
        <Button variant="outlined" className='bg-white text-black'>Login with Google</Button>
        </div>
       
        
    </div>
  )
}

export default SignUpForm