import React, { useEffect } from 'react';
import { Linking, Alert } from 'react-native';

export default function VoiceAssistant() {
  useEffect(() => {
    const url = 'http://192.168.137.1:5000/';
    Linking.canOpenURL(url)
      .then((supported) => {
        if (supported) {
          Linking.openURL(url);
        } else {
          Alert.alert('Error', `Don't know how to open this URL: ${url}`);
        }
      })
      .catch((err) => console.error('An error occurred', err));
  }, []);

  return null;
}
