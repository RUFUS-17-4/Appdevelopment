import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ClayCrops.css';

const Sandycrops = () => {
  const [filter, setFilter] = useState('All'); // State to manage the selected filter

  // Crop data with categories for Sandy Soil
  const cropsForSandySoil = [
    { icon: "🍅", name: "Tomato", description: "Sandy soil provides good drainage for tomatoes.", category: "Fruit" },
    { icon: "🥒", name: "Cucumber", description: "Prefers loose, sandy soil for easy root growth.", category: "Fruit" },
    { icon: "🥕", name: "Carrot", description: "Sandy soil is ideal for root expansion.", category: "Root" },
    { icon: "🥔", name: "Potato", description: "Grows well in sandy soil with good drainage.", category: "Root" },
    { icon: "🌽", name: "Corn", description: "Thrives in sandy soil with adequate nutrients.", category: "Stem" },
    { icon: "🧅", name: "Onion", description: "Requires well-drained sandy soil.", category: "Root" },
    { icon: "🥒", name: "Zucchini", description: "Prefers sandy soil for optimal growth.", category: "Fruit" },
    { icon: "🥦", name: "Cauliflower", description: "Does well in sandy, loamy soil.", category: "Stem" },
    { icon: "🌶", name: "Chili Pepper", description: "Grows best in sandy, well-drained soil.", category: "Fruit" },
    { icon: "🍆", name: "Eggplant", description: "Thrives in sandy soil with good organic matter.", category: "Fruit" },
  ];

  // Function to filter crops based on the selected category
  const filteredCrops = cropsForSandySoil.filter(
    (crop) => filter === 'All' || crop.category === filter
  );

  return (
    <div className="crop-category-container">
      <div className="header">
        <h1 className="titlesandy">Crops for Sandy Soil</h1>
        <div className="dropdown">
          <button className="dropbtn">
            {filter} <span>&#9660;</span>
          </button>
          <div className="dropdown-content">
            <a href="#" onClick={() => setFilter('All')}>All</a>
            <a href="#" onClick={() => setFilter('Stem')}>Stem</a>
            <a href="#" onClick={() => setFilter('Root')}>Root</a>
          
            <a href="#" onClick={() => setFilter('Fruit')}>Fruit</a>
            
          </div>
        </div>
      </div>
      <div className="crop-grid">
        {filteredCrops.map((crop, index) => (
             crop.name === "Potato" ? (
              <Link to="/Potato" key={index} className="crop-link">
                <CropCard icon={crop.icon} name={crop.name} description={crop.description} />
              </Link>
            ) :
          crop.name === "Tomato" ? (
            <Link to="/Tomato" key={index} className="crop-link">
              <CropCard icon={crop.icon} name={crop.name} description={crop.description} />
            </Link>
          ) :
          crop.name === "Carrot" ? (
            <Link to="/CarrotGuidance" key={index} className="crop-link">
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

export default Sandycrops;