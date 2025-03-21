import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Styling ke liye

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">StudentWell</div>
        <div className="nav-right">
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/mood-tracker">Mood Tracker</Link>
            <Link to="/ai-therapist">AI Therapist</Link>
            <Link to="/dashboard">Report</Link>
          </div>
          <button className="help-btn">SignUp</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
