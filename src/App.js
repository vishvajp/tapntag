import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProfileCreation from "./pages/ProfileCreation";
import ProfileDisplay from "./pages/ProfileDisplay";
import ProductDetail from "./pages/ProductDetail";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("isAuthenticated") === "true"
  );

  const handleLogin = () => {
    localStorage.setItem("isAuthenticated", true);
    setIsAuthenticated(localStorage.getItem("isAuthenticated"));
  };
  return (
    <Router basename="/">
      <div className="App">
        <Navbar />
        <div style={{ paddingTop: "62.5px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="/profile-creation" element={<ProfileCreation />} />
            <Route path="/profile-display" element={<ProfileDisplay />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            {isAuthenticated ? (
              <Route path="/profile-display" element={<ProfileDisplay />} />
            ) : (
              <Route path="/*" element={<Navigate to="/login" />} />
            )}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
