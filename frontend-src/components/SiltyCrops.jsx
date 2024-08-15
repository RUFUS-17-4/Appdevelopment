import React, { useState } from 'react';
import './ClayCrops.css';

const SiltyCrops = () => {
  const [filter, setFilter] = useState('All'); // State to manage the selected filter

  // Crop data with categories for Silty Soil
  const cropsForSiltySoil = [
    { icon: "🍆", name: "Eggplant", description: "Silty soil provides good nutrients for eggplant.", category: "Fruit" },
    { icon: "🍅", name: "Tomato", description: "Does well in fertile, well-drained silty soil.", category: "Fruit" },
    { icon: "🥔", name: "Potato", description: "Grows well in silty soil with good drainage.", category: "Root" },
    { icon: "🥬", name: "Spinach", description: "Thrives in nutrient-rich silty soil.", category: "Leafy" },
    { icon: "🥦", name: "Broccoli", description: "Prefers silty soil with good moisture retention.", category: "Stem" },
    { icon: "🥒", name: "Cucumber", description: "Does well in silty soil with adequate drainage.", category: "Fruit" },
    { icon: "🌽", name: "Corn", description: "Requires fertile, silty soil for best growth.", category: "Stem" },
    { icon: "🧄", name: "Garlic", description: "Silty soil supports good garlic growth.", category: "Root" },
    { icon: "🌶", name: "Bell Pepper", description: "Grows well in well-drained silty soil.", category: "Fruit" },
    { icon: "🥕", name: "Carrot", description: "Prefers loose, silty soil for root expansion.", category: "Root" },
  ];

 
  const filteredCrops = cropsForSiltySoil.filter(
    (crop) => filter === 'All' || crop.category === filter
  );

  return (
    <div className="crop-category-container">
      <div className="header">
        <h1 className="title">Crops for Silty Soil</h1>
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
          <CropCard key={index} icon={crop.icon} name={crop.name} description={crop.description} />
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

export default SiltyCrops;