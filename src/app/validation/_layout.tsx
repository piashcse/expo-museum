import { View } from '@/src/components/Themed';
import { StyleSheet } from 'react-native';
import PrimaryTextInput from '@/src/components/primary-textInput/PrimaryTextInput';
import { useState } from 'react';
import PrimaryButton from '@/src/components/primary-button/PrimaryButton';
import { inputZodSchema } from '@/src/validation/Validation';

// ✅ Define schema

export default function ValidationLayout() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const onSubmit = () => {
    const result = inputZodSchema.safeParse({ name, email, phone });

    if (!result.success) {
      // Collect errors
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach(err => {
        const field = err.path[0] as string;
        fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    // ✅ Valid form
    setErrors({});
    console.log('Form submitted successfully:', result.data);
  };

  return (
    <View style={styles.container}>
      <PrimaryTextInput
        placeholder={'Enter your Name'}
        value={name}
        onChangeText={setName}
        errorMessage={errors.name}
      />
      <PrimaryTextInput
        placeholder={'Enter your email'}
        value={email}
        onChangeText={setEmail}
        errorMessage={errors.email}
      />
      <PrimaryTextInput
        placeholder={'Enter your phone number'}
        value={phone}
        onChangeText={setPhone}
        keyboardType="numeric"
        errorMessage={errors.phone}
      />
      <PrimaryButton
        style={styles.submitButton}
        title={'Submit'}
        onPress={onSubmit}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  submitButton: {
    marginTop: 32,
  },
});
