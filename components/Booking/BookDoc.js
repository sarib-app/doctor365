import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ScrollView,
} from 'react-native';

const { width } = Dimensions.get('window');
import Header from '../../Global/components/Header';
import GlobalStyles from '../../Global/Branding/GlobalStyles';
import Colors from '../../Global/Branding/colors';
import clinicData from '../../Global/Data/Clinics.json';
import BookStyles from './Book_styles';
import InputTitle from '../../Global/components/InputTitle';
import InputField from '../../Global/components/InputField';
import SlotsSection from './SlotPicker';
const TakeAppointmentScreen = () => {
  const [clinic, setClinic] = useState('');
  const [selectedClinic, setSelectedClinic] = useState(null);
  const [specialty, setSpecialty] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState(null);
  const [doctor, setDoctor] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [slots, setSlots] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [selSpec,setSelSPec]=useState("")
  const [selDoc,setSelDoc]=useState("")


  const handleSlotSelection = (slot) => setSelectedSlot(slot);

  // Mock specialties and doctors data
  const specialties = [
    { id: 1, name: 'Gynecologist', doctors: 3 },
    { id: 2, name: 'Orthopedic', doctors: 5 },
    { id: 3, name: 'Dermatologist', doctors: 2 },
  ];

  const doctors = [
    { id: 1, name: 'Dr. Sarah', specialty: 'Gynecologist', slots: 5 },
    { id: 2, name: 'Dr. Jason', specialty: 'Orthopedic', slots: 8 },
    { id: 3, name: 'Dr. Michael', specialty: 'Dermatologist', slots: 4 },
  ];

  const timeSlots = [
    '10:00 - 10:30 AM',
    '11:00 - 11:30 AM',
    '2:00 - 2:30 PM',
    '3:00 - 3:30 PM',
  ];

  return (
    <View style={GlobalStyles.Container}>
      {/* Header */}
      <Header name="Book Now" TxtColor={Colors.Dark} color={Colors.PrimaryColor} />

      {/* Select Clinic */}
      <InputTitle value="Select Clinic" style={{marginTop:10}} />
      <InputField
        placeholder="Start typing clinic name..."
        value={clinic}
        onChangeText={setClinic}
      />
      <View>
        
      </View>
      <View
      style={{minHeight:width/4,maxHeight:200}}
      >

      {clinic.length > 0 && (
        <FlatList
          data={clinicData.clinics.filter((item) =>
            item.name.toLowerCase().includes(clinic.toLowerCase())
          )}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={BookStyles.suggestionCard}
              onPress={() => {
                setSelectedClinic(item);
                setClinic(item.name);
              }}
            >
              <Text style={BookStyles.suggestionTitle}>{item.name}</Text>
              <Text style={BookStyles.suggestionSubtitle}>{item.distance} miles away</Text>
            </TouchableOpacity>
          )}
        />
      )}
      </View>

      {/* Select Specialty */}
      <View 
      style={{width:width/1,height:width/4}}
      >

      {selectedClinic && (
        <>
          <InputTitle value="Select Specialty" />
          <FlatList
            data={specialties}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={[
                  BookStyles.card,
                  selSpec === item.id && { borderColor: Colors.PrimaryColor,borderWidth:1},
                ]}
                onPress={() => {
                    setSelSPec(item.id)
                    setSelectedSpecialty(item)}}
              >
                <Text style={BookStyles.cardText}>{item.name}</Text>
                <Text style={BookStyles.cardSubtext}>{item.doctors} doctors available</Text>
              </TouchableOpacity>
            )}
          />
        </>
      )}
      </View>

      {/* Select Doctor */}
      <View 
      style={{width:width/1,height:width/4}}
      >
      {selectedSpecialty && (
        <>
          <InputTitle value="Select Doctor" />
          <FlatList
            data={doctors.filter((doc) => doc.specialty === selectedSpecialty.name)}
            horizontal
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={[
                  BookStyles.card,
                  selDoc === item.id && { borderColor: Colors.PrimaryColor,borderWidth:1 },
                ]}
                onPress={() => {
                    setSelDoc(item.id)
                    setSelectedDoctor(item)}}
              >
                <Text style={BookStyles.cardText}>{item.name}</Text>
                <Text style={BookStyles.cardSubtext}>
                  {item.slots} slots available
                </Text>
              </TouchableOpacity>
            )}
          />
        </>
      )}
      </View>

      {/* Select Slot */}
      {selectedDoctor && (
        <>
          <InputTitle value="Pick a Slot" />
          {/* <View 
      style={{width:width/1,height:width/4}}
      >
          <FlatList
            data={timeSlots}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={[
                  BookStyles.slot,
                  selectedSlot === item && { backgroundColor: Colors.PrimaryColor },
                ]}
                onPress={() => handleSlotSelection(item)}
              >
                <Text
                  style={[
                    BookStyles.slotText,
                    selectedSlot === item && { color: Colors.White },
                  ]}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            )}
          />
          </View> */}

<SlotsSection/>
        </>
      )}

      {/* Book Button */}
      {selectedSlot && (
        <TouchableOpacity
          style={BookStyles.bookButton}
          onPress={() => alert('Appointment Booked!')}
        >
          <Text style={BookStyles.bookButtonText}>Book Appointment</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default TakeAppointmentScreen;
