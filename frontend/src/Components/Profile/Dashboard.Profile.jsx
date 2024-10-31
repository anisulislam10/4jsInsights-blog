import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

const DashboardProfile = () => {
  const [Values, setValues] = useState();

  useEffect(() => {
    const fetchUserInformation= async()=>{
      try {
        const response= await axios.get("http://localhost:3000/api/v1/user/userInfo");
        setValues(response.data.userData);
        // console.log(response.data);


        
      } catch (error) {
        toast.error(error.response.data.userData.message);
        
      }
    }
    fetchUserInformation();
  }, [])
  
  return (
    <>
      <h1 className='text-2xl font-semibold rounded mb-3 mx-[20px] pb-11 '>
        User Information
      </h1>

      
            
        
        <div className='grid grid-cols-2'>
          <div className=' py-5 px-2 text-start items-center  text-xl '>
          <p>Username: {Values?.username}</p>
          </div>
          <div className=' py-5 px-2 text-start items-center text-xl '>
          Email: {Values?.email}
          </div>
          <div className=' py-5 px-2 text-start items-center text-xl '>
          Role: {Values?.role}
          </div>
          <div className=' py-5 px-2 text-start items-center text-xl '>
          ID: {Values?._id}
          createdAt
          </div>
          <div className=' py-5 px-2 text-start items-center text-xl '>
          created@: {Values?.createdAt}
          updatedAt
          </div>
          <div className=' py-5 px-2 text-start items-center text-xl '>
          Last Updated @: {Values?.updatedAt}
          
          </div>
        </div>
        <div className=''></div>
     
    </>
  )
}

export default DashboardProfile
