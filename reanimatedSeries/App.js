import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 
Animated, 
  { 
    useAnimatedStyle, 
    useSharedValue, 
    withRepeat, 
    withSpring 
  } from 'react-native-reanimated'

const SIZE = 70.0
export default function App() {
  const progress = useSharedValue(1)
  const scale = useSharedValue(1)
  useEffect(() => {
    scale.value = withRepeat(withSpring(3), 100, true) 
  }, [])
  
  const reanimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {scale: scale.value}
      ]
    }
  }, [])

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.animated, reanimatedStyle]} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  animated: {
    width: SIZE,
    height: SIZE,
    borderRadius: 50,
    backgroundColor: 'orange'
  }
});
