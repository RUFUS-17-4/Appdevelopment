import React from 'react';
import './DripIrrigation.css';

const DripIrrigation = () => {
  return (
    <div className="drip-irrigation-container">
      <h1 className="title">Drip Irrigation System</h1>
      <p className="introduction">
        Drip irrigation is an efficient watering method that delivers water directly to the root zone of plants. It minimizes water loss through evaporation and runoff, making it a sustainable choice for agriculture.
      </p>
      
      <div className="card-drip">
        <h2 className="section-heading">Benefits of Drip Irrigation</h2>
        <ul className="benefits-list">
          <li>Water Efficiency: Delivers water directly to the plant's roots, reducing evaporation.</li>
          <li>Reduced Weed Growth: By watering only the targeted areas, it limits weed growth.</li>
          <li>Improved Plant Health: Ensures consistent moisture levels, enhancing plant growth and yield.</li>
          <li>Flexible and Scalable: Can be adapted for small gardens to large agricultural fields.</li>
        </ul>
      </div>

      <div className="card-drip">
        <h2 className="section-heading">Components of a Drip Irrigation System</h2>
        <ul className="components-list">
          <li>Emitters/Drippers: Devices that release water in a slow, controlled manner.</li>
          <li>Tubing: Delivers water from the main supply to the emitters.</li>
          <li>Filter: Removes particles from the water to prevent clogging of emitters.</li>
          <li>Pressure Regulator: Ensures consistent water pressure throughout the system.</li>
          <li>Mainline Pipe: Connects the water source to the drip system.</li>
        </ul>
      </div>

      <div className="card-drip">
        <h2 className="section-heading">Installation Steps</h2>
        <ol className="installation-steps">
          <li>Plan Layout: Determine the layout of the drip system and identify areas that need irrigation.</li>
          <li>Assemble Components: Connect the mainline pipe, filter, and pressure regulator.</li>
          <li>Lay Tubing: Run the tubing along the plant rows and connect the emitters.</li>
          <li>Install Emitters: Position emitters near the root zone of each plant.</li>
          <li>Test System: Run the system to check for leaks and ensure even water distribution.</li>
        </ol>
      </div>

      <div className="card-drip">
        <h2 className="section-heading">Maintenance Tips</h2>
        <ul className="maintenance-tips">
          <li>Regularly check emitters for clogs and clean them as needed.</li>
          <li>Inspect tubing for leaks or damage and replace if necessary.</li>
          <li>Flush the system periodically to remove sediment build-up.</li>
          <li>Monitor water pressure to ensure consistent flow to all parts of the system.</li>
        </ul>
      </div>

      <div className="guidance-button-container">
        <button className="guidance-button">Get Step-by-Step Guidance</button>
      </div>
    </div>
  );
};

export default DripIrrigation;
