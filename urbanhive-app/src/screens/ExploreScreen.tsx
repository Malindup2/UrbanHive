type Property = {
  id: string;
  title: string;
  location: string;
  price: string;
  rating: number;
  image: any;
  type: string;
};
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
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Colors from '../constants/colors';
const { width } = Dimensions.get('window');

const properties = [
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
  { id: 'all', label: 'All' },
  { id: 'house', label: 'House' },
  { id: 'villa', label: 'Villa' },
  { id: 'apartment', label: 'Apartment' },
];

export default function ExploreScreen() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProperties =
    activeCategory === 'all'
      ? properties
      : properties.filter((p) => p.type === activeCategory);

  const renderPropertyCard = (property: Property) => (
    <TouchableOpacity key={property.id} style={styles.propertyCard}>
      <Image source={property.image} style={styles.propertyImage} />
      <View style={styles.ratingBadge}>
        <MaterialIcons name="star" size={14} color="#FFD700" />
        <Text style={styles.ratingText}>{property.rating}</Text>
      </View>
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
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Explore Properties</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.categoryScroll}
        >
          {categories.map((category) => (
            <TouchableOpacity
              key={category.id}
              style={[styles.categoryButton, activeCategory === category.id && styles.activeCategoryButton]}
              onPress={() => setActiveCategory(category.id)}
            >
              <Text style={[styles.categoryText, activeCategory === category.id && styles.activeCategoryText]}>
                {category.label}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
        <View style={styles.grid}>
          {filteredProperties.map(renderPropertyCard)}
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
  header: {
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 10,
    backgroundColor: Colors.white,
    borderBottomWidth: 1,
    borderBottomColor: Colors.background,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: Colors.text.primary,
  },
  scrollView: {
    flex: 1,
  },
  categoryScroll: {
    marginVertical: 20,
    paddingHorizontal: 20,
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
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  propertyCard: {
    backgroundColor: Colors.white,
    borderRadius: 16,
    marginBottom: 24,
    width: width * 0.44,
    // iOS Shadows
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.10,
    shadowRadius: 6,
    // Android Shadow
    elevation: 3,
    borderWidth: 0.5,
    borderColor: 'rgba(0, 0, 0, 0.08)',
  },
  propertyImage: {
    width: '100%',
    height: 120,
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
    shadowOpacity: 0.10,
    shadowRadius: 3,
    elevation: 2,
  },
  ratingText: {
    marginLeft: 4,
    fontSize: 12,
    fontWeight: '600',
    color: Colors.text.primary,
  },
  propertyInfo: {
    padding: 12,
  },
  propertyTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: Colors.text.primary,
    marginBottom: 2,
  },
  propertyLocation: {
    fontSize: 12,
    color: Colors.text.secondary,
    marginBottom: 8,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  propertyPrice: {
    fontSize: 15,
    fontWeight: '700',
    color: Colors.primary[1],
  },
  favoriteButton: {
    padding: 4,
  },
});
