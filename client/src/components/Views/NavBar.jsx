import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import HamburgerMenu from '../HamburgerMenu';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Nav from 'react-bootstrap/Nav';
import { Link,useNavigate } from 'react-router-dom';
import Sidebar from '../Sidebar';
import React, { useState, useEffect, useRef } from 'react';


function NavBar() {
  const [light,setLight] = useState(true)
  const navigate = useNavigate()
  const HomeButton = () =>{
    navigate('/home')
  }
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  
  return (
    
     
    <div className='d-flex'>

    
    <nav className="navbar pb-3  d-flex justify-content-start">
         <div className='d-flex'>
          {/* <Sidebar/> */}
         <ul className="menu-items">
         <li>
          </li>   
          <button  className='btn buttons nav-link mb-1' onClick={toggleSidebar}>Menu</button>
              <li><button onClick={HomeButton} className="nav-link " href="#">Home </button></li>
              <li><Link to='/projectform' className="nav-link " href="#">Create Project</Link></li>
              <li><a href="#food">Category</a></li>
              <li><Link to='/projectlist' className="nav-link " href="#">Projects</Link></li>
              <li><a target="_blank" rel="noopener noreferrer" href="mailto:arditsakolill02@gmail.com">Contact</a></li>
          </ul>
         </div>
         <div className="navbar-container container">
          <input type="checkbox" name="" id=""/>
          <div className="hamburger-lines">
              <span className="line line1"></span>
              <span className="line line2"></span>
              <span className="line line3"></span>
          </div>
      </div>
  </nav>
    <div ref={sidebarRef} className={isSidebarOpen ? "sidebar open" : "sidebar"}>
     
      {/* Sidebar Content */}
      <div className='ml-4'>
        <button className='btn text-light' onClick={toggleSidebar}>Hamburger button</button>
        <Link className='d-block btn bg-light' to='/loginpage'>Log in</Link>
        <Link className='d-block btn bg-light' to='/createprofilpage'>Create Account</Link>
        <Link className='d-block btn bg-light' to='/createbuisnesaccpage'>Log-in to B Account</Link>
        <Link className='d-block btn bg-light' to='/loginbuisnesacc'>Create B Account</Link>
        {/* Add more sidebar links as needed */}
        <br/>
        <div className='d-flex justify-content-center  text-light '>
              
              <label>Dark Mode</label>
              <div className="checkbox-wrapper-34 ml-3 ">
              <input className='tgl tgl-ios' id='toggle-34' type='checkbox'/>
              <label className='tgl-btn' htmlFor='toggle-34'></label>
            </div>
            </div>
      </div>
    </div>
  </div>


 
    
  );
}

export default NavBar;

