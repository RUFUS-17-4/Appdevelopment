// src/components/Map.js

import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS

// Import your custom icon
import locationPin from './images/location.webp'; // Adjust the path as needed

const Map = () => {
  // Expanded data for Tamil Nadu regions with soil details
  const regions = [
    { name: 'Chennai', lat: 13.0827, lng: 80.2707, soil: 'Red soil, clayey soil' },
    { name: 'Coimbatore', lat: 11.0168, lng: 76.9558, soil: 'Loamy soil, Clay soil' },
    { name: 'Madurai', lat: 9.9251, lng: 78.1198, soil: 'Sandy soil, Peaty soil' },
    { name: 'Tiruchirapalli', lat: 10.7905, lng: 78.7047, soil: 'Red soil, black soil' },
    { name: 'Salem', lat: 11.6667, lng: 78.1667, soil: 'Loamy soil,Red soil, black soil' },
    { name: 'Erode', lat: 11.3416, lng: 77.7172, soil: 'Red soil, alluvial soil' },
    { name: 'Tirunelveli', lat: 8.7100, lng: 77.7500, soil: 'Alluvial soil, sandy soil' },
    { name: 'Kanchipuram', lat: 12.8333, lng: 79.7000, soil: 'Clayey soil, red soil' },
    { name: 'Vellore', lat: 12.9167, lng: 79.1333, soil: 'Red soil, black soil' },
    { name: 'Cuddalore', lat: 11.7500, lng: 79.7500, soil: 'Alluvial soil, clayey soil' },
    { name: 'Kanyakumari', lat: 8.4330, lng: 77.5830, soil: 'Sandy soil, Lateral soil' }, 
  ];

  // Create a custom icon
  const customIcon = new L.Icon({
    iconUrl: locationPin, // Path to your custom icon image
    iconSize: [32, 32],   // Size of the icon
    iconAnchor: [16, 32], // Point of the icon which will correspond to marker's location
    popupAnchor: [0, -32] // Point from which the popup should open relative to the iconAnchor
  });

  return (
    <MapContainer center={[11.1271, 78.6569]} zoom={7} style={{ height: '80vh', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {regions.map((region, index) => (
        <Marker
          key={index}
          position={[region.lat, region.lng]}
          icon={customIcon} // Use the custom icon here
        >
          <Popup>
            <strong>{region.name}</strong><br />
            Soil: {region.soil}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
