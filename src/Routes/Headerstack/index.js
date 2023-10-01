import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { Headers } from '../../components';
import { Home } from '../../Screen';

const HeaderStack = () => {
    const Stack = createStackNavigator();

  return (
    <View>
      <Stack.Navigator
      screenOptions={{
        header: ({ navigation }) => <Headers navigation={navigation} />,
      }}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>

    </View>
  )
}

export default HeaderStack