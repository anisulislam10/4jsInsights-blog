import React from 'react'

const AddBlog = () => {
  return (
    <div>
      <h1 className='text-2xl ml-3 font-semibold'>Add New Blog</h1>
      <form className='px-5 pt-8 text-2xl  '>
      
        
      <input
      type='text'
      placeholder='Title'
      className='w-full py-4 pl-6 border-none outline-none bg-transparent border-zinc-500'
      />

<textarea
      type='text'
      placeholder='Description'
      className='w-full py-8 pl-6 border-none bg-transparent border-zinc-500 h-full'
     
      />
<div>
  <input type="file"
  className='rounded text-white bg-blue-700 text-sm' />
</div>
<button className='bg-blue-600 hover:bg-blue-700 mt-3 text-white px-3 py-1 text-sm rounded shadow-xl'>Add Blog</button>

      </form>
      
    </div>
  )
}

export default AddBlog