import React, { useState } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import NavBar from './Views/NavBar';
import Footer from './Footer';


function ProjectForm() {
    const [projectName, setProjectName] = useState('');
    const [projectDetails, setProjectDetails] = useState('');
    const [data, setData] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);
    const [formSubmittedWithoutData, setFormSubmittedWithoutData] = useState(false); // New state variable
    const navigate = useNavigate();
    const [error, setError] = useState('')


    const createProject = (e) => {
        e.preventDefault();

        if (!projectName || !projectDetails || !data) {
            setFormSubmittedWithoutData(true); // Set the state to true if required fields are not filled
            return;
        }

        axios.post('http://localhost:8000/api/project/', {
            projectName,
            projectDetails,
            data,
            selectedImage,
        })
        .then(res => {
            navigate('/projectlist');
            console.log(res.data);
        })
        .catch((err) => {
            console.log(err.response.data.error);
            setError(err.response.data.error)
        });
    };
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setSelectedImage(event.target.files[0]);
    };

    return (
        <>
            <NavBar/>
            <div className={`d-flex align-items-center justify-content-center mt-3 puff-in-ver fform ${formSubmittedWithoutData ? 'shake-top' : ''}`}>
                <div className="shadow-lg p-3 mb-5 transparent rounded">
                    <form onSubmit={createProject}>
                        <h1> Create Project</h1>
                        <div className='d-flex'>
                            <div>
                                 <FloatingLabel controlId="floatingProjectName" label="Project Name" className="mb-3 text-secondary">
                            <Form.Control onChange={(e) => setProjectName(e.target.value)} type="text" placeholder="Create Project" />
                        </FloatingLabel>
                        {
                            error.projectName?
                            <p>{error.projectName.message}</p>:
                            null
                        }

                        <FloatingLabel controlId="floatingLastName" label="Project Details" className="mb-3 text-secondary">
                            <Form.Control onChange={(e) => setProjectDetails(e.target.value)} type="text" placeholder="Project Details" />
                        </FloatingLabel>

                        
                            </div>
                             
                        <div className="image-upload ml-3">

                            
                        <input type="file" id="fileInput" accept="image/*"  onChange={(e) => setSelectedImage(e.target.files[0])}  />
                        <label htmlFor="fileInput" className="custom-file-upload">
                        <i className="fas fa-plus"></i> Add Image
                        </label>

                        <Form.Group controlId="exampleForm.ControlDate ">
                            <Form.Label>Select a date:</Form.Label>
                            <Form.Control onChange={(e) => setData(e.target.value)} type="date" />
                        </Form.Group>
                        </div>
                        </div>
                      

                        <div className="">
                            <button type="submit" className="btn btn-warning ">Create Project</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default ProjectForm;
