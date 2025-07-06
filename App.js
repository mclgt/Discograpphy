import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import AppNavigator from './Navigator';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Monoton': require('./assets/Monoton-Regular.ttf'),
    'Fredoka': require('./assets/Fredoka.ttf')
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return <AppNavigator />;
}


