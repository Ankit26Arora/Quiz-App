import {View, Text, TextInput,Image,TouchableOpacity} from 'react-native';
import React from 'react';
import Style from './Style';
import {Appcolor, Appconstant, Appimages} from '../../Theme';
import {Button, Quiz} from '../../components';
import {useNavigation} from '@react-navigation/native';

const Otp = () => {
  const navigation = useNavigation();
  const gotoregistrain = () => {
    navigation.navigate('Reg');
  };
  const numberOfInputs = 6;

  const renderTextInputs = () => {
    const textInputs = [];
    for (let i = 0; i < numberOfInputs; i++) {
      textInputs.push(<TextInput key={i} placeholder={`${i + 1}`} style={Style.TextInput} keyboardType='numeric' maxLength={1} />);
    }
    return textInputs;
  };
  return (
    <View style={{alignItems: 'center',flex:1}}>
      <View style={Style.otpView}>
        <Text style={Style.otp}>{Appconstant.otp}</Text>
      </View>
      <Quiz/>
      <View style={Style.otphere}>
        <Text style={Style.enterotp}>{Appconstant.Enter}</Text>
      </View>
      <View style={{flexDirection: 'row',marginTop:'10%'}}>{renderTextInputs()}</View>
      <View style={{alignItems:'center',width:'100%',marginTop:'20%'}}>
      <Button title={Appconstant.Login} onPress={gotoregistrain} />

      </View>
      <TouchableOpacity style={{marginTop:'5%'}}> 
      <Text style={{color:Appcolor.gray}}>{Appconstant.LoginSocial}</Text>
      </TouchableOpacity>
      
      <View style={Style.bottom}>
        <Image source={Appimages.clip} style={Style.bottomimage}/>
      </View>
    </View>
  );
};

export default Otp;
