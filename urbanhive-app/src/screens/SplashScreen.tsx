import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Animated, Dimensions, Image } from 'react-native';
import Colors from '../constants/colors';

interface SplashScreenProps {
  onFinish: () => void;
}

const { width, height } = Dimensions.get('window');

export default function SplashScreen({ onFinish }: SplashScreenProps) {
  const logoScale = new Animated.Value(0);
  const logoOpacity = new Animated.Value(0);
  const textOpacity = new Animated.Value(0);
  const backgroundOpacity = new Animated.Value(0);

  useEffect(() => {
    // Start animations
    Animated.sequence([
      // Background fade in
      Animated.timing(backgroundOpacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      // Logo scale and fade in
      Animated.parallel([
        Animated.timing(logoScale, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(logoOpacity, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }),
      ]),
      // Text fade in
      Animated.timing(textOpacity, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }),
    ]).start();

    // Auto navigate after 3 seconds
    const timer = setTimeout(() => {
      onFinish();
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Animated.View style={[styles.container, { opacity: backgroundOpacity }]}>
      {/* Background gradient effect */}
      <View style={styles.backgroundGradient} />
      
      {/* Logo Container */}
      <View style={styles.logoContainer}>
        <Animated.View
          style={[
            styles.logoCircle,
            {
              transform: [{ scale: logoScale }],
              opacity: logoOpacity,
            },
          ]}
        >
          <Image 
            source={require('../assets/image.png')} 
            style={styles.logoImage}
            resizeMode="contain"
          />
        </Animated.View>
        
        <Animated.Text
          style={[styles.logoText, { opacity: textOpacity }]}
        >
          UrbanHive
        </Animated.Text>
        
        <Animated.Text
          style={[styles.tagline, { opacity: textOpacity }]}
        >
          Find Your Perfect Home
        </Animated.Text>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary[1],
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundGradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: Colors.primary[1],
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 80,
  },
  logoCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
    shadowColor: Colors.black[1],
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.3,
    shadowRadius: 15,
    elevation: 10,
  },
  logoImage: {
    width: 80,
    height: 80,
  },
  logoIcon: {
    fontSize: 50,
  },
  logoText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: Colors.white,
    marginBottom: 10,
    letterSpacing: 2,
  },
  tagline: {
    fontSize: 16,
    color: Colors.primary[2],
    textAlign: 'center',
    letterSpacing: 0.5,
  },
});
