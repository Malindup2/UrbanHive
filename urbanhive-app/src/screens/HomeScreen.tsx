import React from 'react';
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
    title: 'Merialla Villa',
    location: 'New York, US',
    price: '$12219',
    rating: 4.8,
    image: require('../assets/getStarted.jpg'), 
    type: 'villa',
  },
  {
    id: '2',
    title: 'Modernica Apartment',
    location: 'New York, US',
    price: '$22452',
    rating: 4.9,
    image: require('../assets/image.png'), // Using existing image
    type: 'apartment',
  },
];

const recommendedProperties: Property[] = [
  {
    id: '3',
    title: 'La Grand Maison',
    location: 'Tokyo, Japan',
    price: '$12219',
    rating: 4.8,
    image: require('../assets/getStarted.jpg'),
    type: 'house',
  },
  {
    id: '4',
    title: 'La Grand Maison',
    location: 'Tokyo, Japan',
    price: '$1424',
    rating: 4.8,
    image: require('../assets/logIn.jpg'),
    type: 'apartment',
  },
  {
    id: '5',
    title: 'La Grand Maison',
    location: 'Tokyo, Japan',
    price: '$17821',
    rating: 4.8,
    image: require('../assets/getStarted.jpg'),
    type: 'house',
  },
  {
    id: '6',
    title: 'La Grand Maison',
    location: 'Tokyo, Japan',
    price: '$21469',
    rating: 4.8,
    image: require('../assets/image.png'),
    type: 'villa',
  },
];

const categories = [
  { id: 'all', label: 'All', active: true },
  { id: 'house', label: 'House', active: false },
  { id: 'villa', label: 'Villa', active: false },
  { id: 'apartments', label: 'Apartments', active: false },
];

export default function HomeScreen() {
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
              <Text style={styles.avatarText}>AH</Text>
            </View>
            <View style={styles.greetingContainer}>
              <Text style={styles.greeting}>Good Morning</Text>
              <Text style={styles.userName}>Adrian Hajdin</Text>
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
            <Text style={styles.searchPlaceholder}>Search something</Text>
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
    flex: 1,
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
  searchPlaceholder: {
    marginLeft: 8,
    fontSize: 16,
    color: Colors.text.tertiary,
  },
  filterButton: {
    backgroundColor: Colors.background,
    borderRadius: 12,
    padding: 14,
  },
  section: {
    paddingHorizontal: 20,
    marginBottom: 30,
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
    overflow: 'hidden',
    marginRight: 16,
    shadowColor: Colors.black[1],
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  largeCard: {
    width: width * 0.7,
  },
  smallCard: {
    width: (width - 60) / 2,
    marginBottom: 16,
  },
  propertyImage: {
    width: '100%',
    height: 180,
    resizeMode: 'cover',
  },
  ratingBadge: {
    position: 'absolute',
    top: 12,
    right: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 20,
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
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});
