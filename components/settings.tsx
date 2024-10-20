"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { FaBriefcase, FaClock, FaBell, FaEdit } from 'react-icons/fa';

const UserProfile: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    name: "Jane Doe",
    position: "Project Manager",
    department: "IT Development",
    preferredWorkingHours: "9:00 AM - 5:00 PM",
    notificationPreferences: [
      "Task reminders 15 minutes before due",
      "Daily summary at 8:30 AM",
      "Team chat messages",
    ]
  });

  const handleSave = () => {
    console.log("Saving user data:", userData);
    setIsEditing(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden p-4">
      <div className="relative">
        <Image
          src="/images/w1.png"
          alt="User Profile"
          width={400}
          height={200}
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
          {isEditing ? (
            <div className="flex items-center">
              <input
                type="text"
                name="name"
                value={userData.name}
                onChange={handleChange}
                className="text-white text-2xl font-bold bg-transparent border-b border-white focus:outline-none"
              />
              <button onClick={handleSave} className="ml-2 text-white">
                Save
              </button>
            </div>
          ) : (
            <h2 className="text-white text-2xl font-bold">{userData.name}</h2>
          )}
        </div>
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md"
        >
          <FaEdit className="text-gray-600" />
        </button>
      </div>
      <div className="p-4">
        <div className="flex items-center mb-2">
          <FaBriefcase className="text-gray-500 mr-2" />
          {isEditing ? (
            <input
              type="text"
              name="position"
              value={userData.position}
              onChange={handleChange}
              className="border-b border-gray-300 focus:outline-none"
            />
          ) : (
            <span>{userData.position} - {userData.department}</span>
          )}
        </div>
        <div className="flex items-center mb-2">
          <FaClock className="text-gray-500 mr-2" />
          {isEditing ? (
            <input
              type="text"
              name="preferredWorkingHours"
              value={userData.preferredWorkingHours}
              onChange={handleChange}
              className="border-b border-gray-300 focus:outline-none"
            />
          ) : (
            <span>Preferred Working Hours: {userData.preferredWorkingHours}</span>
          )}
        </div>
        <div className="flex items-start">
          <FaBell className="text-gray-500 mr-2 mt-1" />
          <div>
            <span className="font-semibold">Notification Preferences:</span>
            <ul className="list-disc list-inside ml-4">
              {userData.notificationPreferences.map((pref, index) => (
                <li key={index}>{pref}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;