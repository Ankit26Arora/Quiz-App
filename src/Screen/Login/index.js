import {View, Text, Image, TextInput,Dimensions} from 'react-native';
import React from 'react';
import Style from './Style';
import {Appconstant, Appimages} from '../../Theme';
import {Button} from '../../components';
import { useNavigation } from '@react-navigation/native';
const { width } = Dimensions.get("window");

const Login = () => {
  const navigation=useNavigation();
  const gotootp=()=>{
    console.log("click")
    navigation.navigate('MyTab');
  }
  return (
    <View style={{flex: 1,backgroundColor:'white'}}>
      <View style={Style.login}>
        <Text style={Style.Text}>{Appconstant.Login}</Text>
      </View>
      <View style={{alignItems: 'center', marginTop: '10%'}}>
        <Image source={Appimages.cart} style={Style.image} />
      </View>
      <View style={Style.input}>
        <TextInput
          placeholder={Appconstant.Mobile}
          style={Style.inputText}></TextInput>
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '10%',
        }}>
        <Button title="Login" onPress={gotootp}/>
      </View>
      <View style={{position:'absolute',bottom:10,alignItems:'center',width}}>
        <Text>{Appconstant.terms}</Text>
        <Text>{Appconstant.Powerd}</Text>
      </View>
    </View>
  );
};

export default Login;
