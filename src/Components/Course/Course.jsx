import React, {  useState, useEffect } from 'react'
import { getCourse } from '../../services/posts.service.js';
import { Link } from "react-router-dom";
import axios from 'axios';

export const Course = () => {
  const apiURL = "http://localhost:8080/admin/"
  let [posts, setPosts] = useState([]);
  useEffect(()=>{
    getCourse().
    then((posts)=>{
      setPosts(posts);
    }).
    catch(err=>{

    });
  });

  const deleteCourse =async(id)=>{
    console.log(id)
    try{
      await axios.delete(apiURL + id).then((response)=>{
        console.log(response);
    })
    }
    catch(err){
      console.log(err);
    }   
  }

  return (
    <>
    <div className='containerr container-fluid'>
      <div className="container mt-5">
      <h1>Manage Posts</h1>
        <div className="card my-2">
          <div className="card-body">
            <div className="d-flex justify-content-between">
            
              <div className="d-flex">
              
              <Link to="createcourse" className="btn btn-success float-end">+ Add Course</Link>
              </div>
            </div>
          </div>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Course title</th>
              <th scope="col">Description</th>
              
              <th scope="col">Published At</th>
              <th scope="col">Updated At</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            { posts.map((post)=>{
              return <tr key={post._id}>
              <th scope="row">{post._id}</th>
              <td>{post.title}</td>
              <td>{post.body}</td>
              <td>{post.createdAt}</td>
              <td>{post.updatedAt}</td>
              <td>
                <button className="btn btn-primary me-2">Edit</button>
                <button className="btn btn-danger"
                >Delete</button>
              </td>
            </tr>
            }) }
          </tbody>
        </table>
      </div>
      </div>
    </>
  );
}
