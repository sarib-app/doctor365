import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import InputField from '../../Global/components/InputField';
import CustomButton from '../../Global/CustomButton';
import GlobalStyles from '../../Global/Branding/GlobalStyles';
import InputTitle from '../../Global/components/InputTitle';
import { Ionicons } from '@expo/vector-icons';
import ImageUpload from '../../Global/components/ImageUpload';
import Header from '../../Global/components/Header';
import Colors from '../../Global/Branding/colors';

const KycForm = ({ navigation }) => {
  
  const [AdharCard, setAdharCard] = useState(null);
  const [PanCard, setPanCard] = useState(null);
  const [selfie, setSelfie] = useState(null);

//   const [AdharCard, setAdharCard] = useState(null);


const AllUploaded = PanCard && selfie && AdharCard ? true:false


  return (
    <View style={GlobalStyles.Container}>
      {/* <View style={AuthStyles.TitleWraper}>
        <Ionicons name="chevron-back-outline" size={28} color={Colors.FontColorI} />
      <Text style={AuthStyles.title}>Welocome</Text>
      <Text style={AuthStyles.titleTwo}>Login To Continue</Text>
     

      </View> */}
      <Header 
      name={"Add KYC Details"}
      />
      <InputTitle 
      value={"Adhar Card"}
      />
      <ImageUpload 
    //   label={"dd"}
      onSelect={setAdharCard}
      value={AdharCard}
      />
     <InputTitle 
      value={"PAN Card"}
      />
      <ImageUpload 
    //   label={"dd"}
      onSelect={setPanCard}
      value={PanCard}
      />
       <InputTitle 
      value={"Upload Selfie"}
      />
      <ImageUpload 
    //   label={"dd"}
      onSelect={setSelfie}
      value={selfie}
      />
      {AllUploaded ?
      <CustomButton title="Upload Now" onPress={() => {handleLogin()}} color={Colors.PrimaryColor} />
    :
    <CustomButton title="Please upload all images" onPress={() => {}} color={Colors.inActive} />

    }
   
    </View>
  );
};


export default KycForm;
