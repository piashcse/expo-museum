import { SafeAreaView, StyleSheet, View } from 'react-native';
import { Button } from 'react-native-paper';
import React, { useRef, useState } from 'react';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import BottomSheetSelector from '@/src/components/bottomsheet-selector/BottomSheetSelector';

export default function BottomSheetLayout() {
  const bottomSheetModalRefCountry = useRef<BottomSheetModal>(null);
  const [country, setCountry] = useState('Bangladesh');
  return (
    <SafeAreaView style={styles.container}>
      <Button
        onPress={() => {
          bottomSheetModalRefCountry.current?.present();
        }}
      >
        Bottom Sheet
      </Button>
      <BottomSheetSelector
        ref={bottomSheetModalRefCountry}
        title={'Country'}
        items={['Bangladesh', 'USA', 'China']}
        initialValue={country}
        onApply={setCountry}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});
