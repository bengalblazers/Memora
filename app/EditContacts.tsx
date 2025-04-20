import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const EditContacts: React.FC = () => {
  const navigation = useNavigation();
  const [daughter, setDaughter] = useState('Priya Verma – 9876543210');
  const [doctor, setDoctor] = useState('Dr. Saha – 9123456789');
  const [caretaker, setCaretaker] = useState('Manoj – 9988776655');

  const handleSave = () => {
    console.log('Saved Contacts:', { daughter, doctor, caretaker });
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit Contacts</Text>

      <TextInput
        style={styles.input}
        value={daughter}
        onChangeText={setDaughter}
        placeholder="Daughter's Contact"
      />
      <TextInput
        style={styles.input}
        value={doctor}
        onChangeText={setDoctor}
        placeholder="Doctor's Contact"
      />
      <TextInput
        style={styles.input}
        value={caretaker}
        onChangeText={setCaretaker}
        placeholder="Caretaker's Contact"
      />

      <TouchableOpacity style={styles.saveBtn} onPress={handleSave}>
        <Text style={styles.saveText}>Save Contacts</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dbeeff',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#003366',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 16,
    marginBottom: 15,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  saveBtn: {
    backgroundColor: '#3366FF',
    paddingVertical: 14,
    borderRadius: 12,
    marginTop: 10,
  },
  saveText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default EditContacts;
