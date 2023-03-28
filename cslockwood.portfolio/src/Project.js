import React from 'react';
import { FaGithub } from 'react-icons/fa';

function Project(props) {
  return (
    <div className='project-parent'>
      <div className='project-overlay'>
        <img src={props.picture} alt={props.alt} className='project-img' />
        <div className='project-description'>
          <div className='project-links-parent'>
          <a className= "icon" href={props.repo}>
              <FaGithub className='iconcolor' />
          </a>

          <a className='project-link' href={props.link}>View project</a>
          </div>

          <div className='description-format'>
      
            <h4 className='overlay-title'>{props.h4}</h4>
            <p>{props.description}</p>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;