import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const queue = [
  { id: '1', name: 'John Smith', status: 'Waiting', color: '#FFA726', time: '09:30 AM' },
  { id: '2', name: 'Mary Johnson', status: 'In Progress', color: '#29B6F6', time: '09:45 AM' },
  { id: '3', name: 'Alex Lee', status: 'Waiting', color: '#FFA726', time: '10:00 AM' },
  { id: '4', name: 'Sarah Brown', status: 'Completed', color: '#66BB6A', time: '10:15 AM' },
];

export default function PatientQueueScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="list-outline" size={36} color="#4d148c" />
        <Text style={styles.title}>Patient Queue</Text>
        <Text style={styles.subtitle}>View and manage the current patient queue.</Text>
      </View>
      <FlatList
        data={queue}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.card, { borderLeftColor: item.color }]}
            onPress={() => router.push({ pathname: '/patientdetails', params: { id: item.id } })}
          >
            <View style={styles.iconCircle}>
              <Ionicons name="person-outline" size={24} color={item.color} />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={[styles.status, { color: item.color }]}>{item.status}</Text>
              <Text style={styles.time}>{item.time}</Text>
            </View>
            <Ionicons name="chevron-forward-outline" size={22} color="#B5B5B5" />
          </TouchableOpacity>
        )}
        contentContainerStyle={{ paddingBottom: 24 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f7f8fa', padding: 24 },
  header: { alignItems: 'center', marginBottom: 18 },
  title: { fontSize: 22, fontWeight: 'bold', color: '#4d148c', marginBottom: 4 },
  subtitle: { fontSize: 15, color: '#555', marginBottom: 8, textAlign: 'center' },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    borderLeftWidth: 6,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  iconCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  name: { fontSize: 16, fontWeight: 'bold', color: '#222' },
  status: { fontSize: 13, fontWeight: 'bold', marginTop: 4 },
  time: { fontSize: 13, color: '#888', marginTop: 2 },
});