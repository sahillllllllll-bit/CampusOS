import React from 'react'
import './layout.css';
import Recent from './Recent';

const Layout = () => {
  return (
    <div className=" sticky-0 -z-10 layout2">
      <div className='irregular-ellipse '>
        <Recent/>
      </div>
      <div className='irregular-ellipse2'></div>
    </div>
  );        
};

export default Layout;
