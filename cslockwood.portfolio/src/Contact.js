import React, { useState } from 'react';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();

    // check for errors
    let errorsFound = {};
    if (!name.trim()) {
      errorsFound.name = "Name is required";
    }
    if (!email.trim()) {
      errorsFound.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errorsFound.email = "Email is invalid";
    }

    if (Object.keys(errorsFound).length) {
      setErrors(errorsFound);
      return;
    }

    // send the form data to the server
    console.log("Name: ", name);
    console.log("Email: ", email);
    console.log("Message: ", message);

    // clear the form fields
    setName('');
    setEmail('');
    setMessage('');
    setErrors({});
  }

  const handleNameChange = (event) => {
    setName(event.target.value);
  }

  const handleNameBlur = () => {
    if (!name.trim()) {
      setErrors({ ...errors, name: "Name is required" });
    } else {
      setErrors({ ...errors, name: "" });
    }
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const handleEmailBlur = () => {
    if (!email.trim()) {
      setErrors({ ...errors, email: "Email is required" });
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setErrors({ ...errors, email: "Email is invalid" });
    } else {
      setErrors({ ...errors, email: "" });
    }
  }

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  }

  return (
    <div className='main-article'>
      <h2 className='page-title'>Contact</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className='contact-parent'>
        <div className= "btn-plus-fields-parent">
        
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
            <button className='contact-btn' type='submit'>Send Message!</button>
            
          </div>
          <h3 className='contact-h3'>Your Message:</h3>
          <textarea
            className='lg-input'
            value={message}
            onChange={handleMessageChange}
          ></textarea>
        </div>
      </form>
    </div>
  );
}
  
export default Contact;