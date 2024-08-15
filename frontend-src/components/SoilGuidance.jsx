import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './SoilGuidance.css';

const SoilGuidance = () => {
  const soilTypes = [
    { icon: "🌱", name: "Clay Soil", description: "Dense and heavy, holds moisture well.", path: "/ClayCrops" },
    { icon: "🪨", name: "Sandy Soil", description: "Light and drains quickly, low nutrients.", path: "/SandySoil" },
    { icon: "🌿", name: "Loamy Soil", description: "Fertile and well-drained, ideal for plants.", path: "/LoamySoil" },
    { icon: "🌾", name: "Silty Soil", description: "Smooth texture, holds moisture, fertile.", path: "/SiltySoil" },
    { icon: "🪵", name: "Peaty Soil", description: "High organic matter, retains water, acidic.", path: "/PeatySoil" },
    { icon: "🧱", name: "Chalky Soil", description: "Alkaline, drains quickly, stony texture.", path: "/ChalkySoil" }
  ];

  return (
    <div className="soil-guidance-container">
      <h1 className='so'>Soil Guidance</h1>
      <div className="soil-grid">
        {soilTypes.map((soil, index) => (
          <Link to={soil.path} key={index} className="soil-link">
            <SoilCard icon={soil.icon} name={soil.name} description={soil.description} />
          </Link>
        ))}
      </div>
    </div>
  );
};

const SoilCard = ({ icon, name, description }) => (
  <div className="soil-card">
    <div className="soil-icon">{icon}</div>
    <h2 className="soil-name">{name}</h2>
    <p className="soil-description">{description}</p>
  </div>
);

export default SoilGuidance;