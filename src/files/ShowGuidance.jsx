import React, { useState } from 'react';
import './ShowGuidance.css';

// Importing images
import seedling from './images/seed1.jpg';
import tilleringImage from './images/tillering.jpg';
import panicleImage from './images/panicle.jpg';
import bootingImage from './images/tillering.jpg';
import headingImage from './images/heading.jpg';

const ShowGuidance = () => {
  const [showSteps, setShowSteps] = useState(false);
  const [selectedStage, setSelectedStage] = useState('');

  // Sample data for rice growth stages
  const riceStages = [
    {
      id: 1,
      name: 'Seedling Stage',
      days: '10-14 Days',
      description: 'During the seedling stage, rice seeds germinate and young seedlings develop. This stage is critical for establishing a healthy root system.',
      waterNeeds: '5-10 liters per day',
      image: seedling,
    },
    {
      id: 2,
      name: 'Tillering Stage',
      days: '25-35 Days',
      description: 'In the tillering stage, rice plants begin to produce additional shoots, known as tillers. This stage determines the potential number of grains per plant.',
      waterNeeds: '10-15 liters per day',
      image: tilleringImage,
    },
    {
      id: 3,
      name: 'Panicle Initiation',
      days: '50-60 Days',
      description: 'Panicle initiation marks the beginning of reproductive growth, where the plant starts forming the structures that will become rice grains.',
      waterNeeds: '15-20 liters per day',
      image: panicleImage,
    },
    {
      id: 4,
      name: 'Booting Stage',
      days: '60-70 Days',
      description: 'During the booting stage, the panicle grows inside the flag leaf sheath. It is important to manage nutrients and water effectively.',
      waterNeeds: '20-25 liters per day',
      image: bootingImage,
    },
    {
      id: 5,
      name: 'Heading Stage',
      days: '70-80 Days',
      description: 'The heading stage is when the panicle emerges from the flag leaf sheath. Proper irrigation and pest management are crucial at this stage.',
      waterNeeds: '25-30 liters per day',
      image: headingImage,
    },
  ];

  const handleDropdownChange = (event) => {
    setSelectedStage(event.target.value);
  };

  const toggleSteps = () => {
    setShowSteps(!showSteps);
  };

  // Find the stage that matches the selected value
  const selectedStageData = riceStages.find(stage => stage.name === selectedStage);

  return (
    <div className="show-guidance-container">
      <h1 className="ri">Stages of your crop</h1>

      <div className="dropdown-container">
        <select 
          className={`stage-dropdown ${!selectedStage ? 'placeholder' : ''}`} 
          onChange={handleDropdownChange} 
          value={selectedStage}
        >
          <option value="">Select your stage of crop</option>
          {riceStages.map((stage) => (
            <option key={stage.id} value={stage.name}>
              {stage.name} - {stage.days}
            </option>
          ))}
        </select>
      </div>

      <div className="card-container1">
        {!selectedStage ? (
          <p className="initial-message1">Please !! select the current level of your crop !</p>
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
          <h2>Step-by-Step Rice Cultivation</h2>
          <ol>
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
    </div>
  );
};

export default ShowGuidance;