import React, { useState } from 'react';
import './CarrotGuidance.css';

import germinationImage from './images/seedling-c2.jpg';
import seedlingImage from './images/seedling-c.jpg';
import vegetativeImage from './images/vegetative-c.jpg';
import rootDevelopmentImage from './images/root-c.jpg';
import maturationImage from './images/mature-c2.jpg';

const CarrotGuidance = () => {
  const [showSteps, setShowSteps] = useState(false);
  const [selectedStage, setSelectedStage] = useState('');

  const carrotStages = [
    {
      id: 1,
      name: 'Germination Stage',
      days: '7-14 Days',
      description: 'During the germination stage, carrot seeds sprout and develop initial roots.',
      waterNeeds: '2-3 liters per day',
      image: germinationImage,
    },
    {
      id: 2,
      name: 'Seedling Stage',
      days: '14-28 Days',
      description: 'In the seedling stage, small carrot plants start to develop their first true leaves.',
      waterNeeds: '3-5 liters per day',
      image: seedlingImage,
    },
    {
      id: 3,
      name: 'Vegetative Stage',
      days: '28-50 Days',
      description: 'The vegetative stage focuses on the growth of foliage and preparation for root development.',
      waterNeeds: '5-7 liters per day',
      image: vegetativeImage,
    },
    {
      id: 4,
      name: 'Root Development',
      days: '50-70 Days',
      description: 'During root development, carrots increase in size and develop their characteristic shape.',
      waterNeeds: '7-10 liters per day',
      image: rootDevelopmentImage,
    },
    {
      id: 5,
      name: 'Maturation Stage',
      days: '70-90 Days',
      description: 'In the maturation stage, carrots reach their full size and are ready for harvest.',
      waterNeeds: '5-7 liters per day',
      image: maturationImage,
    },
  ];

  const handleDropdownChange = (event) => {
    setSelectedStage(event.target.value);
  };

  const toggleSteps = () => {
    setShowSteps(!showSteps);
  };

  const selectedStageData = carrotStages.find(stage => stage.name === selectedStage);

  return (
    <div className="show-guidance-container">
      <h1 className="ri">Stages of Your Carrot Crop</h1>

      <div className="dropdown-container">
        <select 
          className={`stage-dropdown ${!selectedStage ? 'placeholder' : ''}`} 
          onChange={handleDropdownChange} 
          value={selectedStage}
        >
          <option value="">Select your stage of crop</option>
          {carrotStages.map((stage) => (
            <option key={stage.id} value={stage.name}>
              {stage.name} - {stage.days}
            </option>
          ))}
        </select>
      </div>

      <div className="card-container1">
        {!selectedStage ? (
          <p className="initial-message1">Please!! select the current level of your crop!</p>
        ) : (
          selectedStageData && (
            <div className="card">
              <div className="card-image-container">
                <img src={selectedStageData.image} alt={selectedStageData.name} className="card-image" />
              </div>
              <div className="card-content">
                <h2>{selectedStageData.name}</h2>
                <p><strong>Description:</strong> {selectedStageData.description}</p>
                <p><strong>Water Needs:</strong> {selectedStageData.waterNeeds}</p>
              </div>
            </div>
          )
        )}
      </div>

      <button className="step-button" onClick={toggleSteps}>
        {showSteps ? 'Hide Step-by-Step Guidance' : 'Show Step-by-Step Guidance'}
      </button>

      {showSteps && (
        <div className="step-by-step-guidance">
          <h2>Step-by-Step Carrot Cultivation</h2>
          <ol>
            <li>
              <strong>Soil Preparation:</strong> Prepare the soil by tilling and adding organic matter to ensure good drainage and nutrient availability.
            </li>
            <li>
              <strong>Planting:</strong> Plant carrot seeds in rows, ensuring proper spacing between them.
            </li>
            <li>
              <strong>Thinning:</strong> Thin out the seedlings to prevent overcrowding and ensure healthy growth.
            </li>
            <li>
              <strong>Water Management:</strong> Provide consistent watering, especially during root development, to ensure healthy growth.
            </li>
            <li>
              <strong>Fertilization:</strong> Apply fertilizers based on soil tests to provide necessary nutrients for optimal growth.
            </li>
            <li>
              <strong>Pest and Disease Control:</strong> Monitor for pests and diseases and take appropriate measures to protect the crop.
            </li>
            <li>
              <strong>Harvesting:</strong> Harvest carrots once the plants have matured, and the roots have reached the desired size.
            </li>
          </ol>
        </div>
      )}
    </div>
  );
};

export default CarrotGuidance;
