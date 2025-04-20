import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
import MaskedView from '@react-native-masked-view/masked-view';
import { useNavigation } from '@react-navigation/native';

const SplashScreen: React.FC = () => {
  const navigation = useNavigation(); // Get navigation instance

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Auth'); // Navigate to AuthScreen after 1 second
    }, 1000);

    return () => clearTimeout(timer); // Cleanup timer
  }, [navigation]);

  return (
    <LinearGradient colors={['#0f2027', '#203a43', '#2c5364']} style={styles.container}>
      <BlurView intensity={70} tint="dark" style={styles.blurContainer}>
        <MaskedView maskElement={<Text style={[styles.title, { backgroundColor: 'transparent' }]}>Memora</Text>}>
          <LinearGradient colors={['#ff78b3', '#00eaff']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}>
            <Text style={[styles.title, { opacity: 0 }]}>Memora</Text>
          </LinearGradient>
        </MaskedView>
        <Text style={styles.subtitle}>Memory + Wellness Companion</Text>
      </BlurView>
    </LinearGradient>
  );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', borderRadius: 20 },
  blurContainer: {
    padding: 30,
    borderRadius: 20,
    width: width * 0.85,
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  title: { fontSize: 48, fontWeight: 'bold', textAlign: 'center', textShadowColor: 'rgba(0, 234, 255, 0.6)', textShadowRadius: 10 },
  subtitle: { fontSize: 18, color: '#f1f1f1', opacity: 0.8, marginBottom: 20 },
});

export default SplashScreen;
