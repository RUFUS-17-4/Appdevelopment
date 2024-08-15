import React, { useState } from 'react';
import './ClayCrops.css';
import {Link} from 'react-router-dom';
const ChalkyCrops = () => {
  const [filter, setFilter] = useState('All'); // State to manage the selected filter

  // Crop data with categories for Chalky Soil
  const cropsForChalkySoil = [
    { icon: "🥬", name: "Cabbage", description: "Chalky soil supports healthy cabbage growth.", category: "Leafy" },
    { icon: "🌻", name: "Sunflower", description: "Thrives in alkaline, well-drained chalky soil.", category: "Stem" },
    { icon: "🌽", name: "Corn", description: "Prefers the fertility of chalky soil.", category: "Stem" },
    { icon: "🥔", name: "Potato", description: "Grows well in chalky soil with good drainage.", category: "Root" },
    { icon: "🥕", name: "Carrot", description: "Does well in chalky, loose soil.", category: "Root" },
    { icon: "🥦", name: "Broccoli", description: "Chalky soil provides good nutrients for broccoli.", category: "Stem" },
    { icon: "🍆", name: "Eggplant", description: "Thrives in chalky soil with good organic matter.", category: "Fruit" },
    { icon: "🍅", name: "Tomato", description: "Grows best in chalky soil with proper nutrients.", category: "Fruit" },
    { icon: "🧄", name: "Garlic", description: "Chalky soil supports garlic growth with good drainage.", category: "Root" },
    { icon: "🌿", name: "Basil", description: "Prefers the alkaline nature of chalky soil.", category: "Herbs" },
  ];

  // Function to filter crops based on the selected category
  const filteredCrops = cropsForChalkySoil.filter(
    (crop) => filter === 'All' || crop.category === filter
  );

  return (
    <div className="crop-category-container">
      <div className="header">
        <h1 className="title">Crops for Chalky Soil</h1>
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
           crop.name === "Tomato" ? (
            <Link to="/Tomato" key={index} className="crop-link">
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

export default ChalkyCrops;