
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Login from './login';

import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import Signup from './signup';
// import Root from './root';

    const routes =createBrowserRouter([
    //   {
    //     path:'/',
    //      element:<Root />,
    //  },
        {
           path:'/',
            element:<Login />,
        },
                {
             path:'/signup',
             element:<Signup />,
         },
        
        
    ]);
    

    


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={routes} />
  </React.StrictMode>,
);


