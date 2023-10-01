import { View, Text, TextInput,TouchableOpacity } from 'react-native'
import React from 'react'
import Style from '../otp/Style'
import { Appconstant } from '../../Theme'
import { Button, Quiz } from '../../components'
import { useNavigation } from '@react-navigation/native'

const Registraion = () => {
  const navigation=useNavigation();
  const gotohome=()=>{
    navigation.navigate('MyTabs')
  }
  return (
    <View style={{flex:1,alignItems:'center'}}>
        <View style={Style.otpView}>
        <Text style={Style.otp}>{Appconstant.Registration}</Text>
      </View>
      <Quiz/>
      <View style={{justifyContent:'center'}}>
        <TextInput placeholder={Appconstant.Enter} style={Style.input}  />

        
      </View>
      <Button title={Appconstant.Registration} onPress={gotohome}/>
      <TouchableOpacity style={{marginTop:'5%'}}>
        <Text>{Appconstant.Clickhere}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Registraion