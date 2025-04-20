import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ActivityIndicator,
} from 'react-native';
import Voice from 'react-native-voice';

export default function IceBlueVoiceAssistant() {
  const [isListening, setIsListening] = useState<boolean>(false);
  const [speechResult, setSpeechResult] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  // Start listening
  const startListening = async () => {
    try {
      setIsListening(true);
      setIsProcessing(true);
      await Voice.start('en-US');
    } catch (error) {
      console.error('Voice start error:', error);
      setIsProcessing(false);
    }
  };

  // Stop listening
  const stopListening = async () => {
    try {
      setIsListening(false);
      await Voice.stop();
      setIsProcessing(false);
    } catch (error) {
      console.error('Voice stop error:', error);
    }
  };

  // Handle speech errors
  const onSpeechError = (error: any) => {
    setIsProcessing(false);
    Alert.alert('Oops!', `Speech recognition failed: ${error.error?.message || 'Unknown error'}`);
  };

  // Handle speech results
  const onSpeechResults = (event: any) => {
    setIsProcessing(false);
    if (event.value && event.value.length > 0) {
      setSpeechResult(event.value[0]);
    }
  };

  // Cleanup listeners
  useEffect(() => {
    Voice.onSpeechResults = onSpeechResults;
    Voice.onSpeechError = onSpeechError;

    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Voice Assistant 🎤</Text>

      {/* Recognized Speech Display */}
      <Text style={styles.result}>
        {speechResult ? `You said: ${speechResult}` : 'Tap to start speaking'}
      </Text>

      {/* Loading Indicator */}
      {isProcessing && (
        <ActivityIndicator size="large" color="#3b82f6" style={styles.spinner} />
      )}

      <View style={styles.buttons}>
        {/* Listen Button */}
        <TouchableOpacity
          style={[
            styles.button,
            { backgroundColor: isListening ? '#60a5fa' : '#3b82f6' },
          ]}
          onPress={isListening ? stopListening : startListening}
          disabled={isProcessing}
        >
          <Text style={styles.buttonText}>
            {isListening ? 'Stop' : isProcessing ? 'Listening...' : 'Start Listening'}
          </Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.status}>
        {isListening ? 'Listening...' : 'Press to activate'}
      </Text>
    </View>
  );
}

// Ice Blue Themed Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e3a8a', // Deep ice blue
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#60a5fa', // Ice blue accent
    marginBottom: 30,
  },
  result: {
    fontSize: 18,
    color: '#dbeafe', // Light blue for readability
    marginBottom: 30,
    textAlign: 'center',
    fontStyle: 'italic',
    paddingHorizontal: 20,
  },
  spinner: {
    marginBottom: 30,
  },
  buttons: {
    flexDirection: 'row',
    gap: 20,
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  status: {
    marginTop: 30,
    color: '#cbd5e1',
    fontStyle: 'italic',
    textAlign: 'center',
  },
});
