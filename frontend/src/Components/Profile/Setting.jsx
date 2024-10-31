import React, { useState } from 'react'

export const Setting = () => {

    const [Values, setValues] = useState()
    const [Input, setInput] = useState({
      password:""
    });
  const changeValueHandle=(e)=>{
    const {name,value}=e.target;
    setInput({...Input, [name]:value})
  };
  return (
    <div className=''>
    <h1 className='text-2xl font-semibold rounded mb-3 mx-[20px] '>Settings</h1>

    <div className='flex gap-1' >
        <div className='h-[60px] w-[60px] bg-blue-400 rounded-full '>
        </div>
        <div>
            <input 
            type='file'
            accept='.jpeg,.png,.jpg'
            />
            <button className='bg-blue-700 px-2 py-2 mt-2 text-white rounded-md'>Change Avatar</button>
        </div>


    </div>
    
<div className='bg-blue-100 w-[550px] h-[350px]   my-3 shadow-2xl rounded border-4 mt-11'>
     

      <div className='flex flex-col justify-center items-center w-full mt-6 gap-3 '>

      <div>
          <h1>Current Password</h1>
          <input type='password'
            placeholder='Current Password'
            // value={Input.password}
            name='password'
            onChange={changeValueHandle}

            className='rounded w-[500px] h-10 px-3 border border-blue-900'
          >
          </input>
        </div>

       

        <div>
          <h1>New Password</h1>
          <input type='password'
            placeholder='New Password'
            // value={Input.password}
            name='password'
            onChange={changeValueHandle}

            className='rounded w-[500px] h-10 px-3 border border-blue-900'
          >
          </input>
        </div>
        <div>
          <h1>New Password</h1>
          <input type='password'
            placeholder='New Password'
            // value={Input.password}
            name='password'
            onChange={changeValueHandle}

            className='rounded w-[500px] h-10 px-3 border border-blue-900'
          >
          </input>
        </div>

        <button className='bg-blue-600 mt-3 text-white py-2 px-5 rounded hover:bg-blue-700 w-[500px]'
        //   onClick={changePasswordButtonHandle}
        >Update Password</button>
      </div>


    </div>
</div>

)
}
