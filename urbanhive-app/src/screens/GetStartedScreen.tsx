import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from '../constants/colors';

const { width, height } = Dimensions.get('window');

interface GetStartedScreenProps {
  onSignInPress: () => void;
}

export default function GetStartedScreen({ onSignInPress }: GetStartedScreenProps) {
  const handleSignUp = () => {
    // Navigate to sign up screen
    console.log('Navigate to Sign Up');
  };

  return (
    <View style={styles.container}>
      {/* Image Section */}
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/getStarted.jpg')}
          style={styles.getStartedImage}
          resizeMode="cover"
        />
        {/* White fade gradient overlay at bottom  i installed linear gradient for my perspective there mught be good apply better than me hode.*/}
        <LinearGradient
          colors={['transparent', 'rgba(255,255,255,0.3)', 'rgba(255,255,255,0.8)', '#ffffff']}
          locations={[0, 0.7, 0.9, 1]}
          style={styles.fadeGradient}
        />
      </View>
      
      {/* Content Section  */}
      <View style={styles.contentContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.mainText}>Own your ideal home</Text>
          <Text style={styles.brandText}>UrbanHive</Text>
        </View>
        
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.signInButton} onPress={onSignInPress}>
            <Text style={styles.signInButtonText}>Sign In</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
            <Text style={styles.signUpButtonText}>Create Account</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  imageContainer: {
    height: height * 0.6, 
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 20, 
    overflow: 'hidden', 
  },
  getStartedImage: {
    width: '100%',
    height: '100%',
  },
  fadeGradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '30%', 
  },
  contentContainer: {
    flex: 1, 
    paddingHorizontal: 50,
    paddingTop: 0,
    paddingBottom: 40,
    justifyContent: 'space-between',
  },
  textContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 0,
  },
  mainText: {
    fontSize: 28,
    fontWeight: '600',
    color: Colors.text.primary,
    textAlign: 'center',
    marginBottom: 0,
    lineHeight: 34,
  },
  brandText: {
    fontSize: 24,
    fontWeight: '600', 
    color: Colors.primary[1],
    textAlign: 'center',
    letterSpacing: 1,
    marginTop: 8, 
  },
  buttonContainer: {
    gap: 16,
  },
  signInButton: {
    backgroundColor: Colors.primary[1],
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: Colors.black[1],
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  signInButtonText: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: '600',
  },
  signUpButton: {
    backgroundColor: 'transparent',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: Colors.primary[1],
  },
  signUpButtonText: {
    color: Colors.primary[1],
    fontSize: 18,
    fontWeight: '600',
  },
});