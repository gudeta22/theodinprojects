// src/components/EducationalExperience.js
import React, { useState } from 'react';

const EducationalExperience = () => {
  const [isEditing, setIsEditing] = useState(true);
  const [education, setEducation] = useState({
    schoolName: '',
    titleOfStudy: '',
    dateOfStudy: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEducation((prevEducation) => ({ ...prevEducation, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <div className="p-4 border border-gray-300 rounded">
      <h2 className="text-xl font-bold mb-4">Educational Experience</h2>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-1" htmlFor="schoolName">School Name</label>
            <input className="w-full p-2 border border-gray-300 rounded" type="text" name="schoolName" id="schoolName" value={education.schoolName} onChange={handleChange} />
          </div>
          <div className="mb-4">
            <label className="block mb-1" htmlFor="titleOfStudy">Title of Study</label>
            <input className="w-full p-2 border border-gray-300 rounded" type="text" name="titleOfStudy" id="titleOfStudy" value={education.titleOfStudy} onChange={handleChange} />
          </div>
          <div className="mb-4">
            <label className="block mb-1" htmlFor="dateOfStudy">Date of Study</label>
            <input className="w-full p-2 border border-gray-300 rounded" type="date" name="dateOfStudy" id="dateOfStudy" value={education.dateOfStudy} onChange={handleChange} />
          </div>
          <button className="bg-blue-500 text-white py-2 px-4 rounded" type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p><strong>School Name:</strong> {education.schoolName}</p>
          <p><strong>Title of Study:</strong> {education.titleOfStudy}</p>
          <p><strong>Date of Study:</strong> {education.dateOfStudy}</p>
          <button className="bg-gray-500 text-white py-2 px-4 rounded mt-4" onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default EducationalExperience;
