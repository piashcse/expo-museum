import { StyleSheet } from 'react-native';
import {
  defaultDimension,
  defaultFontSize,
  Fonts,
} from '@/src/config/AppConfig';

const styles = StyleSheet.create({
  button: {
    height: defaultDimension.buttonHeight,
    justifyContent: 'center',
  },
  content: {
    height: 60,
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  spaceBetween: {
    justifyContent: 'space-between',
    flex: 1,
  },
  text: {
    fontSize: defaultFontSize.medium,
    fontFamily: Fonts.semiBold,
    textAlign: 'center',
  },
  icon: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerText: {
    flex: 1,
    alignItems: 'center',
  },
  sideIcon: {
    width: 20,
    alignItems: 'center',
  },
});
export default styles;
