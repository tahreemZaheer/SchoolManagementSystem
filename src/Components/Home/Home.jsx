import React from 'react'
import { AiFillDelete } from "react-icons/ai"
import { FiEdit } from "react-icons/fi";

export const Home = () => {
  return (


    <>


    <div className='containerr '>
    <h1 className='d-flex justify-content-md-center pt-4'>Welcome to SchoolHub</h1>
    <div className='row justify-content-md-center'>
          <div className='container-fluid card-cont d-flex flex-sm-row flex-column '>
            <div className="card card-style col-lg-2">
              <div className="card-body">
                <h3 className="card-title">Course Name</h3>
                <h6 class="card-subtitle mb-2 text-muted"><span className='changeColor'>Teacher Name</span></h6>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>



            <div className="card card-style col-lg-2">
              <div className="card-body">
                <h3 className="card-title">Course Name</h3>
                <h6 class="card-subtitle mb-2 text-muted"><span className='changeColor'>Teacher Name</span></h6>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
        </div>
        </div>
        </>
  )
}
