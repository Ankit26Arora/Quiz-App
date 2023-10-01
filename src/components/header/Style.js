import { StyleSheet, Dimensions } from 'react-native'
const { width } = Dimensions.get("window");
const {height}=Dimensions.get("window");
export default style= StyleSheet.create({
   

  container:{
    backgroundColor:'blue',
    justifyContent:'space-between',
    flexDirection:'row',
    alignItems:'center',
    height:'50%'
  },
  image:{
    height:'60%',
    resizeMode:'center'
  },
  scrollViewContainer: {
    flexDirection: 'row',
    paddingVertical: 10,
    height:'100%',
    backgroundColor:'white',
    alignItems:'center'
  },
  button: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginHorizontal: 15,
    backgroundColor: '#C4C4C4',
    justifyContent: 'center',
    alignItems: 'center',
    height:40,
    width:40,
    borderRadius:150
  },
  buttonText: {
    color: 'white',
  },
  description: {
    textAlign: 'center',
    marginTop: 5,
  },
 
 
}
)