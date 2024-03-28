import React from 'react';
import { Element } from 'react-scroll';
import skillimg from '../../components/asset/skills.png';
import LinearProgress from '@mui/material/LinearProgress';
import "./Skillcontainer.css"

const Skillcontainer = () => {
  return (
    <Element className="skillcontainer" id="skills">
      <div className="skillcontainer_image"> {/* Corrected className */}
        <img src={skillimg} alt="" />
      </div>
      <div className="skillcontainer_text">
        <h2>SKILLSET</h2>

        <h2>Programming Languages</h2>
        <div className="skillcontainer_skillset">
          <h5>JAVA</h5>
          <div className="skillcontainer_slider skillcontainer_slider1">
            <LinearProgress variant="determinate" value={80} /> 
          </div>
        </div>

        <div className="skillcontainer_skillset">
          <h5>C/C++</h5>
          <div className="skillcontainer_slider skillcontainer_slider1">
            <LinearProgress variant="determinate" value={70} /> 
          </div>
        </div>

       

        <h2>Web DevelopMent</h2>
       

        <div className="skillcontainer_skillset">
        <div className="skillcontainer_skillset">
          <h5>HTML,CSS</h5>
          <div className="skillcontainer_slider skillcontainer_slider3">
            <LinearProgress variant="determinate" value={50} />
          </div>
        </div>
          <h5>JavaScript</h5>
          <div className="skillcontainer_slider skillcontainer_slider1">
            <LinearProgress variant="determinate" value={60} /> 
          </div>
        </div>


        <div className="skillcontainer_skillset">
          <h5>ReactJS,NodeJS,ExpressJS</h5>
          <div className="skillcontainer_slider skillcontainer_slider1">
            <LinearProgress variant="determinate" value={40} /> 
          </div>
        </div>

        <h2>DataBase</h2>
        <div className="skillcontainer_skillset">
          <h5>MySQL</h5>
          <div className="skillcontainer_slider skillcontainer_slider2">
            <LinearProgress variant="determinate" value={60} />
          </div>
        </div>

        <div className="skillcontainer_skillset">
          <h5>MongoDB</h5>
          <div className="skillcontainer_slider skillcontainer_slider2">
            <LinearProgress variant="determinate" value={40} />
          </div>
        </div>
       
      </div>
    </Element>
  );
}

export default Skillcontainer;
