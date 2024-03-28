import React, { useState } from 'react';
import './Project.css'

const Project = ({ img, title, desc, link }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a href={link}>
      <div
        className="project"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isHovered ? (
          <div>
            <h4>{title}</h4>
            <p>{desc}</p>
          </div>
        ) : (
          <img src={img} alt="" />
        )}
      </div>
    </a>
  );
};

export default Project;
