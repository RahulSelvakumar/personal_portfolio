import React from 'react';
import { Element } from 'react-scroll';
import Experience from '../Experience/Experience';

 import './Experiencecontainer.css'

const Experiencecontainer = () => {
  return (
    <Element className="experiencecontainer" id="exp">
      <h1 >Experience</h1>
      <div className="experiencecontainer_info">
        <Experience number="10+" title="academic project" />
        <Experience number="200+" title="problem solved in coding platform" style={{backgroundColor:"white"}} />
        <Experience number="1" title="Intern (Spring boot java)" />
        <Experience number="5+" title="certificate completed" />
      </div>
    </Element>
  );
}

export default Experiencecontainer;
