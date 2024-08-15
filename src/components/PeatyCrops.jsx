import React, { useState } from 'react';
import './ClayCrops.css';
import { Link } from 'react-router-dom';
const PeatyCrops = () => {
  const [filter, setFilter] = useState('All'); // State to manage the selected filter

  // Crop data with categories for Peaty Soil
  const cropsForPeatySoil = [
    { icon: "🥔", name: "Potato", description: "Peaty soil is rich and acidic, great for potatoes.", category: "Root" },
    { icon: "🌶", name: "Pepper", description: "Grows well in peaty soil with good moisture retention.", category: "Fruit" },
    { icon: "🍆", name: "Eggplant", description: "Does well in peaty soil with good nutrients.", category: "Fruit" },
    { icon: "🥕", name: "Carrot", description: "Prefers the acidity of peaty soil.", category: "Root" },
    { icon: "🥦", name: "Broccoli", description: "Thrives in peaty soil with high organic content.", category: "Stem" },
    { icon: "🥬", name: "Lettuce", description: "Peaty soil supports healthy lettuce growth.", category: "Leafy" },
    { icon: "🌻", name: "Sunflower", description: "Does well in peaty soil with adequate drainage.", category: "Stem" },
    { icon: "🧄", name: "Garlic", description: "Peaty soil is suitable for garlic bulb growth.", category: "Root" },
    { icon: "🌿", name: "Mint", description: "Thrives in peaty soil rich in organic matter.", category: "Herbs" },
    { icon: "🥒", name: "Cucumber", description: "Prefers peaty soil with good drainage.", category: "Fruit" },
  ];


  const filteredCrops = cropsForPeatySoil.filter(
    (crop) => filter === 'All' || crop.category === filter
  );

  return (
    <div className="crop-category-container">
      <div className="header">
        <h1 className="titlepeaty">Crops for Peaty Soil</h1>
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

export default PeatyCrops;