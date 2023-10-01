import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import ProgressBar from 'react-native-progress/Bar';
const QuizScreen = ({ route }) => {
  const { quizData } = route.params;

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);

  const progress = (currentQuestionIndex + 1) / quizData.length;

  const handleAnswerSelect = (selectedOption) => {
    // Check if the selected option is correct
    if (selectedOption === quizData[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
    } else {
      console.log('Quiz Completed');
    }
  };

  return (
    <View>
      
      {currentQuestionIndex < quizData.length ? (
        <View>
          <ProgressBar
            progress={progress}
            width={null} // Use null for automatic width
            height={10}
            borderRadius={0}
            color="green" // Customize the color
          />
          <Text>Question {currentQuestionIndex + 1}:</Text>
          <Text>{quizData[currentQuestionIndex].question}</Text>
          <View>
            {quizData[currentQuestionIndex].options.map((option, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.option,
                  selectedAnswer === option && styles.selectedOption,
                ]}
                onPress={() => setSelectedAnswer(option)}
              >
                <Text>{option}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <TouchableOpacity onPress={() => handleAnswerSelect(selectedAnswer)}>
            <Text>Next</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View>
          <Text>Quiz Completed!</Text>
          <Text>Your Score: {score}/{quizData.length}</Text>
          {/* You can display the user's score or navigate to a result screen */}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  option: {
    padding: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  selectedOption: {
    backgroundColor: 'lightgreen',
  },
});

export default QuizScreen;
