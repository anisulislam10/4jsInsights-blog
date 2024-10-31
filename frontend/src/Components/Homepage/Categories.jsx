import React from 'react'
import { Link } from 'react-router-dom'

export const Categories = () => {
    const categoires=[
        {
            catName:"Express JS",
            to:"/cat/express"
        },
        {
            catName:"Node JS",
            to:"/cat/node"
        },
        {
            catName:"React JS",
            to:"/cat/react"
        },
        {
            catName:"Vue JS",
            to:"/cat/vue"
        },
        {
            catName:"MongoDB",
            to:"/cat/mongodb"
        },
        {
            catName:"MySQL",
            to:"/cat/sql"
        },
    ]
  return (
 <div className=''>
    <h1 className='text-xl font-semibold rounded mb-3 mx-[1px] bg-blue-600 text-center text-white '>Categories</h1>
       <div className='grid grid-cols-2 gap-4 mb-2 text-center mx-[1px] '>
        {
            categoires.map((items,i)=>(
                <Link key={i} to={items.to} className='rounded-lg hover:bg-blue-600 hover:text-white border-2 border-blue-600  px-4 py-2  bg-white'>{items.catName}</Link>
            ))
        }
    </div>
 </div>
  )
}
export default Categories;