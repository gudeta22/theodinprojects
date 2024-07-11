// src/components/PracticalExperience.js
import React, { useState } from 'react';

const PracticalExperience = () => {
  const [isEditing, setIsEditing] = useState(true);
  const [experience, setExperience] = useState({
    companyName: '',
    positionTitle: '',
    mainResponsibilities: '',
    dateFrom: '',
    dateUntil: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExperience((prevExperience) => ({ ...prevExperience, [name]: value }));
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
      <h2 className="text-xl font-bold mb-4">Practical Experience</h2>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-1" htmlFor="companyName">Company Name</label>
            <input className="w-full p-2 border border-gray-300 rounded" type="text" name="companyName" id="companyName" value={experience.companyName} onChange={handleChange} />
          </div>
          <div className="mb-4">
            <label className="block mb-1" htmlFor="positionTitle">Position Title</label>
            <input className="w-full p-2 border border-gray-300 rounded" type="text" name="positionTitle" id="positionTitle" value={experience.positionTitle} onChange={handleChange} />
          </div>
          <div className="mb-4">
            <label className="block mb-1" htmlFor="mainResponsibilities">Main Responsibilities</label>
            <textarea className="w-full p-2 border border-gray-300 rounded" name="mainResponsibilities" id="mainResponsibilities" value={experience.mainResponsibilities} onChange={handleChange} />
          </div>
          <div className="mb-4">
            <label className="block mb-1" htmlFor="dateFrom">Date From</label>
            <input className="w-full p-2 border border-gray-300 rounded" type="date" name="dateFrom" id="dateFrom" value={experience.dateFrom} onChange={handleChange} />
          </div>
          <div className="mb-4">
            <label className="block mb-1" htmlFor="dateUntil">Date Until</label>
            <input className="w-full p-2 border border-gray-300 rounded" type="date" name="dateUntil" id="dateUntil" value={experience.dateUntil} onChange={handleChange} />
          </div>
          <button className="bg-blue-500 text-white py-2 px-4 rounded" type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p><strong>Company Name:</strong> {experience.companyName}</p>
          <p><strong>Position Title:</strong> {experience.positionTitle}</p>
          <p><strong>Main Responsibilities:</strong> {experience.mainResponsibilities}</p>
          <p><strong>Date From:</strong> {experience.dateFrom}</p>
          <p><strong>Date Until:</strong> {experience.dateUntil}</p>
          <button className="bg-gray-500 text-white py-2 px-4 rounded mt-4" onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default PracticalExperience;
