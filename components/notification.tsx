"use client";

import React, { useState, useEffect } from 'react';
import { FaTimes, FaClock } from 'react-icons/fa';

interface Notification {
  id: number;
  type: string;
  typeColor: string;
  label: string;
  title: string;
  message: string;
  author: string;
  time: string;
  platform: string;
}

const Notification = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  useEffect(() => {
    const generateNotifications = () => {
      return [
        {
          id: 1,
          type: 'Message',
          typeColor: 'bg-green-500',
          label: 'New',
          title: 'Team meeting rescheduled',
          message: 'The weekly team meeting has been moved to 3 PM today. Please update your calendars.',
          author: 'Sarah Johnson',
          time: '10:30 AM',
          platform: 'Slack'
        },
        {
          id: 2,
          type: 'Task',
          typeColor: 'bg-orange-500',
          label: 'Urgent',
          title: 'Project deadline approaching',
          message: 'The client presentation for Project X is due in 48 hours. Please submit your final revisions.',
          author: 'Mike Chen',
          time: '11:15 AM',
          platform: 'Microsoft Teams'
        },
        {
          id: 3,
          type: 'Mention',
          typeColor: 'bg-purple-500',
          label: 'Update',
          title: 'You were mentioned in a document',
          message: '@YourName, please review the latest changes to the marketing strategy document.',
          author: 'Emily Rodriguez',
          time: '1:45 PM',
          platform: 'Google Docs'
        },
        {
          id: 4,
          type: 'Meeting',
          typeColor: 'bg-blue-500',
          label: 'New',
          title: 'One-on-one with manager',
          message: 'Your monthly check-in with your manager is scheduled for tomorrow at 2 PM.',
          author: 'HR System',
          time: '2:30 PM',
          platform: 'Outlook'
        },
        {
          id: 5,
          type: 'File',
          typeColor: 'bg-red-500',
          label: 'New',
          title: 'New design assets uploaded',
          message: 'The design team has uploaded new brand assets to the shared folder. Please use these for all future materials.',
          author: 'Alex Tran',
          time: '3:50 PM',
          platform: 'Dropbox'
        }
      ];
    };

    setNotifications(generateNotifications());
  }, []);

  const dismissNotification = (id: number) => {
    setNotifications(notifications.filter(notification => notification.id !== id));
  };

  return (
    <div className="container mx-auto p-4 md:p-6">
      <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Work Notifications</h1>
      <div className="space-y-4">
        {notifications.map((notification) => (
          <div 
            key={notification.id} 
            className="bg-white rounded-lg shadow-md p-4 flex items-start space-x-4 relative"
          >
            <div className="flex-1">
              <div className="flex items-center justify-between">
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
              <p className="text-gray-400 text-sm md:text-base mt-1">
                {notification.author} via {notification.platform}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notification;