import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SplashScreen, HomeScreen, GetStartedScreen } from './src/screens';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleSplashFinish = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return (
      <>
        <StatusBar style="light" />
        <SplashScreen onFinish={handleSplashFinish} />
      </>
    );
  }

  return (
    <>
      <StatusBar style="dark" />
      <GetStartedScreen />
    </>
  );
}
