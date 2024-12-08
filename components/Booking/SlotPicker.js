import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import Colors from '../../Global/Branding/colors';
import { WindowHeight, WindowWidth } from '../../Global/components/Dimensions';

const SlotsSection = () => {
  const [selectedMonth, setSelectedMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);

  const timeSlots = [
    '10:00 - 10:30 AM',
    '11:00 - 11:30 AM',
    '2:00 - 2:30 PM',
    '3:00 - 3:30 PM',
  ];

  // Generate week dates within the limits of the current month
  const generateWeekDates = (startDate) => {
    const month = startDate.getMonth();
    const weekDates = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);
      if (date.getMonth() === month) {
        weekDates.push(date);
      } else {
        break;
      }
    }
    return weekDates;
  };

  const [weekDates, setWeekDates] = useState([]);

  // Initialize weekDates on the first render
  useEffect(() => {
    const today = new Date();
    setWeekDates(generateWeekDates(today));
  }, []);

  // Change month and reset week dates
  const changeMonth = (direction) => {
    const newMonth = new Date(selectedMonth);
    newMonth.setMonth(selectedMonth.getMonth() + direction);
    setSelectedMonth(newMonth);

    // Set weekDates to the first week of the new month
    const firstDayOfMonth = new Date(newMonth.getFullYear(), newMonth.getMonth(), 1);
    setWeekDates(generateWeekDates(firstDayOfMonth));
  };

  // Change week and stay within the current month
  const changeWeek = (direction) => {
    const newStartDate = new Date(weekDates[0]);
    newStartDate.setDate(newStartDate.getDate() + 7 * direction);

    // Check if the new week is within the same month
    if (newStartDate.getMonth() === selectedMonth.getMonth()) {
      setWeekDates(generateWeekDates(newStartDate));
    }
  };

  return (
    <View style={styles.slotContainer}>
      {/* Month Navigation */}
      <View style={styles.monthContainer}>
        <TouchableOpacity onPress={() => changeMonth(-1)}>
          <Text style={styles.navText}>{'<'}</Text>
        </TouchableOpacity>
        <Text style={styles.monthText}>
          {selectedMonth.toLocaleString('default', { month: 'long' })} {selectedMonth.getFullYear()}
        </Text>
        <TouchableOpacity onPress={() => changeMonth(1)}>
          <Text style={styles.navText}>{'>'}</Text>
        </TouchableOpacity>
      </View>

      {/* Days Navigation */}
      <View>

      <FlatList
        data={weekDates}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.toDateString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.dayCard,
              selectedDate?.toDateString() === item.toDateString() ? {
                backgroundColor: Colors.PrimaryColor,
              }:{
                // backgroundColor:Colors.lightTxt
              }
            ]}
            onPress={() => setSelectedDate(item)}
          >
            
            <Text
              style={[
                styles.dayText,
                selectedDate?.toDateString() === item.toDateString() && { color: Colors.Dark },
              ]}
            >
              {item.toLocaleDateString('en-US', { weekday: 'short' })}
            </Text>
            <Text
              style={[
                styles.dateText,
                selectedDate?.toDateString() === item.toDateString() && { color: Colors.Dark },
              ]}
            >
              {item.getDate()}
            </Text>
          </TouchableOpacity>
        )}
      />
      </View>

      {/* Week Navigation */}
      <View style={styles.weekNavContainer}>
        <TouchableOpacity onPress={() => changeWeek(-1)} style={styles.weekNavButton}>
          <Text style={styles.weekNavText}>{'Prev'}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => changeWeek(1)} style={styles.weekNavButton}>
          <Text style={styles.weekNavText}>{'Next'}</Text>
        </TouchableOpacity>
      </View>

      {/* Time Slots */}
      <FlatList
        data={timeSlots}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.slot,
              selectedSlot === item && { backgroundColor: Colors.PrimaryColor },
            ]}
            onPress={() => setSelectedSlot(item)}
          >
            <Text
              style={[
                styles.slotText,
                selectedSlot === item && { color: Colors.Dark },
              ]}
            >
              {item}
            </Text>
          </TouchableOpacity>
        )}
      />

      {/* Final Selection */}
      {selectedSlot && (
        <TouchableOpacity
          style={styles.finalButton}
          onPress={() =>
            console.log({
              month: selectedMonth.toLocaleString('default', { month: 'long' }),
              date: selectedDate?.toDateString(),
              slot: selectedSlot,
            })
          }
        >
          <Text style={styles.finalButtonText}>Confirm</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  // Styles remain unchanged
  slotContainer: {
    marginVertical: 20,
    maxHeight: WindowHeight / 3,
    minHeight:WindowHeight/4,
    backgroundColor: Colors.Dark,
    width: WindowWidth / 1.05,
    padding: 10,
    borderRadius: 20,
    shadowColor: Colors.FontColorI,
    elevation: 4,
  },
  monthContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  monthText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.FontColorI,
  },
  navText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.PrimaryColor,
  },
  dayCard: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    height:50,
    marginHorizontal: 5,
    borderRadius: 10,
    // backgroundColor: Colors.BgColorII,
    borderWidth:1,
    borderColor:Colors.placeHolder,
    borderStyle:'dotted'
  },
  dayText: {
    fontSize: 14,
    color: Colors.FontColorI,
  },
  dateText: {
    fontSize: 12,
    color: Colors.FontColorI,
  },
  weekNavContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  weekNavButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: Colors.LightGray,
    borderRadius: 10,
  },
  weekNavText: {
    fontSize: 14,
    color: Colors.FontColorI,
  },
  slot: {
    padding: 10,
    paddingVertical: 5,
    borderWidth: 0.5,
    borderColor: Colors.placeHolder,
    borderRadius: 8,
    marginHorizontal: 5,
    height:30
  },
  slotText: {
    fontSize: 14,
    color: Colors.FontColorI,
  },
  finalButton: {
    marginTop: 20,
    backgroundColor: Colors.PrimaryColor,
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  finalButtonText: {
    fontSize: 16,
    color: Colors.Dark,
    fontWeight: 'bold',
  },
});

export default SlotsSection;
