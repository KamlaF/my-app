import React from 'react';
import ContactPage from '../../components/ContactForm/ContactForm';

const ContactPageView = () => {
  const handleFormSubmit = (formData) => {
    console.log('Form Data:', formData);
    // Handle form submission here (e.g., API calls)
  };

  return (
    <div>
      <h1>Contact Us</h1>
      <ContactPage onSubmit={handleFormSubmit} />
      {/* Other content for the contact page */}
    </div>
  );
};

export default ContactPageView;
