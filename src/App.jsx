import { Outlet } from 'react-router-dom'
import './App.css'
import { Sidebar } from './Components/sidebar/sidebar'
import { Home } from './Components/Home/Home'


function App() {
 
  return (
   <>
  <Sidebar/>
  <Outlet/>
   </>
  )
}

export default App
