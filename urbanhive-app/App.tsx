import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SplashScreen, GetStartedScreen, LoginScreen, MainScreen } from './src/screens';

type AppState = 'splash' | 'getStarted' | 'login' | 'main';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<AppState>('splash');

  const handleSplashFinish = () => {
    setCurrentScreen('getStarted');
  };

  const handleSignInPress = () => {
    setCurrentScreen('login');
  };

  const handleLoginSuccess = () => {
    setCurrentScreen('main');
  };

  const handleBackToGetStarted = () => {
    setCurrentScreen('getStarted');
  };

  const renderCurrentScreen = () => {
    switch (currentScreen) {
      case 'splash':
        return (
          <>
            <StatusBar style="light" />
            <SplashScreen onFinish={handleSplashFinish} />
          </>
        );
      case 'getStarted':
        return (
          <>
            <StatusBar style="dark" />
            <GetStartedScreen onSignInPress={handleSignInPress} />
          </>
        );
      case 'login':
        return (
          <>
            <StatusBar style="dark" />
            <LoginScreen 
              onLoginSuccess={handleLoginSuccess}
              onBackToGetStarted={handleBackToGetStarted}
            />
          </>
        );
      case 'main':
        return (
          <>
            <StatusBar style="dark" />
            <MainScreen />
          </>
        );
      default:
        return (
          <>
            <StatusBar style="light" />
            <SplashScreen onFinish={handleSplashFinish} />
          </>
        );
    }
  };

  return renderCurrentScreen();
}
