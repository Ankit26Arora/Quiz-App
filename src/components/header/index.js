import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Image } from 'react-native';
import React, { useState } from 'react';
import Style from './Style';
import { Appimages } from '../../Theme';
import ssc2000Questions from './../../Assets/Quiz/SSC/ssc2000'
import { useNavigation } from '@react-navigation/native';
import indianRailwayQuizQuestions from '../../Assets/Quiz/Gk/Democracy';
import jeeQuizQuestions from '../../Assets/Quiz/Gk/Freedom';
import upscQuizQuestions from '../../Assets/Quiz/Gk';
import nitQuizQuestions from '../../Assets/Quiz/Gk';
import class12QuizQuestions from '../../Assets/Quiz/Gk/tweleve';
import class10QuizQuestions from '../../Assets/Quiz/Gk/tenth';

const Headers = () => {
  const navigation=useNavigation();
  const sscdata=[ssc2000Questions];
  const Railwaydata=[indianRailwayQuizQuestions];
  const jee=[jeeQuizQuestions];
  const upsc=[upscQuizQuestions];
  const nit=[nitQuizQuestions];
  const twelve=[class12QuizQuestions];
  const tenth=[class10QuizQuestions];
  console.log(Railwaydata);
  
  const buttons = [
    { image: Appimages.Ssc, description: 'Description 1',data: ssc2000Questions},
    { image: Appimages.Railway, description: 'Description 2',data:indianRailwayQuizQuestions },
    { image: Appimages.Jee, description: 'Description 3' ,data:jeeQuizQuestions},
    { image: Appimages.Upsc, description: 'Description 4',data:upscQuizQuestions },
    { image: Appimages.Nit, description: 'Description 5',data:nitQuizQuestions },
    { image: Appimages.Twelve, description: 'Description 6',data:class12QuizQuestions },
    { image: Appimages.Tenth, description: 'Description 7',data:class10QuizQuestions },
  ];
  const [selectedData, setSelectedData] = useState(buttons[0].data[0]);

  const handelpress = (button) => {
    setSelectedData(button.data[0]);
    navigation.navigate('Home', { data: button.data }); // Pass the entire array
    console.log(button.data[0])
  };
  
  
  
  
  return (
    <View style={{ height: '100%' }}>
      <View style={Style.container}>
        <TouchableOpacity>
          <Image style={Style.image} source={Appimages.User} />
        </TouchableOpacity>

        <View style={{ alignItems: 'center' }}>
          <Text style={{ fontSize: 30, fontWeight: 'bold' }}>
            <Text style={{ color: 'white' }}>Quiz</Text>
            <Text style={{ color: 'orange' }}>App</Text>
          </Text>
        </View>
        <TouchableOpacity >
          <Image style={Style.image} source={Appimages.Wallet} />
        </TouchableOpacity>
      </View>
      {/* Top navigation */}
      <ScrollView horizontal contentContainerStyle={Style.scrollViewContainer}>
  {buttons.map((button, index) => (
    <TouchableOpacity
      key={index}
      style={Style.button}
      onPress={() => handelpress(button)} 
    >
      <Image source={button.image} style={styles.buttonImage} />
    </TouchableOpacity>
  ))}
</ScrollView>

    </View>
  );
};

const styles = StyleSheet.create({
  buttonImage: {
    width: 50, 
    height: 50, 
    resizeMode: 'contain',
  },
  descriptionText: {
    textAlign: 'center',
    marginTop: 5,
  },
});

export default Headers;
