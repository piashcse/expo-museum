import {StyleSheet, View} from "react-native";
import {Button} from "react-native-paper";
import * as DocumentPicker from 'expo-document-picker';

export default function FilePickerLayout() {
    const expoDocumentPicker = () => {
      DocumentPicker.getDocumentAsync().then((doc: DocumentPicker) => {
          console.log(doc);
      })
    }
    return (
        <View style={styles.container}>
            <Button onPress={expoDocumentPicker}>File picker</Button>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        alignItems:'center'
    },
});
