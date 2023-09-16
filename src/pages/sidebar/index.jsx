import React from 'react';
import './index.css';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Navigate to the root (home) route
    navigate('/');
  };

  return (
    <div id='sideBar'>
      <h2>Sidebar</h2>
      <button onClick={handleClick} className='sideBarButton'>
        Home
      </button>
      <button className='sideBarButton'>about</button>
      <button className='sideBarButton'>navbar</button>
    </div>
  );
};

export default Sidebar;
