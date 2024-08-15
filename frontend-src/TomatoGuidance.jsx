import React, { useState } from 'react';
import './TomatoGuidance.css';

import seedlingImage from './images/seed-t.jpg';
import vegetativeImage from './images/vegetative-t.jpg';
import floweringImage from './images/flowering-t.jpg';
import fruitingImage from './images/fruiting-t.jpg';
import ripeningImage from './images/ripen-t.jpg';

const TomatoGuidance = () => {
  const [showSteps, setShowSteps] = useState(false);
  const [selectedStage, setSelectedStage] = useState('');

  const tomatoStages = [
    {
      id: 1,
      name: 'Seedling Stage',
      days: '10-20 Days',
      description: 'During the seedling stage, tomato seeds germinate and develop into young plants.',
      waterNeeds: '2-3 liters per day',
      image: seedlingImage,
    },
    {
      id: 2,
      name: 'Vegetative Stage',
      days: '20-40 Days',
      description: 'In the vegetative stage, the plant focuses on growing leaves and stems.',
      waterNeeds: '4-6 liters per day',
      image: vegetativeImage,
    },
    {
      id: 3,
      name: 'Flowering Stage',
      days: '40-60 Days',
      description: 'During the flowering stage, the plant produces flowers, which are the precursors to fruit.',
      waterNeeds: '6-8 liters per day',
      image: floweringImage,
    },
    {
      id: 4,
      name: 'Fruiting Stage',
      days: '60-90 Days',
      description: 'In the fruiting stage, the flowers develop into small green tomatoes.',
      waterNeeds: '8-10 liters per day',
      image: fruitingImage,
    },
    {
      id: 5,
      name: 'Ripening Stage',
      days: '90-120 Days',
      description: 'During the ripening stage, the tomatoes mature and change color, becoming ready for harvest.',
      waterNeeds: '6-8 liters per day',
      image: ripeningImage,
    },
  ];

  const handleDropdownChange = (event) => {
    setSelectedStage(event.target.value);
  };

  const toggleSteps = () => {
    setShowSteps(!showSteps);
  };

  const selectedStageData = tomatoStages.find(stage => stage.name === selectedStage);

  return (
    <div className="show-guidance-container">
      <h1 className="ri">Stages of Your Tomato Crop</h1>

      <div className="dropdown-container">
        <select 
          className={`stage-dropdown ${!selectedStage ? 'placeholder' : ''}`} 
          onChange={handleDropdownChange} 
          value={selectedStage}
        >
          <option value="">Select your stage of crop</option>
          {tomatoStages.map((stage) => (
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
          <h2>Step-by-Step Tomato Cultivation</h2>
          <ol>
            <li>
              <strong>Soil Preparation:</strong> Prepare the soil by tilling and adding organic matter to ensure good drainage and nutrient availability.
            </li>
            <li>
              <strong>Planting:</strong> Plant tomato seeds or seedlings at the correct spacing to allow for growth.
            </li>
            <li>
              <strong>Staking:</strong> Use stakes or cages to support the tomato plants as they grow taller.
            </li>
            <li>
              <strong>Water Management:</strong> Provide consistent watering, especially during fruiting, to ensure healthy growth.
            </li>
            <li>
              <strong>Fertilization:</strong> Apply fertilizers based on soil tests to provide necessary nutrients for optimal growth.
            </li>
            <li>
              <strong>Pest and Disease Control:</strong> Monitor for pests and diseases and take appropriate measures to protect the crop.
            </li>
            <li>
              <strong>Harvesting:</strong> Harvest tomatoes once they have ripened and reached the desired color and size.
            </li>
          </ol>
        </div>
      )}
    </div>
  );
};

export default TomatoGuidance;
