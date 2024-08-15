import React from 'react';
import { Link } from 'react-router-dom';
import './WaterManagement.css';

const WaterManagement = () => {
  const waterCategories = [
    {
      icon: "💧",
      name: "Irrigation Systems",
      description: "Efficient methods for watering crops.",
      path: "/IrrigationSystem"
    },
    {
      icon: "🌧",
      name: "Rainwater Harvesting",
      description: "Collecting and storing rainwater for future use.",
      path: "/RainwaterHarvesting"
    },
    {
      icon: "🌿",
      name: "Water Conservation",
      description: "Techniques to reduce water usage and waste.",
      path: "/WaterConservation"
    },
    {
      icon: "🚰",
      name: "Water Quality Management",
      description: "Ensuring clean and safe water for crops.",
      path: "/WaterQualityManagement"
    },
    {
      icon: "🚜",
      name: "Drainage Systems",
      description: "Managing excess water to prevent flooding.",
      path: "/DrainageSystems"
    },
    {
      icon: "📡",
      name: "Soil Moisture Monitoring",
      description: "Tracking soil moisture levels to optimize watering.",
      path: "/SoilMoistureMonitoring"
    },
  ];

  return (
    <div className="water-management-container">
      <h1 className="titlew" sx={{color:"black"}}>Water Management</h1>
      <div className="water-grid">
        {waterCategories.map((category, index) => (
          <Link key={index} to={category.path} className="link">
            <WaterCategoryCard
              icon={category.icon}
              name={category.name}
              description={category.description}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

const WaterCategoryCard = ({ icon, name, description }) => (
  <div className="water-card">
    <div className="water-icon">{icon}</div>
    <h2 className="water-name">{name}</h2>
    <p className="water-description">{description}</p>
  </div>
);

export default WaterManagement;