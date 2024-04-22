
import { Link } from 'react-router-dom'
import './App.css'

function App() {
  

  return (
    <>
      
      <h1>Vite + React</h1>
      <Link to={'/add'}><button className='btn'>Milk Add Page</button></Link>
      <br />
      <Link to={'/update'}><button className='btn'>Update Milk</button></Link>
      
    </>
  )
}

export default App
