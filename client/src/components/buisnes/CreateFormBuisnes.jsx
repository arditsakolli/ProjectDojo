import React from "react";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';
import { Link } from "react-router-dom";

function CreateFormBuisnes() {
  return (
    //   form for creating personal acc
    <div className=" d-flex align-items-center justify-content-center mt-3 background-container ">
      {/* <div>
      <Card style={{ width: '18rem' }}>
        
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      </div> */}
      <div className="shadow-lg p-3 mb-5 bg-white rounded">
      <h1> Create Buisnes Account</h1>
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
      </FloatingLabel>  <br/>
      <button className="btn btn-warning d-inline">Log IN</button>
      <p className="d-inline ml-2">if you alredy have an account  <Link> sign in</Link></p>
      
      </div>
      
      
    </div>

  );
}

export default CreateFormBuisnes;
