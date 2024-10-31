import React from 'react'
import Header from '../../Components/Homepage/Header'
import { Categories } from '../../Components/Homepage/Categories'
import BlogCard from '../../Components/BlogCard/BlogCard'
import RecentBlogs from '../../Components/Homepage/RecentBlogs'

function HomePage() {
  return (
    <div className=''>
      <Header />
      {/* <Categories/> */}
      <RecentBlogs/>
      {/* <BlogCard/>  */}
    </div>
  )
}

export default HomePage