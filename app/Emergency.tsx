import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, Linking } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const Emergency: React.FC = () => {
  const emergencyNumber = '112'; // Replace with actual emergency or caregiver number

  const handleEmergencyPress = () => {
    Alert.alert(
      "Emergency Alert",
      `Do you want to call ${emergencyNumber} now?`,
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Call Now",
          onPress: () => {
            Linking.openURL(`tel:${emergencyNumber}`);
          }
        }
      ]
    );
  };

  return (
    <View style={styles.container}>
      <FontAwesome5 name="medkit" size={60} color="#003366" />
      <Text style={styles.title}>Emergency Assistance</Text>
      <Text style={styles.description}>
        Tap below to call your emergency contact immediately.
      </Text>

      <TouchableOpacity style={styles.button} onPress={handleEmergencyPress}>
        <Text style={styles.buttonText}>Call Emergency Number</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dbeeff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginVertical: 20,
    color: '#003366',
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#003366aa',
    textAlign: 'center',
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#3366FF',
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 12,
    elevation: 4,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default Emergency;
