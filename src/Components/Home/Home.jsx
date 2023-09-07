import React, {  useState, useEffect } from 'react'
import { getCourse } from '../../services/posts.service.js';
export const Home = () => {

  let [posts, setPosts] = useState([]);
  useEffect(()=>{
    getCourse().
    then((posts)=>{
      setPosts(posts);
    }).
    catch(err=>{

    })
  });
  return (
    <>
    <div className='containerr '>
    <h1 className='d-flex justify-content-md-center pt-4 '>Welcome to SchoolHub</h1>
    <div className='row justify-content-md-center'>
          <div className='container-fluid card-cont d-flex flex-sm-row flex-column '>
          { posts.map((post)=>{
              return(
            <div className="card card-style col-lg-2" key={post._id}>
              <div className="card-body" >
                <h3 className="card-title text-uppercase">{post.title}</h3>
                <h6 className="card-subtitle mb-2 text-muted"><span className='changeColor'>{post.teacher}</span></h6>
                <p className="card-text">{post.body}</p>
              </div>
            </div>)
              })}
          </div>
        </div>
        </div>
        </>
  )
}
