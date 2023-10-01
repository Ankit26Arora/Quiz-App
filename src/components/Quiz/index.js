import { View, Text } from 'react-native'
import React from 'react'
import Style from '../../Screen/otp/Style'

const Quiz = () => {
  return (
    <View>
      <View>
      <Text style={{fontSize: 40, marginTop: '10%', fontWeight: 'bold'}}>
        <Text style={Style.red}>Q</Text>
        <Text style={Style.black}>uiz</Text>
        <Text style={Style.orange}>App</Text>
      </Text>
      </View>
    </View>
  )
}

export default Quiz