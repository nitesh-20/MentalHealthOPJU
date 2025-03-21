import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import frontai from "../assets/frontai.webp";
import ai_mood from "../assets/ai_mood.avif";
import ai_well from "../assets/ai_well.avif";
import Aistudy from "../assets/Aistudy.avif";
import MoodTracker from "./MoodTracker";


export default function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-text">
          <h1>
            Your mental health <br /> <span className="highlight">matters to us</span>
          </h1>
          <p>
            Get AI-powered support to thrive in your academic journey. Connect with our AI therapist,
            track your mood, and access personalized wellness resources.
          </p>
          <div className="hero-buttons">
            <Link to="/ai-therapist" className="primary-btn">Talk to AI Therapist</Link>
            <Link to="/mood-tracker" className="secondary-btn">Track Your Mood</Link>
          </div>
        </div>
        <div className="hero-image">
          <img src={frontai} alt="Students laughing in a library" />
        </div>
      </div>
      {/* <MoodTracker/> */}
      <section className="info-section">
        <h2 className="info-title">AI-Powered Resources for Your Well-being</h2>
        <p className="info-description">
          Everything you need to maintain your mental health and academic success.
        </p>

        <div className="info-cards">
          <div className="info-card">
            <div className="image-box">
              <img src={ai_mood} alt="Mood Tracker" />
            </div>
            <h3>AI Mood Tracker</h3>
            <p>Track your emotions and get personalized suggestions</p>
            <Link to="/mood-tracker" className="info-button">Try Now</Link>
          </div>

          <div className="info-card">
            <div className="image-box">
              <img src={ai_mood} alt="AI Therapist" />
            </div>
            <h3>AI Therapist Chat</h3>
            <p>24/7 AI-powered mental health support</p>
            <Link to="/ai-therapist" className="info-button">Try Now</Link>
          </div>

          <div className="info-card">
            <div className="image-box">
              <img src={ai_well} alt="AI Wellness Coach" />
            </div>
            <h3>AI Wellness Coach</h3>
            <p>Get guidance on maintaining a healthy lifestyle</p>
            <Link to="/ai-wellness" className="info-button">Try Now</Link>
          </div>

          <div className="info-card">
            <div className="image-box">
              <img src={Aistudy} alt="AI Study Assistant" />
            </div>
            <h3>AI Study Assistant</h3>
            <p>Get personalized study tips and learning strategies</p>
            <Link to="/ai-study" className="info-button">Try Now</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
