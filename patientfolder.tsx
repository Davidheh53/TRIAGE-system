import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const records = [
  { id: '1', name: 'John Smith', record: 'Blood Test', date: '2024-07-01' },
  { id: '2', name: 'Mary Johnson', record: 'X-Ray', date: '2024-07-02' },
  { id: '3', name: 'Alex Lee', record: 'MRI Scan', date: '2024-07-03' },
  { id: '4', name: 'Sarah Brown', record: 'ECG', date: '2024-07-04' },
];

export default function PatientFolderScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="folder-outline" size={36} color="#29B6F6" />
        <Text style={styles.title}>Patient Records</Text>
        <Text style={styles.subtitle}>View and manage patient medical records.</Text>
      </View>
      <FlatList
        data={records}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => router.push({ pathname: '/patientdetails', params: { id: item.id } })}
          >
            <View style={styles.iconCircle}>
              <Ionicons name="person-outline" size={24} color="#29B6F6" />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.record}>{item.record}</Text>
              <Text style={styles.date}>{item.date}</Text>
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
  title: { fontSize: 22, fontWeight: 'bold', color: '#29B6F6', marginBottom: 4 },
  subtitle: { fontSize: 15, color: '#555', marginBottom: 8, textAlign: 'center' },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  iconCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#e3f3fb',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  name: { fontSize: 17, fontWeight: '500', color: '#222' },
  record: { fontSize: 15, color: '#29B6F6', marginTop: 2 },
    date: { fontSize: 13, color: '#888', marginTop: 2 },
  });