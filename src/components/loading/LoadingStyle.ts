import { Dimensions, StyleSheet } from 'react-native';
import { DefaultTheme } from '@react-navigation/native';

const { height, width } = Dimensions.get('window');
const styles = StyleSheet.create({
  containerLoading: {
    width,
    height,
    position: 'absolute',
    backgroundColor: DefaultTheme.colors.background,
    top: 0,
    left: 0,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerIndicator: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: DefaultTheme.colors.background,
    height: 100,
    width: width / 1.2,
    borderRadius: 2,
  },
  loadingTextStyle: {
    fontSize: 25,
    color: DefaultTheme.colors.primary,
    marginLeft: 20,
  },
});

export default styles;
