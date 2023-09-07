import React from 'react'
import { getInstructors } from '../../services/posts.service'
import { useState, useEffect } from 'react';

export const Teachers = () => {
  let [teachers, setTeachers] = useState([]);
  useEffect(() => {
    getInstructors().
      then((teacher) => {
        setTeachers(teacher);
      }).
      catch(err => {
        console.error(err);
      });
  });
  return (
    <>
      <div className='containerr'>
        <div className="container-fluid">
          <h1>View Instructors</h1>
          <table className="table">
            <thead className="thead-light">
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Instructor</th>
                <th scope="col">Course</th>
              </tr>
            </thead>
            <tbody>
              {teachers.map((teach) => {
                <tr key={teach._id}>
                  <th scope="row">{teach._id}</th>
                  <td>{teach.username}</td>
                  <td>{teach.email}</td>
                </tr>
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
