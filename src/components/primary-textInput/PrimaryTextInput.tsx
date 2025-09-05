import React from 'react';
import { HelperText, TextInput, TextInputProps } from 'react-native-paper';
import styles from './PrimaryTextInput.style';
import { View } from 'react-native';

interface AppTextInputProps extends TextInputProps {
  backgroundColor?: string;
  borderRadius?: number;
  errorMessage?: string; // 👈 Add this prop
}

const PrimaryTextInput: React.FC<AppTextInputProps> = ({
  backgroundColor = 'transparent',
  borderRadius,
  style,
  errorMessage, // 👈 Destructure the new prop
  ...props
}) => {
  const hasErrors = () => !!errorMessage; // 👈 Check if errorMessage exists

  return (
    <View>
      <TextInput
        style={[styles.input, { backgroundColor, borderRadius }, style]}
        {...props}
        error={hasErrors()} // 👈 Apply error styling
      />
      {errorMessage && (
        <HelperText type="error" visible={hasErrors()}>
          {errorMessage}
        </HelperText>
      )}
    </View>
  );
};

export default PrimaryTextInput;
