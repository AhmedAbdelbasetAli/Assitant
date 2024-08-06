// src/components/Location/Location.jsx
import React from 'react';
import MapComponent from '../Map/Map';
import ContactInfo from '../ContactInfo/ContactInfo';

const Location = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', padding: '20px' }}>
      <ContactInfo />
      <MapComponent />
    </div>
  );
};

export default Location;
