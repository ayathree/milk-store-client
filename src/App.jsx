
import { Link, useLoaderData } from 'react-router-dom'
import './App.css'
import { useState } from 'react';
import MilkCard from './components/MilkCard';

function App() {
  // read
  const loadedMilks = useLoaderData();
  const[milks, setMilks]= useState(loadedMilks);
  

  return (
    <>
      
      <h1>Vite + React</h1>
      <p>Milk items:{milks.length}</p>
      <Link to={'/add'}><button className='btn'>Milk Add Page</button></Link>
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
