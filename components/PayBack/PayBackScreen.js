import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Platform, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import InputField from '../../Global/components/InputField';
import CustomButton from '../../Global/CustomButton';
import GlobalStyles from '../../Global/Branding/GlobalStyles';
import Colors from '../../Global/Branding/colors';
import InputTitle from '../../Global/components/InputTitle';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import PayBackStyles from './PayBack';
import Header from '../../Global/components/Header';
import { WindowWidth } from '../../Global/components/Dimensions';
import ImageUpload from '../../Global/components/ImageUpload';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import getAsyncuser from '../../Global/components/getAsyncUser';
import { ReturnAmountApi } from '../../Global/Calls/ApiCalls';
import LoadingModal from '../../Global/components/LoadingModal';

const PayBackForm = ({ route }) => {
const {identifier} = route.params
const {leftAmount} = route.params
const {LoanTaken} = route.params
const {loanId} = route.params
const [loading,setLoading]=useState(false)
const navigation = useNavigation()
const focused = useIsFocused()
// console.log(identifier)
 
  const [AccountType, setAccountType] = useState('');
  const [ReturnAmount, setReturnAmount] = useState(identifier === "Full"?leftAmount:0);
  const [TransactionId, setTransactionId] = useState('');
  const [invoice, setinvoice] = useState(null);
  const [user, setuser] = useState(null);

  const [isPressed, setIsPressed] = useState(false);

  useEffect(()=>{
async function getAsyncData(){

const userData = await getAsyncuser()
if(userData){
  setuser(userData)
}
}
getAsyncData()
  },[focused])

  const handleSubmit = () => {
    setIsPressed((prev) => !prev);

    if(AccountType && ReturnAmount && TransactionId) {

      submitReturn()

    }else{
      setIsPressed(true)
    }
  };

async function submitReturn(){
  setLoading(true)
const res = await ReturnAmountApi(user.id,loanId,LoanTaken,TransactionId,ReturnAmount,identifier)
console.log(res)
setLoading(false)
if(res){
  if(res.status === "200"){
    
    Alert.alert("Paid","Amount paid request is generated it will be approved soon")
    navigation.goBack()
  }
  else{
    Alert.alert("Not Paid",res.message)
  }
}
}


  return (
    <View style={GlobalStyles.Container}>
      <Header name={"Give All Details"} />
      <ScrollView
      contentContainerStyle={{alignItems:'center',width:WindowWidth}}
      >

      <View style={[PayBackStyles.Card, GlobalStyles.RowMaker, { backgroundColor: Colors.PrimaryColor }]}>
        <FontAwesome name="warning" size={24} color={Colors.BgColor} />
        <View style={{ alignItems: 'flex-start', marginLeft: 10 }}>
          <Text style={[PayBackStyles.CardTitle, { color: Colors.BgColor }]}>
            Payment Return Policy
          </Text>
          <Text style={[PayBackStyles.CardDesc, { color: Colors.BgColor }]}>
            Please pay your debt on our given account no. and send the proof of transaction below.
          </Text>
        </View>
      </View>



      <InputTitle value="Bank Type" />
      <View style={[styles.pickerContainer,{borderColor:!AccountType && isPressed ? Colors.danger:Colors.placeHolder}]}>
        <Picker
          selectedValue={AccountType}
          onValueChange={(itemValue) => setAccountType(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Select Account Type" value="" />
          <Picker.Item label="UBL" value="UBL" />
          <Picker.Item label="Meezan" value="Meezan" />
          <Picker.Item label="Allied" value="Allied" />
        </Picker>
      </View>


      {/* <InputTitle 
      value={"Invoice Screenshot"}
      />
      <ImageUpload 
    //   label={"dd"}
      onSelect={setinvoice}
      value={invoice}
      /> */}

      <InputTitle value="Return Amount" />
      <InputField
        icon="cash-outline"
        placeholder="The amount your wanna pay"
        value={identifier === "Full" ? leftAmount:ReturnAmount}
        editable={identifier === "Full" ? false :true}
        onChangeText={setReturnAmount}
        keyboardType="numeric"
        pressed={isPressed}
      />

      <InputTitle value="Transaction ID" />
      <InputField
        icon="card-outline"
        placeholder="Transaction ID"
        value={TransactionId}
        onChangeText={setTransactionId}
        keyboardType="numeric"
        pressed={isPressed}
      />

      <CustomButton title="Pay Now" onPress={handleSubmit} />
      </ScrollView> 
<LoadingModal 
show={loading}
/>
    </View>
  );
};

const styles = StyleSheet.create({
  datePicker: {
    padding: 15,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    marginVertical: 10,
  },
  dateText: {
    fontSize: 16,
    color: '#333',
  },
  pickerContainer: {
    width: WindowWidth/1.05,
    backgroundColor: Colors.BgColorII,
    borderRadius: 10,
    borderWidth: 0.3,
    borderColor: Colors.placeHolder,
  
    marginVertical: 3,
  },
  picker: {
    width: WindowWidth/1.05,
    height: 50,
    color:Colors.FontColorI,
    fontSize:14
  },
});

export default PayBackForm;
