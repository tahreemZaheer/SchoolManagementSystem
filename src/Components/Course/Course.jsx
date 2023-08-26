import React, {  useState } from 'react'
import { CourseEdit } from './CourseEdit.jsx'

export const Course = () => {

  let [courses, setCourses] = useState([]);
  let [newTitle, setNewTitle] = useState('');
  let [newDesc, setNewDesc] = useState('');
  
  function addCourse(event) {
    event.preventDefault();

    let newCourse = {
      id: courses.length + 1,
      title: newTitle,
      desc: newDesc,
      date: new Date()
    };
    console.log(courses);
    setCourses([...courses, newCourse]);
    
    setNewTitle('');
    setNewDesc('');
    
  }

  function handleCourseTitle(event) {
    setNewTitle(event.target.value);
  }
  function handleCourseDescription(event) {
    setNewDesc(event.target.value);
  }

  function onCourseUpdated(updatedCourse) {
    let updatedCourses = courses.map((currentCourse) => {
      if (currentCourse.id === updatedCourse.id) {
        return updatedCourse;
      } else {
        return currentCourse;
      }
    });
    setCourses([...updatedCourses]);
  }

  function onCourseDeleted(deletedCourse) {
    let filteredCourses = courses.filter((course) => {
      /** We need to only keep those tasks which are not deleted */
      if (course.id !== deletedCourse.id) {
        return course;
      }
    });

    setCourses(filteredCourses);
  }
  return (
    <>
      <div className='containerr '>
        <div className="container-fluid d-flex justify-content-center">
          <div className='modal-container'>
            <h3>Create Class</h3>
            <form className="row g-3"
              onSubmit={addCourse}>
              <div className="mb-3">
                <label htmlFor="formGroupExampleInput" className="form-label">
                  Course Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="formGroupExampleInput"
                  placeholder="Data Structures"
                  value={newTitle}
                  onChange={handleCourseTitle}
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
                  value={newDesc}
                  onChange={handleCourseDescription}
                />
              </div>
              <div className="col-12 d-flex justify-content-end">
                <button type="submit"
                  className="border-0 text-decoration-none px-3 py-1 rounded-4 round-btn ">
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
        {courses.map((courses)=>{
          <CourseEdit
          key={courses.id}
          courseName={courses.title}
          courseDesc={courses.desc}
          id={courses.id}
          courseUpdated={onCourseUpdated}
          courseDeleted={onCourseDeleted}
        />
        })}
        

        {/* <div className='row justify-content-md-center'>
          <div className='container-fluid card-cont d-flex flex-sm-row flex-column '>
            <div className="card card-style col-lg-2">
              <div className="card-body">
                <h3 className="card-title">Course Name</h3>
                <h6 class="card-subtitle mb-2 text-muted"><span className='changeColor'>Teacher Name</span></h6>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <div className="d-flex justify-content-end">
                  <button className='border-0 text-decoration-none px-3 py-1 mx-2 rounded-4 round-btn'><AiFillDelete /></button>
                  <button className='border-0 text-decoration-none px-3 py-1 mx-2 rounded-4 round-btn'><FiEdit /></button>
                </div>
              </div>
            </div>



            <div className="card card-style col-lg-2">
              <div className="card-body">
                <h3 className="card-title">Course Name</h3>
                <h6 class="card-subtitle mb-2 text-muted"><span className='changeColor'>Teacher Name</span></h6>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <div className="d-flex justify-content-end">
                  <button className='border-0 text-decoration-none px-3 py-1 mx-2 rounded-4 round-btn'><AiFillDelete /></button>
                  <button className='border-0 text-decoration-none px-3 py-1 mx-2 rounded-4 round-btn'><FiEdit /></button>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        
      </div>
    </>
  )
}
