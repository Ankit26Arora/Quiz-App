import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    height: '20%',
    width: '90%',
    marginTop: '5%',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  test: {
    height: '100%',
    width: '100%',
  },
  bench: {
    position: 'absolute',
    height: '80%',
    width: '50%',
    resizeMode: 'center',
  },
  scrollView: {
    flex: 1, 
    width: '100%', 
  },
  diffrenttest: {
    width: '90%', 
    height: 120, 
    marginVertical: 10,
    borderRadius:20,
    justifyContent:'space-between',
    marginTop:'10%'
    
  },
  image:{
    height:60,
    width:60,
    position:'absolute',
    resizeMode:'center',
    marginLeft:'70%',
    marginTop:'-8%'
    
    
    
  },
  Text:{
    textAlign:'right',
    paddingRight:10
  },
  border:{
    width: '100%',
    borderTopWidth: 1, 
    borderColor: 'black', 

  },
  text:{
    color:'white',
    fontSize:25,
    fontWeight:'bold',
    margin:5

  }
});
