import React from "react";
import { Link } from "react-router-dom";
import './LandingPage.css';

export default function LandingPage() {
  return (
    <div className='background'>
      <h1>Welcome to Breaking Bad!</h1>
      <Link to="/home">
        <button>Enter</button>
      </Link>
    </div>
  );
}