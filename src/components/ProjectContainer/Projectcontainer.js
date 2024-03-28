import React from 'react';
import { Element } from 'react-scroll';
import Project from '../Project/Project'; // Adjust the import path accordingly
import './Projectcontainer.css'
import portpolio from '../asset/portpolio.png'
import Employee from '../asset/Employee.png'
import RFID from '../asset/RFID.png'
import Hospital from '../asset/Hospital.png'
import MERN from  '../asset/MERN.png'

const Projectcontainer = () => {
  const client_projects = [
    {
       img:portpolio,
      title: "PORTFOLIO",
      desc:"Implemented a dynamic portfolio website using React, showcasing skills and projects effectively. Intuitive design enhances user experience and engagement seamlessly" ,
      
    },
    {
      img:MERN,
      title: "LOAN MENAGEMENT ",
      desc: "Developed a Loan Management System using  MERN(MongoDB,Express.JS, React.JS and Node.JS). The system features user-friendly interfaces,secure authendication,automated calculations and secure data storage for efficient loan processing"
    },
    {
      img: Employee,
      title: "Workload Management",
      desc: "Built an Workload  Management System using HTML, CSS, JavaScript, PHP, MySQL, and AWS Cloud. It efficiently handles data, ensures user authentication, and automates reporting for improved efficiency and organization",
     
    },
    
    {
      img:RFID,
      title: "Event Tracking System",
      desc: "Designed an Event Tracking system with HTML, CSS, JavaScript, Node.Js, Express.js, MySQL, C++ and RFID. It streamlines attendance, notifies in real-time, and ensures accuracy, fostering a seamless and secure event experience.",
    
    },
    {
      img:Hospital ,
      title: "Health Care WebApplication Figma design",
      desc: "Developed a Figma design for a healthcare project, prioritizing user-friendly features, accessibility, and seamless navigation, promoting a visually appealing and wellness-centric interface"
    
    },
   
    
  ];

  return (
    <Element className="projectcontainer" id="projects">
      <h1>Projects</h1>
      <p>
"Developed innovative software solution, enhancing efficiency and collaboration. Utilized cutting-edge technologies to achieve project goals, ensuring successful implementation."</p>
      <div className="projectcontainer_project">
        {
          client_projects.map((project, index) => (
            <Project key={index} img={project.img} title={project.title} desc={project.desc} link={project.link} />
          ))
        }
      </div>
    </Element>
  );
};

export default Projectcontainer;
