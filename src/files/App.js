import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import LandManagement from './components/LandManagement';
import LoamyCrops from './components/LoamyCrops';
import ChalkyCrops from './components/ChalkyCrops';
import WaterManagement from './WaterManagment';
import IrrigationSystem from './IrrigationSystem';
import PeatyCrops from './components/PeatyCrops';
import Sandycrops from './components/SandyCrops';
import SoilGuidance from './components/SoilGuidance';
import ClayCrops from './components/ClayCrops';
import DripIrrigation from './DripIrrigation';
import Rice from './components/Rice';
import SiltyCrops from './components/SiltyCrops';
import PotatoGuidance from './PotatoGuidance';
import ShowGuidance from './ShowGuidance';
import CarrotGuidance from './CarrotGuidance';
import TomatoGuidance from './TomatoGuidance';
import Maintenance from './Maintenance';
import Tomato from './components/Tomato';
import Potato from './components/Potato';
import Map from './Map';
import Feedback from './Feedback';
import Weather from './components/Weather'; // Import Weather component

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/LandManagement" element={<LandManagement />} />
          <Route path="/SoilGuidance" element={<SoilGuidance />} />
          <Route path="/ClayCrops" element={<ClayCrops />} />
          <Route path="/SandySoil" element={<Sandycrops />} />
          <Route path="/LoamySoil" element={<LoamyCrops />} />
          <Route path="/PeatySoil" element={<PeatyCrops />} />
          <Route path="/ChalkySoil" element={<ChalkyCrops />} />
          <Route path="/SiltySoil" element={<SiltyCrops />} />
          <Route path="/WaterManagement" element={<WaterManagement />} />
          <Route path="/IrrigationSystem" element={<IrrigationSystem />} />
          <Route path="/DripIrrigation" element={<DripIrrigation />} />
          <Route path="/ShowGuidance" element={<ShowGuidance />} />
          <Route path="/PotatoGuidance" element={<PotatoGuidance />} />
          <Route path="/TomatoGuidance" element={<TomatoGuidance />} />
          <Route path="/CarrotGuidance" element={<CarrotGuidance />} />
          <Route path="/Feedback" element={<Feedback />} />
          <Route path="/Maintenance" element={<Maintenance />} />
          <Route path="/Map" element={<Map />} />
          <Route path="/Rice" element={<Rice />} />
          <Route path="/Potato" element={<Potato/>}/>
          <Route path="/Tomato" element={<Tomato/>}/>
          <Route path="/Weather" element={<Weather />} /> {/* Add Weather route */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
