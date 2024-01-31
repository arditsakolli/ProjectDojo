import  axios  from 'axios'
import React, { useEffect, useState } from 'react'
import { Link,useParams, useNavigate } from 'react-router-dom';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import NavBar from './Views/NavBar';
function Editform(){
    const [update,setUpdate] = useState({})
    const { id } = useParams();
    const [projectName, setProjectName] = useState('');
    const [projectDetails, setProjectDetails] = useState('');
    const [data, setData] = useState(null);
    // const [selectedImage, setSelectedImage] = useState(null);
    // const [formSubmittedWithoutData, setFormSubmittedWithoutData] = useState(false); // New state variable
    const navigate = useNavigate();
    const [error, setError] = useState('')

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/project/${id}`)

         .then(res => {
            projectName(res.data.projectName);
            setProjectDetails(res.data.projectDetails);
            setData(res.data.data);
      })
      .catch((err)=>{
        console.log(err)
      }
      )
    },[])
    const submitHandler = (e) =>{
        e.preventDefault()
        axios.put(`http://localhost:8000/api/project/${id}`)

        .then(res => {
           
     })
     .catch((err)=>{
       console.log(err)
     }
     )
      
    }
  return (
    <>
    <NavBar/>
    <div className='d-flex align-items-center justify-content-center mt-5'>
        <div className="shadow-lg p-3 mb-5 transparent rounded ">
            <form onClick={submitHandler}>
                <h1> Edit </h1>
                <div className='d-flex'>
                    <div>
                         <FloatingLabel controlId="floatingProjectName" label="Project Name" className="mb-3 text-secondary">
                    <Form.Control  onChange={(e)=>projectName(e.target.value)} type="text" placeholder="Create Project" />
                </FloatingLabel>
           
              

                <FloatingLabel controlId="floatingLastName" label="Project Details" className="mb-3 text-secondary">
                    <Form.Control   onChange={(e)=>setProjectDetails(e.target.value)} type="text" placeholder="Project Details" />
                </FloatingLabel>

                
                    </div>
                     
                <div className="image-upload ml-3">

                    
                <input type="file" id="fileInput" accept="image/*"   />
                <label htmlFor="fileInput" className="custom-file-upload">
                <i className="fas fa-plus"></i> Add Image
                </label>

                <Form.Group controlId="exampleForm.ControlDate ">
                    <Form.Label>Select a date:</Form.Label>
                    <Form.Control  onChange={()=>setData(e.target.value)} type="date" />
                </Form.Group>
                </div>
                </div>
              

                <div className="">
                    <button type="submit" className="btn btn-success ">Create Project</button>
                </div>
            </form>
        </div>
    </div>
</>
  )
}

export default Editform