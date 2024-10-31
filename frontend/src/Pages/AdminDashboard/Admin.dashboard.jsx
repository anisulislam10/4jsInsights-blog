import React from 'react'
import Sidebar from '../../Components/AdminComponents/Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'

const Admindashboard = () => {
    
  return (
    <div className='flex '>

        <div className='w-1/6 h-screen border-r'>
            <Sidebar/>
            </div>
        <div className='w-5/6 bg-blue-100 '>
            <Outlet/>
            </div>
        
    </div>
  )
}

export default Admindashboard