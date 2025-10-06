import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const emergencyCases = [
  { id: '1', type: 'Cardiac Arrest', status: 'Critical', color: '#D32F2F', time: '09:40 AM' },
  { id: '2', type: 'Severe Trauma', status: 'Critical', color: '#D32F2F', time: '09:55 AM' },
  { id: '3', type: 'Stroke', status: 'High', color: '#FF7043', time: '10:10 AM' },
  { id: '4', type: 'Respiratory Failure', status: 'High', color: '#FF7043', time: '10:25 AM' },
];

export default function EmergencyCasesScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="alert-circle-outline" size={36} color="#D32F2F" />
        <Text style={styles.title}>Emergency Cases</Text>
        <Text style={styles.subtitle}>Handle urgent and critical cases immediately.</Text>
      </View>
      <FlatList
        data={emergencyCases}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.card, { borderLeftColor: item.color }]}
            onPress={() => router.push({ pathname: '/patientdetails', params: { id: item.id } })}
          >
            <View style={styles.iconCircle}>
              <Ionicons name="warning-outline" size={24} color={item.color} />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.caseType}>{item.type}</Text>
              <Text style={[styles.status, { color: item.color }]}>{item.status} Status</Text>
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
  title: { fontSize: 22, fontWeight: 'bold', color: '#D32F2F', marginBottom: 4 },
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
  caseType: {
    fontSize: 17,
    fontWeight: '600',
    color: '#222',
    marginBottom: 2,
  },
  status: {
    fontSize: 15,
    fontWeight: '500',
    marginBottom: 2,
  },
    time: {
      fontSize: 14,
      color: '#888',
    },
  });