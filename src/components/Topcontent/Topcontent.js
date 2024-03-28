import React from 'react';
import { Link } from 'react-scroll';
import './Topcontent.css';

const Topcontent = () => {
  return (
    <div className="topcontent">
      <div className="topcontent_container">
        <h1>Mr. RAJA N</h1>
        <p> A Professional web Developer</p>

        <a href="https://drive.google.com/file/d/1M3-IEOYm6iiH62yd3xMwjBG3kF8ICXo2/view?usp=sharing"  >
          <button className="topcontent_resume">Download Resume</button>
        </a>

        <Link to="project" smooth={true} duration={500}>
          <button className="topcontent_mywork">My Work</button>
        </Link>
      </div>
    </div>
  );
}

export default Topcontent;
