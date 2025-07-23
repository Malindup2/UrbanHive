import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, FlatList, Image } from 'react-native';
import Colors from '../constants/colors';
import { MaterialIcons } from '@expo/vector-icons';

const bookingData = [
  {
    id: '1',
    status: 'Booked',
    property: {
      title: 'Modern Apartment',
      address: '123 Main St',
      price: 1200,
      image: require('../assets/a1.jpg'),
      type: 'Apartment',
    },
  },
  {
    id: '2',
    status: 'Cancelled',
    property: {
      title: 'Cozy Villa',
      address: '456 Oak Ave',
      price: 2000,
      image: require('../assets/a2.jpg'),
      type: 'Villa',
    },
  },
  {
    id: '3',
    status: 'Booked',
    property: {
      title: 'City Loft',
      address: '789 Pine Rd',
      price: 1500,
      image: require('../assets/a3.jpg'),
      type: 'Loft',
    },
  },
];


type StatusCapsule = { label: string; color: string };
type Booking = {
  id: string;
  status: string;
  property: {
    title: string;
    address: string;
    price: number;
    image: any;
    type: string;
  };
};

const statusCapsules: StatusCapsule[] = [
  { label: 'Booked', color: Colors.primary[1] },
  { label: 'Cancelled', color: Colors.error || '#e57373' },
];



export default function BookingsScreen() {
  const [selectedStatus, setSelectedStatus] = useState<string>('Booked');

  const filteredBookings: Booking[] = bookingData.filter((b: Booking) => b.status === selectedStatus);

  const renderCapsule = (capsule: StatusCapsule) => (
    <TouchableOpacity
      key={capsule.label}
      style={[
        styles.categoryButton,
        selectedStatus === capsule.label && styles.activeCategoryButton,
      ]}
      onPress={() => setSelectedStatus(capsule.label)}
    >
      <Text style={[
        styles.categoryText,
        selectedStatus === capsule.label && styles.activeCategoryText,
      ]}>{capsule.label}</Text>
    </TouchableOpacity>
  );

  const renderPropertyCard = ({ item }: { item: Booking }) => (
    <TouchableOpacity style={styles.propertyCard}>
      <Image source={item.property.image} style={styles.propertyImage} />
      <View style={styles.propertyInfo}>
        <Text style={styles.propertyTitle}>{item.property.title}</Text>
        <Text style={styles.propertyLocation}>{item.property.address}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.propertyPrice}>LKR {item.property.price}/mo</Text>
          <TouchableOpacity style={styles.favoriteButton}>
            <MaterialIcons name="favorite-border" size={20} color={Colors.text.tertiary} />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.section}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>My Bookings</Text>
      </View>
      {/* Capsules Row - horizontal View, not a ScrollView */}
      <View style={styles.capsuleRow}>
        {statusCapsules.map(renderCapsule)}
      </View>
      <ScrollView>
      <View style={styles.recommendedGrid}>
        {filteredBookings.length === 0 ? (
          <Text style={styles.emptyText}>No bookings found.</Text>
        ) : (
          filteredBookings.map((item) => renderPropertyCard({ item }))
        )}
      </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    color: Colors.primary[1],
    marginBottom: 20,
    textAlign: 'center',
  },
  // ...existing code...
  // Use HomeScreen's capsule and card styles for consistency
  section: {
    paddingHorizontal: 20,
    marginBottom: 40,
    flex: 1,
    backgroundColor: Colors.white,
    paddingTop: 40,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: Colors.text.primary,
    textAlign: 'left',
  },
  
  capsuleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  categoryButton: {
    backgroundColor: Colors.background,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    marginRight: 12,
  },
  activeCategoryButton: {
    backgroundColor: Colors.primary[1],
  },
  categoryText: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.text.secondary,
  },
  activeCategoryText: {
    color: Colors.white,
  },
  propertyCard: {
    backgroundColor: Colors.white,
    borderRadius: 16,
    // iOS Shadows
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    // Android Shadow
    elevation: 5,
    // Border for extra definition
    borderWidth: 0.5,
    borderColor: 'rgba(0, 0, 0, 0.08)',
    marginBottom: 16,
  },
  propertyImage: {
    width: '100%',
    height: 180,
    resizeMode: 'cover',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  propertyInfo: {
    padding: 16,
  },
  propertyTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.text.primary,
    marginBottom: 4,
  },
  propertyLocation: {
    fontSize: 12,
    color: Colors.text.secondary,
    marginBottom: 12,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  propertyPrice: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.primary[1],
  },
  favoriteButton: {
    padding: 4,
  },
  recommendedGrid: {
    flexDirection: 'column',
  },
  imagePlaceholder: {
    width: 60,
    height: 60,
    borderRadius: 12,
    backgroundColor: Colors.primary[4],
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.text.primary,
    marginBottom: 4,
  },
  cardAddress: {
    fontSize: 14,
    color: Colors.text.secondary,
    marginBottom: 2,
  },
  cardPrice: {
    fontSize: 16,
    color: Colors.primary[1],
    fontWeight: '500',
    marginBottom: 2,
  },
  cardType: {
    fontSize: 13,
    color: Colors.primary[2],
    fontWeight: '500',
  },
  emptyText: {
    textAlign: 'center',
    color: Colors.text.tertiary,
    marginTop: 40,
    fontSize: 16,
  },
});
