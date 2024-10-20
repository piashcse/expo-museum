import { StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { useState } from 'react';
import * as Location from 'expo-location';

export default function PermissionLayout() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }
  const locationPermission = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied');
      return;
    }

    const location = await Location.getCurrentPositionAsync({});
    setLocation(location);
  };
  return (
    <View style={styles.container}>
      <Button onPress={locationPermission}>Location</Button>
      <Text style={styles.paragraph}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
  },
  paragraph: {
    fontSize: 18,
    textAlign: 'center',
  },
});
