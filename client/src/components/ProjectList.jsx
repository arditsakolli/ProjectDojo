import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import NavBar from './Views/NavBar';
import { Link,useNavigate } from 'react-router-dom';

function ProjectList(props) {
  const {socket, update, setUpdate} = props
  const [projects, setProjects] = useState([]);
  const [expandedProjectId, setExpandedProjectId] = useState(null);
  const navigate = useNavigate()

  useEffect(() => {
    axios.get('http://localhost:8000/api/project/')
      .then(res => {
        setProjects(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const toggleTextExpansion = (projectId) => {
    setExpandedProjectId((prevExpandedProjectId) => 
      prevExpandedProjectId === projectId ? null : projectId
    );
  };

 
  const viewOne = (uniqueID) => {
    navigate(`/viewone/${uniqueID}`);
};

const handleDeleteButton = (uniqueID) =>{
  axios.delete(`http://localhost:8000/api/project/${uniqueID}`)
  .then((res)=>{
    console.log(res)
    // navigate('/')
    setProjects(projects.filter(project => project._id !== uniqueID));
    socket.emit('toServer', res.data)
  })
  .catch((err)=>{
    console.log(err)
  })

}

  return (
    <>
      <NavBar />
      <div className='d-flex justify-content-center'> 
        <div className='w-50 p-3 mt-3 fform transparent shadow-sm p-3'>
        <div className=' p-3'>
          {projects.map((item, ) => (
            <div key={item._id} className=' mb-4 bg-light p-3 text-dark'>
                  
                  <h3 className="card-title">{item.projectName.toUpperCase()}</h3>
                   <br/>
                  <h5>Details</h5>
                  <p className="card-text">
                    {expandedProjectId === item._id ? item.projectDetails : `${item.projectDetails.slice(0, 100)}...`}
                  </p>
                  {item.projectDetails.length > 100 && (
                    <button onClick={() => toggleTextExpansion(item._id)} className="btn btn-link">
                      {expandedProjectId === item._id ? 'Read Less' : 'Read More'}
                    </button>
                  )}
               
  
              <div className="card-footer text-body-secondary">
                  <p>{item.data}</p>
                  <button onClick={()=>viewOne(item._id)} className='btn  btn-success'>View</button>
                  <button onClick={()=>handleDeleteButton(item._id)} className='btn btn-success ml-3'>Delete</button>
                </div>
            </div>
          ))}
        </div>
      </div>
      </div>
      
    </>
  );
}

export default ProjectList;

