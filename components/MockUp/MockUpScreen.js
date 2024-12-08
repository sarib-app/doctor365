import react from "react";
import { Image, View ,Text, TouchableOpacity} from "react-native";
import GlobalStyles from "../../Global/Branding/GlobalStyles";
import Ellipse from "../../assets/images/Ellipse.png"
import EllipseII from "../../assets/images/EllipseII.png"
import girl from "../../assets/images/girl2.png"
import Colors from "../../Global/Branding/colors";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

function MockUpScreen(){
    const navigation = useNavigation()
    return(
        <View style={GlobalStyles.Container}>
<Image
source={EllipseII}
style={{width:54,height:57,marginTop:90,alignSelf:'flex-start',marginLeft:20}}
/>

<Image
source={girl}
style={{width:280,height:300}}
/>

<Text style={{textAlign:'left',fontWeight:'bold',fontSize:30,margin:20,color:Colors.FontColorI,alignSelf:'flex-start',width:"70%"}}>
    Medicare - place for getting easy checkup
</Text>


<Text style={{textAlign:'left',fontWeight:'400',margin:20,marginTop:0,color:Colors.FontColorII,alignSelf:'flex-start',width:"70%"}}>
    Get your appointments with your doctor within single tap, get full insights of your checkup and tests.
</Text>


<TouchableOpacity 

onPress={()=> navigation.navigate("Login")}
style={{borderRadius:20,backgroundColor:Colors.PrimaryColor,marginLeft:20,alignSelf:'flex-start',padding:20}}>
<Entypo name="forward" size={24} color={Colors.BgColor} />
</TouchableOpacity>
        </View>
    )
}
export default MockUpScreen