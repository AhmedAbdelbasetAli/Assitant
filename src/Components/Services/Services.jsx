import React from 'react';
import BusinessServices from './BusinessServices/BusinessServices';
import ImmigrationServices from './ImmigrationServices/ImmigrationServices';
import InvestInHungary from './InvestInHungary/InvestInHungary';
import './Services.css';

const Services = () => {
  const backgroundImageStyle = {
    backgroundImage: 'url(budahills.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
    padding: '20px',
    color: 'white',
  };

  return (
    <div style={backgroundImageStyle}>
      <div className="serviceContainer">
        <h1 className="serviceTitle">Our Services</h1>
        <BusinessServices />
        <ImmigrationServices />
        <InvestInHungary />
      </div>
    </div>
  );
};

export default Services;
