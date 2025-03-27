import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProfileCreation from "./pages/ProfileCreation";
import ProfileDisplay from "./pages/ProfileDisplay";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile-creation" element={<ProfileCreation />} />
          <Route path="/profile-display" element={<ProfileDisplay />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
