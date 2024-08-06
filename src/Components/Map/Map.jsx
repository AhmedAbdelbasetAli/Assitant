// src/components/MapComponent/MapComponent.jsx
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const center = [47.497913, 19.040235]; // Budapest coordinates

const MapComponent = () => {
  return (
    <MapContainer center={center} zoom={13} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={center}>
        <Popup>
          Budapest, Akácfa u. 25, 1072
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
