import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const NoCameraDeviceError = () => {
  return (
    <View style={styles.container}>
      <Text>No se detecto ninguna cámara.</Text>
      <Text>Para usar la siguiente aplicación necesitas tener cámara</Text>
    </View>
  )
}

export default NoCameraDeviceError

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});