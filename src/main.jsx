import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Home } from './Components/Home/Home.jsx';
import { Profile } from './Components/Profile/Profile.jsx'
import { Course } from './Components/Course/Course.jsx'
import { Setting } from './Components/Settings/Setting.jsx'
import { createBrowserRouter, Form, redirect, RouterProvider } from 'react-router-dom'
import { FaHome } from 'react-icons/fa'
import { Teachers } from './Components/Teachers/Teachers.jsx';
import Login from './Components/Login/Login.jsx';
import Signup from './Components/Login/signup.jsx';
import { CreateCoursePage } from './Components/Course/CreateCourseModal.jsx';
import { LogForm } from './Components/Login/form.jsx';
import { Admin } from './Components/sidebar/Admin.jsx';


const loader = () => {
  let token = localStorage.getItem("token");
    if(!token){
      return redirect("/login");
    }

    return null
  };


  const loginLoader=() =>{
    let token = localStorage.getItem("token");

    if(token){
      return redirect("/admin");
    }
    return null;
  }
  
const routes = createBrowserRouter([
  {
  path: "/",
  element: <App />,
  icon: <FaHome />
  },
  {
    path: '/login',
    element: <Login />,
    loader:loginLoader,
  },
  {
    path: '/signup',
    element: <LogForm />,
    loader:loginLoader,
  },
  {
    path: 'admin',
    element: <Admin/>,
    loader: loader,
    children:[
      {
        path: '',
        element: <Course />,
      },
      {
        path: 'course',
        element: <Course />,
      },
      {
        path: 'createcourse',
        element: <CreateCoursePage />
      },
      {
        path: 'instructor',
        element: <Teachers />
      },
      {
        path: 'setting',
        element: <Setting />
      }
    ]
  },
  ]
  )
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes}></RouterProvider>
  </React.StrictMode>,
)
