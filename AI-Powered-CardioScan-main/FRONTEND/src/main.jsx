import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/home/Home.jsx'
import About from './components/about/About.jsx'
import Explore from './components/explore/Explore.jsx'
import TestimonialPage from './components/testimonial page/TestimonialPage.jsx'
import Login from './components/auth-login/Login.jsx'
import Signup from './components/auth-signup/Signup.jsx'
import { Toaster } from 'react-hot-toast'; 



const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<TestimonialPage/>}/>
      <Route path='explore' element={<Explore/>}/>
      <Route path='loginsignup' element={<Login/>}/>
      <Route path='signup' element={<Signup/>}/>




    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Toaster reverseOrder={false} />  
    <RouterProvider router={router} />
  </React.StrictMode>,
)
