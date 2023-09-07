import React from 'react'
import bgImg from '../../assets/pexels-bg-2.jpeg';
import { useForm } from 'react-hook-form';
import './form.css'
import { Link,useNavigate } from 'react-router-dom';
import { signup } from "../../services/auth.service";

export const LogForm = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const navigate= useNavigate();

    const handleRegister = (data, event) => {        
        let formData = new FormData();
        event.preventDefault();
        console.log(data.username,data.email,data.password)
        formData.append('username', data.username);
        formData.append('email', data.email);
        formData.append('password', data.password);
        
        signup(formData);
        navigate("/login");
    };

    return (
        <div className='containerr container-fluid'>
            <div className='app'>
                <div className="register">
                    <div className="column-1">
                        <h2>Create your account</h2>
                        <span>register and enjoy the service</span>
                        <form id='form1' className='flexForm flex-column' onSubmit={handleSubmit(handleRegister)}>
                        <input type="text" {...register("username", { required: true })} placeholder='Enter Username' />
                            {errors.confirmpwd?.type === "required" && "Username is required"}
                            <input type="email" {...register("email", { required: true })} placeholder='email' />
                            {errors.email?.type === "required" && "Email is required"}
                            <input type="password" {...register("password", { required: true })} placeholder='password' />
                            {errors.password?.type === "required" && "password is required"}
                            <input type="number" {...register("mobile", { required: true, maxLength: 10 })} placeholder='mobile number' />
                            {errors.mobile?.type === "required" && "Mobile Number is required"}
                            {errors.mobile?.type === "maxLength" && "Max Length Exceed"}
                            <h6 className='text-to-login'>Have an account? <Link to='/login'>Log in now</Link></h6>
                            <button className='btn'>Sign Up</button>
                        </form>

                    </div>
                    <div className="column-2">
                        <img src={bgImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
