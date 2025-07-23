
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { BottomNavigation } from '../components';
import { HomeScreen, ExploreScreen, ProfileScreen } from './';
import BookingsScreen from './BookingsScreen';
import Colors from '../constants/colors';


type TabName = 'Home' | 'Explore' | 'Bookings' | 'Profile';
export default function MainScreen() {
  const [activeTab, setActiveTab] = useState<TabName>('Home');

  const renderScreen = () => {
    switch (activeTab) {
      case 'Home':
        return <HomeScreen />;
      case 'Explore':
        return <ExploreScreen />;
      case 'Bookings':
        return <BookingsScreen />;
      case 'Profile':
        return <ProfileScreen />;
      default:
        return <HomeScreen />;
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      {renderScreen()}
      <BottomNavigation 
        activeTab={activeTab as any} 
        onTabPress={setActiveTab as any} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
});
