// components/MemoryDiary.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';

const MemoryDiary: React.FC = () => {
  const [entries, setEntries] = useState<{ date: string; text: string }[]>([]);
  const [currentEntry, setCurrentEntry] = useState('');

  const saveEntry = () => {
    if (!currentEntry.trim()) return;

    const newEntry = {
      date: new Date().toLocaleString(),
      text: currentEntry.trim(),
    };
    setEntries([newEntry, ...entries]);
    setCurrentEntry('');
  };

  return (
    <View style={{ flex: 1, padding: 16, backgroundColor: '#FDFCFB' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 12 }}>📝 Memory Diary</Text>

      <TextInput
        placeholder="Write your thoughts, feelings, or moments here..."
        value={currentEntry}
        onChangeText={setCurrentEntry}
        multiline
        style={{
          height: 120,
          borderColor: '#ccc',
          borderWidth: 1,
          borderRadius: 8,
          padding: 10,
          backgroundColor: '#fff',
          textAlignVertical: 'top',
        }}
      />

      <TouchableOpacity
        onPress={saveEntry}
        style={{
          backgroundColor: '#4B7BEC',
          marginTop: 10,
          paddingVertical: 12,
          borderRadius: 8,
          alignItems: 'center',
        }}
      >
        <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 16 }}>Save Entry</Text>
      </TouchableOpacity>

      <ScrollView style={{ marginTop: 20 }}>
        {entries.length === 0 ? (
          <Text style={{ textAlign: 'center', color: '#888' }}>No diary entries yet.</Text>
        ) : (
          entries.map((entry, index) => (
            <Card key={index} style={{ marginBottom: 12 }}>
              <Card.Title title={entry.date} left={() => <Ionicons name="calendar" size={24} color="#4B7BEC" />} />
              <Card.Content>
                <Text style={{ fontSize: 16 }}>{entry.text}</Text>
              </Card.Content>
            </Card>
          ))
        )}
      </ScrollView>
    </View>
  );
};

export default MemoryDiary;
