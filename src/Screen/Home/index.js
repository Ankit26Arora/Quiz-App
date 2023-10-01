import React, { useEffect } from 'react';
import {View, Image, ScrollView, Dimensions, Text, TouchableOpacity} from 'react-native';
import {Appimages} from '../../Theme';
import Style from './Style';
import { useRoute, useNavigation } from '@react-navigation/native';
const {width, height} = Dimensions.get('window');

const ColoredView = ({color}) => {
  return <View style={[Style.diffrenttest, {backgroundColor: color}]} >
    <View style={{}}>
              <Image style={Style.image} source={Appimages.Book} />
            </View>
            <View
              style={{justifyContent: 'space-between', flexDirection: 'row'}}>
              <Text style={Style.text}>Quiz</Text>
              <Text style={Style.text}>20m</Text>
              <Text style={Style.text}>500$</Text>
            </View>
            <View style={Style.border}>
              <Text style={Style.Text}>entry people:200</Text>
            </View>
    </View>
};

const Home = ({ route }) => {
  const { data } = route.params;
  console.log("here is the data",data)
  const navigation = useNavigation();
  const colors = [
    
    
  ];
  const handleTouchableOpacityPress = () => {

    console.log("Adccess data is here",data)
    navigation.navigate('Mymatch',data);
    
  };


  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <View style={Style.container}>
        <Image style={Style.test} source={Appimages.Start} />
        <Image style={Style.bench} source={Appimages.Bench} />
      </View>

      <ScrollView style={Style.scrollView}>
        <TouchableOpacity onPress={handleTouchableOpacityPress}>
        <View style={{alignItems: 'center'}}>
          <View style={[Style.diffrenttest, {backgroundColor: '#EC8870'}]}>
            <View style={{}}>
              <Image style={Style.image} source={Appimages.Win} />
            </View>
            <View
              style={{justifyContent: 'space-between', flexDirection: 'row'}}>
              <Text style={Style.text}>Quiz</Text>
              <Text style={Style.text}>20m</Text>
              <Text style={Style.text}>500$</Text>
            </View>
            <View style={Style.border}>
              <Text style={Style.Text}>entry people:200</Text>
            </View>
          </View>
          {colors.map((color, index) => (
            <ColoredView key={index} color={color} />
          ))}
        </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Home;
