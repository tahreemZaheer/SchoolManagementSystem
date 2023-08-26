import React from "react"
import { Link } from "react-router-dom";


  function Signup() {
        return(
      <div className='d-flex justify-content-center align-items-center vh-100 '>
                <div className='login-container p-3 rounded w-25'>

                    <form>
                        <div className="mb-3">
                            <label for="exampleInputName" className="form-label"><strong>Name</strong></label>
                            <input type="text" class="form-control" id="exampleInputName" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label"><strong>Email address</strong></label>
                            <input type="email" class="form-control" id="exampleInputEmail1" />

                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword" className="form-label"><strong>Password</strong></label>
                            <input type="password" className="form-control" id="exampleInputPassword" />

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