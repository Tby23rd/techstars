"use client";

import React, { useState, useEffect } from 'react';
import { FaComments, FaPlay } from 'react-icons/fa';
import ChatComponent from './chat';

interface Task {
  id: string;
  title: string;
  description: string;
  progress: number;
  isAdhoc: boolean;
  startTime: Date;
  endTime: Date;
  lastUpdate: Date;
  isActive: boolean;
}

const ADHDTaskManager: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskDuration, setNewTaskDuration] = useState('');
  const [currentTime, setCurrentTime] = useState<Date | null>(null);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [completionMessage, setCompletionMessage] = useState<string | null>(null);
  const [reminderMessage, setReminderMessage] = useState<string | null>(null);

  useEffect(() => {
    // Generate an initial task
    const startTime = new Date();
    startTime.setHours(9, 0, 0, 0); // Set to 9:00 AM
    const endTime = new Date(startTime);
    endTime.setHours(12, 0, 0, 0); // Set to 12:00 PM

    const initialTask: Task = {
      id: '1',
      title: "Complete Project Report",
      description: "Write and format the quarterly project report",
      progress: 0,
      isAdhoc: false,
      startTime,
      endTime,
      lastUpdate: new Date(),
      isActive: true
    };
    setTasks([initialTask]);

    // Start the automatic progress update simulation
    const intervalId = setInterval(simulateProgressUpdate, 5000); // Update every 5 seconds
    const clockIntervalId = setInterval(() => setCurrentTime(new Date()), 1000); // Update clock every second

    return () => {
      clearInterval(intervalId);
      clearInterval(clockIntervalId);
    }; // Cleanup on component unmount
  }, []);

  const simulateProgressUpdate = () => {
    setTasks(prevTasks => {
      const updatedTasks = prevTasks.map(task => {
        if (!task.isActive) return task;

        const now = new Date();
        const totalDuration = task.endTime.getTime() - task.startTime.getTime();
        const elapsedDuration = now.getTime() - task.startTime.getTime();
        let newProgress = Math.min(Math.floor((elapsedDuration / totalDuration) * 100), 100);

        return {
          ...task,
          progress: newProgress,
          lastUpdate: now
        };
      });

      const completedTask = updatedTasks.find(task => task.progress === 100);
      if (completedTask) {
        setCompletionMessage(`Task "${completedTask.title}" completed successfully!`);
        setTimeout(() => setCompletionMessage(null), 5000); // Clear message after 5 seconds

        // Remove the completed task
        return updatedTasks.filter(task => task.id !== completedTask.id);
      }

      return updatedTasks;
    });
  };

  const addAdhocTask = () => {
    if (newTaskTitle.trim() === '' || newTaskDuration.trim() === '') return;

    const duration = parseInt(newTaskDuration);
    if (isNaN(duration) || duration <= 0) {
      alert("Please enter a valid duration in minutes.");
      return;
    }

    const now = new Date();
    const endTime = new Date(now.getTime() + duration * 60000);

    const newTask: Task = {
      id: (tasks.length + 1).toString(),
      title: newTaskTitle,
      description: "Adhoc task",
      progress: 0,
      isAdhoc: true,
      startTime: now,
      endTime,
      lastUpdate: now,
      isActive: true
    };

    setTasks(prevTasks => 
      prevTasks.map(task => ({...task, isActive: false}))
        .concat(newTask)
    );
    setNewTaskTitle('');
    setNewTaskDuration('');
  };

  const toggleTaskActive = (taskId: string) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === taskId ? {...task, isActive: true } : {...task, isActive: false }
      )
    );
  };

  const formatTimeRange = (start: Date, end: Date) => {
    return `${start.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} - ${end.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
  };

  const handleChatClose = () => {
    setIsChatOpen(false);
    const pausedTask = tasks.find(task => !task.isActive && task.progress < 100);
    if (pausedTask) {
      setReminderMessage(`You have a paused task: "${pausedTask.title}". Would you like to resume it?`);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-4 bg-gray-100 rounded-lg shadow-md relative">
      <h1 className="text-2xl md:text-3xl font-bold mb-4">ADHD-Friendly Task Manager</h1>
      <p suppressHydrationWarning={true} className="font-bold text-xl p-2 text-center capitalize">Current Time: {currentTime ? currentTime.toLocaleTimeString() : ''}</p>
      
      {completionMessage && (
        <div className="mb-4 p-2 bg-green-100 border border-green-400 text-green-700 rounded">
          {completionMessage}
        </div>
      )}

      {reminderMessage && (
        <div className="mb-4 p-2 bg-yellow-100 border border-yellow-400 text-yellow-700 rounded flex justify-between items-center">
          <span>{reminderMessage}</span>
          <button 
            onClick={() => {
              const pausedTask = tasks.find(task => !task.isActive && task.progress < 100);
              if (pausedTask) toggleTaskActive(pausedTask.id);
              setReminderMessage(null);
            }}
            className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600"
          >
            <FaPlay /> Resume
          </button>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tasks.map(task => (
          <div 
            key={task.id} 
            className={`p-4 bg-white rounded-lg shadow cursor-pointer ${task.isActive ? 'border-green-500 border-2' : 'border-red-500 border-2'}`}
            onClick={() => toggleTaskActive(task.id)}
          >
            <h2 className="text-lg md:text-xl font-semibold mb-2">{task.title}</h2>
            <p className="text-gray-600 mb-2 text-sm md:text-base">{task.description}</p>
            <p className="text-sm text-gray-500 mb-2">Scheduled: {formatTimeRange(task.startTime, task.endTime)}</p>
            <div className="flex items-center mb-2">
              <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                <div
                  className="bg-blue-600 h-2.5 rounded-full transition-all duration-500 ease-in-out"
                  style={{ width: `${task.progress}%` }}
                ></div>
              </div>
              <span className="text-sm font-medium text-gray-700">{task.progress}%</span>
            </div>
            <p className="text-sm text-gray-500">Last updated: {task.lastUpdate.toLocaleTimeString()}</p>
            <p className="text-sm font-medium mt-2">Status: {task.isActive ? 'Active' : 'Paused'}</p>
            {task.isAdhoc && (
              <span className="mt-2 inline-block bg-yellow-200 rounded-full px-3 py-1 text-sm font-semibold text-yellow-700">
                Adhoc
              </span>
            )}
          </div>
        ))}
      </div>

      <div className="mt-4">
        <input
          type="text"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
          placeholder="Enter new adhoc task"
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 mb-2"
        />
        <input
          type="number"
          value={newTaskDuration}
          onChange={(e) => setNewTaskDuration(e.target.value)}
          placeholder="Duration in minutes"
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 mb-2"
        />
        <button
          onClick={addAdhocTask}
          className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          Add Adhoc Task
        </button>
      </div>

      {!isChatOpen && (
        <div 
          className="fixed bottom-4 right-4 bg-blue-500 text-white p-3 rounded-full cursor-pointer hover:bg-blue-600 z-10"
          onClick={() => setIsChatOpen(true)}
        >
          <FaComments size={24} />
        </div>
      )}

      {isChatOpen && <ChatComponent onClose={handleChatClose} />}
    </div>
  );
};

export default ADHDTaskManager;