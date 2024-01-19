// HamburgerMenu.js
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useNavigate } from 'react-router-dom';

const HamburgerMenu = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/loginpage');
    handleClose();
  };

  const handleCreateAccountClick = () => {
    // Replace the path with the correct route for creating an account
    navigate('/createprofilpage');
    handleClose();
  };

  const handleCreateBuisnesAccountClick = () => {
    // Replace the path with the correct route for creating a business account
    navigate('/createbuisnesaccpage');
    handleClose();
  };

  const handleLoginBuisnesAccountClick = () => {
    // Replace the path with the correct route for logging into a business account
    navigate('/loginbuisnesacc');
    handleClose();
  };

  return (
    <>
      <Button className='btn btn-secondary' variant="primary" onClick={handleShow}>
        Menu
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className=''>
          <div className='d-grid gap-2'>
            <Button onClick={handleLoginClick} className='btn btn-light d-block'>Log-In</Button>
            <Button onClick={handleCreateAccountClick} className='d-block btn-light'>Create Account</Button>
            <Button onClick={handleCreateBuisnesAccountClick} className='d-block btn-light'>Create Buisnes Account</Button>
            <Button onClick={handleLoginBuisnesAccountClick} className='d-block btn-light'>Log-In to B-Account</Button>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default HamburgerMenu;
