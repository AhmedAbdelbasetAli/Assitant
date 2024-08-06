// src/components/ContactInfo/ContactInfo.jsx
import React from 'react';
import './ContactInfo.css'; // Assuming you have a CSS file for styling

const ContactInfo = () => {
  return (
    <div className="contact-info">
      <h3>CONTACT US</h3>
      <p><strong>Phone:</strong> +36-70-742-8038</p>
      <p><strong>Email:</strong> info@assistant.hu</p>
      <p><strong>Office Hours:</strong> Monday–Friday, 9am–5pm CET</p>
      <p><strong>Address:</strong> Budapest, Akácfa u. 25, 1072</p>
    </div>
  );
};

export default ContactInfo;
