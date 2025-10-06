import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// Example patient data (replace with real data from your backend)
const patient = {
  name: 'John Smith',
  age: 45,
  gender: 'Male',
  triageLevel: 'High',
  temperature: '38.2°C',
  bloodPressure: '140/90',
  heartRate: '110 bpm',
  respirationRate: '22',
  symptoms: 'Chest pain, shortness of breath',
  diagnosis: 'Suspected myocardial infarction',
  notes: 'Patient arrived via ambulance. Immediate ECG performed.',
  lastVisit: '2024-07-01',
  doctor: 'Dr. Mary Johnson',
};

const queue = [
  { id: '1', name: 'Jane Doe', triageLevel: 'Low', color: '#4CAF50' },
  { id: '2', name: 'Sam Wilson', triageLevel: 'High', color: '#F44336' },
  { id: '3', name: 'Emily Davis', triageLevel: 'Medium', color: '#FF9800' },
];

export default function PatientDetailsScreen() {
  const router = useRouter();
  useLocalSearchParams();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Ionicons name="person-circle-outline" size={48} color="#4d148c" />
        <Text style={styles.title}>{patient.name}</Text>
        <Text style={styles.subtitle}>Patient Details & Case Review</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Age:</Text>
        <Text style={styles.value}>{patient.age}</Text>
        <Text style={styles.label}>Gender:</Text>
        <Text style={styles.value}>{patient.gender}</Text>
        <Text style={styles.label}>Triage Level:</Text>
        <Text style={[styles.value, styles.triage]}>{patient.triageLevel}</Text>
        <Text style={styles.label}>Temperature:</Text>
        <Text style={styles.value}>{patient.temperature}</Text>
        <Text style={styles.label}>Blood Pressure:</Text>
        <Text style={styles.value}>{patient.bloodPressure}</Text>
        <Text style={styles.label}>Heart Rate:</Text>
        <Text style={styles.value}>{patient.heartRate}</Text>
        <Text style={styles.label}>Respiration Rate:</Text>
        <Text style={styles.value}>{patient.respirationRate}</Text>
        <Text style={styles.label}>Symptoms:</Text>
        <Text style={styles.value}>{patient.symptoms}</Text>
        <Text style={styles.label}>Diagnosis:</Text>
        <Text style={styles.value}>{patient.diagnosis}</Text>
        <Text style={styles.label}>Notes:</Text>
        <Text style={styles.value}>{patient.notes}</Text>
        <Text style={styles.label}>Last Visit:</Text>
        <Text style={styles.value}>{patient.lastVisit}</Text>
        <Text style={styles.label}>Attending Doctor:</Text>
        <Text style={styles.value}>{patient.doctor}</Text>
      </View>

      <TouchableOpacity style={styles.button}>
        <Ionicons name="chatbox-ellipses-outline" size={20} color="#fff" style={{ marginRight: 8 }} />
        <Text style={styles.buttonText}>Add Doctor&apos;s Judgment / Notes</Text>
      </TouchableOpacity>

      <Text style={styles.queueTitle}>Patient Queue</Text>
      <FlatList
        data={queue}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.card, { borderLeftColor: item.color }]}
            onPress={() => router.push({ pathname: '/patientdetails', params: { id: item.id } })}
          >
            <Text style={styles.queueName}>{item.name}</Text>
            <Text style={styles.queueTriage}>Triage Level: {item.triageLevel}</Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={{ paddingBottom: 24 }}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 24, backgroundColor: '#f7f8fa', alignItems: 'center' },
  header: { alignItems: 'center', marginBottom: 18 },
  title: { fontSize: 24, fontWeight: 'bold', color: '#4d148c', marginBottom: 4 },
  subtitle: { fontSize: 15, color: '#555', marginBottom: 8, textAlign: 'center' },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 18,
    marginBottom: 24,
    width: '100%',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  label: { fontSize: 15, color: '#888', marginTop: 10, fontWeight: '600' },
  value: { fontSize: 16, color: '#222', marginTop: 2 },
  triage: { color: '#EF5350', fontWeight: 'bold' },
  button: {
    flexDirection: 'row',
    backgroundColor: '#4d148c',
    borderRadius: 10,
    padding: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 30,
    shadowColor: '#4d148c',
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 2,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  queueTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
    alignSelf: 'flex-start',
  },
  queueName: {
    fontSize: 16,
    color: '#222',
    fontWeight: '500',
  },
  queueTriage: {
    fontSize: 14,
    color: '#888',
    marginTop: 4,
  },
});