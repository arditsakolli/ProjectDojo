import { useParams, useNavigate } from 'react-router-dom';
import React, { useEffect, useState,  } from "react";
import axios from 'axios';
import NavBar from './Views/NavBar';

function Viewone() {
  const [project, setProject] = useState({});
  const { id } = useParams();
  const navigate =useNavigate()

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/project/${id}`)
      .then((res) => {
        // console.log(res.data);
        setProject(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

//   const handleEditButton = (projectId) =>{
//     navigate(`/viewone/${uniqueID}`)
//   }
//   const viewOne = (uniqueID) => {
//     navigate(`/viewone/${uniqueID}`);
// };

const handleDeleteButton = () =>{
    axios.delete(`http://localhost:8000/api/project/${id}`)
    .then((res)=>{
      console.log(res)
      navigate('/projectlist')
    })
    .catch((err)=>{
      console.log(err)
    })

}
const editButton = (uniqueID) =>{
    navigate(`/editform/${uniqueID}`)
}

  return (
    <>
    <NavBar/>
    <div className='d-flex align-items-center justify-content-center ' >
     
      <div className=" mt-5 ml-5 mr-5 bCollor p-5 shadow-lg p-3 mb-5 bg-white rounded maxWidth border4side">
      <div class="card-body font-family   borderbootom pb-3">
        <h2 className="card-title">Project : <h1>{project.projectName}</h1></h2> <br/>
        <h3>Details :</h3>
        <h4 className=" para"> { project.projectDetails}</h4>
        <button onClick={handleDeleteButton} className='btn btn-success'>Delete</button>
        <button onClick={()=>editButton(project._id)} className='btn btn-success ml-3'>Edit</button>
      </div>
    </div>
  </div>
  </>
  );
}

export default Viewone;
