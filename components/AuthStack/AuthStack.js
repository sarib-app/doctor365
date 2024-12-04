import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../Auth/Login';
import SignupScreen from '../Auth/SignUp';
import BottomNavigation from '../BottomNavigation/BottomNavigation';
import KycForm from '../KYCForm/KycForm';
import TakeLoanScreen from '../TakeLoanScreen.js/TakeLoanScreen';
import LoanHistoryScreen from '../HistoryScreens/LoanHistory';
import DepositHistoryScreen from '../HistoryScreens/AmountSubmit';
import Notifications from '../Notifications.js/Notifications';
import CustomerForm from '../CustomerForm/Customer';
import PayBackForm from '../PayBack/PayBackScreen';
import MockUpScreen from '../MockUp/MockUpScreen';
import GetContactsFunction from '../GetContacts/GetContacts';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert, View } from 'react-native';
import InitialLoading from '../../Global/components/InitialLoading';
const Stack = createStackNavigator();

const AuthStack = () => {
const [initialRoute,setInititalRoute]=useState(null)

  useEffect(()=>{
async function getAsynData(){
  const getData = await AsyncStorage.getItem("user")
  const ParsedData = JSON.parse(getData)
 if(ParsedData){
  setInititalRoute("BottomNavigation")
 }else{
  setInititalRoute("MockUpScreen")

 }

}
getAsynData()
  },[])
  if(initialRoute === null){
    return(
      <View>

      </View>
    )
  }else{
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName={initialRoute}>
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Signup" component={SignupScreen} options={{ headerShown: false }} />
          <Stack.Screen name="BottomNavigation" component={BottomNavigation} options={{ headerShown: false }} />
          <Stack.Screen name="KycForm" component={KycForm} options={{ headerShown: false }} />
          <Stack.Screen name="TakeLoanScreen" component={TakeLoanScreen} options={{ headerShown: false }} />
          <Stack.Screen name="CheckupHistoryScreen" component={LoanHistoryScreen} options={{ headerShown: false }} />
          <Stack.Screen name="DepositHistoryScreen" component={DepositHistoryScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Notifications" component={Notifications} options={{ headerShown: false }} />
          <Stack.Screen name="CustomerForm" component={CustomerForm} options={{ headerShown: false }} />
          <Stack.Screen name="PayBackForm" component={PayBackForm} options={{ headerShown: false }} />
          <Stack.Screen name="MockUpScreen" component={MockUpScreen} options={{ headerShown: false }} />
          <Stack.Screen name="GetContactsFunction" component={GetContactsFunction} options={{ headerShown: false }} />
  
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
 
};

export default AuthStack;
