import React from 'react';

function Project(props) {
  return (
    <div className='project-parent'>
      <div className='project-overlay'>
        <img src={props.picture} alt={props.alt} className='project-img' />
        <div className='project-description'>
          <p>{props.description}</p>
          <a className='project-link' href={props.link}>View project</a>
        </div>
      </div>
    </div>
  );
}

export default Project;