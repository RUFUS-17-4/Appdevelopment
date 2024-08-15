import React, { useState } from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import './ClayCrops.css';

const ClayCrops = () => {
  const [filter, setFilter] = useState('All'); // State to manage the selected filter

  // Crop data with categories
  const cropsForClaySoil = [
    { icon: "🌾", name: "Rice", description: "Thrives in heavy, water-retentive clay soil.", category: "Stem" },
    { icon: "🌻", name: "Sunflower", description: "Prefers the rich nutrients found in clay soil.", category: "Stem" },
    { icon: "🍆", name: "Eggplant", description: "Grows well in fertile clay soil with good drainage.", category: "Fruit" },
    { icon: "🌶", name: "Pepper", description: "Clay soil supports growth with adequate drainage.", category: "Fruit" },
    { icon: "🥔", name: "Potato", description: "Does well in clay soil if it is well-drained.", category: "Root" },
    { icon: "🌿", name: "Broccoli", description: "Clay soil retains nutrients, ideal for broccoli.", category: "Stem" },
    { icon: "🥕", name: "Carrot", description: "Clay soil can be improved to support carrots.", category: "Root" },
    { icon: "🌿", name: "Mint", description: "Thrives in nutrient-rich clay soil.", category: "Herbs" },
    { icon: "🥦", name: "Cabbage", description: "Does well in clay soil with proper care.", category: "Leafy" },
    { icon: "🧄", name: "Garlic", description: "Performs well in clay soil with good drainage.", category: "Root" },
  ];

  const filteredCrops = cropsForClaySoil.filter(
    (crop) => filter === 'All' || crop.category === filter
  );

  return (
    <div className="crop-category-container">
      <div className="header">
        <h1 className='c1'>Crops for Clay Soil</h1>
        <div className="dropdown">
          <button className="dropbtn">
            {filter} <span>&#9660;</span>
          </button>
          <div className="dropdown-content">
            <a href="#" onClick={() => setFilter('All')}>All</a>
            <a href="#" onClick={() => setFilter('Stem')}>Stem</a>
            <a href="#" onClick={() => setFilter('Root')}>Root</a>
            <a href="#" onClick={() => setFilter('Herbs')}>Herbs</a>
            <a href="#" onClick={() => setFilter('Fruit')}>Fruit</a>
            <a href="#" onClick={() => setFilter('Leafy')}>Leafy</a>
          </div>
        </div>
      </div>
      <div className="crop-grid">
        {filteredCrops.map((crop, index) => (
          crop.name === "Rice" ? (
            <Link to="/Rice" key={index} className="crop-link">
              <CropCard icon={crop.icon} name={crop.name} description={crop.description} />
            </Link>
          ) :
          
          crop.name === "Potato" ? (
            <Link to="/Potato" key={index} className="crop-link">
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

export default ClayCrops;