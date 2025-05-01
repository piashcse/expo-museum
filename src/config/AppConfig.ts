import { getDynamicPaddingOrMargin } from '@/src/config/DynamicDimension';
import { MD2Colors } from 'react-native-paper';

export const defaultDimension = {
  margin: 16,
  padding: 16,
  buttonHeight: 60,
  borderRadius: 20,
  iconPadding: 6,
  iconSize: 24,
  fontWeight: '600',
  rowGap: 8,
};

export const defaultFontSize = {
  extraSmall: 10,
  small: 12,
  medium: 16,
  regular: 14,
  large: 24,
  header: 18,
  titleOnboarding: 36,
  descriptionOnboarding: 16,
} as const;

export const defaultContainerStyle = {
  paddingHorizontal: getDynamicPaddingOrMargin(defaultDimension.padding),
  backgroundColor: MD2Colors.white,
};

export const themeMode = {
  light: 'light',
  dark: 'dark',
} as const;

export const Fonts = {
  regular: 'Inter_400Regular',
  medium: 'Inter_500Medium',
  semiBold: 'Inter_600SemiBold',
  bold: 'Inter_700Bold',
};
