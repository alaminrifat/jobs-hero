import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home';
import AppliedJobs from './AppliedJobs';
import Statistics from './Statistics';
import Blog from './Blog';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[{
      path:'/',
      element:<Home/>
    },
    {
      path:'applied-jobs',
      element:<AppliedJobs></AppliedJobs>
    },
    {
      path:'statistics',
      element:<Statistics></Statistics>
    },
    {
      path:'blog',
      element:<Blog></Blog>
    }
  ]
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
