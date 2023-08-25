import React from 'react'
import Login from '../Login/Login'
import Signup from '../Login/signup'

export const Home = () => {
  return (
    <div className='containerr'>
      <div className='container-fluid'>
      <h1>Home</h1>
    <button>submit</button></div>

    <Login/>
    <Signup/>
    </div>
  )
}
