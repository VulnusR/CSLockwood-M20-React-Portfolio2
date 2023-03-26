import React from 'react';
import Project from './Project.js';

function Portfolio() {
    return (
      <div className='main-article'>
      <h2 className='page-title'>Portfolio</h2>
      <div className='portfolio-parent'>
        <div className='porfolio-col-1'>
          <Project></Project>
          <Project></Project>
          <Project></Project>

        </div>
        <div className='porfolio-col-2'>
        <Project></Project>
        <Project></Project>
        <Project></Project>
        
          
        </div>
      </div>
      </div>
    );
}
  
export default Portfolio;