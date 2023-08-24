import React, { useEffect } from 'react'
import { Course } from './Course'
import './Course.css'

export const CreateCourseModal = ({closeCreateCourse}) => {

    useEffect(()=>{
        document.body.style.overflowY= "hidden";
        return()=>{
            document.body.style.overflowY= "scroll";
        }
    },[]);

  return (
    <div className='containerr'>
        <div className='modal-wrapper' onClick={closeCreateCourse}></div>
        <div className='modal-container'>
        <h3>Create Class</h3>
                    <form className="row g-3">
                        <div className="mb-3">
                            <label htmlFor="formGroupExampleInput" className="form-label">
                                Course Name
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="formGroupExampleInput"
                                placeholder="Data Structures"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="formGroupExampleInput2" className="form-label">
                            Description
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="formGroupExampleInput2"
                                placeholder="a data structure is a data organization..."
                            />
                        </div>
                        <div className="col-12 d-flex justify-content-end">
                            <button type="submit" 
                            onClick={closeCreateCourse}
                            className="border-0 text-decoration-none px-3 py-1 rounded-4 round-btn ">
                                Cancel
                            </button>

                            <button type="submit" 
                            className="border-0 text-decoration-none px-3 py-1 rounded-4 round-btn "
                            onClick={<Course/>}>
                                Create
                            </button>
                        </div>
                    </form>
                </div>
                </div>
  )
}
