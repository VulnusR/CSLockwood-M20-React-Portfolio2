import React from 'react';

function Contact() {
  return (
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState({});

    const handleSubmit = (event) => {
      event.preventDefault();

      // Check for errors
      const newErrors = {};
      if (!name) {
        newErrors.name = 'Name is required';
      }

      if (!message) {
        newErrors.message = 'Message is required';
      }

      if (!validateEmail(email)) {
        newErrors.email = 'Invalid email address';
      }
  
      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        return;
      }
   

      // Submit the form
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Message:', message);
    };

    
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

            <input className='contact-btn' type={'button'} value="Send Message!"></input>
          </div>

          <h3 className='contact-h3'>Your Message:</h3>
          <input className='lg-input' type={Text}></input>
        </div> 
      </div>
  );
}
  
export default Contact;