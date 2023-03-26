import React from 'react';
import { FaXbox } from 'react-icons/fa';

function Contact() {
  return (
    <div className='main-article'>
      <h2 className='page-title'>Contact</h2>
        <div className='contact-parent'>

          <div className="btn-plus-fields-parent">

            <div className='fields-parent'>
              <h3 className='contact-h3'>Name:</h3>
              <input className='standard-input' type={Text}></input>
              <h3  className='contact-h3'>Email</h3>
              <input className='standard-input' type={Text}></input>
            </div>

            <input className='contact-btn' type={'button'}></input>
          </div>

          <h3 className='contact-h3'>Your Message:</h3>
          <input className='lg-input' type={Text}></input>
        </div> 
      </div>
  );
}
  
export default Contact;