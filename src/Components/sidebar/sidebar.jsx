import React from 'react'
import './sidebar.css'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { CreateCoursePage } from '../Course/CreateCourseModal.jsx'



export const Sidebar = () => {
    const [showCreateCourse, setShowCreateCourse] = useState(false);
const closeCreateCourse = ()=> setShowCreateCourse(false);

    
   
    //Mobile Menu State
    const [sidenav, setSideNav] = useState(false);
    //SideNav
    const sideNavShow = () => {
        setSideNav(!sidenav);
    }

    //Desktop Fixed Menu
    const [sticky, setSticky] = useState(false);
    //Fix Navbar
    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY > 20);
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);  //removing event listener 
    })



    
    return (
        <>
            <nav className="navbar bg-body-tertiary fixed-top">
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
                               <Link to='/signup'><button className='border-0 text-decoration-none px-3 py-1 rounded-4 round-btn' > Sign In</button></Link>
                                
                               <Link to='/login'><button className="border-0 text-decoration-none px-3 py-1 rounded-4 round-btn " >Log In</button></Link>
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
                                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link" to="/course">
                                        Courses
                                    </Link>   
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link" to="/instructor">
                                        Instructor
                                    </Link>   
                                </li>

                                {/* <li className="nav-item">
                                    <Link className="nav-link" to="/setting">Settings</Link>
                                </li> */}
                            </ul>

                        </div>
                    </div>
                </div>
            </nav>
            {showCreateCourse && <CreateCoursePage closeCreateCourse={closeCreateCourse}/> }
        </>

    )
}
