import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  ScrollView,
} from 'react-native';
import Colors from '../../Global/Branding/colors';
import { WindowWidth, WindowHeight } from '../../Global/components/Dimensions';
import Icon from 'react-native-vector-icons/Ionicons'; // Replace with your preferred icon library
import GlobalStyles from '../../Global/Branding/GlobalStyles';
import Header from '../../Global/components/Header';
import { Entypo } from '@expo/vector-icons';

const CheckupDetails = () => {
  const [expandNotes, setExpandNotes] = useState(false);

  // Static data for testing
  const staticData = {
    date: 'Nov 25, 2024',
    diagnosis: 'Hypertension',
    doctorName: 'Dr. Sophia Johnson',
    doctorSpeciality: 'Cardiologist',
    doctorImage: 'https://via.placeholder.com/50', // Replace with an actual image URL if available
    notes:
      'Patient is advised to monitor blood pressure daily and maintain a low-sodium diet. Recommended follow-up in two weeks.',
    diagnosisDetails:
      'High blood pressure identified during routine examination. No complications noted but requires medication for control.',
    reason: 'Routine Checkup with complaints of headaches.',
    prescription: [
      { medName: 'Losartan', times: '1x daily', days: '30 days' },
      { medName: 'Aspirin', times: '1x daily', days: '7 days' },
    ],
  };

  return (
    <View style={GlobalStyles.Container}>
          {/* <Header 
            name={"Appointments Record"}
            /> */}
      <Header name="Checkup Details" TxtColor={Colors.Dark} color={Colors.PrimaryColor} />
      <ScrollView
      showsVerticalScrollIndicator={false}
      >


      {/* Top Card */}
      <View style={[styles.card,{marginTop:10}]}>
        <View style={{width:WindowWidth/1.05,alignItems:'center',justifyContent:'space-between',flexDirection:'row'}}>

        <Text style={styles.title}>
          <Icon name="calendar-outline" size={14} color={Colors.PrimaryColor} />{' '}
          Checkup Date:
        </Text>
        <Text style={[styles.title,{marginRight:50}]}>
          <Entypo name="print" size={14} color={Colors.PrimaryColor} />{' '}
          Print
        </Text>
        </View>
        <Text style={styles.detail}>{staticData.date}</Text>
        <Text style={styles.title}>
          <Icon name="medkit-outline" size={14} color={Colors.PrimaryColor} />{' '}
          Diagnosis for:
        </Text>
        <Text style={styles.detail}>{staticData.diagnosis}</Text>
     
      </View>

      {/* Doctor's Info */}
      <Text style={styles.sectionTitle}>
        <Icon name="person-outline" size={14} color={Colors.PrimaryColor} />{' '}
        Checkup By
      </Text>
      <View style={styles.doctorCard}>
        <Image
          source={{ uri: staticData.doctorImage }}
          style={styles.doctorImage}
        />
        <View>
          <Text style={styles.doctorName}>{staticData.doctorName}</Text>
          <Text style={styles.doctorSpeciality}>
            {staticData.doctorSpeciality}
          </Text>
        </View>
      </View>

      {/* Notes Section */}
      <Text style={styles.sectionTitle}>
        <Icon name="document-text-outline" size={14} color={Colors.PrimaryColor} />{' '}
        Notes
      </Text>
      <TouchableOpacity
        style={styles.expandableCard}
        onPress={() => setExpandNotes(!expandNotes)}
      >
        <Text
          style={[
            styles.notesText,
            !expandNotes && { height: 40, overflow: 'hidden' },
          ]}
        >
          {staticData.notes}
        </Text>
        <Text style={styles.expandText}>
          {expandNotes ? 'Collapse' : 'Expand'}
        </Text>
      </TouchableOpacity>

      {/* Diagnosis Details */}
      <Text style={styles.sectionTitle}>
        <Icon name="analytics-outline" size={14} color={Colors.PrimaryColor} />{' '}
        Diagnosis Details
      </Text>
      <View style={styles.card}>
        <Text style={styles.detail}>{staticData.diagnosisDetails}</Text>
      </View>

      {/* Reason for Visit */}
      <Text style={styles.sectionTitle}>
        <Icon name="help-circle-outline" size={14} color={Colors.PrimaryColor} />{' '}
        Reason for Visiting
      </Text>
      <View style={styles.card}>
        <Text style={styles.detail}>{staticData.reason}</Text>
      </View>

      {/* Prescription */}
      <Text style={styles.sectionTitle}>
        <Icon name="list-outline" size={14} color={Colors.PrimaryColor} />{' '}
        Prescription
      </Text>
      <View style={styles.card}>
      <View style={styles.prescriptionItem}>
      <Text style={[styles.prescriptionText,{fontWeight:'bold'}]}>
                <Icon
                  name="medkit-outline"
                  size={12}
                  color={Colors.PrimaryColor}
                />{' '}
                Medicine
              </Text>
              <Text style={[styles.prescriptionText,{fontWeight:'bold'}]}>
                <Icon
                  name="time-outline"
                  size={12}
                  color={Colors.PrimaryColor}
                />{' '}
                Times
              </Text>
              <Text style={[styles.prescriptionText,{fontWeight:'bold'}]}>
                <Icon name="calendar-outline" size={12} color={Colors.PrimaryColor} />{' '}
                Days
              </Text>
        </View>
        <FlatList
          data={staticData.prescription}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.prescriptionItem}>
              <Text style={styles.prescriptionText}>
                {/* <Icon
                  name="medkit-outline"
                  size={12}
                  color={Colors.PrimaryColor}
                />{' '} */}
                {item.medName}
              </Text>
              <Text style={styles.prescriptionText}>
                {/* <Icon
                  name="time-outline"
                  size={12}
                  color={Colors.PrimaryColor}
                />{' '} */}
                {item.times}
              </Text>
              <Text style={styles.prescriptionText}>
                {/* <Icon name="calendar-outline" size={12} color={Colors.PrimaryColor} />{' '} */}
                {item.days}
              </Text>
            </View>
          )}
        />
      </View>
      <Text style={styles.sectionTitle}>
        <Icon name="list-outline" size={14} color={Colors.PrimaryColor} />{' '}
        Related Tests
      </Text>
      <View style={styles.card}>
      <View style={styles.prescriptionItem}>
      <Text style={[styles.prescriptionText,{fontWeight:'bold',width:"35%"}]}>
                <Icon
                  name="medkit-outline"
                  size={12}
                  color={Colors.PrimaryColor}
                />{' '}
                Name
              </Text>
              <Text style={[styles.prescriptionText,{fontWeight:'bold',width:"35%"}]}>
                <Icon
                  name="time-outline"
                  size={12}
                  color={Colors.PrimaryColor}
                />{' '}
                Status
              </Text>
              <Text style={[styles.prescriptionText,{fontWeight:'bold',width:"10%"}]}>
                <Icon name="calendar-outline" size={12} color={Colors.PrimaryColor} />{' '}
                DL
              </Text>
        </View>
        <FlatList
          data={staticData.prescription}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.prescriptionItem}>
                  <Text style={[styles.prescriptionText,{fontWeight:'bold',width:"35%"}]}>
                
                RFT
              </Text>
              <Text style={[styles.prescriptionText,{fontWeight:'bold',width:"35%",color:Colors.deposit}]}>
             
                pending
              </Text>
              <Text style={[styles.prescriptionText,{fontWeight:'bold',width:"10%"}]}>
                <Entypo name="download" size={15} color={Colors.PrimaryColor} />{' '}
              </Text>
            </View>
          )}
        />
      </View>
      </ScrollView>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:Colors.BgColor,
    padding: 10,
  },
  card: {
    backgroundColor: Colors.Dark,
    borderRadius: 10,
    width:WindowWidth/1.05,
    padding: 15,
    marginBottom: 10,
    shadowColor: 'rgba(0,0,0,0.3)',
    elevation: 2,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.FontColorI,
    marginBottom: 5,
  },
  detail: {
    fontSize: 13,
    color: Colors.FontColorII,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.FontColorI,
    alignSelf:'flex-start',
    marginLeft:10,
    marginVertical: 5,
  },
  doctorCard: {
    flexDirection: 'row',
    backgroundColor: Colors.Dark,
    width:WindowWidth/1.05,

    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    shadowColor: 'rgba(0,0,0,0.3)',
    elevation: 2,
    marginBottom: 10,
  },
  doctorImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  doctorName: {
    fontSize: 13,
    fontWeight: 'bold',
    color: Colors.FontColorI,
  },
  doctorSpeciality: {
    fontSize: 12,
    color: Colors.FontColorII,
  },
  expandableCard: {
    backgroundColor: Colors.Dark,
    borderRadius: 10,
    width:WindowWidth/1.05,

    padding: 15,
    shadowColor: 'rgba(0,0,0,0.3)',
    elevation: 2,
    marginBottom: 10,
  },
  notesText: {
    fontSize: 13,
    color: Colors.FontColorII,
  },
  expandText: {
    fontSize: 12,
    color: Colors.PrimaryColor,
    marginTop: 5,
    alignSelf: 'flex-end',
  },
  prescriptionItem: {width:WindowWidth/1.15,justifyContent:'space-evenly',alignItems:'center',flexDirection:'row',alignSelf:'center',borderBottomWidth:0.2,borderColor:Colors.placeHolder,paddingVertical:10},
  prescriptionText: {
    fontSize: 13,
    width:"30%",
    // backgroundColor:"red",
    marginVertical:5,
    color: Colors.FontColorII,
  },
});

export default CheckupDetails;
