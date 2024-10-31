import React from 'react'
import Sidebar from '../../Components/Profile/Sidebar'
import { Outlet } from 'react-router-dom'

const Profile = () => {
  return (
    <div className='mb-4 py-4 mx-36 flex items-start justify-between gap-8'>
      <div className='w-1/6'>
      <Sidebar/>
      </div>
      <div className='w-5/6'>
        <Outlet/>
      </div>
     
    </div>
  )
}

export default Profile