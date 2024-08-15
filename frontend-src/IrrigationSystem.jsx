import React from 'react';
import { Link } from 'react-router-dom';
import './IrrigationSystem.css';

const IrrigationSystem = () => {
  // Array of irrigation types with their respective details and paths for routing
  const irrigationTypes = [
    {
      icon: "💧",
      name: "Drip Irrigation",
      description: "Delivers water directly to the root zone, minimizing evaporation and runoff.",
      path: "/DripIrrigation"
    },
    {
      icon: "🌦",
      name: "Sprinkler Irrigation",
      description: "Sprays water into the air, simulating natural rainfall over the crops.",
      path: "/SprinklerIrrigation"
    },
    {
      icon: "🌊",
      name: "Surface Irrigation",
      description: "Water flows across the soil surface to the crops, suitable for flat areas.",
      path: "/SurfaceIrrigation"
    },
    {
      icon: "🌿",
      name: "Subsurface Irrigation",
      description: "Delivers water below the soil surface directly to the roots, reducing evaporation.",
      path: "/SubsurfaceIrrigation"
    },
    {
      icon: "🚜",
      name: "Center Pivot Irrigation",
      description: "Uses rotating sprinkler systems to cover large circular areas efficiently.",
      path: "/CenterPivotIrrigation"
    },
    {
      icon: "➡",
      name: "Lateral Move Irrigation",
      description: "Moves a series of sprinklers laterally over the field, watering in a straight line.",
      path: "/LateralMoveIrrigation"
    },
  ];

  return (
    <div className="irrigation-system-container">
      <h1 className="titleir">Irrigation Systems</h1>
      <div className="irrigation-grid">
        {irrigationTypes.map((type, index) => (
          <Link key={index} to={type.path} className="link">
            <IrrigationCard
              icon={type.icon}
              name={type.name}
              description={type.description}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

// Card component representing an individual irrigation type
const IrrigationCard = ({ icon, name, description }) => (
  <div className="irrigation-card">
    <div className="irrigation-icon">{icon}</div>
    <h2 className="irrigation-name">{name}</h2>
    <p className="irrigation-description">{description}</p>
  </div>
);

export default IrrigationSystem;