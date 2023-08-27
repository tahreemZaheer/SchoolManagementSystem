import React, { useState } from 'react'
import { addPost } from '../../services/posts.service.js';
import { useNavigate } from 'react-router-dom';
import './Course.css'

export const CreateCoursePage= () => {

    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
  
    const handleTitleChange = (event) => {
        setTitle(event.target.value);
      };
    
      const handleBodyChange = (event) => {
        setBody(event.target.value);
      };
      const handlePublish = () => {
        // Perform actions to publish the post, like sending data to a server
        console.log('Course created:', { title, body});
    
        let formData= new FormData();
        formData.append("title", title);
        formData.append("body", body);
   
        addPost(formData).then((post)=>{
            if(post){
                navigate("/course");
            }
        })
        // Reset the form
        setTitle('');
        setBody('');
        setCoverPhoto(null);
      };
    
      const handleCancel = () => {
        // Perform actions to cancel post creation
        console.log('Course creation canceled');
        // Reset the form
        setTitle('');
        setBody('');
  
      };
    
    

    return (
        <div className="container mt-4">
      <h1>Create Post</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Enter title"
            value={title}
            onChange={handleTitleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="body" className="form-label">
            Body
          </label>
          <textarea
            className="form-control"
            id="body"
            rows="4"
            placeholder="Enter body"
            value={body}
            onChange={handleBodyChange}
          ></textarea>
        </div>

        <button type="button" className="btn btn-primary" onClick={handlePublish}>
          Publish
        </button>
        <button type="button" className="btn btn-secondary" onClick={handleCancel}>
          Cancel
        </button>
      </form>
    </div>
    )
}
