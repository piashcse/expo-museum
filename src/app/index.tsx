import { StyleSheet } from 'react-native';
import { View } from '@/src/components/Themed';
import { Button } from 'react-native-paper';
import { useNavigation } from 'expo-router';

export default function HomeLayout() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Button
        style={styles.buttonStyle}
        mode="contained"
        onPress={() => {
          navigation.navigate('rtkquery');
        }}
      >
        RTK Query
      </Button>
      <Button
        style={styles.buttonStyle}
        mode="contained"
        onPress={() => {
          navigation.navigate('(tabs)');
        }}
      >
        Tab View
      </Button>
      <Button
        style={styles.buttonStyle}
        mode="contained"
        onPress={() => {
          navigation.navigate('filepicker');
        }}
      >
        File Picker
      </Button>
      <Button
        style={styles.buttonStyle}
        mode="contained"
        onPress={() => {
          navigation.navigate('permission');
        }}
      >
        Permission
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  buttonStyle: {
    marginVertical: 4,
  },
});
