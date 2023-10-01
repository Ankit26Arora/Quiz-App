import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, Login, Mymatch, Otp, Registraion } from '../Screen';
import MyTabs from './bottomtab';
import { QuizScreen } from '../components';

const AuthStack = () => {
    const stack=createNativeStackNavigator();
  return (
    
    <NavigationContainer>
        <stack.Navigator screenOptions={{headerShown: false}}>
          <stack.Screen name='Login' component={Login} />
          <stack.Screen name='otp' component={Otp}/>
          <stack.Screen name='Reg' component={Registraion}/>
          <stack.Screen name='MyTabs' component={MyTabs} />
          <stack.Screen name='Mymatch' component={Mymatch}/>
          <stack.Screen name='Quizsreen' component={QuizScreen}/>
          <stack.Screen name='MyTab' component={MyTabs}/>

          
        </stack.Navigator>
    </NavigationContainer>
  )
}

export default AuthStack