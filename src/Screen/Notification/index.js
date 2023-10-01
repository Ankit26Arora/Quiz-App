import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

const Notification= () => {
  const intervalDuration = 5 * 60 * 1000; 
  const [countdown, setCountdown] = useState(intervalDuration);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(prevCountdown => {
        if (prevCountdown <= 0) {
          clearInterval(interval);
          return 0;
        }
        return prevCountdown - 1000; 
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const formatCountdown = ms => {
    const minutes = Math.floor(ms / (60 * 1000));
    const seconds = Math.floor((ms % (60 * 1000)) / 1000);
    return `${minutes}m ${seconds}s`;
  };

  return (
    <View>
      <Text>Quiz starts in: {formatCountdown(countdown)}</Text>
    </View>
  );
};

export default Notification;
