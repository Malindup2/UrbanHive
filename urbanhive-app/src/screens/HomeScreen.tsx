import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native';
import Colors from '../constants/colors';

export default function HomeScreen() {
  const apartments = [
    {
      id: 1,
      title: "Luxury Downtown Apartment",
      price: "$450,000",
      location: "Downtown District",
      bedrooms: 2,
      bathrooms: 2,
      area: "1,200 sq ft",
      image: "https://via.placeholder.com/300x200/0052FF/FFFFFF?text=Apartment+1"
    },
    {
      id: 2,
      title: "Modern City View Condo",
      price: "$650,000",
      location: "Business Center",
      bedrooms: 3,
      bathrooms: 2,
      area: "1,500 sq ft",
      image: "https://via.placeholder.com/300x200/666A70/FFFFFF?text=Apartment+2"
    },
    {
      id: 3,
      title: "Cozy Studio Apartment",
      price: "$280,000",
      location: "Arts District",
      bedrooms: 1,
      bathrooms: 1,
      area: "800 sq ft",
      image: "https://via.placeholder.com/300x200/8E9298/FFFFFF?text=Apartment+3"
    }
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>UrbanHive</Text>
        <Text style={styles.headerSubtitle}>Find Your Perfect Home</Text>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search apartments..."
          placeholderTextColor={Colors.text.tertiary}
        />
      </View>

      {/* Apartment Listings */}
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <Text style={styles.sectionTitle}>Featured Apartments</Text>
        
        {apartments.map((apartment) => (
          <TouchableOpacity key={apartment.id} style={styles.apartmentCard}>
            <Image source={{ uri: apartment.image }} style={styles.apartmentImage} />
            <View style={styles.apartmentInfo}>
              <Text style={styles.apartmentTitle}>{apartment.title}</Text>
              <Text style={styles.apartmentPrice}>{apartment.price}</Text>
              <Text style={styles.apartmentLocation}>📍 {apartment.location}</Text>
              
              <View style={styles.apartmentDetails}>
                <Text style={styles.detailText}>🛏️ {apartment.bedrooms} bed</Text>
                <Text style={styles.detailText}>🚿 {apartment.bathrooms} bath</Text>
                <Text style={styles.detailText}>📐 {apartment.area}</Text>
              </View>
              
              <TouchableOpacity style={styles.viewButton}>
                <Text style={styles.viewButtonText}>View Details</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingTop: 50,
  },
  header: {
    backgroundColor: Colors.primary[1],
    padding: 20,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.white,
  },
  headerSubtitle: {
    fontSize: 16,
    color: Colors.primary[2],
    marginTop: 5,
  },
  searchContainer: {
    padding: 20,
    backgroundColor: Colors.white,
  },
  searchInput: {
    height: 50,
    borderColor: Colors.primary[2],
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 20,
    fontSize: 16,
    backgroundColor: Colors.primary[3],
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: Colors.text.primary,
    marginVertical: 20,
  },
  apartmentCard: {
    backgroundColor: Colors.white,
    borderRadius: 15,
    marginBottom: 20,
    shadowColor: Colors.black[1],
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  apartmentImage: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  apartmentInfo: {
    padding: 15,
  },
  apartmentTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.text.primary,
    marginBottom: 5,
  },
  apartmentPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.primary[1],
    marginBottom: 5,
  },
  apartmentLocation: {
    fontSize: 14,
    color: Colors.text.secondary,
    marginBottom: 10,
  },
  apartmentDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  detailText: {
    fontSize: 12,
    color: Colors.text.tertiary,
    backgroundColor: Colors.primary[3],
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 10,
  },
  viewButton: {
    backgroundColor: Colors.primary[1],
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  viewButtonText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
