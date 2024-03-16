import React from 'react'
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { useState } from "react";
//import { useHistory } from 'react-router-dom';
import { useUser } from '../Context/User';
import Cookies from 'js-cookie';

const PtopUser = ({balance,UpdateBalance,email,name}) => {
  //  const history = useHistory();
    //console.log(user);
    const[toggle,SetToggle]=useState("req");
    const id=Cookies.get('id');
    console.log(email,name);
    const [requestId,setRequestId] = useState("");
    const [amount,setAmount] = useState(0);
    
    console.log(requestId,amount);
    const sendDataToBackend = async () => {
        try {
          const response = await axios.post(`http://localhost:8090/api/request/${id}`, {
            email: requestId,
            amount: amount,
          });
          console.log(response.data); // Log the response from the backend
          //render a new page
          //history.push('/ptop/request');
        } catch (error) {
          console.error('Error sending data to backend:', error);
        }
      };
      




      const Handlesend=()=>{
        if(toggle==='req')SetToggle("send");
      }
      const handleReq=()=>{
        if(toggle==='send')SetToggle("req");
         }

        const update=()=>{
            const pass=window.prompt("Enter the password");
            UpdateBalance(amount,requestId,pass);
        }
    return (
        <div className='container flex flex-col gap-7 justify-center items-center bg-gray-300 rounded-lg w-3/6 h-4/6 m-auto'>
            <div className='flex gap-4 items-center'>
            <img className='w-[70px] h-[70px]' src="https://cdn-icons-png.flaticon.com/512/219/219969.png" alt="" />
            <div className='flex flex-col gap-2'>
            <h1 className='text-gray-700 font-bold text-lg'>{name}</h1>
            <h1 className='text-gray-700 font-bold text-lg'>{email}</h1>
            </div>
            </div>
           
            <div className="btn-section gap-4 flex">
                <div>

                </div>

                {/* request money section start here */}
                <div>
                    <div className='m-2 flex items-center text-center justify-center'><span className='text-black font-semibold text-lg'>Balance:</span><h1 className='text-green-900 text-center font-bold text-lg'>{balance}</h1></div>
                    <div className='w-80 flex justify-between m-2'>
                    <button type="button" className="btn btn-primary text-black" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={handleReq}>
                        Request Money
                    </button>
                    <button type="button" className="btn btn-primary text-black" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={Handlesend}>
                        Send Money
                    </button>
                    </div>
                 {toggle==="req"?
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered"  >
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">User Name</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <TextField 
                                    required id="outlined-required" 
                                    label="MetaMask Id" 
                                    variant="outlined"  
                                    value={requestId}
                                    onChange={(e) => setRequestId(e.target.value)}
                                    />
                                    <TextField
                                    required
                                        id="outlined-number"
                                        label="Number"
                                        type="number"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        value={amount}
                                        onChange={(e) => setAmount(e.target.value)}
                                    />
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary text-black" data-bs-dismiss="modal" >Close</button>
                                    <button type="button" class="btn btn-primary text-black" onClick={sendDataToBackend} data-bs-dismiss="modal">Request</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">User Name</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <TextField 
                                required id="outlined-required" 
                                label="MetaMask Id" 
                                variant="outlined"  
                                value={requestId}
                                onChange={(e) => setRequestId(e.target.value)}
                                />
                                <TextField
                                required
                                    id="outlined-number"
                                    label="Number"
                                    type="number"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)}
                                />
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary text-black" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary text-black" onClick={update}data-bs-dismiss="modal">Send</button>
                            </div>
                        </div>
                    </div>
                </div>
                   }
                </div>
              
                {/* request money section end here */}
            </div>

        </div>
    )
}

export default PtopUser