import React,{useState} from "react"
import { Link } from "react-router-dom";
import Signup from "./signup";
import {Home} from '../Home/Home'

  function Login() {
    const [showSignup, setShowSignup] =   useState(false);
    const[showHome, setShowHome] = useState(false);

    const handleSignUp=(e)=>{
        e.preventDefault();
        setShowSignup(true);
    }
    const handleHome=(e)=>{
        e.preventDefault();
        setShowHome(true);
    }
   return(
    
    <div className='d-flex justify-content-center align-items-center vh-100 '>
      <div className='login-container p-3 rounded w-25'>

        <form>
          
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label"><strong>Email address</strong></label>
            <input type="email" class="form-control" id="exampleInputEmail1" />

          </div>
          <div className="mb-3">
            <label for="exampleInputPassword" className="form-label"><strong>Password</strong></label>
            <input type="password" className="form-control" id="exampleInputPassword" />

          </div>
          <div className="mb-3 d-flex justify-content-evenly">
 
          <button 
          onClick={handleHome}
          className='border-0 text-decoration-none px-3 py-1 rounded-4 round-btn '>log in</button>
          
          <Link to='/signup'><button className='border-0 text-decoration-none px-3 py-1 rounded-4 round-btn '>Create Account</button></Link>
          
         </div>
         </form>
      </div>
      </div>
          
  
    
    
    );
}
        export default Login