import React, { useEffect, useState } from 'react'
import './Ptop.css'
import PtopUser from '../../Components/PtopUser/PtopUser'
import { useUser } from '../../Components/Context/User'
import Cookies from 'js-cookie'
import axios from 'axios'
import ReqUser from './ReqUser'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Ptop = () => {
  const id = Cookies.get('id');
  //const [user,SetUser]=useState(null);
  const { user } = useUser();
  const [req, SetReq] = useState([]);
  const [amount, SetAmount] = useState(0);
  const [email, SetEmail] = useState("");
  const [name, SetName] = useState("");
  const [toggle, SetToggle] = useState(false);
  //console.log(req);
  // useEffect(()=>{
  //   (async () => {
  //     try {
  //         const {data:{profile}} = await axios.get(`http://localhost:8090/api/profile/${id}`);
  //         console.log(profile);
  //         setUser(profile);

  //         //setUser(profile);
  //     } catch (err) {
  //       console.error("Error fetching profile:", err);
  //     }
  //  })()
  //  },[])
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //      // if (user) {
  //         const { data: { profile } } = await axios.get(`http://localhost:8090/api/profile/${id}`);
  //         setUser(profile);
  //      // }
  //     } catch (err) {
  //       console.error("Error fetching profile:", err);
  //     }
  //   };

  //   fetchData();
  // }, []);

  useEffect(() => {
    if (user) {
      SetReq(user.request || []);
      SetAmount(user.amount || 0);
      SetEmail(user.email || "");
      SetName(user.name || "");
    }
  }, [user]);

  const UpdateBalance = async (amount, email, pass) => {
    try {
      const { data: { newdata, message } } = await axios.post(`http://localhost:8090/api/update/${id}`, { amount, email, pass });
      notify(message);
      console.log(message);
      SetReq(newdata.request);
      SetAmount(newdata.amount);
    }
    catch (err) {
      const response = err.response.data.message;
      console.log(response);
      errormessage(response);
      console.log(err);
    }
  }
  const notify = (message) => toast(message);

  const errormessage = (message) => toast.error(message, {
    theme: "dark",
  })
  const HandleRequest = () => {
    SetToggle(!toggle);
  }
  return (
    <div className='w-full bg-[#080808] h-[85vh]' data-aos="fade-down">
      <div>
        <button className='text-green-900 font-bold bg-green-200 p-2 m-6 rounded-xl'>Requested User</button>
        <div className='w-full bg-[#080808] h-[85vh]'>
          <button className='text-green-900 font-bold bg-green-200 p-2 m-6 rounded-xl' onClick={HandleRequest}>Requested User</button>
          {toggle && <div className="absolute  rounded-xl bg-black w-fit">

            {req && req.map(({ name, email, amount }) => <ReqUser email={email} name={name} amount={amount} UpdateBalance={UpdateBalance} />)}
          </div>}
        </div>
        <PtopUser balance={amount} email={email} name={name} UpdateBalance={UpdateBalance} />
        <ToastContainer />

      </div>
      </div>
      )
}

      export default Ptop