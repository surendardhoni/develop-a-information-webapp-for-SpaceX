import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Component/Home";
import History from "./Pages/History";
import Launches from "./Pages/Launches";
import Rocket from "./Pages/Rocket";
import RocketDetail from "./Details/Rocketdetails";
import LaunchesDetail from "./Details/Launchesdetails";
import HistoryDetails from "./Details/Historydetails";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/history" element={<History />}></Route>
          <Route path="/Launches" element={<Launches />}></Route>
          <Route path="/rocket" element={<Rocket />}></Route>
          <Route path="/rockets/:rocket_id" element={<RocketDetail />} />
          <Route path="/launches/:flight_number" element={<LaunchesDetail />} />
          <Route path="/history/:id" element={<HistoryDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
