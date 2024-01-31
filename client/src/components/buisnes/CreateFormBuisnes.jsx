import React from "react";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';
import { Link } from "react-router-dom";
// import videoBg2 from '../../assets/videoBg2.mp4'
import video from '../../assets/video4.mp4'
// import { useAuth } from '../AuthContext';

function CreateFormBuisnes() {
  return (
    //   form for creating personal acc
    <div className=" d-flex align-items-center justify-content-center  ">
     
     <video className="video kenburns-bottom-right tttt" src={video} autoPlay loop  muted></video> 

      <div className="content puff-in-center">
        
      <div className="shadow-lg p-3 mb-5  rounded transparent">
      <h1> Create Buisnes Account</h1>
       <FloatingLabel  controlId="floatingFirstName" label="First Name" className="mb-3 text-secondary">
        <Form.Control className="text-secondary" type="text" placeholder="First Name"/>
      </FloatingLabel>

      <FloatingLabel controlId="floatingLastName" label="Last Name" className="mb-3 text-secondary">
        <Form.Control type="text" placeholder="Last Name" />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3 text-secondary">
        <Form.Control type="email" placeholder="name@example.com"  />
      </FloatingLabel>

      <FloatingLabel controlId="floatingPassword" label="Password" className="text-secondary">
  <Form.Control type="password" placeholder="Password" />
</FloatingLabel> <br/>
      <div className="mt-5">
      <button className="btn btn-success d-inline">Create Account</button>
      <p className="d-inline ml-2">if you alredy have an account  <Link to='/loginbuisnesacc'> sign in</Link></p>  
      </div>
      </div>
      </div>
      
      
    </div>

  );
}

export default CreateFormBuisnes;
