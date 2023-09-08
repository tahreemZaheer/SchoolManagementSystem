import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import { login } from '../../services/auth.service.js';
import bgImg from '../../assets/pexels-bg-2.jpeg';
import { useForm } from 'react-hook-form';
import './form.css'

function Login() {
  const navigate = useNavigate();
  const { register, handleSubmit, watch, formState: { errors } } = useForm()

  const handleLogin = (data,event) => {
    event.preventDefault();
    let formData = new FormData();
    formData.append("email", data.email);
    formData.append("password", data.password);
    
      login(formData).then((data) => {
        try{
        if (data.token) {
          localStorage.setItem("token", data.token);
          navigate("/admin");
        }
      }
      catch(err){
        alert("wrong email or password");
        console.error(err);
            }
      });
  }
  return (
    <>
      <div className='app'>
        <div className="register">
          <div className="column-1">
            <h2>Log in to your account</h2>
            <form id='form1' className='flexForm flex-column' onSubmit={handleSubmit(handleLogin)}>
              <input type="text" {...register("email", { required: true })} placeholder='email' />
              {errors.email?.type === "required" && "Email is required"}
              <input type="password" {...register("password", { required: true })} placeholder='password' />
              {errors.password?.type === "required" && "password is required"}
              <h6 className='text-to-login'>Don't have an account? <Link to='/signup'>Sign Up</Link></h6>
              <button

                className='btn'>Log In</button>
            </form>

          </div>
          <div className="column-2">
            <img src={bgImg} alt="" />
          </div>
        </div>
      </div>

    </>

  );
}
export default Login
