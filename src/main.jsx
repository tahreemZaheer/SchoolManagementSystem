import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Home } from './Components/Home/Home.jsx';
import {Profile} from './Components/Profile/Profile.jsx'
import{Course} from './Components/Course/Course.jsx'
import{Setting} from './Components/Settings/Setting.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {FaHome} from 'react-icons/fa'

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
 path:'/course',
 element:<Course/> 
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
