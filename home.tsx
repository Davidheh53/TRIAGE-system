// app/(tabs)/home.tsx
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.logo}>🩺</Text>
        <Text style={styles.title}>37 Military Hospital</Text>
        <Text style={styles.system}>Triage System</Text>
        <Text style={styles.subtitle}>
          Welcome to the AI-powered triage and patient management system.
        </Text>
      </View>

      {/* Overview Section */}
      <View style={styles.overviewCard}>
        <Text style={styles.sectionTitle}>Hospital Overview</Text>
        <View style={styles.overviewRow}>
          <Ionicons name="location" size={20} color="#4d148c" />
          <Text style={styles.overviewText}><Text style={styles.bold}>Location:</Text> Accra, Ghana</Text>
        </View>
        <View style={styles.overviewRow}>
          <Ionicons name="business" size={20} color="#4d148c" />
          <Text style={styles.overviewText}><Text style={styles.bold}>Departments:</Text> Emergency, Cardiology, Pediatrics, Surgery, Outpatient</Text>
        </View>
        <View style={styles.overviewRow}>
          <Ionicons name="medkit" size={20} color="#4d148c" />
          <Text style={styles.overviewText}><Text style={styles.bold}>Doctors:</Text> 120+ Specialists</Text>
        </View>
        <View style={styles.overviewRow}>
          <Ionicons name="bed" size={20} color="#4d148c" />
          <Text style={styles.overviewText}><Text style={styles.bold}>Beds:</Text> 300</Text>
        </View>
        <View style={styles.overviewRow}>
          <Ionicons name="people" size={20} color="#4d148c" />
          <Text style={styles.overviewText}><Text style={styles.bold}>Patients Today:</Text> 85</Text>
        </View>
        <View style={styles.overviewRow}>
          <Ionicons name="pulse" size={20} color="#4d148c" />
          <Text style={styles.overviewText}><Text style={styles.bold}>Active Triage Cases:</Text> 12</Text>
        </View>
      </View>

      {/* Main Actions Grid */}
      <View style={styles.grid}>
        <TouchableOpacity
          style={[styles.card, { backgroundColor: '#FFA726' }]}
          onPress={() => router.push('/triage')}
        >
          <Ionicons name="add-circle-outline" size={32} color="#fff" />
          <Text style={styles.cardTitle}>Start New Triage</Text>
          <Text style={styles.cardDesc}>Begin assessment</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.card, { backgroundColor: '#7E57C2' }]}
          onPress={() => router.push('/patientqueue')}
        >
          <Ionicons name="list-outline" size={32} color="#fff" />
          <Text style={styles.cardTitle}>Patient Queue</Text>
          <Text style={styles.cardDesc}>View waiting list</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.card, { backgroundColor: '#EF5350' }]}
          onPress={() => router.push('/emergencycases')}
        >
          <Ionicons name="alert-circle-outline" size={32} color="#fff" />
          <Text style={styles.cardTitle}>Emergency Cases</Text>
          <Text style={styles.cardDesc}>Handle urgent cases</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.card, { backgroundColor: '#29B6F6' }]}
          onPress={() => router.push('/patientfolder')}
        >
          <Ionicons name="folder-outline" size={32} color="#fff" />
          <Text style={styles.cardTitle}>Patient Records</Text>
          <Text style={styles.cardDesc}>Access records</Text>
        </TouchableOpacity>
      </View>

      {/* Statistics Section */}
      <View style={styles.statsSection}>
        <Text style={styles.sectionTitle}>Today&apos;s Statistics</Text>
        <View style={styles.statsRow}>
          <View style={styles.statsCard}>
            <Ionicons name="log-in-outline" size={24} color="#4d148c" />
            <Text style={styles.statsLabel}>Admissions</Text>
            <Text style={styles.statsValue}>23</Text>
          </View>
          <View style={styles.statsCard}>
            <Ionicons name="log-out-outline" size={24} color="#4d148c" />
            <Text style={styles.statsLabel}>Discharges</Text>
            <Text style={styles.statsValue}>17</Text>
          </View>
          <View style={styles.statsCard}>
            <Ionicons name="cut-outline" size={24} color="#4d148c" />
            <Text style={styles.statsLabel}>Surgeries</Text>
            <Text style={styles.statsValue}>5</Text>
          </View>
        </View>
      </View>

      <Text style={styles.powered}>Powered by AI • All data is confidential</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 24, backgroundColor: '#f7f8fa', alignItems: 'center' },
  header: { alignItems: 'center', marginBottom: 12 },
  logo: { fontSize: 40, textAlign: 'center', marginTop: 24, marginBottom: 8 },
  title: { fontSize: 26, fontWeight: 'bold', color: '#4d148c', textAlign: 'center', marginBottom: 0 },
  system: { fontSize: 20, fontWeight: '600', color: '#222', textAlign: 'center', marginBottom: 8 },
  subtitle: { fontSize: 16, color: '#333', textAlign: 'center', marginBottom: 16 },
  overviewCard: {
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
  sectionTitle: { fontSize: 18, fontWeight: 'bold', color: '#222', marginBottom: 8 },
  overviewRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 6 },
  overviewText: { fontSize: 15, color: '#555', marginLeft: 8 },
  bold: { fontWeight: 'bold', color: '#4d148c' },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 32,
    width: '100%',
    gap: 12,
  },
  card: {
    width: '47%',
    borderRadius: 16,
    padding: 18,
    marginBottom: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  cardTitle: { fontSize: 16, fontWeight: 'bold', color: '#fff', marginTop: 8 },
  cardDesc: { fontSize: 14, color: '#fff', marginTop: 4 },
  statsSection: { marginBottom: 24, width: '100%' },
  statsRow: { flexDirection: 'row', justifyContent: 'space-between' },
  statsCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    width: '30%',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  statsLabel: { fontSize: 14, color: '#555', marginBottom: 4, marginTop: 4 },
  statsValue: { fontSize: 16, fontWeight: 'bold', color: '#4d148c' },
  powered: { textAlign: 'center', color: '#888', marginTop: 24, fontSize: 14 },
});
