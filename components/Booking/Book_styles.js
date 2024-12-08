import {
    StyleSheet,
   Dimensions
  } from 'react-native'
// import { Divider } from 'react-native-paper';
import Colors from '../../Global/Branding/colors';
const width = Dimensions.get('screen').width
  const WindowHeight = Dimensions.get('screen').height; 
  const BookStyles = StyleSheet.create({ 
    inputTitle: {
        fontSize: 16,
        marginVertical: 10,
        color: Colors.Dark,
        fontWeight: 'bold',
      },
      input: {
        width: width * 0.9,
        height: 50,
        borderWidth: 1,
        borderColor: Colors.LightGray,
        borderRadius: 10,
        paddingHorizontal: 15,
        marginBottom: 10,
      },
      suggestionCard: {
        padding: 10,
        width:width/1.05,
        borderWidth: 0.5,
        borderColor: Colors.placeHolder,
        borderRadius: 10,
        marginVertical: 5,
        backgroundColor: Colors.Dark,
      },
      suggestionTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        color: Colors.FontColorI,
      },
      suggestionSubtitle: {
        fontSize: 12,
        color: Colors.lightTxt,
      },
      card: {
        padding: 10,
        borderWidth: 0.5,
        borderColor: Colors.placeHolder,
        backgroundColor:Colors.Dark,
        borderRadius: 10,
        marginHorizontal: 10,
        // alignItems: 'center',
        justifyContent: 'center',
        width: width * 0.4,
        height:width/6,
        borderStyle:'dashed'
      },
      cardText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: Colors.FontColorI,
      },
      cardSubtext: {
        fontSize: 12,
        color: Colors.lightTxt,
      },
      slot: {
        // padding: 10,
        paddingHorizontal:10,
        borderWidth: 0.5,
        borderColor: Colors.placeHolder,
        borderRadius: 8,
        marginHorizontal: 5,
        alignItems: 'center',
        justifyContent:"center",
        height:30
      },
      slotText: {
        fontSize: 14,
        color: Colors.Dark,
      },
      bookButton: {
        marginTop: 20,
        backgroundColor: Colors.PrimaryColor,
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: 'center',
        width: width * 0.9,
      },
      bookButtonText: {
        fontSize: 16,
        color: Colors.White,
        fontWeight: 'bold',
      },

  })
  export default BookStyles