import React from 'react'
import './sidebar.css'
import { Outlet, Link, useNavigate } from 'react-router-dom'
export const Admin = () => {

    const navigate = useNavigate();
    const logout= () =>{
        localStorage.removeItem("token");
        navigate("/login");
    };
    return (
        <>
            <nav className="navbar bg-navbar fixed-top">
                <div className="container">
                    <button className="navbar-toggler shadow-none border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className='navbar-expand-lg'>
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3" >
                                <li className="nav-item mx-2 underline-text"><Link className='nav-link fs-4' to='/'>SchoolHub</Link></li>
                            </ul>

                            <div className='d-flex justify-content-center align-items-center gap-3 '>
                                <button
                                onClick={logout} 
                                className='border-0 text-decoration-none px-3 py-1 rounded-4 round-btn' > Log Out</button>
                            </div>
                        </div>
                    </div>

                    <div className="sidebar offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header border-bottom">
                            <h3 className="offcanvas-title" id="offcanvasNavbarLabel">SchoolHub</h3>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body p-lg-4">
                            <ul className="navbar-nav justify-content-end fs-2 flex-grow-1 pe-3">
                                
                                <li className="nav-item">
                                    <Link className="nav-link" to="/admin/">
                                        Courses
                                    </Link>
                                </li>
                                {/* <li className="nav-item">
                                    <Link className="nav-link" to="instructor/">
                                        Instructor
                                    </Link>
                                </li> */}
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            <Outlet/>
        </>
    )
}
