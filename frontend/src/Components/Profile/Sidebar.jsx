import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    const sidebarLinks=[
        {
            name: "user Info",
            to:"/profile"
        },
        {
            name: "Favourites",
            to:"/profile/favourites"
        },
        {
            name: "Liked Insights",
            to:"/profile/liked"
        },
        {
            name: "Settings",
            to:"/profile/setting"
        },
    ]
  return (
    <div className='w-[100%] border-2 border-l border-blue-500 flex flex-col gap-8 p-4 bg-blue-900 text-white text-md rounded-lg shadow-2xl h-[400px]'>
        {
            sidebarLinks.map((items,i)=>(
                <Link to={items.to} className='hover:font-semibold ' key={i}>{items.name}</Link>
            ))
        }
        <button className='bg-blue-500 text-center text-white rounded-sm hover:bg-blue-600 py-2 px-2'>Signout</button>
    </div>
  )
}

export default Sidebar