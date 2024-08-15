import React, { useState } from "react";
import "./Tomato.css";
import { Link } from "react-router-dom";

const Tomato = () => {
  const [showSteps, setShowSteps] = useState(false);

  const toggleSteps = () => {
    setShowSteps(!showSteps);
  };

  return (
    <div className="tomato-container">
      <h1 className="tomato-title">Tomato Cultivation Guidance</h1>

      <div className="tomato-guidance-section">
        <h2 className="tomato-guidance-title">Soil Requirements</h2>
        <p className="tomato-guidance-text">
          Tomatoes grow best in well-drained, fertile soils rich in organic matter. 
          The ideal pH level for tomato cultivation is between 6.0 and 6.8.
        </p>
      </div>

      <div className="tomato-guidance-section">
        <h2 className="tomato-guidance-title">Climate and Temperature</h2>
        <p className="tomato-guidance-text">
          Tomatoes require a warm climate and grow best at temperatures between 
          18°C and 27°C (64°F to 81°F). Frost can severely damage or kill the plants.
        </p>
      </div>

      <div className="tomato-guidance-section">
        <h2 className="tomato-guidance-title">Water Needs</h2>
        <p className="tomato-guidance-text">
          Consistent watering is crucial for tomatoes, especially during fruit 
          development. Water deeply but infrequently to encourage strong root growth. 
          Avoid overhead watering to reduce the risk of disease.
        </p>
      </div>

      <div className="tomato-guidance-section">
        <h2 className="tomato-guidance-title">Planting Tips</h2>
        <ul className="tomato-guidance-list">
          <li className="tomato-guidance-list-item">Select disease-resistant varieties for optimal results.</li>
          <li className="tomato-guidance-list-item">Start seeds indoors 6-8 weeks before the last expected frost date.</li>
          <li className="tomato-guidance-list-item">Transplant seedlings outdoors after the risk of frost has passed.</li>
          <li className="tomato-guidance-list-item">Use stakes, cages, or trellises to support tomato plants as they grow.</li>
          <li className="tomato-guidance-list-item">Mulch around the plants to conserve moisture and suppress weeds.</li>
        </ul>
      </div>

      <div className="tomato-guidance-section">
        <h2 className="tomato-guidance-title">Harvesting</h2>
        <p className="tomato-guidance-text">
          Tomatoes are ready to harvest when they are fully colored and slightly soft 
          to the touch. Pick regularly to encourage continued production and enjoy fresh 
          or preserve for later use.
        </p>
      </div>

      <button className="tomato-step-button" onClick={toggleSteps}>
        {showSteps ? "Hide Step-by-Step Guidance" : "Show Step-by-Step Guidance"}
      </button>

      {showSteps && (
        <div className="tomato-step-by-step-guidance">
          <h2 className="tomato-step-by-step-title">Step-by-Step Tomato Cultivation</h2>
          <ol className="tomato-step-by-step-list">
            <li className="tomato-step-by-step-list-item">
              <strong className="tomato-step-by-step-strong">Preparation:</strong> 
              Prepare the soil by adding organic matter and ensuring proper drainage.
            </li>
            <li className="tomato-step-by-step-list-item">
              <strong className="tomato-step-by-step-strong">Sowing:</strong> 
              Start seeds indoors and maintain a temperature of 21°C (70°F) for germination.
            </li>
            <li className="tomato-step-by-step-list-item">
              <strong className="tomato-step-by-step-strong">Transplanting:</strong> 
              Transplant seedlings to the garden after the last frost, spacing them 45-60 cm apart.
            </li>
            <li className="tomato-step-by-step-list-item">
              <strong className="tomato-step-by-step-strong">Water Management:</strong> 
              Water deeply and consistently, especially during dry spells.
            </li>
            <li className="tomato-step-by-step-list-item">
              <strong className="tomato-step-by-step-strong">Fertilization:</strong> 
              Fertilize with a balanced fertilizer at planting and again as needed during the growing season.
            </li>
            <li className="tomato-step-by-step-list-item">
              <strong className="tomato-step-by-step-strong">Pest Control:</strong> 
              Monitor for pests such as aphids and tomato hornworms, and use appropriate control measures.
            </li>
            <li className="tomato-step-by-step-list-item">
              <strong className="tomato-step-by-step-strong">Harvesting:</strong> 
              Harvest tomatoes when fully ripe and enjoy fresh or preserve for later use.
            </li>
          </ol>
        </div>
      )}
      <Link to="/TomatoGuidance" className="st-link">
        <button className="tomato-stage-button">Select the stage</button>
      </Link>
    </div>
  );
};

export default Tomato;