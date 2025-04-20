import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Phone, CheckCircle, Moon, MessageCircle } from 'lucide-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const Profile: React.FC = () => {
    const navigation = useNavigation();

const handleLogout = async () => {
  try {
    // Clear stored tokens or user data
    await AsyncStorage.clear();

    // Navigate to Login or Welcome screen
    navigation.reset({
      index: 0,
      routes: [{ name: 'Auth' }], // replace 'Login' with your actual screen name
    });
  } catch (error) {
    console.error('Logout failed:', error);
  }
};

  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <View style={styles.center}>
          <Image
            source={{ uri: 'https://via.placeholder.com/150' }}
            style={styles.profileImage}
          />
          <Text style={styles.name}>Mr. Sayan Dutta</Text>
          <Text style={styles.subtext}>Age 21 • Kolkata, India</Text>
          <Text style={styles.status}>🟢 Active</Text>

          <TouchableOpacity
            style={styles.primaryBtn}
            onPress={() => navigation.navigate('EditProfile')}
            >
            <Text style={styles.primaryBtnText}>Edit Profile</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Family & Emergency Contacts</Text>
          <View style={styles.contactItem}>
            <Phone size={18} color="#003366" />
            <Text style={styles.contactText}>Daughter: Priya Verma – 9876543210</Text>
          </View>
          <View style={styles.contactItem}>
            <Phone size={18} color="#003366" />
            <Text style={styles.contactText}>Doctor: Dr. Saha – 9123456789</Text>
          </View>
          <View style={styles.contactItem}>
            <Phone size={18} color="#003366" />
            <Text style={styles.contactText}>Caretaker: Manoj – 9988776655</Text>
          </View>

          <TouchableOpacity
            style={styles.secondaryBtn}
            onPress={() => navigation.navigate('EditContacts')}
            >
            <Text style={styles.secondaryBtnText}>Edit Contacts</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Settings & Preferences</Text>
          <View style={styles.settingItem}>
            <CheckCircle size={18} color="green" />
            <Text style={styles.settingText}>Voice Mode: <Text style={{ fontWeight: '600' }}>ON</Text></Text>
          </View>
          <View style={styles.settingItem}>
            <Moon size={18} color="purple" />
            <Text style={styles.settingText}>Theme: High Contrast</Text>
          </View>
          <View style={styles.settingItem}>
            <MessageCircle size={18} color="#3366FF" />
            <Text style={styles.settingText}>Language: English</Text>
          </View>

          <TouchableOpacity style={styles.secondaryBtn}>
            <Text style={styles.secondaryBtnText}>Change Settings</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.logoutBtn} onPress={handleLogout}>
        <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>

      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dbeeff',
  },
  card: {
    backgroundColor: '#fff',
    margin: 20,
    padding: 20,
    borderRadius: 20,
    elevation: 5,
  },
  center: {
    alignItems: 'center',
    marginBottom: 25,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
    borderWidth: 4,
    borderColor: '#ccc',
  },
  name: {
    fontSize: 22,
    fontWeight: '700',
    color: '#003366',
  },
  subtext: {
    fontSize: 14,
    color: '#555',
  },
  status: {
    marginTop: 4,
    fontSize: 14,
    color: 'green',
  },
  section: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#003366',
    marginBottom: 10,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
    gap: 6,
  },
  contactText: {
    fontSize: 14,
    color: '#333',
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
    gap: 6,
  },
  settingText: {
    fontSize: 14,
    color: '#333',
  },
  primaryBtn: {
    backgroundColor: '#3366FF',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 12,
    marginTop: 15,
  },
  primaryBtnText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  secondaryBtn: {
    borderColor: '#ccc',
    borderWidth: 1,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  secondaryBtnText: {
    textAlign: 'center',
    color: '#333',
    fontSize: 15,
  },
  logoutBtn: {
    backgroundColor: '#FF4C4C',
    paddingVertical: 14,
    borderRadius: 14,
    marginTop: 20,
  },
  logoutText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 16,
  },
});

export default Profile;
