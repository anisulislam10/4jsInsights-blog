import React, { useState } from 'react'

const Adminlogin = () => {
    const [Values, setValues] = useState()
  const [Input, setInput] = useState({
    email:"",
    password:""
  });
const changeValueHandle=(e)=>{
  const {name,value}=e.target;
  setInput({...Input, [name]:value})
};

const signinButtonHandle =(e)=>{
  const {name,value}=e.target;
  setValues({...Values,[name]:value})
  
}
  return (
<div className='bg-blue-100 w-[550px] h-[350px]  mx-[380px] my-3 shadow-2xl rounded border-4 mt-28'>
      <div className=' pt-4'>
        <h1 className='text-center items-start '><span className='text-2xl font-semibold text-center'>Admin Login!</span>
          <span className='text-xl text-center '> Please login here</span></h1>
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
      </div>


    </div>
      )
}

export default Adminlogin