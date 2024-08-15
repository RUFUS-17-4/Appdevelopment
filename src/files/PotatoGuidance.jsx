import React, { useState } from 'react';
import './PotatoGuidance.css';

import sproutingImage from './images/sproute.jpg';
import vegetativeImage from './images/vegetative.jpg';
import tuberInitiationImage from './images/tuberbulk.jpg';
import tuberBulkingImage from './images/vegetative.jpg';
import maturationImage from './images/mature.jpg';

const PotatoGuidance = () => {
  const [showSteps, setShowSteps] = useState(false);
  const [selectedStage, setSelectedStage] = useState('');

  const potatoStages = [
    {
      id: 1,
      name: 'Sprouting Stage',
      days: '10-20 Days',
      description: 'During the sprouting stage, potato seeds begin to develop sprouts. This stage is crucial for initiating growth.',
      waterNeeds: '3-5 liters per day',
      image: sproutingImage,
    },
    {
      id: 2,
      name: 'Vegetative Stage',
      days: '20-40 Days',
      description: 'In the vegetative stage, the plant focuses on growing leaves and stems. This helps establish the plant structure.',
      waterNeeds: '5-10 liters per day',
      image: vegetativeImage,
    },
    {
      id: 3,
      name: 'Tuber Initiation',
      days: '40-60 Days',
      description: 'Tuber initiation is the stage where small tubers begin to form. This stage sets the foundation for yield.',
      waterNeeds: '10-15 liters per day',
      image: tuberInitiationImage,
    },
    {
      id: 4,
      name: 'Tuber Bulking',
      days: '60-90 Days',
      description: 'During tuber bulking, the tubers increase in size. Nutrient and water management are crucial during this period.',
      waterNeeds: '15-20 liters per day',
      image: tuberBulkingImage,
    },
    {
      id: 5,
      name: 'Maturation Stage',
      days: '90-120 Days',
      description: 'In the maturation stage, the tubers reach their final size and the plant prepares for harvest.',
      waterNeeds: '10-15 liters per day',
      image: maturationImage,
    },
  ];

  const handleDropdownChange = (event) => {
    setSelectedStage(event.target.value);
  };

  const toggleSteps = () => {
    setShowSteps(!showSteps);
  };

  // Find the stage that matches the selected value
  const selectedStageData = potatoStages.find(stage => stage.name === selectedStage);

  return (
    <div className="show-guidance-container">
      <h1 className="ri">Stages of Your Potato Crop</h1>

      <div className="dropdown-container">
        <select 
          className={`stage-dropdown ${!selectedStage ? 'placeholder' : ''}`} 
          onChange={handleDropdownChange} 
          value={selectedStage}
        >
          <option value="">Select your stage of crop</option>
          {potatoStages.map((stage) => (
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
          <h2>Step-by-Step Potato Cultivation</h2>
          <ol>
            <li>
              <strong>Soil Preparation:</strong> Prepare the soil by tilling and adding organic matter to ensure good drainage and nutrient availability.
            </li>
            <li>
              <strong>Planting:</strong> Plant seed potatoes with eyes facing upward, ensuring proper spacing between them.
            </li>
            <li>
              <strong>Hilling:</strong> Hill the soil around the base of the plants as they grow to protect developing tubers from sunlight.
            </li>
            <li>
              <strong>Water Management:</strong> Provide consistent watering, especially during tuber formation, to ensure healthy growth.
            </li>
            <li>
              <strong>Fertilization:</strong> Apply fertilizers based on soil tests to provide necessary nutrients for optimal growth.
            </li>
            <li>
              <strong>Pest and Disease Control:</strong> Monitor for pests and diseases and take appropriate measures to protect the crop.
            </li>
            <li>
              <strong>Harvesting:</strong> Harvest potatoes once the plants have matured, and the tubers have reached the desired size.
            </li>
          </ol>
        </div>
      )}
    </div>
  );
};

export default PotatoGuidance;