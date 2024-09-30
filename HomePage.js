import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="home-page">
      <h1>Welcome to My Portfolio</h1>
      <p>I am a 2nd year student at Centennial College, in the program Software Engineering.</p>
      <Link to="/about">
        <button>More About Me</button>
      </Link>
    </div>
  );
}

export default HomePage;
