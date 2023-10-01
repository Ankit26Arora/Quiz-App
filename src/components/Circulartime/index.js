import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

const CountdownTimer = () => {
  const initialTime = 900; // 15 minutes in seconds
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const [progress, setProgress] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      if (timeLeft > 0) {
        setTimeLeft(timeLeft - 1);
        setProgress(timeLeft / initialTime);
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [timeLeft]);

  // Format time to display as MM:SS
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');
    return `${formattedMinutes}:${formattedSeconds}`;
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View
          style={{
            width: `${progress * 100}%`, 
            height: 10,
            backgroundColor: '#FCA82F',
            borderWidth:1,
            borderColor:'blue'
          }}
        />
        <View
          style={{
            width: `${(1 - progress) * 100}%`, 
            height: 10,
            backgroundColor: 'blue',
          }}
        />
      </View>
      <View>
      <Text style={{color:'#FCA82F'}}>Countdown: </Text>
      <Text style={{color:'blue',fontSize:20}}>{formatTime(timeLeft)}</Text>
      </View>
    </View>
  );
};

export default CountdownTimer;
