import React, { useEffect } from "react"; // Import useEffect from React
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import video from "../../assets/clasic.mp4";
import Footer from "../Footer";

function LogInFormBuisnes() {


  return (
    <>
      <div className="d-flex align-items-center justify-content-center">
        {/* //Personal log in form */}
        <video src={video} autoPlay loop muted className="kenburns-bottom-right tttt"></video>
        <div className="content puff-in-center">
          <div className="shadow-lg p-3 mb-5 rounded transparent">
            <h1>Log In to your Business account</h1>
            <FloatingLabel
              controlId="floatingInput"
              label="Email address"
              className="mb-3 text-secondary"
            >
              <Form.Control type="email" placeholder="name@example.com" />
            </FloatingLabel>

            <FloatingLabel controlId="floatingPassword" label="Password" className="text-secondary">
              <Form.Control type="password" placeholder="Password" />
            </FloatingLabel>
            <div className="mt-5">
              <button className="btn btn-success d-inline">Log IN</button>
              <p className="d-inline ml-2">
                {" "}
                <Link to="/createbuisnesaccpage"> Create Account</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LogInFormBuisnes;
