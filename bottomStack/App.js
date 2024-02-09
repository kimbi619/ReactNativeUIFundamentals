import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppStack from './components/AppStack';
import { useFonts } from 'expo-font';

export default function App() {
  const [fontsLoaded] = useFonts({
    'NotoBold': require('./components/assets/fonts/NotoSans-Bold.ttf'),
    'NotoSemiBold': require('./components/assets/fonts/NotoSans-SemiBold.ttf'),
    'Noto': require('./components/assets/fonts/NotoSans-Regular.ttf'),
    'Montserrat': require('./components/assets/fonts/Montserrat.ttf'),
    'MontserratBold': require('./components/assets/fonts/static/Bold.ttf'),
    'RalewayBold': require('./components/assets/fonts/Raleway-Bold.ttf'),
    'Raleway': require('./components/assets/fonts/Raleway.ttf'),
});

if (!fontsLoaded) {
    return null;
}

  return (
      <NavigationContainer>
        <AppStack />
        <StatusBar style="auto" />
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
