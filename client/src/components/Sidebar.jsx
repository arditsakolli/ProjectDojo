import React, { useState, useEffect, useRef } from 'react';


function Sidebar() {
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
    <div>
      <button className='btn buttons' onClick={toggleSidebar}>Menu</button>
      <div ref={sidebarRef} className={isSidebarOpen ? "sidebar open" : "sidebar"}>
       
        {/* Sidebar Content */}
        <ul>
          <button className='btn' onClick={toggleSidebar}>Hamburger button</button>
          <li>Link 1</li>
          <li>Link 2</li>
          <li>Link 3</li>
          {/* Add more sidebar links as needed */}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
