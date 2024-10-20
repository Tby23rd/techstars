"use client";

import React, { useState, useEffect } from 'react';

const CurrentTime: React.FC = () => {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      setTime(new Date().toLocaleTimeString());
    };
    updateTime();
    const intervalId = setInterval(updateTime, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return <p>Current Time: {time}</p>;
};

export default CurrentTime;