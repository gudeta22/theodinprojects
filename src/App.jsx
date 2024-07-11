// src/App.js
import React from 'react';
import './index.css'
import GeneralInformation from './Components/GeneralInformation'
import EducationalExperience from './Components/EducationalExperience';
import PracticalExperience from './Components/PracticalExperience';

const App = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8">CV Application</h1>
      <GeneralInformation />
      <EducationalExperience />
      <PracticalExperience />
    </div>
  );
};

export default App;
