import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, SafeAreaView, StatusBar } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from '../constants/colors';

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.white} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.profileHeader}>
          <View style={styles.avatarWrapper}>
            <Image
              source={require('../assets/a1.jpg')}
              style={styles.avatar}
            />
            <TouchableOpacity style={styles.editIcon}>
              <MaterialIcons name="edit" size={22} color={Colors.primary[1]} />
            </TouchableOpacity>
          </View>
          <Text style={styles.profileName}>Adrian | JSM</Text>
          <Text style={styles.profileEmail}>adrian.jsm@email.com</Text>
        </View>
        <View style={styles.menuSection}>
          <TouchableOpacity style={styles.menuItem}>
            <MaterialCommunityIcons name="calendar-check" size={22} color={Colors.primary[1]} style={styles.menuIcon} />
            <Text style={styles.menuText}>My Bookings</Text>
            <MaterialIcons name="chevron-right" size={22} color={Colors.text.tertiary} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <MaterialCommunityIcons name="credit-card" size={22} color={Colors.primary[1]} style={styles.menuIcon} />
            <Text style={styles.menuText}>Payments</Text>
            <MaterialIcons name="chevron-right" size={22} color={Colors.text.tertiary} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <MaterialIcons name="person-outline" size={22} color={Colors.primary[1]} style={styles.menuIcon} />
            <Text style={styles.menuText}>Profile</Text>
            <MaterialIcons name="chevron-right" size={22} color={Colors.text.tertiary} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <MaterialIcons name="security" size={22} color={Colors.primary[1]} style={styles.menuIcon} />
            <Text style={styles.menuText}>Security</Text>
            <MaterialIcons name="chevron-right" size={22} color={Colors.text.tertiary} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <MaterialIcons name="language" size={22} color={Colors.primary[1]} style={styles.menuIcon} />
            <Text style={styles.menuText}>Language</Text>
            <MaterialIcons name="chevron-right" size={22} color={Colors.text.tertiary} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <MaterialIcons name="help-outline" size={22} color={Colors.primary[1]} style={styles.menuIcon} />
            <Text style={styles.menuText}>Help Center</Text>
            <MaterialIcons name="chevron-right" size={22} color={Colors.text.tertiary} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <MaterialCommunityIcons name="account-plus-outline" size={22} color={Colors.primary[1]} style={styles.menuIcon} />
            <Text style={styles.menuText}>Invite Friends</Text>
            <MaterialIcons name="chevron-right" size={22} color={Colors.text.tertiary} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.logoutButton}>
          <MaterialIcons name="logout" size={22} color={Colors.white} />
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  profileHeader: {
    alignItems: 'center',
    paddingTop: 40,
    paddingBottom: 24,
    backgroundColor: Colors.white,
  },
  avatarWrapper: {
    position: 'relative',
    marginBottom: 12,
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: Colors.primary[1],
  },
  editIcon: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    backgroundColor: Colors.white,
    borderRadius: 16,
    padding: 4,
    shadowColor: Colors.black[1],
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  profileName: {
    fontSize: 20,
    fontWeight: '700',
    color: Colors.text.primary,
    marginBottom: 2,
    textAlign: 'center',
  },
  profileEmail: {
    fontSize: 15,
    color: Colors.text.secondary,
    marginBottom: 8,
    textAlign: 'center',
  },
  menuSection: {
    backgroundColor: Colors.white,
    borderRadius: 16,
    marginHorizontal: 20,
    marginBottom: 18,
    paddingVertical: 8,
    paddingHorizontal: 0,
    shadowColor: Colors.black[1],
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderBottomWidth: 1,
    borderBottomColor: Colors.background,
  },
  menuIcon: {
    marginRight: 18,
  },
  menuText: {
    flex: 1,
    fontSize: 16,
    color: Colors.text.primary,
    fontWeight: '500',
  },
  logoutButton: {
    width: 200,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 30,
    paddingVertical: 14,
    borderRadius: 26,
    backgroundColor: '#ff4747ff',
    alignContent: 'center',
    shadowColor: Colors.black[1],
  },
  logoutText: {
    fontSize: 16,
    color: Colors.white,
    fontWeight: '600',
    marginLeft: 10,
  },
});
