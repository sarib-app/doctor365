import React, { useEffect, useRef, useState } from "react";
import GlobalStyles from "../../Global/Branding/GlobalStyles";
import HeaderScreens from "../../Global/components/HeaderScreens";
import { Text, View ,TouchableOpacity, ScrollView} from "react-native";
import { Entypo, FontAwesome5, Ionicons, MaterialIcons } from "@expo/vector-icons";
import Colors from "../../Global/Branding/colors";
import InputTitle from "../../Global/components/InputTitle";
import HistoryStyles from "./HistoryStyle";
import { FlatList } from "react-native-gesture-handler";
import Header from "../../Global/components/Header";
import getAsyncuser from "../../Global/components/getAsyncUser";
import { useIsFocused } from "@react-navigation/native";
import { getLoanList } from "../../Global/Calls/ApiCalls";
import AnimatedLottieView from "lottie-react-native";
import Nodata from '../../assets/Animationn/Nodata.json'

import moment from "moment";
import InitialLoading from "../../Global/components/InitialLoading";
import NodataFound from "../../Global/components/NoDataFound";
function LoanHistoryScreen(){
    const data =[
        {
        LoanAmount:"2000",
        doctor:"Steven",
        status:"completed",
        time:"12:00 pm",
        isCompleted:true,
        repayAmountLeft:2000,
        Aamount_rePaid: 1000
        },
        {
            LoanAmount:"2000",
            doctor:"Mike Ross",
            status:"missed",
            time:"12:00 pm",
            isCompleted:true,
            repayAmountLeft:2000,
            Aamount_rePaid: 1000
            },
            {
                LoanAmount:"2000",
                doctor:"Harvey",
                status:"pending",
                time:"12:00 pm",
                isCompleted:true,
                repayAmountLeft:2000,
                Aamount_rePaid: 1000
                },
                {
                    LoanAmount:"2000",
                    doctor:"Luis Litt",
                    status:"pending",
                    time:"12:00 pm",
                    isCompleted:true,
                    repayAmountLeft:2000,
                    Aamount_rePaid: 1000
                    },
        ]
        const status_list= [
            {
                id:1,
                title:"completed"
            },
            {
                id:1,
                title:"pending"
            },
            {
                id:1,
                title:"cancelled"
            },
            {
                id:1,
                title:"missed"
            },
            {
                id:1,
                title:"requested"
            },

        ]
        const focused = useIsFocused()
const [loanList,setLoanList] =useState([])

const [loading,setLoading] =useState(false)


const animation = useRef()

const [selected,setSelected] =useState("completed")



        useEffect(()=>{
            async function getAsyncData(){
            
            const userData = await getAsyncuser()
            if(userData){
                getAllRcord(userData)
            }
            }
            getAsyncData()
              },[focused])


async function getAllRcord(userData){
    const res= await getLoanList(userData.id)
    console.log(res)
    if(res != null){
     if(res.status === "200"){
        setLoanList(res.loans)
        
     }
 setLoading(false)
    }
}



const CardDesc={
    fontWeight:'600',
      fontSize:12,
      color:Colors.placeHolder,
    //   width:"40%",
  }





    const renderitems = ({item})=>(

        <View style={GlobalStyles.HistoryCard}>

        <View style={GlobalStyles.RowMaker}>
            <View style={HistoryStyles.iconWrapper}>
        {/* <Ionicons name="cash" size={24} color="black" /> */}
        <MaterialIcons name="bookmark-added" size={24} color={Colors.PrimaryColor} />

            </View>
            

        <View style={[GlobalStyles.ColumnAligner,{width:"70%",alignItems:'flex-start'}]}>
            <InputTitle
            value={"Appointment"}
            style={{marginLeft:0}}
            />
            <Text style={CardDesc}>
                With Dr. {item.doctor}
            </Text>
        </View>
        {/* <MaterialIcons name="bookmark-added" size={24} color={Colors.PrimaryColor} /> */}
        {/* <Entypo name="eye" size={20} color={Colors.PrimaryColor} /> */}
        <FontAwesome5 name="eye" size={20} color={Colors.PrimaryColor} />
        </View>
        <View style={[GlobalStyles.RowMaker,{justifyContent:'space-between'}]}>

        <View style={[GlobalStyles.ColumnAligner,{marginTop:10}]}>
            <InputTitle
            value={moment(item.loan_date).format("YYYY-MM-DD")}
            style={{marginLeft:0}}
            />
            <Text style={CardDesc}>
                Date
            </Text>
        </View>

        <View style={[GlobalStyles.ColumnAligner,{marginTop:10}]}>
            <InputTitle
            value={item.status}
            style={{marginLeft:0,color: item.status === "missed"?Colors.danger:item.status ==="pending"?Colors.deposit:Colors.send}}
            />
            <Text style={CardDesc}>
            status
            </Text>
        </View>

        <View style={[GlobalStyles.ColumnAligner,{marginTop:10}]}>
            <InputTitle
            value={`${item.time}`}
            style={{marginLeft:0}}
            />
            <Text style={CardDesc}>
                Time
            </Text>
        </View>
        </View>

    </View>

    )
    return(
        <View
        style={GlobalStyles.Container}
        >
            <Header 
            name={"Appointments Record"}
            />

<View style={HistoryStyles.status_container}>
    <ScrollView
    horizontal={true}
    showsHorizontalScrollIndicator={false}
    >

    {
        status_list.map((item)=>{
            return(
<TouchableOpacity
onPress={()=>
    setSelected(item.title)
}
style={[HistoryStyles.status_btn,selected==item.title ? HistoryStyles.actvice_btn:HistoryStyles.in_actvice_btn]}
>
<Text
style={[selected==item.title ? HistoryStyles.active_btnTxt:HistoryStyles.inActive_txt]}

>
{item.title}
</Text>
</TouchableOpacity>
            )
        })
    }
    </ScrollView>

</View>
            {
                loading === true?
                <InitialLoading />:
                <>

                {
                    data.length > 0 ?

<FlatList 
data={data}
renderItem={renderitems}
/>:
<NodataFound/>
                }

</>

            }
       
        </View>
    )
}
export default LoanHistoryScreen




