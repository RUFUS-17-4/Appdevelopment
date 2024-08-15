import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import './ClayCrops.css';

const LoamyCrops = () => {
  const [filter, setFilter] = useState('All'); // State to manage the selected filter

  // Crop data with categories for Loamy Soil
  const cropsForLoamySoil = [
    { icon: "🍓", name: "Strawberry", description: "Loamy soil is perfect for strawberries.", category: "Fruit" },
    { icon: "🍏", name: "Apple", description: "Requires nutrient-rich loamy soil.", category: "Fruit" },
    { icon: "🥕", name: "Carrot", description: "Does well in loamy soil with good drainage.", category: "Root" },
    { icon: "🌽", name: "Corn", description: "Thrives in fertile, well-drained loamy soil.", category: "Stem" },
    { icon: "🥦", name: "Broccoli", description: "Prefers loamy soil rich in organic matter.", category: "Stem" },
    { icon: "🥬", name: "Lettuce", description: "Loamy soil provides ideal growth conditions.", category: "Leafy" },
    { icon: "🌰", name: "Peanut", description: "Does well in loamy, well-drained soil.", category: "Root" },
    { icon: "🥒", name: "Cucumber", description: "Prefers loose, loamy soil for root growth.", category: "Fruit" },
    { icon: "🥔", name: "Potato", description: "Thrives in loamy soil with good aeration.", category: "Root" },
    { icon: "🧄", name: "Garlic", description: "Loamy soil supports garlic bulb growth.", category: "Root" },
  ];

 
  const filteredCrops = cropsForLoamySoil.filter(
    (crop) => filter === 'All' || crop.category === filter
  );

  return (
    <div className="crop-category-container">
      <div className="header">
        <h1 className="titleloamy">Crops for Loamy Soil</h1>
        <div className="dropdown">
          <button className="dropbtn">
            {filter} <span>&#9660;</span>
          </button>
          <div className="dropdown-content">
            <a href="#" onClick={() => setFilter('All')}>All</a>
            <a href="#" onClick={() => setFilter('Stem')}>Stem</a>
            <a href="#" onClick={() => setFilter('Root')}>Root</a>
            <a href="#" onClick={() => setFilter('Fruit')}>Fruit</a>
            <a href="#" onClick={() => setFilter('Leafy')}>Leafy</a>
          </div>
        </div>
      </div>
      <div className="crop-grid">
        {filteredCrops.map((crop, index) => (
            crop.name === "Carrot" ? (
              <Link to="/CarrotGuidance" key={index} className="crop-link">
                <CropCard icon={crop.icon} name={crop.name} description={crop.description} />
              </Link>
            ) :
            crop.name === "Potato" ? (
              <Link to="/Potato" key={index} className="crop-link">
                <CropCard icon={crop.icon} name={crop.name} description={crop.description} />
              </Link>
            ) :
          (
          <CropCard key={index} icon={crop.icon} name={crop.name} description={crop.description} />
          )
        ))}
      </div>
    </div>
  );
};

const CropCard = ({ icon, name, description }) => (
  <div className="crop-card">
    <div className="crop-icon">{icon}</div>
    <h2 className="crop-name">{name}</h2>
    <p className="crop-description">{description}</p>
  </div>
);

export default LoamyCrops;