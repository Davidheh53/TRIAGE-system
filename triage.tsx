// app/triage.tsx

import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { ActivityIndicator, Alert, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function TriageForm() {
  const [form, setForm] = useState({
    id: '',
    name: '',
    age: '',
    gender: '',
    temperature: '',
    bloodPressure: '',
    heartRate: '',
    respirationRate: '',
    symptoms: '',
  });

  const [prediction, setPrediction] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (field: string, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://172.21.10.107:5000/api/predict-triage', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          data: [
            Number(form.temperature),
            Number(form.heartRate),
            Number(form.bloodPressure),
            Number(form.respirationRate),
            form.symptoms
          ]
        }),
      });
      const result = await response.json();
      setPrediction(result.prediction);
      Alert.alert('Prediction', JSON.stringify(result.prediction));
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert('Error', error.message);
      } else {
        Alert.alert('Error', String(error));
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Ionicons name="medkit-outline" size={40} color="#4d148c" />
        <Text style={styles.heading}>Triage Assessment</Text>
        <Text style={styles.subheading}>
          Fill in patient details for AI-powered triage prediction. Please ensure all information is accurate.
        </Text>
      </View>

      <View style={styles.formSection}>
        <Text style={styles.sectionTitle}>Patient Information</Text>
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          value={form.name}
          onChangeText={val => handleChange('name', val)}
        />
        <TextInput
          style={styles.input}
          placeholder="Age"
          keyboardType="numeric"
          value={form.age}
          onChangeText={val => handleChange('age', val)}
        />
        <TextInput
          style={styles.input}
          placeholder="Gender"
          value={form.gender}
          onChangeText={val => handleChange('gender', val)}
        />
      </View>

      <View style={styles.formSection}>
        <Text style={styles.sectionTitle}>Vital Signs</Text>
        <TextInput
          style={styles.input}
          placeholder="Temperature (°C)"
          keyboardType="numeric"
          value={form.temperature}
          onChangeText={val => handleChange('temperature', val)}
        />
        <TextInput
          style={styles.input}
          placeholder="Blood Pressure (e.g. 120/80)"
          value={form.bloodPressure}
          onChangeText={val => handleChange('bloodPressure', val)}
        />
        <TextInput
          style={styles.input}
          placeholder="Heart Rate (bpm)"
          keyboardType="numeric"
          value={form.heartRate}
          onChangeText={val => handleChange('heartRate', val)}
        />
        <TextInput
          style={styles.input}
          placeholder="Respiration Rate (breaths/min)"
          keyboardType="numeric"
          value={form.respirationRate}
          onChangeText={val => handleChange('respirationRate', val)}
        />
      </View>

      <View style={styles.formSection}>
        <Text style={styles.sectionTitle}>Symptoms</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Describe symptoms (e.g. chest pain, headache)"
          multiline
          numberOfLines={4}
          value={form.symptoms}
          onChangeText={val => handleChange('symptoms', val)}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSubmit} disabled={loading}>
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <>
            <Ionicons name="cloud-upload-outline" size={20} color="#fff" style={{ marginRight: 8 }} />
            <Text style={styles.buttonText}>Submit for Prediction</Text>
          </>
        )}
      </TouchableOpacity>

      {prediction && (
        <View style={styles.predictionBox}>
          <Ionicons name="analytics-outline" size={28} color="#fff" />
          <Text style={styles.predictionLabel}>Predicted Triage Level:</Text>
          <Text style={styles.predictionText}>{prediction}</Text>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: '#f9f9f9',
  },
  header: {
    alignItems: 'center',
    marginBottom: 18,
  },
  heading: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#4d148c',
    marginTop: 8,
    marginBottom: 2,
  },
  subheading: {
    fontSize: 15,
    color: '#555',
    textAlign: 'center',
    marginBottom: 12,
  },
  formSection: {
    marginBottom: 18,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowRadius: 6,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: '600',
    marginBottom: 10,
    color: '#4d148c',
  },
  input: {
    backgroundColor: '#f7f8fa',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    fontSize: 15,
  },
  textArea: {
    height: 90,
    textAlignVertical: 'top',
  },
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
  predictionBox: {
    backgroundColor: '#ff6600',
    padding: 20,
    borderRadius: 14,
    alignItems: 'center',
    marginTop: 10,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 2,
  },
  predictionLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 8,
  },
  predictionText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 8,
  },
});
