import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import GlobalStyles from '../../Global/Branding/GlobalStyles';

import LoanStyles from './LoanStyles';
import { Entypo, FontAwesome, FontAwesome6, Octicons } from '@expo/vector-icons';
import Colors from '../../Global/Branding/colors';
import { useNavigation } from '@react-navigation/native';



  function BillsCard({
    title,
    subtitle,
    identifier,
    titleII,
    LoanTaken,
    leftAmount,
    interest,
    loanStat,
    loanId

    
  }) {

    const navigation = useNavigation()
    function RowRecord({
        value, title,
        style,param
      }) {
        return (
    
    
    
    
          <View style={[style,{alignItems:'center'}]}>
    
            <Text style={[LoanStyles.CardTitle]}>
              {param+""+Number(value).toFixed(0)}
            </Text>
            <Text style={[LoanStyles.CardDesc, { width: "100%" }]}>
              {title}
            </Text>
          </View>
    
    
        )
      }
    

    return (
      <View style={[LoanStyles.Card]}>
        <View style={GlobalStyles.RowMaker}>

          <View style={{ padding: 10, borderRadius: 1000, backgroundColor: Colors.SeconderyColor }}>
            {
              identifier === "Full"?
              <Entypo name="credit-card" size={24} color={Colors.PrimaryColor} />:
              <FontAwesome6 name="money-bill-trend-up" size={24}  color={Colors.LightPrimary} />
            }
          </View>
          <View style={{ marginLeft: 10,width:"55%" }}>

            <Text style={[LoanStyles.CardTitle]}>
              {title}
            </Text>
            <Text style={[LoanStyles.CardDesc, { width: "100%" }]}>
              {subtitle} <Text style={{color:Colors.danger}}>
              ₹ {identifier === "Full" ? leftAmount:"Enter"}
              </Text>
            </Text>
          </View>
          <TouchableOpacity 
          
          onPress={()=> {
            // navigation.navigate("PayBackForm",{identifier:identifier,leftAmount:leftAmount,LoanTaken:LoanTaken,loanId:loanId})

            if(loanStat === "in_progress"){

              navigation.navigate("PayBackForm",{identifier:identifier,leftAmount:leftAmount,LoanTaken:LoanTaken,loanId:loanId})
            
            }else{
              Alert.alert("No Active Loan","You do not have any active loan, please take a loan first.")
            }
            }

          }
          style={[LoanStyles.ApplyButtonSmall,{marginTop:10,marginLeft:30}]}>
              <Text style={{ fontSize: 12, color: Colors.BgColor }}>
                Pay
              </Text>
            </TouchableOpacity>
        </View>
        <View style={[GlobalStyles.RowMaker, { marginTop: 20, justifyContent: 'space-between' }]}>
          <RowRecord
            value={leftAmount}
            title={titleII}
            param={"₹ "}
          />

          <RowRecord
            value={interest}
            title={"Pending Dues"}
            param={"₹ "}

          // style={{marginLeft:20}}
          />
           <RowRecord
            value={LoanTaken}
            title={"Loan Taken"}
            param={"₹ "}

          // style={{marginLeft:20}}
          />


         



        </View>
        {/* {
              identifier === "Full"?
              <View style={[LoanStyles.ApplyButtonSmall,{marginTop:10}]}>
              <Text style={{ fontSize: 12, color: Colors.FontColorI }}>
                Pay Full Amount
              </Text>
            </View>:
              <View style={[LoanStyles.ApplyButtonSmall,{marginTop:10}]}>
              <Text style={{ fontSize: 12, color: Colors.FontColorI }}>
                Pay In Installment
              </Text>
            </View>
            } */}
     

      </View>
    )
  }


export default BillsCard;


















// function LoanRecordCard({
//     title,
//     subtitle,
//     identifier,
//     titleII
//   }) {
//     function RowRecord({
//         value, title,
//         style
//       }) {
//         return (
    
    
    
    
//           <View style={[style,{alignItems:'center'}]}>
    
//             <Text style={[LoanStyles.CardTitle]}>
//               {value}
//             </Text>
//             <Text style={[LoanStyles.CardDesc, { width: "100%" }]}>
//               {title}
//             </Text>
//           </View>
    
    
//         )
//       }
    

//     return (
//       <View style={HomeStyles.Card}>
//         <View style={GlobalStyles.RowMaker}>

//           <View style={{ padding: 10, borderRadius: 1000, backgroundColor: Colors.inActive }}>
//             {
//               identifier === "Loan"?
//               <Entypo name="credit-card" size={24} color={Colors.PrimaryColor} />:
//               <FontAwesome6 name="money-bill-trend-up" size={24}  color={Colors.SeconderyColor} />
//             }
//           </View>
//           <View style={{ marginLeft: 10 }}>

//             <Text style={[HomeStyles.CardTitle]}>
//               {title}
//             </Text>
//             <Text style={[HomeStyles.CardDesc, { width: "100%" }]}>
//               {subtitle}
//             </Text>
//           </View>
//         </View>
//         <View style={[GlobalStyles.RowMaker, { marginTop: 20, justifyContent: 'space-between' }]}>
//           <RowRecord
//             value={"₹ 1920000"}
//             title={titleII}

//           />

//           <RowRecord
//             value={"0.3%"}
//             title={"Pending Dues"}
//           // style={{marginLeft:20}}
//           />

//           <View style={HomeStyles.ApplyButtonSmall}>
//             <Text style={{ fontSize: 12, color: Colors.FontColorI }}>
//               See History
//             </Text>
//           </View>



//         </View>



//       </View>
//     )
//   }