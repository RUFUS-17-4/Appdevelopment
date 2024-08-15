import React, { useState } from 'react';
import './Rice.css';
import { Link } from 'react-router-dom';

const Rice = () => {
  const [showSteps, setShowSteps] = useState(false); // State to manage the visibility of the step-by-step guidance

  const toggleSteps = () => {
    setShowSteps(!showSteps);
  };

  return (
    <>
    <div className="rice-container">
      <h1 className="title">Rice Cultivation Guidance</h1>
      
      <div className="guidance-section">
        <h2 className="section-title">Soil Requirements</h2>
        <p className="section-content">
          Rice thrives in a wide variety of soil types but prefers fertile, clayey loam soils that retain water well. The ideal pH level for rice cultivation is between 5.5 and 6.5.
        </p>
      </div>
      
      <div className="guidance-section">
        <h2 className="section-title">Climate and Temperature</h2>
        <p className="section-content">
          Rice requires a warm and humid climate. It grows best in temperatures ranging from 20°C to 35°C (68°F to 95°F). A long, warm growing season is essential for optimal yields.
        </p>
      </div>
      
      <div className="guidance-section">
        <h2 className="section-title">Water Needs</h2>
        <p className="section-content">
          Rice is a water-intensive crop and requires abundant water. It is commonly grown in flooded fields known as paddies, which help control weeds and pests. Ensure consistent water supply during the growth stages.
        </p>
      </div>
      
      <div className="guidance-section">
        <h2 className="section-title">Planting Tips</h2>
        <ul className="section-content">
          <li>Start with high-quality seeds or seedlings.</li>
          <li>Transplant seedlings into flooded fields for better establishment.</li>
          <li>Ensure proper spacing to promote healthy growth and air circulation.</li>
          <li>Use organic fertilizers and maintain soil fertility.</li>
          <li>Implement pest and disease control measures regularly.</li>
        </ul>
      </div>
      
      <div className="guidance-section">
        <h2 className="section-title">Harvesting</h2>
        <p className="section-content">
          Rice is typically ready for harvest 3 to 6 months after planting, depending on the variety. Harvest when the grains are firm and the plants have turned golden brown.
        </p>
      </div>
      
      <button className="step-button" onClick={toggleSteps}>
        {showSteps ? "Hide Step-by-Step Guidance" : "Show Step-by-Step Guidance"}
      </button>

      {showSteps && (
        <div className="step-by-step-guidance">
          <h2 className="step-title">Step-by-Step Rice Cultivation</h2>
          <ol className="step-list">
            <li>
              <strong>Preparation:</strong> Clear the land and prepare it by plowing and leveling. Ensure proper drainage and irrigation channels.
            </li>
            <li>
              <strong>Sowing:</strong> Sow seeds in a nursery and allow them to grow for 20-30 days until seedlings are ready for transplanting.
            </li>
            <li>
              <strong>Transplanting:</strong> Transplant seedlings into prepared fields with adequate water. Maintain a spacing of 15-20 cm between plants.
            </li>
            <li>
              <strong>Water Management:</strong> Maintain a consistent water level in the fields, ensuring they are flooded during the growing season.
            </li>
            <li>
              <strong>Fertilization:</strong> Apply fertilizers at different growth stages to promote healthy growth and maximize yield.
            </li>
            <li>
              <strong>Pest Control:</strong> Monitor for pests and diseases, and apply necessary treatments to protect the crop.
            </li>
            <li>
              <strong>Harvesting:</strong> Harvest rice when the grains are firm and golden. Dry and process the grains for storage or sale.
            </li>
          </ol>
        </div>
      )}

      <Link to="/ShowGuidance" className="select-stage-link">
        <button className="stage-button">Select the Stage</button>
      </Link>
    </div>
    </>
  );
};

export default Rice;
