import { Outlet } from 'react-router-dom'
import './App.css'
import { Sidebar } from './Components/sidebar/sidebar'
import { Home } from './Components/Home/Home'
import image from "../src/assets/pexels-photo-1242348.webp";


function App() {
 
  return (
   <div>

  <Sidebar/>
  <Home/>
  
   </div>
  )
}

export default App
