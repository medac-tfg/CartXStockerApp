import { useState } from 'react';
import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const ScanBarcode = () => {
  const [permission, requestPermission] = useCameraPermissions();

  if (!permission) { 
    return <View />;
  }

  // habría que checkear ahora !permission.granted (y mostrar un boton que llame a requestPermission)


  return (
    <>
    <CameraView facing="back" style={styles.camera}/>
    <View style={styles.container}>
      <Text style={styles.step}>Step 1</Text>
      <Text style={styles.title}>Scan the barcode</Text>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  camera: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "rgba(0,0,0,0.8)",
  },
  step: {
    color: '#fff',
    fontSize: 20,
    fontFamily: 'Montserrat-Medium',
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontFamily: 'Montserrat-SemiBold',
  },
});

export default ScanBarcode;