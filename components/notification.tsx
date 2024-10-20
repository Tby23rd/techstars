"use client";

import React, { useState } from 'react';
import { FaTimes, FaClock } from 'react-icons/fa';

const Notification = () => {
   
    const [notifications, setNotifications] = useState([
        {
          id: 1,
          type: 'Performance Insights',
          typeColor: 'bg-green-500',
          label: 'Insights',
          title: 'Performance Insights Available',
          message: 'Your recent performance insights have been generated. View personalized recommendations to optimize your workflow.',
          author: 'System',
          time: '5 minutes ago',
        },
        {
          id: 2,
          type: 'Support Request',
          typeColor: 'bg-orange-500',
          label: 'Support',
          title: 'New Support Request Received',
          message: 'A request for neurodiversity support has been submitted by one of your team members.',
          author: 'HR Department',
          time: '9 seconds ago',
        },
        {
          id: 3,
          type: 'Meeting Reminder',
          typeColor: 'bg-purple-500',
          label: 'Reminder',
          title: 'Team Meeting Reminder',
          message: 'You have a team meeting tomorrow at 3:00 PM to discuss neurodiversity support strategies.',
          author: 'System',
          time: '1 hour ago',
        },
        {
          id: 4,
          type: 'Accommodations Update',
          typeColor: 'bg-blue-500',
          label: 'Update',
          title: 'Accommodations Successfully Updated',
          message: 'Your accommodation preferences have been successfully updated in the system.',
          author: 'System',
          time: '2 hours ago',
        },
      ]);
      
    const dismissNotification = (id: number) => {
        setNotifications(notifications.filter(notification => notification.id !== id));
    };

    return (
        <div className="container mx-auto p-4 md:p-6">
            <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Notifications</h1>
            <div className="space-y-4">
                {notifications.map((notification) => (
                    <div 
                        key={notification.id} 
                        className="bg-white rounded-lg shadow-md p-4 flex items-start space-x-4 relative"
                    >
                        <div className="flex-1">
                            <div className="flex items-center  justify-between">
                                <h2 className={`flex-shrink-0 w-24 md:w-28 flex items-center justify-center ${notification.typeColor} rounded-full text-white font-bold text-sm py-1 mb-2`}>
                                    {notification.label}
                                </h2>
                                <div className="flex items-center space-x-2">
                                    <FaClock className="text-gray-400" />
                                    <span className="text-gray-400 md:text-lg text-sm">{notification.time}</span>
                                    <FaTimes
                                        className="cursor-pointer md:text-xl text-red-600"
                                        onClick={() => dismissNotification(notification.id)}
                                    />
                                </div>
                            </div>
                            <h3 className="text-lg font-semibold">{notification.title}</h3>
                            <p className="text-gray-600 md:text-lg">{notification.message}</p>
                            <p className="text-gray-400 text-sm md:text-base mt-1">{notification.author}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Notification;