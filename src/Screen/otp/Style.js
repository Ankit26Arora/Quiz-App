import { StyleSheet, Dimensions } from 'react-native'
import { Appcolor } from '../../Theme';
const { width } = Dimensions.get("window");
const {height}=Dimensions.get("window");
export default style= StyleSheet.create({
   

  otpView:{
    alignItems:'center',
  },
  otp:{
    color:'black',
    fontSize:25,
    marginTop:'10%',
  },
  red:{
    color:Appcolor.blue
  },
  black:{
    color:Appcolor.Black
  },
  orange:{
    color:Appcolor.LoginButton
  },
  enterotp:{
    fontSize:20,
    color:Appcolor.gray
    
  },
  otphere:{
    marginTop:'15%'
  },
  TextInput:{
    borderBottomWidth:1,
    marginLeft:'2%',
    alignItems:'center'
  },
  bottomimage:{
    height:225,
    width:300,
    resizeMode:'center'
  },
  bottom:{

    position:'absolute',
    bottom:0
  },
  input:{
    borderWidth:1,
    width: '80%',  }
 
}
)