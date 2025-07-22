import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
  StatusBar,
  TextInput,
} from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';
import Colors from '../constants/colors';

const { width, height } = Dimensions.get('window');

interface Property {
  id: string;
  title: string;
  location: string;
  price: string;
  rating: number;
  image: any;
  type: 'villa' | 'apartment' | 'house';
}

const featuredProperties: Property[] = [
  {
    id: '1',
    title: 'Prime Lands Luxury Villa',
    location: 'Colombo 07, Sri Lanka',
    price: 'LKR 23M',
    rating: 4.8,
    image: require('../assets/a1.jpg'), 
    type: 'villa',
  },
  {
    id: '2',
    title: 'Ariyana Resort Apartment',
    location: 'Kandy, Sri Lanka',
    price: 'LKR 18M',
    rating: 4.9,
    image: require('../assets/a2.jpg'),
    type: 'apartment',
  },
];

const recommendedProperties: Property[] = [
  {
    id: '3',
    title: 'Prime Lands Garden Residence',
    location: 'Galle, Sri Lanka',
    price: 'LKR 15M',
    rating: 4.8,
    image: require('../assets/a3.jpg'),
    type: 'house',
  },
  {
    id: '4',
    title: 'Ariyana Resort Studio',
    location: 'Negombo, Sri Lanka',
    price: 'LKR 8M',
    rating: 4.7,
    image: require('../assets/a4.jpg'),
    type: 'apartment',
  },
  {
    id: '5',
    title: 'Prime Lands Executive Villa',
    location: 'Mount Lavinia, Sri Lanka',
    price: 'LKR 35M',
    rating: 4.9,
    image: require('../assets/a5.jpg'),
    type: 'house',
  },
  {
    id: '6',
    title: 'Ariyana Resort Penthouse',
    location: 'Bentota, Sri Lanka',
    price: 'LKR 42M',
    rating: 4.8,
    image: require('../assets/a6.jpg'),
    type: 'villa',
  },
  {
    id: '7',
    title: 'Prime Lands Ocean View',
    location: 'Hikkaduwa, Sri Lanka',
    price: 'LKR 28M',
    rating: 4.9,
    image: require('../assets/a7.jpg'),
    type: 'apartment',
  },
];

const categories = [
  { id: 'all', label: 'All', active: true },
  { id: 'house', label: 'House', active: false },
  { id: 'villa', label: 'Villa', active: false },
  { id: 'apartments', label: 'Apartments', active: false },
];

export default function HomeScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const renderPropertyCard = (property: Property, isLarge: boolean = false) => (
    <TouchableOpacity
      key={property.id}
      style={[styles.propertyCard, isLarge ? styles.largeCard : styles.smallCard]}
    >
      <Image source={property.image} style={styles.propertyImage} />
      
      {/* Rating Badge */}
      <View style={styles.ratingBadge}>
        <MaterialIcons name="star" size={14} color="#FFD700" />
        <Text style={styles.ratingText}>{property.rating}</Text>
      </View>

      {/* Property Info */}
      <View style={styles.propertyInfo}>
        <Text style={styles.propertyTitle}>{property.title}</Text>
        <Text style={styles.propertyLocation}>{property.location}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.propertyPrice}>{property.price}</Text>
          <TouchableOpacity style={styles.favoriteButton}>
            <MaterialIcons name="favorite-border" size={20} color={Colors.text.tertiary} />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.white} />
      
      <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.userInfo}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>KP</Text>
            </View>
            <View style={styles.greetingContainer}>
              <Text style={styles.greeting}>Good Morning</Text>
              <Text style={styles.userName}>Kasun Perera</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.notificationButton}>
            <MaterialIcons name="notifications-none" size={24} color={Colors.text.primary} />
          </TouchableOpacity>
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <View style={styles.searchBar}>
            <MaterialIcons name="search" size={20} color={Colors.text.tertiary} />
            <TextInput
              style={styles.searchInput}
              value={searchQuery}
              onChangeText={setSearchQuery}
              placeholder="Search something"
              placeholderTextColor={Colors.text.tertiary}
              autoCapitalize="none"
              returnKeyType="search"
            />
          </View>
          <TouchableOpacity style={styles.filterButton}>
            <MaterialIcons name="tune" size={20} color={Colors.text.primary} />
          </TouchableOpacity>
        </View>

        {/* Featured Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Featured</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllButton}>See All</Text>
            </TouchableOpacity>
          </View>
          
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.featuredScroll}
          >
            {featuredProperties.map((property) => renderPropertyCard(property, true))}
          </ScrollView>
        </View>

        {/* Our Recommendation Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Our Recommendation</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllButton}>See All</Text>
            </TouchableOpacity>
          </View>

          {/* Category Filters */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.categoryScroll}
          >
            {categories.map((category) => (
              <TouchableOpacity
                key={category.id}
                style={[
                  styles.categoryButton,
                  category.active && styles.activeCategoryButton,
                ]}
              >
                <Text
                  style={[
                    styles.categoryText,
                    category.active && styles.activeCategoryText,
                  ]}
                >
                  {category.label}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          {/* Recommended Properties Grid */}
          <View style={styles.recommendedGrid}>
            {recommendedProperties.map((property) => renderPropertyCard(property, false))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  scrollView: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 20,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: Colors.primary[1],
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  avatarText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: '600',
  },
  greetingContainer: {
    // Removed flex: 1 to prevent taking excessive width
  },
  greeting: {
    fontSize: 14,
    color: Colors.text.secondary,
    marginBottom: 2,
  },
  userName: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.text.primary,
  },
  notificationButton: {
    padding: 8,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.background,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    marginRight: 12,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
    color: Colors.text.primary,
    backgroundColor: 'transparent',
    padding: 0,
    borderWidth: 0,
  },
  filterButton: {
    backgroundColor: Colors.background,
    borderRadius: 12,
    padding: 14,
  },
  section: {
    paddingHorizontal: 20,
    marginBottom: 40,
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
  },
  seeAllButton: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.primary[1],
  },
  featuredScroll: {
    marginHorizontal: -20,
    paddingHorizontal: 20,
  },
  propertyCard: {
    backgroundColor: Colors.white,
    borderRadius: 16,
    // Removed overflow: 'hidden' to allow shadows to show on iOS
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
  },
  largeCard: {
    width: width * 0.7,
    marginRight: 16,
    marginBottom: 18, 
  },
  smallCard: {
    width: '100%',
    marginBottom: 16,
  },
  propertyImage: {
    width: '100%',
    height: 180,
    resizeMode: 'cover',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  ratingBadge: {
    position: 'absolute',
    top: 12,
    right: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 3,
  },
  ratingText: {
    marginLeft: 4,
    fontSize: 12,
    fontWeight: '600',
    color: Colors.text.primary,
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
  categoryScroll: {
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
  recommendedGrid: {
    flexDirection: 'column',
  },
});
