import React, { useState } from 'react'
import { AiFillDelete } from "react-icons/ai"
import { FiEdit } from "react-icons/fi";

export const CourseEdit = (props) => {
  let [editMode, setEditMode] = useState(false);
  let [course, setCourse] = useState({
    id: props.id,
    title: props.courseName,
    desc: props.courseDesc,

  });
  console.log(props.id + props.courseName + props.courseDesc)
  function onCourseTitleChanged(event) {
    setCourse({ ...course, title: event.target.value });
  }
  function onCourseDescChanged(event) {
    setCourse({ ...course, desc: event.target.value });
  }

  return (
    <>
      <div className='row justify-content-md-center'>
        <div className='container-fluid card-cont d-flex flex-sm-row flex-column '>
          <div className="card card-style col-lg-2">

            <div className="card-body">
              {editMode ? (
                <input
                  type="text"
                  value={course.title}
                  onChange={onCourseTitleChanged}
                />) : (<h3 className="card-title">{course.title}</h3>)}


              {editMode ? (
                <>
                  <input
                    type="text"
                    value={course.desc}
                    onChange={onCourseDescChanged}
                  /></>

              ) : (
                <p className="card-text">{course.desc}</p>
              )}
              <div className="d-flex justify-content-end">
                {editMode ? (
                  <button
                    className="border-0 text-decoration-none px-3 py-1 mx-2 rounded-4 round-btn"
                    onClick={() => {
                      setEditMode(false);
                      props.courseUpdated(course);
                    }}
                  >
                    Save
                  </button>
                ) : (
                  <button
                    className="border-0 text-decoration-none px-3 py-1 mx-2 rounded-4 round-btn"
                    onClick={() => {
                      setEditMode(true);
                    }}
                  >
                    <FiEdit />
                  </button>
                )}

                <button
                  onClick={() => {
                    props.courseDeleted(course);
                  }}
                  className="border-0 text-decoration-none px-3 py-1 mx-2 rounded-4 round-btn"
                >
                  <AiFillDelete />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )


}