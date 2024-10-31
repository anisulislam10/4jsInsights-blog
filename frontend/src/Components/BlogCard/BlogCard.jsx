import React from 'react'
import {Link} from 'react-router-dom'

const BlogCard = ({items}) => {
  return (
    <>
       <div className='w-2/6 shadow-2xl'>
       <img src={items.img} alt={items.title} className='rounded' />
       </div>
       <div className='w-4/6 '>
       <h1 className='text-xl font-semibold '>{items.title}</h1>
       <p className='my-2'>{items.description.slice(0,300)}...</p>
       <Link to="/desc/1445625555555553rwsfsdf4" className="bg-blue-600 hover:bg-blue-700 text-white rounded py-2 px-2 ">
       Read More
       </Link>
       </div>
    </>
  )
}

export default BlogCard