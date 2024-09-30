import React, { useState } from 'react';

function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: 'Sunny',
    lastName: 'Ham',
    contactNumber: '(123-456-7890)',
    email: 'yham1@my.centennialcollege.ca',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    window.location.href = '/';
  };

  return (
    <div className="contact-page">
      <h1>Contact Me</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} required />
        <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} required />
        <input type="text" name="contactNumber" placeholder="Contact Number" onChange={handleChange} />
        <input type="email" name="email" placeholder="Email Address" onChange={handleChange} required />
        <textarea name="message" placeholder="Your Message" onChange={handleChange} required />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default ContactPage;