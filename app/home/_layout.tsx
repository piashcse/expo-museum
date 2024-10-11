import { StyleSheet } from 'react-native';
import { View } from '@/components/Themed';
import {Button} from "react-native-paper";

export default function HomeLayout() {
    return (
        <View style={styles.container}>
            <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
                RTK Query
            </Button>
        </View>
);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
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
