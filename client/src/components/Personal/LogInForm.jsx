import React from "react";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";
import video from '../../assets/galaktik.mp4'


function LogInForm() {

  return (
    // background-containerP 
    <div className=" d-flex align-items-center justify-content-center maiin "> 
    {/* //Personal log in form */}
    <video className="video kenburns-bottom-right tttt" src={video} autoPlay loop  muted></video> 
    <div className="content puff-in-center ">
       <div className="shadow-lg p-3 mb-0  rounded transparent">
   <h1>Log In to your Personal account</h1>
   <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3 text-secondary"
      >
        <Form.Control type="email" placeholder="name@example.com" className="text-secondary" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Password" className="text-secondary">
        
        <Form.Control type="password" placeholder="Password" />
      </FloatingLabel>
      <div className="mt-5">
      <button className="btn btn-success d-inline">Log IN</button>
      <p className="d-inline ml-2"> <Link to='/createprofilpage'> Create Account</Link></p>
      </div>
   </div>
    </div>
  
    </div>
  );
}

export default LogInForm;
