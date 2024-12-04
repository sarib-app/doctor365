import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import GlobalStyles from '../../Global/Branding/GlobalStyles';
import HeaderScreens from '../../Global/components/HeaderScreens';
import Header from '../../Global/components/Header';
import HomeStyles from './HomeStyles';
import { Entypo, FontAwesome, FontAwesome6, Octicons } from '@expo/vector-icons';
import Colors from '../../Global/Branding/colors';
import lock from '../../assets/Animationn/lock.json'
import LottieAnimation from '../../Global/components/LottieAnimation';
import CustomButton from '../../Global/CustomButton';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import KYCform from './KycForm';
import { WindowWidth } from '../../Global/components/Dimensions';
import InputTitle from '../../Global/components/InputTitle';
import DashboardScreen from './Dashboard';
import { userDasboardStats } from '../../Global/Calls/ApiCalls';
import InitialLoading from '../../Global/components/InitialLoading';
import getAsyncuser from '../../Global/components/getAsyncUser';
const HomeScreen = () => {
  const navigation = useNavigation()
  const focused = useIsFocused()
  const [KycStatus, setKycStatus] = useState("NA")
  const [loanTaken,setLoanTaken] = useState("NA")
  const [loanRec,setLoanrec] = useState(null)
  const [depositRec,setDepositRec] = useState(null)

  const [loading,setLoading] = useState(true)
  const [user, setuser] = useState(null);

  // useEffect(()=>{
  //     async function getAsyncData(){
      
  //     const userData = await getAsyncuser()
  //     if(userData){
  //       setuser(userData)
  //       getDashboardData(userData)
  //     }
  //     }
  //     getAsyncData()
  //       },[focused])

  //       async function getDashboardData(userData){
  //         const res= await userDasboardStats(userData.id)
  //         console.log(res)
  //       if(res != null){
  //         console.log(res.response.user_record)
  //         setKycStatus(res.response.user_record.kyc_submitted)
  //         setLoanTaken(res.response.user_record.loan_applied)
  //         setLoading(false)
  //         setLoanrec(res.response.user_record.Loan)
  //         setDepositRec(res.response.user_record.Deposit)
  //       }
  //       // setLoading(false)
  //       }
       


  return (
<View style={GlobalStyles.Container}>


<Header
name={"Dasboard"}
TxtColor={Colors.Dark}
color={Colors.PrimaryColor}
/>


{/* { 
loading === true ?
<InitialLoading/>:
<>
{
KycStatus === "never gonna happen" ?
<KYCform
kycStat={KycStatus}
/>
:
<DashboardScreen
loanTaken={loanTaken}
loanRec={loanRec}
depositRec={depositRec}
/>
}
</>
} */}


<DashboardScreen
loanTaken={loanTaken}
loanRec={loanRec}
depositRec={depositRec}
/>


</View>

);

};


export default HomeScreen;
