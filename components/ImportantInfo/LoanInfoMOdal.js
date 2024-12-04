import React from 'react';
import { View, Text, StyleSheet, Modal, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useState } from 'react';

const LoanInfoModal = ({ visible, onClose }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Icon name="close" size={30} color="#000" />
          </TouchableOpacity>
          <ScrollView contentContainerStyle={styles.scrollViewContent}>
            <Text style={styles.modalTitle}>Loan Information</Text>
            <View style={styles.infoItem}>
              <Icon name="access-time" size={24} color="#4CAF50" />
              <View style={styles.infoText}>
                <Text style={styles.infoHeading}>Minimum and Maximum Period for Repayment</Text>
                <Text style={styles.infoDetail}>• Minimum Period: 7 days</Text>
                <Text style={styles.infoDetail}>• Maximum Period: 3 Month</Text>
              </View>
            </View>
            <View style={styles.infoItem}>
              <Icon name="percent" size={24} color="#4CAF50" />
              <View style={styles.infoText}>
                <Text style={styles.infoHeading}>Maximum Annual Percentage Rate (APR)</Text>
                <Text style={styles.infoDetail}>
                  • Maximum APR: This can vary widely depending on your credit score and other factors. It generally ranges from around 12%
                </Text>
              </View>
            </View>
            <View style={styles.infoItem}>
              <Icon name="info" size={24} color="#4CAF50" />
              <View style={styles.infoText}>
                <Text style={styles.infoHeading}>Common Requirements for Personal Loan Apps</Text>
                <Text style={styles.infoDetail}>1. Credit Score: A good credit score improves your chances of approval and securing a lower APR.</Text>
                <Text style={styles.infoDetail}>2. Proof of Income: To ensure you have the ability to repay the loan.</Text>
                <Text style={styles.infoDetail}>3. Identification: Valid government-issued ID (e.g., Adhar Card, Pan Card).</Text>
                <Text style={styles.infoDetail}>4. Bank Account: An active bank account for depositing the loan funds and for making repayments.</Text>
                <Text style={styles.infoDetail}>5. Employment Information: Details about your current employment status.</Text>
                <Text style={styles.infoDetail}>6. Personal Information: Address, phone number, email.</Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  closeButton: {
    alignSelf: 'flex-end',
  },
  scrollViewContent: {
    paddingBottom: 20,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  infoText: {
    marginLeft: 10,
    flex: 1,
  },
  infoHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  infoDetail: {
    fontSize: 16,
  },
});

export default LoanInfoModal;
