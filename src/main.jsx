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
import AuthProvider from './provider/AuthProvider.jsx';
import Register from './components/Register.jsx';
import User from './components/User.jsx';
import UpdateUser from './components/UpdateUser.jsx';
import Login from './components/Login.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    // read
    loader:()=>fetch('https://ofline-database-server.vercel.app/milk')
  },
  {
    path:'/update/:id',
    element:<Update></Update>,
    // update
    loader:({params})=>fetch(`https://ofline-database-server.vercel.app/milk/${params.id}`)
  },
  {
    path:'/add',
    element:<Add></Add>
  },
  {
    path:'/user',
    element:<User></User>,
    // read user
    loader:()=>fetch('https://ofline-database-server.vercel.app/newUser')
  },
  // update user
  {
    path:'/updateUser/:id',
    element:<UpdateUser></UpdateUser>,
    loader:({params})=>fetch(`https://ofline-database-server.vercel.app/newUser/${params.id}`)

  },
  {
    path:'/login',
    element:<Login></Login>

  },
  {
    path:'/register',
    element:<Register></Register>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
   <RouterProvider router={router} />
   </AuthProvider>
  </React.StrictMode>,
)
