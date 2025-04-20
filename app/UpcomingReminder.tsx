import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    FlatList,
    StyleSheet,
    Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface Reminder {
    id: string;
    title: string;
    time: string;
    description?: string;
    done: boolean;
}

export default function UpcomingReminder() {
    const [reminders, setReminders] = useState<Reminder[]>([]);
    const [title, setTitle] = useState('');
    const [time, setTime] = useState('');
    const [description, setDescription] = useState('');
    const [isAdding, setIsAdding] = useState(false);

    // Fetch reminders from local storage
    const fetchReminders = async () => {
        try {
            const storedReminders = await AsyncStorage.getItem('reminders');
            if (storedReminders) {
                setReminders(JSON.parse(storedReminders));
            }
        } catch (error) {
            console.error('Error fetching reminders from storage:', error);
        }
    };

    // Save reminders to local storage
    const saveReminders = async (reminders: Reminder[]) => {
        try {
            await AsyncStorage.setItem('reminders', JSON.stringify(reminders));
        } catch (error) {
            console.error('Error saving reminders to storage:', error);
        }
    };

    // Add new reminder
    const addReminder = async () => {
        if (!title || !time) {
            Alert.alert('Error', 'Please provide both title and time');
            return;
        }

        const newReminder: Reminder = {
            id: Math.random().toString(),
            title,
            time,
            description,
            done: false,
        };

        const updatedReminders = [...reminders, newReminder];
        setReminders(updatedReminders);
        await saveReminders(updatedReminders);
        setTitle('');
        setTime('');
        setDescription('');
        setIsAdding(false);
    };

    // Toggle reminder done status
    const toggleDone = async (id: string) => {
        const updatedReminders = reminders.map((reminder) =>
            reminder.id === id ? { ...reminder, done: !reminder.done } : reminder
        );
        setReminders(updatedReminders);
        await saveReminders(updatedReminders);
    };

    // Render reminder item
    const renderReminder = ({ item }: { item: Reminder }) => (
        <View style={[styles.card, item.done && styles.doneCard]}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.time}>{item.time}</Text>
            {item.description && <Text style={styles.description}>{item.description}</Text>}
            <TouchableOpacity
                style={styles.doneButton}
                onPress={() => toggleDone(item.id)}
            >
                <Text style={styles.doneButtonText}>{item.done ? 'Undo' : 'Done'}</Text>
            </TouchableOpacity>
        </View>
    );

    useEffect(() => {
        fetchReminders();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.header}>🕒 Upcoming Reminders</Text>

            {/* Reminder Input Form */}
            {!isAdding ? (
                <TouchableOpacity style={styles.addButton} onPress={() => setIsAdding(true)}>
                    <Text style={styles.addButtonText}>+ Add Reminder</Text>
                </TouchableOpacity>
            ) : (
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Title"
                        value={title}
                        onChangeText={setTitle}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Time (e.g., 8:00 AM)"
                        value={time}
                        onChangeText={setTime}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Description (optional)"
                        value={description}
                        onChangeText={setDescription}
                    />
                    <TouchableOpacity style={styles.saveButton} onPress={addReminder}>
                        <Text style={styles.saveButtonText}>Save Reminder</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.saveButton, { backgroundColor: '#ef4444' }]}
                        onPress={() => setIsAdding(false)}
                    >
                        <Text style={styles.saveButtonText}>Cancel</Text>
                    </TouchableOpacity>
                </View>
            )}

            {/* Reminder List */}
            <FlatList
                data={reminders}
                renderItem={renderReminder}
                keyExtractor={(item) => item.id}
                contentContainerStyle={{ paddingBottom: 20 }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#dbeeff',
        paddingHorizontal: 16,
        paddingTop: 30,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#60a5fa',
        marginBottom: 16,
        textAlign: 'center',
    },
    addButton: {
        backgroundColor: '#3b82f6',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 30,
        alignSelf: 'center',
    },
    addButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    inputContainer: {
        backgroundColor: '#e3f2fd',
        padding: 16,
        borderRadius: 12,
        marginBottom: 16,
    },
    input: {
        backgroundColor: '#2b2d3b',
        color: '#fff',
        borderRadius: 8,
        padding: 10,
        marginBottom: 12,
        fontSize: 16,
    },
    saveButton: {
        backgroundColor: '#60a5fa',
        paddingVertical: 12,
        borderRadius: 25,
        alignItems: 'center',
        marginVertical: 5,
    },
    saveButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    card: {
        backgroundColor: '#1e40af',
        borderRadius: 16,
        padding: 16,
        marginBottom: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 6,
        elevation: 3,
    },
    doneCard: {
        backgroundColor: '#60a5fa',
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
        color: '#dbeafe',
    },
    time: {
        fontSize: 16,
        color: '#93c5fd',
        marginTop: 4,
    },
    description: {
        fontSize: 14,
        color: '#cbd5e1',
        marginTop: 8,
        fontStyle: 'italic',
    },
    doneButton: {
        backgroundColor: '#3b82f6',
        borderRadius: 20,
        paddingVertical: 8,
        paddingHorizontal: 16,
        marginTop: 12,
    },
    doneButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});
