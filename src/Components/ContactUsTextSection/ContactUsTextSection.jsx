import React from 'react';
import './ContactUsTextSection.css';

const ContactUsTextSection = () => {
  return (
    <div className="contact-us-section">
      <h2 className="contact-us-header">CONTACT US</h2>
      <div className="contact-us-content">
        <p className="contact-description">
          Our dedicated team of business and immigration specialists is here to support your journey with expert advice and a personalized touch. Whether you're setting up a company, seeking residency, or looking to invest in Hungary, we offer comprehensive services tailored to your needs.
        </p>
        <p className="contact-description">
          We pride ourselves on our rapid response times and efficient processes, ensuring you receive the assistance you need, when you need it. Our multilingual team is ready to guide you through every step with professionalism and care. Let's turn your aspirations into reality—reach out to us today!
        </p>
      </div>
      <p className="immigration-note">
        <small>Need assistance with immigration? Please note that response times may be extended due to increased demand. We're committed to getting back to you as soon as possible.</small>
      </p>
    </div>
  );
};

export default ContactUsTextSection;
