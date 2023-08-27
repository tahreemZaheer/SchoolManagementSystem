import React, {  useState, useEffect } from 'react'
import { getCourse } from '../../services/posts.service.js';
import { Link } from "react-router-dom";

export const Course = () => {

  let [posts, setPosts] = useState([]);
  useEffect(()=>{
    getCourse().
    then((posts)=>{
      setPosts(posts);
    }).
    catch(err=>{

    });
  });


  return (
    <>
      <div className="container mt-5">
        <div className="card my-2">
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <h1>Manage Posts</h1>
              <div className="d-flex">
              <Link to="add-post" className="btn btn-success float-end me-2">Manage Users</Link>
              <Link to="add-post" className="btn btn-success float-end">+ Add Post</Link>
              </div>
            </div>
          </div>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Cover</th>
              <th scope="col">Course title</th>
              <th scope="col">Course Author</th>
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
                <button  className="btn btn-primary me-2">Edit</button>
                <button className="btn btn-danger">Delete</button>
              </td>
            </tr>
            }) }
            
          </tbody>
        </table>
      </div>
    </>
  );
}
