import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Colors from '../constants/colors';

const { width } = Dimensions.get('window');

interface BottomNavigationProps {
  activeTab: 'Home' | 'Explore' | 'Profile';
  onTabPress: (tab: 'Home' | 'Explore' | 'Profile') => void;
}

export default function BottomNavigation({ activeTab, onTabPress }: BottomNavigationProps) {
  const tabs = [
    { 
      name: 'Home', 
      icon: 'home' as keyof typeof MaterialIcons.glyphMap,
      activeIcon: 'home' as keyof typeof MaterialIcons.glyphMap
    },
    { 
      name: 'Explore', 
      icon: 'explore' as keyof typeof MaterialIcons.glyphMap,
      activeIcon: 'explore' as keyof typeof MaterialIcons.glyphMap
    },
    { 
      name: 'Profile', 
      icon: 'account-circle' as keyof typeof MaterialIcons.glyphMap,
      activeIcon: 'account-circle' as keyof typeof MaterialIcons.glyphMap
    }
  ];

  return (
    <View style={styles.container}>
      <View style={styles.navigationBar}>
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab.name}
            style={[
              styles.tabButton,
              activeTab === tab.name && styles.activeTabButton
            ]}
            onPress={() => onTabPress(tab.name as 'Home' | 'Explore' | 'Profile')}
          >
            <MaterialIcons
              name={activeTab === tab.name ? tab.activeIcon : tab.icon}
              size={24}
              color={activeTab === tab.name ? Colors.primary[1] : Colors.black[2]}
              style={styles.tabIcon}
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 30,
    left: 20,
    right: 20,
    alignItems: 'center',
  },
  navigationBar: {
    flexDirection: 'row',
    backgroundColor: Colors.white,
    borderRadius: 40,
    paddingVertical: 8,
    paddingHorizontal: 20,
    shadowColor: Colors.black[1],
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.15,
    shadowRadius: 20,
    elevation: 10,
    justifyContent: 'space-between',
    width: width * 0.8,
  },
  tabButton: {
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 40,
    minWidth: 80,
  },
  activeTabButton: {
    backgroundColor: Colors.primary[4],
  },
  tabIcon: {
    marginBottom: 0,
  },
});
