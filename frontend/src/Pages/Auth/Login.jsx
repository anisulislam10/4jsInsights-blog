import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import Footer from './../../Components/Footer/Footer'
import Navbar from './../../Components/Navbar/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { authActions } from '../../Store/auth.js'
import axios from 'axios'
import { toast } from 'react-toastify'

function Signin() {
  const navigate=useNavigate()
  const backendLink= useSelector((state)=>state.prodReducer.link)
 const dispatch= useDispatch()
  // console.log(backendLink);
  
  const [Values, setValues] = useState()
  const [Input, setInput] = useState({
    email:"",
    password:""
  });
const changeValueHandle=(e)=>{
  const {name,value}=e.target;
  setInput({...Input, [name]:value})
};

const signinButtonHandle =async()=>{
  try {
    const response= await axios.post(`${backendLink}/api/v1/user/signin`, Input,{withCredentials:true});
    dispatch(authActions.login())
    toast.success(response.data.message);
    navigate("/profile")
    
  } catch (error) {
   toast.error(error.response.data.message);
    
    
  }
}
  return (
    
    <>
    <Navbar/>
    <div className='bg-blue-100 w-[550px] h-[350px]  mx-[380px] my-3 shadow-2xl rounded border-4'>
      <div className=' pt-4'>
        <h1 className='text-center items-start '><span className='text-2xl font-semibold text-center'>WELCOME!</span>
          <span className='text-xl text-center '> Sign-in as a user</span></h1>
      </div>


      <div className='flex flex-col justify-center items-center w-full mt-6 gap-3 '>


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
          onClick={signinButtonHandle}
        >Sign-in</button>
        <h1>Don't have an account ? <Link to="/signup" className='bg-blue-200 rounded-lg px-1 py-1'>Sign-Up here</Link></h1>
      </div>


    </div><>
      </>
      <Footer className=""/>
      </>
  )
}

export default Signin