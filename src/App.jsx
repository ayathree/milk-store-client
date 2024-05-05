
import { Link, useLoaderData } from 'react-router-dom'
import './App.css'
import { useContext, useState } from 'react';
import MilkCard from './components/MilkCard';
import { AuthContext } from './provider/AuthProvider';

function App() {
  // read
  const loadedMilks = useLoaderData();
  const[milks, setMilks]= useState(loadedMilks);
  const{user, loggedOut}= useContext(AuthContext)

  const handleLogOut=()=>{
    loggedOut()
  }
  

  return (
    <>
      
      <h1>Vite + React</h1>
      <p>Milk items:{milks.length}</p>
      {
        user ? <>
        <p>{user.email}</p>
        <button onClick={handleLogOut} className='btn'>Logout</button>
        </>:
        <Link to={'/login'}> <button className='btn'>Login</button> </Link>
      }
      <Link to={'/add'}><button className='btn'>Milk Add Page</button></Link>
      <Link to={'/user'}><button className='btn'>User Page</button></Link>
      
      <br />
      
      {/* read */}
     <div className='grid grid-cols-2 gap-5'>
     {
        milks.map(milk=><MilkCard key={milk._id} milk={milk} milks={milks} setMilks={setMilks}>

        </MilkCard>)
      }
     </div>
      
    </>
  )
}

export default App
