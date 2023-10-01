import { StyleSheet, Dimensions } from 'react-native'
const { width } = Dimensions.get("window");
const {height}=Dimensions.get("window");
export default style= StyleSheet.create({
   

  login:{
    alignItems:'center',
    justifyContent:'center',
    width
    
  },
  Text:{
    color:'black',
    fontSize:30,
    marginTop:'10%',
    width:'20%'
  },
  image:{
    height:300,
    width:'70%',
    resizeMode:'stretch'
  },
  input:{
alignItems:'center',
marginTop:'10%'
    
  },
  inputText:{
    borderWidth:1,
    width:'80%',
    borderColor:'#DCDCDC'
  }
 
}
)