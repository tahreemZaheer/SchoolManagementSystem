import React,{useState} from "react"
import { Link, useNavigate } from "react-router-dom";
import { login } from '../../services/auth.service.js';

  function Login() {
    const navigate= useNavigate();
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
    
  console.log(password,email);
  const handleLogin = () => {
    let formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);

    login(formData).then((data)=>{

      if(data.token){
        localStorage.setItem("token", data.token);
        navigate("/");    
      }
    });

  }
   return(
    
    <div className='d-flex justify-content-center align-items-center vh-100 '>
      <div className='login-container p-3 rounded w-25'>

        <form>
          
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label"><strong>Email address</strong></label>
            <input type="email" className="form-control" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="exampleInputEmail1" />

          </div>
          <div className="mb-3">
            <label for="exampleInputPassword" className="form-label"><strong>Password</strong></label>
            <input type="password" className="form-control" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="exampleInputPassword" />

          </div>
          <div className="mb-3 d-flex justify-content-evenly">
 
          <button 
          
          className='border-0 text-decoration-none px-3 py-1 rounded-4 round-btn '
          onClick={handleLogin}>log in</button>
          
          <Link to='/signup'><button className='border-0 text-decoration-none px-3 py-1 rounded-4 round-btn '>Create Account</button></Link>
          
         </div>
         </form>
      </div>
      </div>

    );
}
        export default Login