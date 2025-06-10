import {BrowserRouter as Router,  Routes,  Route,  Navigate,} from "react-router-dom";
import { useState, react } from "react";
import "./App.css";
import Registration from "./pages/Registration.jsx";
import Kycverification from "./pages/Kycverification.jsx";
import AadhaarDetails from "./pages/AadhaarDetails.jsx";

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Navigate to="/registration" />} />
        <Route path="/registration" element={<Registration />} /> */}
        <Route path="/" element={<Registration />} />
        <Route path="/kyc" element={<Kycverification />} />
        <Route path="/aadhaar" element={<AadhaarDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
