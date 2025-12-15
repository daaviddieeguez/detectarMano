import { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import {
  Camera,
  useCameraDevice,
  useCameraPermission
} from "react-native-vision-camera";
import NoCameraDeviceError from "./screens/NoCameraDeviceError";
import PermissionsPage from "./screens/PermissionsPage";

export default function App() {
  const device = useCameraDevice("front");
  const { hasPermission, requestPermission } = useCameraPermission();

  useEffect(() => {
    if (!hasPermission) {
      requestPermission();
    }
  }, []);

  if (!hasPermission) return <PermissionsPage />;
  if (device == null) return <NoCameraDeviceError />;

  return (
    <View style={styles.container}>
      <Camera
        style={StyleSheet.absoluteFill}
        device={device!}
        isActive={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});