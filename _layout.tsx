import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#4d148c',
        tabBarInactiveTintColor: '#bbb',
        tabBarLabelStyle: {
          fontSize: 13,
          fontWeight: '600',
          letterSpacing: 0.5,
        },
        tabBarStyle: Platform.select({
          ios: {
            backgroundColor: '#fff',
            borderTopLeftRadius: 18,
            borderTopRightRadius: 18,
            position: 'absolute',
            shadowColor: '#000',
            shadowOpacity: 0.06,
            shadowRadius: 8,
            height: 65,
          },
          android: {
            backgroundColor: '#fff',
            borderTopLeftRadius: 18,
            borderTopRightRadius: 18,
            elevation: 8,
            height: 65,
          },
        }),
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="triage"
        options={{
          title: 'Triage',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="medkit-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Resources',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="book-outline" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
