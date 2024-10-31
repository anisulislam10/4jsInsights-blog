import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage/HomePage'
import MainLayout from './Pages/Layout/MainLayout'
import AdminLayout from './Pages/Layout/AdminLayout'
import Login from './Pages/Auth/Login'
import Singup from './Pages/Auth/Singup'
import Profile from './Pages/Profile/Profile'
import CreditCard from './Components/CreditCard/CreditCard'
import AllBlogs from './Pages/All_Blogs/AllBlogs'
import DashboardProfile from './Components/Profile/Dashboard.Profile'
import LikedInsights from './Components/Profile/LikedInsights'
import Favourites from './Components/Profile/Favourites'
import { Setting } from './Components/Profile/Setting'
import Description from './Pages/Description/Description'
import Cat from './Pages/Categories/Cat'
import Adminlogin from './Pages/AdminDashboard/Admin.login'
import Admindashboard from './Pages/AdminDashboard/Admin.dashboard'
import AdminDashboard from './Components/AdminComponents/AdminDashnoard/AdminDashboard'
import AddBlog from './Components/AdminComponents/AddBlog/AddBlog'
import EditBlog from './Components/AdminComponents/EditBlog/EditBlog'
import UpdateBlog from './Components/AdminComponents/EditBlog/UpdateBlog'
import 'react-toastify/dist/ReactToastify.css'
import { toast, ToastContainer } from 'react-toastify'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { News } from './Pages/News/News'

function App () {
  const backendLink = useSelector(state => state.prodReducer.link)
  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get(
        `${backendLink}/api/v1/user/check-cookie`,
        { withCredentials: true }
      )
      console.log(response)
      
    };
    fetch()
  }, [])

  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path='/desc/:id' element={<Description />} />
          <Route path='/cat/:id' element={<Cat />} />

          <Route path='/profile' element={<Profile />}>
            <Route index element={<DashboardProfile />} />
            <Route path='/profile/favourites' element={<Favourites />} />
            <Route path='/profile/liked' element={<LikedInsights />} />
            <Route path='/profile/setting' element={<Setting />} />
          </Route>

          <Route path='/buy-me-coffee/pay' element={<CreditCard />} />
          <Route path='/all-insights' element={<AllBlogs />} />
          <Route path='/news' element={<News />} />

        </Route>

        <Route element={<AdminLayout />}>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Singup />} />
          <Route path='/admin-login' element={<Adminlogin />} />
          <Route path='/admin-dashboard' element={<Admindashboard />}>
            <Route index element={<AdminDashboard />} />
            <Route path='/admin-dashboard/add-blog' element={<AddBlog />} />
            <Route path='/admin-dashboard/edit-blog' element={<EditBlog />} />
            <Route
              path='/admin-dashboard/edit-blog/:id'
              element={<UpdateBlog />}
            />
          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
