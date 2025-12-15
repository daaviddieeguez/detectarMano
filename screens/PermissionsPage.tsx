import { View, StyleSheet, Text, Linking, Button } from 'react-native'
import React, { useCallback } from 'react'

type OpenSettingsButtonProps = {
  children: string;
};

const OpenSettingsButton = ({children}: OpenSettingsButtonProps) => {
  const handlePress = useCallback(async () => {
    // Open the custom settings if the app has one
    await Linking.openSettings();
  }, []);

  return <Button title={children} onPress={handlePress} />;
};

const PermissionsPage = () => {
  return (
    <View style={styles.container}>
        <Text>Tienes que activar los permisos de la aplicación para que la aplicación funcione</Text>
        <OpenSettingsButton>Ir a ajustes</OpenSettingsButton>
    </View>
  )
}

export default PermissionsPage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});