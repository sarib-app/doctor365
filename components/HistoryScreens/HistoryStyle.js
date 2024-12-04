import {
    StyleSheet,
   Dimensions
  } from 'react-native'
// import { Divider } from 'react-native-paper';
import Colors from '../../Global/Branding/colors';
const WindowWidth = Dimensions.get('screen').width
  const WindowHeight = Dimensions.get('screen').height; 
  const HistoryStyles = StyleSheet.create({ 
iconWrapper:{borderRadius:1000,backgroundColor:Colors.inActive,padding:10},

status_container:{
  width:WindowWidth/1.05,
  flexDirection:'row',
  alignItems:'center',
  // justifyContent:'space-between'
},
status_btn:{
  borderRadius:100,
  paddingVertical:3,
  paddingHorizontal:15,
  alignItems:'center',
  justifyContent:"center",
  margin:5
},
actvice_btn:{
  backgroundColor:Colors.PrimaryColor
},
in_actvice_btn:{
  backgroundColor:Colors.inActive
},
active_btnTxt:{
  color:Colors.Dark
},
inActive_txt:{
  color:Colors.FontColorI
}

  })
  export default HistoryStyles