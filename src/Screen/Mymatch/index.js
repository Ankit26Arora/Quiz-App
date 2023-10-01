import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useRoute} from '@react-navigation/native';
import ProgressBar from 'react-native-progress/Bar';
import ProgressBarWithReducingLength from '../../components/Circulartime';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Mymatch = () => {
  const route = useRoute();
  const data = route.params;
  const quizData = data;
  const navigation = useNavigation();
  const [completedData, setCompletedData] = useState(null);

  console.log('Data received in Mymatch:', data);

  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabPress = tabIndex => {
    setSelectedTab(tabIndex);
  };

  const gotoQuiz = () => {
    navigation.navigate('Quizsreen', {quizData: data});
    console.log(data);
    setCompletedData(null); // Reset completedData when starting a new quiz
  };
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const progress = (currentQuestionIndex + 1) / quizData.length;

  const handleAnswerSelect = selectedOption => {
    // Check if the selected option is correct
    if (selectedOption === quizData[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
    } else {
      console.log('Quiz Completed');
      setQuizCompleted(true); // Set quizCompleted to true

      // Switch to the "Completed" tab
      setSelectedTab(1);

      // Save quiz completion data in AsyncStorage
      const completionData = {
        quizData: quizData,
        score: score,
      };

      // Convert the completion data to a string and save it
      AsyncStorage.setItem('quizCompletionData', JSON.stringify(completionData))
        .then(() => {
          console.log('Quiz completion data saved to AsyncStorage');
        })
        .catch(error => {
          console.error('Error saving quiz completion data:', error);
        });
    }
  };
  useEffect(() => {
    const retrieveData = async () => {
      try {
        const jsonString = await AsyncStorage.getItem('quizCompletionData');
        if (jsonString !== null) {
          const completionData = JSON.parse(jsonString);
          console.log('Retrieved quiz completion data:', completionData);
          if (selectedTab === 1) {
            setCompletedData(completionData); // Store the data in the state only if on "Completed" tab
          }
        } else {
          console.log('No quiz completion data found.');
        }
      } catch (error) {
        console.error('Error retrieving quiz completion data:', error);
      }
    };
  
    retrieveData();
  }, [selectedTab]); // Add selectedTab as a dependency to the useEffect
  
  return (
    <View>
      <View style={styles.header}>
        <TouchableOpacity
          style={[styles.tab, selectedTab === 0 && styles.selectedTab]}
          onPress={() => handleTabPress(0)}>
          <Text
            style={[
              styles.tabText,
              selectedTab === 0 && styles.selectedTabText,
            ]}>
            Live
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, selectedTab === 1 && styles.selectedTab]}
          onPress={() => handleTabPress(1)}>
          <Text
            style={[
              styles.tabText,
              selectedTab === 1 && styles.selectedTabText,
            ]}>
            Completed
          </Text>
        </TouchableOpacity>
      </View>

      {selectedTab === 0 && (
          <View>
            {currentQuestionIndex < quizData.length ? (
              <View style={{alignItems: 'center'}}>
                <View style={{width: '80%'}}>
                  <Text style={styles.Text}>Test</Text>
                  <View style={styles.ProgressBar}>
                    <ProgressBar
                      style={{marginLeft: 20, height: 22}}
                      progress={progress}
                      height={22}
                      borderRadius={20}
                      color="#FCA82F"
                    />
                    <Text
                      style={{color: 'black', fontSize: 20, marginLeft: '10%'}}>
                      {' '}
                      {currentQuestionIndex + 1}/10
                    </Text>
                  </View>
                  {/* <CircularProgressBar totalTime={60} radius={100} strokeWidth={2} color="blue" /> */}
                  <View style={{height: '10%', marginTop: '5%'}}>
                    <ProgressBarWithReducingLength />
                  </View>
                  <Text style={{color: 'blue', fontSize: 24}}>
                    Question - {currentQuestionIndex + 1}:
                  </Text>
                  <Text style={{color: 'black', fontSize: 15}}>
                    {quizData[currentQuestionIndex].question}
                  </Text>
                  <View>
                    {quizData[currentQuestionIndex].options.map(
                      (option, index) => (
                        <TouchableOpacity
                          key={index}
                          style={[
                            styles.option,
                            selectedAnswer === option && styles.selectedOption,
                          ]}
                          onPress={() => setSelectedAnswer(option)}>
                          <Text
                            style={{
                              color: 'black',
                              fontWeight: 'bold',
                              marginLeft: '5%',
                            }}>
                            {option}
                          </Text>
                        </TouchableOpacity>
                      ),
                    )}
                  </View>
                  <View style={styles.Next}>
                    <TouchableOpacity
                      onPress={() => handleAnswerSelect(selectedAnswer)}
                      style={styles.Nextquestion}>
                      <Text style={styles.Nextdesign}>Next question</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            ) : (
              <View></View>
            )}
          </View>
      )}

      {selectedTab === 1 && (
        <View>
          <View
            style={{
              backgroundColor: 'blue',
              marginTop: 40,
              width: '80%',
              marginLeft: '10%',
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                margin: 10,
              }}>
              <Text style={{fontSize: 20, color: '#FCA82F', fontWeight: '500'}}>
                Total{' '}
              </Text>
              <Text style={{fontSize: 20, color: '#FCA82F', fontWeight: '500'}}>10</Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                margin: 10,
              }}>
              <Text style={{fontSize: 20, color: '#FCA82F', fontWeight: '500'}}>
                Right{' '}
              </Text>
              <Text style={{fontSize: 20, color: '#FCA82F', fontWeight: '500'}}>{completedData ? `${completedData.score}` : 'N/A'}</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                margin: 10,
              }}>
              <Text style={{fontSize: 20, color: '#FCA82F', fontWeight: '500'}}>
                Wrong{' '}
              </Text>
              <Text style={{fontSize: 20, color: '#FCA82F', fontWeight: '500'}}>
                {completedData
                  ? `${completedData.quizData.length - completedData.score}`
                  : 'N/A'}
              </Text>
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    backgroundColor: 'white',
  },
  tab: {
    paddingVertical: 10,
  },
  selectedTab: {
    borderBottomWidth: 2,
    borderColor: '#fff',
  },
  tabText: {
    fontSize: 16,
  },
  selectedTabText: {
    color: 'blue',
    fontWeight: 'bold',
  },
  option: {
    padding: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
  },
  selectedOption: {
    backgroundColor: '#FCA82F',
  },
  Text: {
    color: 'black',
    fontSize: 20,
    marginTop: '10%',
  },
  ProgressBar: {
    height: 35,
    borderRadius: 20,
    borderColor: '#9A9999',
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '5%',
  },
  Next: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  Nextquestion: {
    backgroundColor: '#8888EA',
    marginTop: 'auto',
    margin: '10%',
    width: '60%',
    alignItems: 'center',
    borderRadius: 5,
  },
  Nextdesign: {
    margin: '5%',
    color: 'white',
  },
});

export default Mymatch;
