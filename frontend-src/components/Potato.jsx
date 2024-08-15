import React, { useState } from "react";
import "./Potato.css";
import { Link } from "react-router-dom";

const Potato = () => {
  const [showSteps, setShowSteps] = useState(false);

  const toggleSteps = () => {
    setShowSteps(!showSteps);
  };

  return (
    <div className="potato-container">
      <h1 className="pt">Potato Cultivation Guidance</h1>

      <div className="guidance-section">
        <h2>Soil Requirements</h2>
        <p>
          Potatoes thrive in loose, well-drained, sandy loam soils rich in organic matter. 
          The ideal pH level for potato cultivation is between 5.0 and 6.0.
        </p>
      </div>

      <div className="guidance-section">
        <h2>Climate and Temperature</h2>
        <p>
          Potatoes grow best in cool climates with temperatures ranging from 
          15°C to 20°C (59°F to 68°F). Consistent soil moisture is important 
          for tuber formation.
        </p>
      </div>

      <div className="guidance-section">
        <h2>Water Needs</h2>
        <p>
          Potatoes require regular watering, especially during tuber formation. 
          Avoid waterlogging as it can lead to rot. Drip irrigation is ideal 
          for efficient water use.
        </p>
      </div>

      <div className="guidance-section">
        <h2>Planting Tips</h2>
        <ul>
          <li>Use certified seed potatoes free from disease.</li>
          <li>Cut large seed potatoes into pieces with at least one eye.</li>
          <li>Plant in rows with a spacing of 30-40 cm between plants.</li>
          <li>Hill the soil around plants to protect tubers from sunlight.</li>
          <li>Use balanced fertilizers to promote healthy growth.</li>
        </ul>
      </div>

      <div className="guidance-section">
        <h2>Harvesting</h2>
        <p>
          Potatoes are ready for harvest when the plants turn yellow and die back. 
          Carefully dig up the tubers and allow them to dry before storage.
        </p>
      </div>

      <button className="step-button" onClick={toggleSteps}>
        {showSteps ? "Hide Step-by-Step Guidance" : "Show Step-by-Step Guidance"}
      </button>

      {showSteps && (
        <div className="step-by-step-guidance">
          <h2>Step-by-Step Potato Cultivation</h2>
          <ol>
            <li>
              <strong>Preparation:</strong> Prepare the soil by plowing and removing weeds. 
              Add organic matter and ensure good drainage.
            </li>
            <li>
              <strong>Planting:</strong> Plant seed potatoes in rows with a spacing of 
              30-40 cm between plants and 75 cm between rows.
            </li>
            <li>
              <strong>Watering:</strong> Water regularly, especially during flowering 
              and tuber formation. Avoid waterlogging.
            </li>
            <li>
              <strong>Fertilization:</strong> Apply balanced fertilizers during planting 
              and mid-season to boost growth.
            </li>
            <li>
              <strong>Pest Control:</strong> Monitor for pests such as aphids and 
              potato beetles. Use appropriate treatments as needed.
            </li>
            <li>
              <strong>Harvesting:</strong> Harvest potatoes when the foliage turns yellow 
              and dies back. Cure the tubers before storage.
            </li>
          </ol>
        </div>
      )}
      <Link to="/PotatoGuidance" className="stp"><button className="stagebt">Select the stage</button></Link>
    </div>
  );
};

export default Potato;