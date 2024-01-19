import React from "react";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
function CreatePersonalAccForm() {
  return (
    //   form for creating personal acc
    <div className=" d-flex align-items-center justify-content-center mt-3">
     <div className="shadow-lg p-3 mb-5 bg-white rounded">
     <h1> Create Account</h1>
      <FloatingLabel controlId="floatingFirstName" label="First Name" className="mb-3">
        <Form.Control type="text" placeholder="First Name"/>
      </FloatingLabel>

      <FloatingLabel controlId="floatingLastName" label="Last Name" className="mb-3">
        <Form.Control type="text" placeholder="Last Name" />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
        <Form.Control type="email" placeholder="name@example.com"  />
      </FloatingLabel>

      <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control type="password" placeholder="Password"  />
      </FloatingLabel>
     </div>
      
    </div>

  );
}

export default CreatePersonalAccForm;
