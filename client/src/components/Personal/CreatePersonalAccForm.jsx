

import React, { useState } from "react";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";
import videoBackground from '../../assets/videoBackGround.mp4'
import axios  from "axios";
// import { useAuth } from '../../AuthContext';



function CreatePersonalAccForm() {

//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');

//     if (password !== confirmPassword) {
//       setError('Passwords do not match');
//       return;
//     }

//     try {
//       const newUser = { firstName, lastName, email, password, confirmPassword };
//       const response = await axios.post('http://localhost:8000/api/register', newUser);
//       console.log(response.data); // handle successful response
//     } catch (err) {
//       setError('An error occurred. Please try again later.');
//       console.error(err);
//     }
//   };
// const submitButton=(e)=>{
//       e.preventDefault()
//       console.log('submited')
//       const newUser = {firstName,lastName,email,password,confirmPassword}
//       axios.post('http://localhost:8000/api/register',{withCredentials:true},newUser)
//       .then((res)=>console.log(res))
//       .catch((err)=>console.log(err))
// }
 
  return (
    //   form for creating personal acc
    <div className=" d-flex align-items-center justify-content-center  ">

      <video className="video kenburns-bottom-right tttt" src={videoBackground} autoPlay loop  muted></video> 

    <div className="content puff-in-center">
       <form    className="shadow-lg p-3 mb-5 transparent rounded ">
     
     <h1> Create Personal Account</h1>
      <FloatingLabel controlId="floatingFirstName" label="First Name" className="mb-3 text-secondary">
        <Form.Control  type="text" placeholder="First Name"/>
      </FloatingLabel>

      <FloatingLabel controlId="floatingLastName" label="Last Name" className="mb-3 text-secondary">
        <Form.Control  type="text" placeholder="Last Name" />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3 text-secondary">
        <Form.Control type="email" placeholder="name@example.com"  />
      </FloatingLabel>

      <FloatingLabel controlId="floatingPassword" label="Password" className="text-secondary">
        <Form.Control  type="password" placeholder="Password"  />
      </FloatingLabel>

      <FloatingLabel controlId="floatingPassword" label="Confirm Password" className="text-secondary mt-3">
        <Form.Control  type="password" placeholder="Password"  />
      </FloatingLabel>
     
      <div className="mt-5">
      <button type="submit" className="btn btn-success d-inline">Create Account</button>
      <p className="d-inline ml-2">if you alredy have an account  <Link to='/loginpage'> sign in</Link></p>
      </div>
     </form>
    </div>
      
    </div>

  );
}

export default CreatePersonalAccForm;
