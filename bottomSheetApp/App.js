import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Bottomsheet from './sheet/BottomSheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useCallback, useState } from 'react';

export default function App() {
  const [showModal, setShowModal] = useState(false)
  const openModal = () => {
    setShowModal(!showModal)
  }
  const removeModal = () => {
    'worklet'
    setShowModal(false)
  }
  return (
    <GestureHandlerRootView style={styles.container}>
      <TouchableOpacity onPress={openModal} activeOpacity={0.7} style={styles.btn}>
        <Text>click me</Text>
      </TouchableOpacity>
      <Bottomsheet showModal={showModal} handleRemoveModal={removeModal} />
      <StatusBar style="auto" />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 6,
    backgroundColor: '#5BBA7F'
  }
});
