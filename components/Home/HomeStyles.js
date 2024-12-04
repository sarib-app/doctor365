import {
    StyleSheet,
   Dimensions
  } from 'react-native'
// import { Divider } from 'react-native-paper';
import Colors from '../../Global/Branding/colors';
const WindowWidth = Dimensions.get('screen').width
  const WindowHeight = Dimensions.get('screen').height; 
  const HomeStyles = StyleSheet.create({ 
Card:{
    width:WindowWidth/1.05,
    // height:WindowHeight/7,
    backgroundColor:Colors.Dark,
    borderRadius:10,
    elevation:10,
    shadowColor:Colors.Dark,
    padding:20
},
CardTitle:{
    fontWeight:'bold',
    fontSize:16,
    color:Colors.FontColorI
},
CardDesc:{
  fontWeight:'600',
    fontSize:12,
    color:Colors.placeHolder,
    width:"40%",
},
TopLoanCard:{
  width:WindowWidth,
  // height:WindowHeight/3.7,
  paddingHorizontal:20,
  borderBottomLeftRadius:30,
  borderBottomEndRadius:30,
  backgroundColor:Colors.PrimaryColor
},
TopCardTitle:{ fontSize: 35, fontWeight: 'bold', color: Colors.BgColor },
ApplyButton:{
  width:100,
  height:50,
  borderWidth:1,
  borderColor:Colors.BgColor,
  borderRadius:10,
  alignItems:'center',
  justifyContent:'center',
  alignSelf:'center',
  margin:20
},
ApplyButtonSmall:{
  // width:100,
  // height:50,
  paddingVertical:10,
  paddingHorizontal:20,
  backgroundColor:Colors.LightPrimary,
  borderWidth:1,
  borderColor:Colors.BgColor,
  borderRadius:10,
  alignItems:'center',
  justifyContent:'center',
  alignSelf:'center',
  // margin:20
}


  })
  export default HomeStyles