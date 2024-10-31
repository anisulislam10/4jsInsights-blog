import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import Footer from './../../Components/Footer/Footer'
import Navbar from './../../Components/Navbar/Navbar'
import { toast } from 'react-toastify';
import axios from 'axios'
import { useSelector } from 'react-redux';

function Singup() {
  const navigate=useNavigate()
  const backendLink= useSelector((state)=>state.prodReducer.link)
  // console.log(backendLink);
  

  const [Input, setInput] = useState({
    username:"",
    email:"",
    password:""
  });
  
const changeValueHandle=(e)=>{
  const {name,value}=e.target;
  setInput({...Input, [name]:value})
};

const signupButtonHandle = async()=>{
  // e.preventDefault();
  try {
    const response= await axios.post(`${backendLink}/api/v1/user/signup`,Input,
      {
        withCredentials:true
      }
    );
    toast.success(response.data.message);
    navigate("/login")
    
  } catch (error) {
    toast.error(error.response.data.message);
    console.log(error);
  }
  finally {
    setInput({
      
        username:"",
        email:"",
        password:""
      }
    )
  }
  
}
  return (
    <><Navbar />

      <div className='bg-blue-100 w-[550px] h-[400px]  mx-[380px] my-3 shadow-2xl rounded border-4'>
        <div className=' pt-4'>
          <h1 className='text-center items-start '><span className='text-2xl font-semibold text-center'>WELCOME!</span>
            <span className='text-xl text-center '> Sign-up as a new user</span></h1>
        </div>


        <div className='flex flex-col justify-center items-center w-full mt-6 gap-3 '>
          <div className=''>
            <h1>Username</h1>
            <input type='text '
              placeholder='Username'
              value={Input.username}
              name='username'
              onChange={changeValueHandle}
              className='rounded w-[500px] h-10 px-3 border border-blue-900'
            >
            </input>
          </div>

          <div>
            <h1>Email</h1>
            <input type='text '
              placeholder='You@domain.com'
              value={Input.email}
              name='email'
              onChange={changeValueHandle}

              className='rounded w-[500px] h-10 px-3 border border-blue-900'
            >
            </input>
          </div>

          <div>
            <h1>Password</h1>
            <input type='password'
              placeholder='*********'
              value={Input.password}
              name='password'
              onChange={changeValueHandle}

              className='rounded w-[500px] h-10 px-3 border border-blue-900'
            >
            </input>
          </div>

          <button className='bg-blue-600 mt-3 text-white py-2 px-5 rounded hover:bg-blue-700 w-[500px]'
            onClick={signupButtonHandle}
          >Sign-up</button>
          <h1>Already have an account ? <Link to="/login" className='bg-blue-200 rounded-lg px-1 py-1'>Sign-in here</Link></h1>
        </div>

      </div>
      <>
      </>
      <Footer />
    </>
  )
}

export default Singup