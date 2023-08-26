import React,{useState} from "react"
import { Link } from "react-router-dom";


  function Signup() {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
        return(
      <div className='d-flex justify-content-center align-items-center vh-100 '>
                <div className='login-container p-3 rounded w-25'>

                    <form>
                        <div className="mb-3">
                            <label htmlFor="exampleInputName" className="form-label"><strong>Name</strong></label>
                            <input type="text" class="form-control" 
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            id="exampleInputName" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label"><strong>Email address</strong></label>
                            <input type="email" class="form-control" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            id="exampleInputEmail1" />

                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword" className="form-label"><strong>Password</strong></label>
                            <input type="password" className="form-control" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            id="exampleInputPassword" />

                        </div>
                        <div className="d-flex justify-content-evenly">
                        <button className='border-0 text-decoration-none px-3 py-1 rounded-4 round-btn '>SignUp</button>
                        
                        <Link to='/login'>
                        <button
                        className='border-0 text-decoration-none px-3 py-1 rounded-4 round-btn'>login</button></Link>
                        </div>
                    </form>
                </div>
            </div>
            
    );
  }
   export default Signup