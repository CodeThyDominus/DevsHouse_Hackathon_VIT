import React,{useState}from 'react'
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import axios from'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie'
import { useUser } from '../../Components/Context/User';
import "./Login.css"
function Login() {
  const Navigate=useNavigate();
    const[pass,Setpass]=useState("")
    const[email,SetEmail]=useState("")
    const{SetUser}=useUser();
  const HandleEmail=(e)=>{
    SetEmail(e.target.value);
  }
  const HandlePass=(e)=>{
    Setpass(e.target.value);
  }

  const submitDataToDb= async()=>{
    try{
      const {status,data}= await axios.post("http://localhost:8090/api/login",{email,password:pass});
      //const user={id:data._id,email:data.email}
      SetUser(data);
      if(status==200){
        Cookies.set('token',data.token);
        Cookies.set('id',data._id);
         Navigate('/');
         //window.location.reload();
         console.log("login success");
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
    <div>
        <Card className='container flex flex-col justify-center items-center gap-7 w-[50%]'>
        <Button variant="outlined" className='bg-neutral-200 w-5/6 text-black rounded-3xl border-transparent font-bold'>Sign in with Web3 ID</Button>
        <Button variant="outlined" className='bg-neutral-200 w-5/6 text-black rounded-3xl border-transparent font-bold'>Sign in with google</Button>
        <div className='w-10/12 flex items-center justify-center gap-4'><div className='border w-2/6'></div> <div>or</div> <div className='border w-2/6'></div></div>
        <TextField id="outlined-basic" label="Email id" variant="outlined" size='small' className=' w-5/6 rounded-3xl' value={email} onChange={HandleEmail} />
        <TextField id="outlined-basic" label="Password" variant="outlined" size='small' className=' w-5/6 rounded-3xl'  value={pass} onChange={HandlePass}/>
        <Button variant="outlined" className='bg-blue-500 w-5/6 text-white rounded-3xl border-transparent' onClick={submitDataToDb}>
        Login
        </Button>
    </Card>
    </div>
  )
}

export default Login