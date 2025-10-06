// app/(tabs)/explore.tsx

import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ResourcesScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerSection}>
        <Ionicons name="book-outline" size={36} color="#4d148c" />
        <Text style={styles.header}>Health Resources</Text>
        <Text style={styles.subHeader}>
          Trusted information and emergency contacts for your health and safety.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>📚 Learn About Triage</Text>
        <Text style={styles.paragraph}>
          Triage helps healthcare providers prioritize patient care based on the severity of symptoms. Our AI system uses your symptoms to assist doctors with faster decision-making in emergencies.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>🤖 What is AI in Healthcare?</Text>
        <Text style={styles.paragraph}>
          Artificial Intelligence (AI) is used to analyze patient data, predict disease risks, and assist with diagnosis. It enhances healthcare efficiency, especially in resource-limited settings like Ghana.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>📞 Emergency Contacts</Text>
        <Text style={styles.paragraph}>
          If you&apos;re experiencing a medical emergency, contact:
        </Text>
        <View style={styles.contactRow}>
          <Ionicons name="call" size={18} color="#ff6600" />
          <Text style={styles.link}>112 – Ghana Emergency Services</Text>
        </View>
        <View style={styles.contactRow}>
          <Ionicons name="business" size={18} color="#ff6600" />
          <Text style={styles.link}>37 Military Hospital: +233-302-776-111</Text>
        </View>
      </View>

      <TouchableOpacity
        onPress={() => Linking.openURL('https://www.who.int')}
        style={styles.button}
      >
        <Ionicons name="globe-outline" size={20} color="#fff" style={{ marginRight: 8 }} />
        <Text style={styles.buttonText}>Visit WHO Website</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f7f8fa',
  },
  headerSection: {
    alignItems: 'center',
    marginBottom: 18,
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#4d148c',
    marginTop: 8,
  },
  subHeader: {
    fontSize: 15,
    color: '#555',
    textAlign: 'center',
    marginTop: 6,
    marginBottom: 8,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 16,
    marginBottom: 18,
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowRadius: 6,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#3b0e6f',
  },
  paragraph: {
    fontSize: 15,
    lineHeight: 22,
    color: '#333',
  },
  contactRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 7,
  },
  link: {
    fontSize: 15,
    color: '#ff6600',
    marginLeft: 7,
  },
  button: {
    marginTop: 25,
    padding: 12,
    backgroundColor: '#4d148c',
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  }
});
