import React from 'react';
import Header from './components/Header/Header';
import Topcontainer from './components/Topcontainer/Topcontainer';
import Skillcontainer from './components/Skillcontainer/Skillcontainer';
import Projectcontainer from './components/ProjectContainer/Projectcontainer'; // Adjust the import path accordingly
import './App.css'
import Experiencecontainer from './components/Experiencecontainer/Experiencecontainer'
import Contact from './components/Contact/Contact'

const App = () => {
  return (
    <div>
      <Header />
      <Topcontainer />
      <Skillcontainer />
      <Projectcontainer />
      <Experiencecontainer/>
      <Contact/>
    </div>
  );
}

export default App;
