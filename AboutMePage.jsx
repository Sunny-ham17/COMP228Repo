import React from 'react';
import ProfilePic from '../assets/profile.jpg';

function AboutMePage() {
  return (
    <div className="about-me-page">
      <h1>About Me</h1>
      <img src={ProfilePic} alt="Profile" className="profile-pic" />
      <p>Hi, I'm Sunny. I am a software engineering student with a goal of becoming a project manager in the field.</p>
      <a href="/resume.pdf" download>
        <button>Download My Resume</button>
      </a>
    </div>
  );
}

export default AboutMePage;
