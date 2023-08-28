import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Home } from './Components/Home/Home.jsx';
import {Profile} from './Components/Profile/Profile.jsx'
import{Course} from './Components/Course/Course.jsx'
import{Setting} from './Components/Settings/Setting.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {FaHome} from 'react-icons/fa'
import { Teachers } from './Components/Teachers/Teachers.jsx';
import Login from './Components/Login/Login.jsx';
import Signup from './Components/Login/signup.jsx';
import { CreateCoursePage } from './Components/Course/CreateCourseModal.jsx';

const routes=createBrowserRouter([{
  path:"/",
  element:<App/>,
  children:[{
    path:'',
    element:<Home/>,
    icon: <FaHome/>
  },
{
  path:'/profile',
  element:<Profile/>
},
{
 path:'/login',
 element:<Login/> 
},
{
  path:'/createcourse',
  element:<CreateCoursePage/>
},
{
  path:'/signup',
  element:<Signup/> 
 },
 {
  path:'/course',
  element:<Course/> 
 },
{
  path:'/instructor',
  element:<Teachers/> 
 },
{
  path:'/setting',
element:<Setting/>
}],
}])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={routes}></RouterProvider>
  </React.StrictMode>,
)
