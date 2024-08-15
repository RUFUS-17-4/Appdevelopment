import React from "react";
import './LandManagement.css';  
import { Link } from "react-router-dom";

const LandManagement = () => {
  return (
    <div className="app-container">
      <div className="navbar1">
        Land Management
      </div>
      <div className="grid-container">
        <Link to="/SoilGuidance" className="card-link">
          <CategoryCard
            icon="🌱"
            title="Soil Guidance"
            description="Give a detailed guidance on soil management."
          />
        </Link>
        <Link to="/WaterManagement" className="card-link">
          <CategoryCard
            icon="💧"
            title="Water Management"
            description="View and manage land records."
          />
        </Link>
        <Link to="/Map" className="card-link">
        <CategoryCard
          icon="🗺"
          title="Maps"
          description="Explore geographic maps."
        />
          </Link>
          <Link to="/Maintenance" className="card-link">
        <CategoryCard
          icon="🔧"
          title="Maintenance"
          description="Schedule and track maintenance."
        />
        </Link>
        <Link to="/Weather" className="card-link">
        <CategoryCard
          icon="📈"
          title="Weather Reports"
          description="Generate and view reports."
        />
        </Link>
        <Link to="/Feedback" className="card-link">
        <CategoryCard
          icon="💬"
          title="Feedback"
          description="Provide and review feedback."
        />
        </Link>
      </div>
    </div>
  );
};

const CategoryCard = ({ icon, title, description }) => (
  <div className="cardl" style={{opacity:"80%"}}>
    <div className="icon">{icon}</div>
    <h2 className="card-title">{title}</h2>
    <p className="card-description">{description}</p>
  </div>
);

export default LandManagement;