// App.js
import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Import your CreateProfilPage component
import LogInBuisnesAcc from './components/Views/LogInBuisnesAcc';
import LoginPage from './components/Views/LoginPage';
import CreateBuisnesAccPage from './components/Views/createBuisnesAccPage';
import CreateProfilPage from './components/Views/CreateProfilPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<LoginPage />} />

        <Route path="/loginpage" element={<LoginPage />} />
        <Route path="/createprofilpage" element={<CreateProfilPage />} />
        <Route path="/createbuisnesaccpage" element={<CreateBuisnesAccPage />} />
        <Route path="/loginbuisnesacc" element={<LogInBuisnesAcc />} />  
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
