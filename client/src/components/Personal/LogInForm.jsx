import React from "react";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function LogInForm() {
  return (
    <div className=" d-flex align-items-center justify-content-center mt-3 ">
    {/* //Personal log in form */}
   
   <div className="shadow-lg p-0 mb-0 bg-white rounded">
   <h1>Log In to your Personal account</h1>
   <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Password">
        
        <Form.Control type="password" placeholder="Password" />
      </FloatingLabel>
   </div>
    </div>
  );
}

export default LogInForm;
