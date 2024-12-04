import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import GlobalStyles from '../../Global/Branding/GlobalStyles';
import HeaderScreens from '../../Global/components/HeaderScreens';
import Header from '../../Global/components/Header';
import HomeStyles from './HomeStyles';
import { FontAwesome } from '@expo/vector-icons';
import Colors from '../../Global/Branding/colors';
import lock from '../../assets/Animationn/lock.json'
import LottieAnimation from '../../Global/components/LottieAnimation';
import CustomButton from '../../Global/CustomButton';
import { useNavigation } from '@react-navigation/native';
const KYCform = ({kycStat,actionKyc}) => {
  console.log(kycStat)
const navigation = useNavigation()
  const [KycStatus,setKycStatus]=useState(kycStat)
  const TxtClr = KycStatus == "pending"?"#FF7700":Colors.danger 
  const bgClr = KycStatus == "pending"?"#F5C49A":"#F5ABAB"
  const title = KycStatus ==  "pending"?"KYC submitted":"KYC needs to be uploaded"
  const desc =  KycStatus ==  "pending"?"Our team is reviewing your KYC once they approve it you ill be able to take Loans, Thankyou!":"To proceed with taking loans first you need to upload your KYC, its neccessary to get your kyc approvd first."
  return (
  <>
  
  <View
        style={[HomeStyles.Card,GlobalStyles.RowMaker,{backgroundColor:bgClr}]}
        >
<FontAwesome name="warning" size={24} color={TxtClr} />
<View style={{alignItems:'flex-start',marginLeft:10}}>

<Text style={[HomeStyles.CardTitle,{color:TxtClr}]}>
  {title}
</Text>
<Text style={[HomeStyles.CardDesc,{color:TxtClr}]}>
  {desc}
</Text>
</View>

        </View>


        <LottieAnimation
        source={lock}
        style={{marginTop:100,marginBottom:30}}
        animationStyle={{width:200,height:200}}
        />
        <Text style={[HomeStyles.CardDesc,{width:"80%",textAlign:'center',marginBottom:30}]}>
  Your Dashboad is currently locked, it will be opened after your KYC is approved
</Text>

{
  KycStatus == "pending"?
  <CustomButton 
title={"Kyc Under Review"}
onPress={()=> Alert.alert("Already submitted","You already have submitted KYC, please for it to get approved.")}
// onPress={()=> navigation.navigate("CustomerForm")}

/>:
<CustomButton 
title={"Upload Kyc"}
onPress={()=> navigation.navigate("CustomerForm")}

/>
}
<Text

onPress={()=> actionKyc() }
style={{textDecorationLine:'underline',fontWeight:'bold',color:Colors.PrimaryColor}}>
  Go Back To Dashboard
</Text>

  </>
  );
};


export default KYCform;
