import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { BottomNavigation } from '../components';
import { HomeScreen, ExploreScreen, ProfileScreen } from './';
import Colors from '../constants/colors';

export default function MainScreen() {
  const [activeTab, setActiveTab] = useState<'Home' | 'Explore' | 'Profile'>('Home');

  const renderScreen = () => {
    switch (activeTab) {
      case 'Home':
        return <HomeScreen />;
      case 'Explore':
        return <ExploreScreen />;
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
        activeTab={activeTab} 
        onTabPress={setActiveTab} 
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
