import React from "react"
import { Link } from "react-router-dom";

  function Signup() {
        return(
      <div className='d-flex justify-content-center align-items-center bg-primary vh-100 '>
                <div className='bg-white p-3 rounded w-25'>

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
                        <button className='btn btn-success w-100'>SignUp</button>
                        <Link to="/" className='btn btn-default border w-100 bg-light text-decoration-none'>login</Link>
                    </form>
                </div>
            </div>
            
    );
  }
   export default Signup
