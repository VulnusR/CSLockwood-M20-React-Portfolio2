import React from 'react';

function Resume() {
    return (
    <div className='main-article'>
      <h2 className='page-title'>Resume</h2>
      <h4 className='download-txt'>Download my resume<span className='download-link'> here!</span></h4>
      <div className='resume-parent'>
        <div className='frontend-parent'>
          <h3  className="contact-h3">Front End Proficiencies</h3>
          <div className='resume-p'>
            <p>HTML</p>
            <p>CSS</p>
            <p>JavaScript</p>       
            <p>JQuery</p>
            <p>Responsive Design</p>
            <p>Bootstrap</p>
          </div>
        </div>  
           
        <div className='backend-parent'>
          <h3 className="contact-h3">Back End Proficiencies</h3>
          <div className='resume-p'>
            <p>APIs</p>
            <p>Node</p>
            <p>Express</p>        
            <p>MySql, Sequelize</p>
            <p>MongoDB, Mongoose</p>
            <p>REST</p>
            <p>GraphicQL</p>
          </div>
        </div> 
      </div>
    </div>
  );
}
  
export default Resume;