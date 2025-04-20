import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { Ionicons, FontAwesome5, MaterialIcons, Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Dashboard: React.FC = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.wrapper}>
        <ScrollView contentContainerStyle={styles.container}>
          <Text style={styles.welcome}>Welcome back</Text>
          <Text style={styles.welcome}>Mr. Sayan Dutta!</Text>

          <TouchableOpacity style={styles.reminderCard} onPress={() => navigation.navigate('UpcomingReminder')}>
            <Ionicons name="notifications-outline" size={24} color="#3366FF" />
            <View>
              <Text style={styles.reminderTitle}>Upcoming Reminder</Text>
              <Text style={styles.reminderText}>Doctor’s appointment</Text>
            </View>
          </TouchableOpacity>

          <View style={styles.grid}>
            <TouchableOpacity style={styles.tile} onPress={() => navigation.navigate('MemoryDiary')}>
              <FontAwesome5 name="book" size={48} color="#3366FF" />
              <Text style={styles.tileText}>Memory Diary</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.tile} onPress={() => navigation.navigate('AIChatbot')}>
              <Ionicons name="chatbubbles" size={48} color="#3366FF" />
              <Text style={styles.tileText}>AI Chatbot</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.tile} onPress={() => navigation.navigate('VoiceAssistant')}>
              <MaterialIcons name="keyboard-voice" size={48} color="#3366FF" />
              <Text style={styles.tileText}>Voice Assistant</Text>
            </TouchableOpacity>
            
          </View>
          
        </ScrollView>

        {/* ✅ Fixed Bottom Navigation */}
        <View style={styles.bottomNav}>
          <TouchableOpacity style={styles.bottomBtn} onPress={() => navigation.navigate('Dashboard')}>
            <Entypo name="home" size={22} color="#3366FF" />
            <Text style={styles.bottomText}>Home</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.bottomBtn} onPress={() => navigation.navigate('Emergency')}>
            <FontAwesome5 name="medkit" size={22} color="#3366FF" />
            <Text style={styles.bottomText}>Emergency</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.bottomBtn} onPress={() => navigation.navigate('Profile')}>
            <Ionicons name="person" size={22} color="#3366FF" />
            <Text style={styles.bottomText}>Profile</Text>
          </TouchableOpacity>
        </View>
        
      </View>
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#dbeeff',
  },
  wrapper: {
    flex: 1,
    justifyContent: 'space-between',
  },
  container: {
    alignItems: 'center',
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  welcome: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 20,
    color: '#003366',
  },
  reminderCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e3f2fd',
    padding: 20,
    borderRadius: 20,
    width: '100%',
    marginBottom: 25,
    gap: 12,
    elevation: 3,
  },
  reminderTitle: {
    fontWeight: 'bold',
    fontSize: 26,
    color: '#003366',
  },
  reminderText: {
    color: '#555',
    fontSize: 16,
  },
  grid: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 30,
    gap: 10,
  },
  tile: {
    backgroundColor: '#f0f7ff',
    width: '30%',
    aspectRatio: 1,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    elevation: 2,
    marginBottom: 40,
    gap: 14,
  },
  tileText: {
    marginTop: 8,
    textAlign: 'center',
    color: '#003366',
    fontSize: 14,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#e6f0ff',
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 6,
  },
  bottomBtn: {
    alignItems: 'center',
  },
  bottomText: {
    fontSize: 14,
    marginTop: 6,
    color: '#003366',
  },
});

export default Dashboard;
