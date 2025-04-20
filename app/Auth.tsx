import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import * as Yup from 'yup';

const AuthScreen: React.FC = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation<any>(); // ← fix TS error for replace/navigate

  useEffect(() => {
    const checkLogin = async () => {
      const savedEmail = await AsyncStorage.getItem('EMAIL');
      if (savedEmail) {
        navigation.replace('Dashboard');
      } else {
        setLoading(false);
      }
    };
    checkLogin();
  }, []);

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().min(6, 'Min 6 characters').required('Password is required'),
  });

  const handleAuth = async (values: { email: string; password: string }) => {
    if (isSignup) {
      alert('Sign-up is not implemented yet');
    } else {
      if (values.email === 'sd8698621@gmail.com' && values.password === '12345678') {
        await AsyncStorage.setItem('EMAIL', values.email);
        navigation.navigate('Dashboard');
      } else {
        alert('Invalid Credentials');
      }
    }
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#00eaff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{isSignup ? 'Sign Up' : 'Login'}</Text>

      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={handleAuth}
      >
        {({ handleChange, handleSubmit, values, errors }) => (
          <>
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#aaa"
              onChangeText={handleChange('email')}
              value={values.email}
              autoCapitalize="none"
            />
            {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#aaa"
              secureTextEntry
              onChangeText={handleChange('password')}
              value={values.password}
            />
            {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}

            <TouchableOpacity onPress={() => handleSubmit()} style={styles.buttonContainer}>
              <LinearGradient colors={['#ff78b3', '#00eaff']} style={styles.button}>
                <Text style={styles.buttonText}>{isSignup ? 'Sign Up' : 'Login'}</Text>
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setIsSignup(prev => !prev)}>
              <Text style={styles.switchText}>
                {isSignup ? 'Already have an account? Login' : "Don't have an account? Sign up"}
              </Text>
            </TouchableOpacity>
          </>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#0f2027'
  },
  loadingContainer: {
    flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#0f2027'
  },
  title: {
    fontSize: 32, color: '#fff', fontWeight: 'bold', marginBottom: 20
  },
  input: {
    width: 280, padding: 10, borderWidth: 1, borderColor: '#aaa',
    borderRadius: 8, marginBottom: 10, color: '#fff'
  },
  errorText: {
    color: 'red', fontSize: 12, marginBottom: 5
  },
  buttonContainer: {
    marginTop: 10
  },
  button: {
    paddingVertical: 12, paddingHorizontal: 30, borderRadius: 10
  },
  buttonText: {
    color: '#fff', fontSize: 18, fontWeight: 'bold', textAlign: 'center'
  },
  switchText: {
    marginTop: 15, color: '#00eaff', fontSize: 14
  }
});

export default AuthScreen;
