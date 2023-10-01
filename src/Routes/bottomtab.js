import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Home, Mymatch, Notification } from '../Screen';
import Entypo from 'react-native-vector-icons/Entypo';
import { Headers } from '../components';
import { View } from 'react-native';
import ssc2000Questions from '../Assets/Quiz/SSC/ssc2000';

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <View style={{flex:1}}>
      <View style={{height:'15%',backgroundColor:'red'}}>

      <Headers />
      </View>

    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: 'blue',
        tabBarStyle: {
          backgroundColor: '#F2F2F2',
          
        },
        headerShown: false
        

        // header: ({ navigation }) => <Headers navigation={navigation} />,
      })}
    >
      {/* Home */}
      <Tab.Screen
        name="Home"
        component={Home}
        initialParams={{ data: ssc2000Questions }}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <AntDesign
              name="home"
              color={focused ? color : 'gray'}
              size={size}
            />
          ),
        }}
      />
      {/* Match */}
      <Tab.Screen
        name="Mymatch"
        component={Mymatch}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name="trophy-outline"
              color={focused ? color : 'gray'}
              size={size}
            />
          ),
        }}
      />
      {/* Bells */}
      {/* <Tab.Screen
        name="notification"
        component={Notification}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <AntDesign
              name="bells"
              color={focused ? color : 'gray'}
              size={size}
            />
          ),
        }}
      /> */}
      {/* Winner */}
      {/* <Tab.Screen
        name="medal"
        component={Home}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Entypo
              name="medal"
              color={focused ? color : 'gray'}
              size={size}
            />
          ),
        }}
      /> */}
      {/* Search */}
      {/* <Tab.Screen
        name="search1"
        component={Home}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <AntDesign
              name="search1"
              color={focused ? color : 'gray'}
              size={size}
            />
          ),
        }}
      /> */}
      
    </Tab.Navigator>
    </View>
  );
};

export default MyTabs;
