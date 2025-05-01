import { StyleSheet } from 'react-native';
import { Fonts } from '@/src/config/AppConfig';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  title: {
    flex: 1,
    fontSize: 18,
    fontFamily: Fonts.medium,
  },
});
export default styles;
