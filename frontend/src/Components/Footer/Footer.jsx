import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Footer() {
  const navigate=useNavigate()
  return (
    <div className=' '>
      <div className='grid grid-cols-3 bg-blue-800 text-white px-5'>
        <div className='text-xl font-semi-bold rounded text-white px-2 py-1 pt-8'>
        <span className=' bg-yellow-300 text-white font-bold px-1 shadow-md border-2 border-blue-500'>4js</span><span className='bg-blue-600  text-white px-1'>Insights</span> 
       
        <p className='text-white text-[16px] pt-4 pr-10'>4JS Insights is a blog web app focused on React.js,
           Express.js, Vue.js, and Node.js, offering resources and insights for developers.</p> </div>

           <div>
            Quick Links
           
            <ul className='pt-5  w-25 '>
            <Link className=''>
              <li className='transition-all duration-150 hover:text-blue-300'> <Link to="/about">About</Link>
              </li> 
              <li className='transition-all duration-150 hover:text-blue-300'><Link to="/contact">contact</Link>   </li>         
              <li className='transition-all duration-150 hover:text-blue-300'><Link to="/dev-api">dev-api's</Link>     </li>
              <li className='transition-all duration-150 hover:text-blue-300'><Link to="/buy-me-coffee/pay">Buy me Coffee</Link>     </li>

              </Link>
                     </ul>
       
           </div>
           <div className=''> 
            Follow us
            <div className='flex gap-4 pt-5'>
            <div>fb</div>
            <div>x</div>
            <div>insta</div>
            </div>
           </div>
           
      </div>
      <div className='flex items-center justify-between px-5 bg-blue-900 text-white'>
        <p>made with ❤ by anis - 2024 </p>
        <a className='hover:text-blue-300' href="http://anis-ul-islam.vercel.app" target="_blank" rel="noopener noreferrer">Developer</a>
        

        
      </div>
      
    </div>
  )
}

export default Footer