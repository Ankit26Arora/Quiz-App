import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import { Appcolor,Appimages } from '../../Theme'
const Button = ({title,onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={{height:50,width:'70%',backgroundColor:Appcolor.LoginButton,borderRadius:5,justifyContent:'center',alignItems:'center' }}>
      <Text style={{color:'white',fontSize:20}}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button