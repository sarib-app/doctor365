import React, { useEffect, useRef } from 'react';
import { StyleSheet, View, Text, Modal } from 'react-native';
// import * as Contacts from 'expo-contacts';
import GlobalStyles from '../../Global/Branding/GlobalStyles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CustomButton from '../../Global/CustomButton';
import AnimatedLottieView from "lottie-react-native";
import Contacts from '../../assets/Animationn/Contacts.json'
export default function GetContactsFunction({
    show,
    onPress
}) {
    const animation = useRef()

//   useEffect(() => {
//     (async () => {
//       const { status } = await Contacts.requestPermissionsAsync();
//       if (status === 'granted') {
//         const { data } = await Contacts.getContactsAsync({
//           fields: [Contacts.Fields.PhoneNumbers],
//         });

//         if (data.length > 0) {
//           const contact = data.filter((item,index) => index < 2);
//           console.log(contact);
//         }
//       }
//     })();
//   }, []);

  return (
    <Modal 
    transparent={true}
    visible={show}
    animationType='slide'
    >
    <View style={[GlobalStyles.Container,{justifyContent:'center'}]}>
    


    <AnimatedLottieView 
        autoPlay
        loop={true}
        ref={animation}
        style={{
          width: 250,
          height: 250,
          alignSelf:'center',
          marginBottom:-50,
          marginTop:-100,

          backgroundColor: 'transparent',
        }}
        // Find more Lottie files at https://lottiefiles.com/featured
        source={Contacts}
        />
    <CustomButton title="Give Contact Permissions" onPress={() => {onPress()}} />
<Text style={{textAlign:'center',marginHorizontal:30}}>You can not take loan without giving contact permission, please be sure that you have given contact permission!</Text>

    </View>
    </Modal>
        

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
