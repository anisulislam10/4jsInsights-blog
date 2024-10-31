import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    const links=[
        {
            name:"Dashboard",
            to:"/admin-dashboard"
        },
        {
            name:"Add Blog",
            to:"/admin-dashboard/add-blog"
        },
        {
            name:"Edit Blog",
            to:"/admin-dashboard/edit-blog"
        },
         
    ]
  return (
    <div>
        <h1 className='text-2xl font-semibold text-center mt-4'>Admin Page</h1>
        <hr className='my-5'/>
        <div className='flex flex-col gap-4'>
            {
                links.map((items,i)=>(
                    <Link to={items.to} className='text-xl hover:font-semibold ml-5' key={i}>{items.name}</Link>
                ))
            }
                    <button className='bg-blue-500 text-center text-white rounded-sm hover:bg-blue-600 py-2  mx-1 mt-3 w-full'>Signout</button>

        </div>
    </div>
    
  )
}

export default Sidebar