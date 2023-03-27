import React, { useState } from 'react';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleNameBlur = () => {
    if (!name) {
      setErrors((prev) => ({ ...prev, name: 'Name is required' }));
    } 
    
    else {
      setErrors((prev) => ({ ...prev, name: null }));
    }
  };

  const handleEmailBlur = () => {
    const emailRegex = /\S+@\S+\.\S+/;
    if (!email) {
      setErrors((prev) => ({ ...prev, email: 'Email is required' }));
    } 
    
    else if (!emailRegex.test(email)) {
      setErrors((prev) => ({ ...prev, email: 'Invalid email address' }));
    } 
    
    else {
      setErrors((prev) => ({ ...prev, email: null }));
    }
  };

  const handleMessageBlur = () => {
    if (!message) {
      setErrors((prev) => ({ ...prev, message: 'Message is required' }));
    } 
    
    else {
      setErrors((prev) => ({ ...prev, message: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && message) {
      alert('Form submitted');
      setName('');
      setEmail('');
      setMessage('');
      setErrors({});
    } 
    
    else {
      alert('Please fill in all required fields');
    }
  };

  return (
    <div className='main-article'>
      <h2 className='page-title'>Contact</h2>
      <form className='contact-form' onSubmit={handleSubmit}>
        <div className='contact-parent'>
          <div className='btn-plus-fields-parent'>
            <div className='fields-parent'>
              <h3 className='contact-h3'>Name:</h3>
              <input
                className='standard-input'
                type='text'
                value={name}
                onChange={handleNameChange}
                onBlur={handleNameBlur}
              />

              {errors.name && <span className='error'>{errors.name}</span>}
            
              <h3 className='contact-h3'>Email:</h3>
              <input
                className='standard-input'
                type='email'
                value={email}
                onChange={handleEmailChange}
                onBlur={handleEmailBlur}
              />

              {errors.email && <span className='error'>{errors.email}</span>}

            </div>
            <input className='contact-btn' type='submit' value='Send Message!' />
          </div>

          <h3 className='contact-h3'>Your Message:</h3>
          <textarea
            className='lg-input'
            value={message}
            onChange={handleMessageChange}
            onBlur={handleMessageBlur}
          />

          {errors.message && <span className='error'>{errors.message}</span>}
          
        </div>
      </form>
    </div>
  );
}

export default Contact;