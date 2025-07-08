import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import AppNavigator from './Navigator';
import VinylManager from './VinylManager';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Monoton': require('./assets/Fonts/Monoton-Regular.ttf'),
    'Fredoka': require('./assets/Fonts/Fredoka.ttf')
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <VinylManager>
      <AppNavigator/>
    </VinylManager>);
}


