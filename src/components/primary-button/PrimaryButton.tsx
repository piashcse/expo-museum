import React from 'react';
import { StyleProp, Text, TextStyle, View, ViewStyle } from 'react-native';
import { Button, useTheme } from 'react-native-paper';
import styles from './PrimaryButton.style';
import { defaultDimension } from '@/src/config/AppConfig';
import Colors from '@/src/constants/Colors';

interface CustomButtonProps {
  title: string;
  onPress?: () => void;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  mode?: 'contained' | 'outlined' | 'text';
  style?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  iconSpacing?: number;
  spaceBetween?: boolean; // 👉 new prop
  disabled?: boolean;
  borderRadius?: number;
  color?: string;
  titleColor?: string;
}

const PrimaryButton: React.FC<CustomButtonProps> = ({
  title,
  onPress,
  leftIcon,
  rightIcon,
  mode = 'contained',
  style,
  labelStyle,
  iconSpacing = 8,
  spaceBetween = false,
  disabled = false,
  borderRadius = defaultDimension.borderRadius,
  color,
  titleColor,
  ...props
}) => {
  const { colors } = useTheme();
  return (
    <Button
      mode={mode}
      onPress={onPress}
      contentStyle={styles.content}
      style={[
        styles.button,
        style,
        color ? { backgroundColor: color } : {},
        borderRadius ? { borderRadius } : {},
        disabled ? { backgroundColor: colors.surfaceDisabled } : {},
      ]}
      labelStyle={[labelStyle]}
      disabled={disabled}
      {...props}
    >
      <View
        style={[
          styles.innerContainer,
          spaceBetween
            ? styles.spaceBetween
            : { gap: iconSpacing, justifyContent: 'center' },
        ]}
      >
        {spaceBetween ? (
          <>
            <View style={styles.sideIcon}>
              {leftIcon ?? <View style={{ width: 1 }} />}
            </View>
            <View style={styles.centerText}>
              <Text
                style={[
                  styles.text,
                  {
                    color:
                      mode === 'contained' ? Colors.light.white : colors.primary,
                  },
                  titleColor ? { color: titleColor } : {},
                  labelStyle,
                ]}
              >
                {title}
              </Text>
            </View>
            <View style={styles.sideIcon}>
              {rightIcon ?? <View style={{ width: 1 }} />}
            </View>
          </>
        ) : (
          <>
            {leftIcon && <View style={styles.icon}>{leftIcon}</View>}
            <Text
              style={[
                styles.text,
                {
                  color: mode === 'contained' ?  Colors.light.white : colors.primary,
                },
                titleColor ? { color: titleColor } : {},
                labelStyle,
              ]}
            >
              {title}
            </Text>
            {rightIcon && <View style={styles.icon}>{rightIcon}</View>}
          </>
        )}
      </View>
    </Button>
  );
};

export default PrimaryButton;
