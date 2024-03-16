import React, { useState } from 'react'
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Link } from "react-router-dom";
import './SignupForm.css';
import axios from'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
const SignUpForm = () => {
  const[pass,Setpass]=useState("")
  const[email,SetEmail]=useState("")
  const[name,SetName]=useState("");
  const Navigate=useNavigate();
  const HandleName=(e)=>{
     SetName(e.target.value);
  }
  const HandleEmail=(e)=>{
    SetEmail(e.target.value);
  }
  const HandlePass=(e)=>{
    Setpass(e.target.value);
  }
  const submitDataToDb= async()=>{
    try{
      const {status,data:{data}}= await axios.post("http://localhost:8090/api/signup",{username:name,email,password:pass});
      console.log(status,data.token);
      if(status==200){
        Cookies.set('token',data.token);
         Navigate('/');
      }
      notify();
     
    }catch(err){
      console.log(err)
    }
  }
   const notify=()=>{
    toast.success("Login Succesfully", {
      position: toast.POSITION.TOP_CENTER,
      theme:"dark",
      autoClose:1000,
    })
  }
  return (
      <>
    <Card className='container flex flex-col justify-center items-center gap-7'>
        <Button variant="outlined" className='bg-neutral-200 w-5/6 text-black rounded-3xl border-transparent font-bold'>Sign in with Web3 ID</Button>
        <Button variant="outlined" className='bg-neutral-200 w-5/6 text-black rounded-3xl border-transparent font-bold'>Sign in with google</Button>
        <div className='w-10/12 flex items-center justify-center gap-4'><div className='border w-2/6'></div> <div>or</div> <div className='border w-2/6'></div></div>
        <TextField id="outlined-basic" label="Username" variant="outlined" size='small' className=' w-5/6 rounded-3xl'value={name} onChange={HandleName}/>
        <TextField id="outlined-basic" label="Email id" variant="outlined" size='small' className=' w-5/6 rounded-3xl' value={email} onChange={HandleEmail} />
        <TextField id="outlined-basic" label="Password" variant="outlined" size='small' className=' w-5/6 rounded-3xl'  value={pass} onChange={HandlePass}/>
        <Button  variant="outlined" className='bg-blue-500 w-5/6 text-white rounded-3xl border-transparent' onClick={submitDataToDb}>
        Continue
        </Button>
       
    </Card>
    
    </>
  )
}

export default SignUpForm