import React, { useState } from 'react';
import './ContactForm.scss'; 

const ContactPage = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    subject: '',
    email: '',
    body: ''
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    let tempErrors = {};
    tempErrors.fullName = formData.fullName.length > 2 ? "" : "Full name must be at least 3 characters long.";
    tempErrors.subject = formData.subject.length > 2 ? "" : "Subject must be at least 3 characters long.";
    tempErrors.email = (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(formData.email)) ? "" : "Email is not valid.";
    tempErrors.body = formData.body.length > 2 ? "" : "Body must be at least 3 characters long.";

    setErrors(tempErrors);
    return Object.values(tempErrors).every(x => x === "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <div>
        <label>Full Name:</label>
        <input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} />
        {errors.fullName && <p>{errors.fullName}</p>}
      </div>

      <div>
        <label>Subject:</label>
        <input type="text" name="subject" value={formData.subject} onChange={handleInputChange} />
        {errors.subject && <p>{errors.subject}</p>}
      </div>

      <div>
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
        {errors.email && <p>{errors.email}</p>}
      </div>

      <div>
        <label>Body:</label>
        <textarea name="body" value={formData.body} onChange={handleInputChange}></textarea>
        {errors.body && <p>{errors.body}</p>}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactPage;
