// App.js
import React, {useState} from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Import your CreateProfilPage component
import LogInBuisnesAcc from './components/Views/LogInBuisnesAcc';
import LoginPage from './components/Views/LoginPage';
import CreateBuisnesAccPage from './components/Views/createBuisnesAccPage';
import CreateProfilPage from './components/Views/CreateProfilPage';
import Home from './components/Views/Home';
import ProjectForm from './components/ProjectForm';
import ProjectList from './components/ProjectList';
import Footer from './components/Footer';
// import { AuthProvider, useAuth } from './AuthContext';
import Viewone from './components/Viewone';
import Editform from './components/Editform';
import io from 'socket.io-client';
import Welcome from './Welcome';

function App() {

  return (
    <BrowserRouter>
      <Routes>
     
      <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/loginpage" element={<LoginPage />} />
        <Route path="/createprofilpage" element={<CreateProfilPage />} />
        <Route path="/createbuisnesaccpage" element={<CreateBuisnesAccPage />} />
        <Route path="/loginbuisnesacc" element={<LogInBuisnesAcc />} />  
        <Route path="/projectform" element={<ProjectForm />} />  
        <Route path="/projectlist" element={<ProjectList />} />  
       
        <Route path="/viewone/:id" element={<Viewone />} />  
        <Route path="/editform/:id" element={<Editform />} /> 


        


      </Routes>
      </BrowserRouter>

  );
}

export default App;
