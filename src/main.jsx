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
import JobDetails from './JobDetails/JobDetails';
import AppliedJobsload from './AppliedJob/AppliedJobsload';
import ErrorPage from './ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[{
      path:'/',
      element:<Home/>
    },
    {
      path:'applied-jobs',
      element:<AppliedJobsload></AppliedJobsload>,
      loader:()=> fetch('/Jobs.json')
    },
    {
      path:'statistics',
      element:<Statistics></Statistics>
    },
    {
      path:'blog',
      element:<Blog></Blog>
    },
      {
        path: 'job/:id',
        element: <JobDetails></JobDetails>,
        loader: ({params}) => fetch(`/public/Jobs.json`)
      },
  ]
  },
  {
    path:'*',
    element:<ErrorPage></ErrorPage>
  }
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
