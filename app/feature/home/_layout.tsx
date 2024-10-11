import { StyleSheet } from 'react-native';
import { View } from '@/components/Themed';
import {Button} from "react-native-paper";
import { useNavigation } from "expo-router"

export default function HomeLayout() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Button icon="camera" mode="contained" onPress={() => {
                navigation.navigate('rtkquery');
            }}>
                RTK Query
            </Button>
        </View>
);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding:16
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
});
