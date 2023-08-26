import React, { useEffect, useState } from 'react'
import { Course } from './Course'
import './Course.css'

export const CreateCourseModal = ({ closeCreateCourse }) => {

    const [showCourse, setShowCourse] = useState(false);


    let [courses, setCourses] = useState([]);
  let [newTitle, setNewTitle] = useState('');
  
  function addCourse(event) {
    event.preventDefault();

    let newCourse = {
      id: courses.length + 1,
      title: newTitle,
      date: new Date()
    };
    setCourses([...courses, newCourse]);
    setNewTitle('');
    console.log(courses);
  }

  function handleInputChange(event) {
    setNewTitle(event.target.value);
  }

    const handleShowCourse = (e) => {
        e.preventDefault();
        setShowCourse(true);
    }

    useEffect(() => {
        document.body.style.overflowY = "hidden";
        return () => {
            document.body.style.overflowY = "scroll";
        }
    }, []);

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
                            onSubmit={handleShowCourse}>
                            Create
                        </button>
                    </div>
                </form>
            </div>
            {showCourse && <Course />}
        </div>

    )
}
