// src/components/GeneralInformation.js
import React, { useState } from 'react';

const GeneralInformation = () => {
  const [isEditing, setIsEditing] = useState(true);
  const [info, setInfo] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
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
      <h2 className="text-xl font-bold mb-4">General Information</h2>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-1" htmlFor="name">Name</label>
            <input className="w-full p-2 border border-gray-300 rounded" type="text" name="name" id="name" value={info.name} onChange={handleChange} />
          </div>
          <div className="mb-4">
            <label className="block mb-1" htmlFor="email">Email</label>
            <input className="w-full p-2 border border-gray-300 rounded" type="email" name="email" id="email" value={info.email} onChange={handleChange} />
          </div>
          <div className="mb-4">
            <label className="block mb-1" htmlFor="phone">Phone</label>
            <input className="w-full p-2 border border-gray-300 rounded" type="tel" name="phone" id="phone" value={info.phone} onChange={handleChange} />
          </div>
          <button className="bg-blue-500 text-white py-2 px-4 rounded" type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p><strong>Name:</strong> {info.name}</p>
          <p><strong>Email:</strong> {info.email}</p>
          <p><strong>Phone:</strong> {info.phone}</p>
          <button className="bg-gray-500 text-white py-2 px-4 rounded mt-4" onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default GeneralInformation;
