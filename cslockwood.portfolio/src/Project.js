import React from 'react';

function Project(props) {
  return (
    <div className='project-parent'>
      <img src={props.picture} alt='project' className='project-img' />
      <p>{props.description}</p>
      <a href={props.link}>View project</a>
    </div>
  );
}

export default Project;