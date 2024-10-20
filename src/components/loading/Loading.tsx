import React from 'react';
import { View, ActivityIndicator, Text } from 'react-native';
import styles from './LoadingStyle';
import { DefaultTheme } from '@react-navigation/native';

const Loading = () => {
  return (
    <View style={styles.containerLoading}>
      <View style={styles.containerIndicator}>
        <ActivityIndicator size={'large'} color={DefaultTheme.colors.primary} />
        <Text style={styles.loadingTextStyle}>Loading...</Text>
      </View>
    </View>
  );
};

export default Loading;
