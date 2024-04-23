import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Update from './components/Update.jsx';
import Add from './components/Add.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    // read
    loader:()=>fetch('http://localhost:5000/milk')
  },
  {
    path:'/update',
    element:<Update></Update>
  },
  {
    path:'/add',
    element:<Add></Add>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
