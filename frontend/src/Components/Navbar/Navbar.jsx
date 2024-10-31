import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Navbar () {
  const links = [
    {
      title: 'Home',
      to: '/'
    },
    {
      title: 'All Insights',
      to: '/all-insights'
    },
    {
      title: 'Profile',
      to: '/profile'
    },
    {
      title: 'Sign-In', 
      to: '/login'
    },
    {
      title: 'Tech News', 
      to: '/news'
    }
  ]
  const isLoggedIn = useSelector((state) => state.authRedu.IsLoggedIn);
  console.log(isLoggedIn);
  

  if (!isLoggedIn) {
    links.splice(2, 1)
  } 
  else {
    links.splice(3, 1)
  }
  return (
    <nav className='flex items-center justify-between py-4'>
      <div className='w-1/6 ml-28' brandName>
        <Link
          to='/'
          className='text-xl font-semi-bold rounded text-white px-2 py-1'
        >
          <span className='bg-yellow-300 text-black font-bold px-1 shadow-md border-2 border-blue-500'>
            4js
          </span>
          <span className='bg-blue-600  text-white px-1'>Insights</span>
        </Link>
      </div>
      <div className='w-1/2 flext items-center justify-end'>
        {links.map((items, i) => (
          <Link
            className='ms-4 hover:text-blue-600 transition-all duration-300'
            key={i}
            to={items.to}
          >
            {items.title}
          </Link>
        ))}

        {!isLoggedIn && (
          <Link
            className='ms-4 bg-blue-600 py-2 px-2 rounded text-white hover:bg-blue-700'
            to='/signup'
          >
            Sign Up
          </Link>
        )}
      </div>
    </nav>
  )
}

export default Navbar
