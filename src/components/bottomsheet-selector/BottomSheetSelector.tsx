import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import { RadioButton } from 'react-native-paper';
import BottomSheetHeader from '../bottomsheet-header/BottomSheetHeader';
import AppDivider from '../divider/AppDivider';
import PrimaryButton from '../primary-button/PrimaryButton';
import styles from './BottomSheetSelector.style';

interface BottomSheetSelectorProps {
  title: string;
  items: string[];
  initialValue?: string;
  onApply: (selected: string) => void;
  buttonTitle?: string;
  styles?: any; // Optional override
}

const BottomSheetSelector = React.forwardRef<
  BottomSheetModal,
  BottomSheetSelectorProps
>(({ title, items, initialValue, onApply, buttonTitle = 'Apply' }, ref) => {
  const initialIndex = initialValue
    ? items.findIndex((item) => item === initialValue)
    : 0;
  const [appliedIndex, setAppliedIndex] = useState(initialIndex);
  const [selectedIndex, setSelectedIndex] = useState(initialIndex);

  useEffect(() => {
    const newIndex = initialValue
      ? items.findIndex((item) => item === initialValue)
      : 0;
    setAppliedIndex(newIndex);
    setSelectedIndex(newIndex);
  }, [initialValue, items]);

  const handleApply = () => {
    setAppliedIndex(selectedIndex); // update confirmed selection
    onApply(items[selectedIndex]);
    (ref as React.RefObject<BottomSheetModal>)?.current?.dismiss();
  };

  const handleDismiss = () => {
    // Reset selection if user cancels or swipes down
    setSelectedIndex(appliedIndex);
  };

  return (
    <BottomSheetModal
      ref={ref}
      enableDismissOnClose={true}
      onDismiss={handleDismiss}
      backdropComponent={(props) => (
        <BottomSheetBackdrop
          {...props}
          appearsOnIndex={0}
          disappearsOnIndex={-1}
          pressBehavior="close"
        />
      )}
    >
      <BottomSheetView style={styles.bottomSheetStyle}>
        <BottomSheetHeader title={title} />
        <View style={styles.radioButtonContainer}>
          <AppDivider marginVertical={16} />
          <RadioButton.Group
            onValueChange={(value) => setSelectedIndex(parseInt(value))}
            value={selectedIndex.toString()}
          >
            {items.map((item, index) => (
              <TouchableOpacity
                key={`${item}-${index}`}
                style={styles.radioButtonStyle}
                onPress={() => setSelectedIndex(index)}
              >
                <RadioButton value={index.toString()} />
                <Text>{item}</Text>
              </TouchableOpacity>
            ))}
          </RadioButton.Group>
        </View>
        <AppDivider marginVertical={16} />
        <PrimaryButton
          title={buttonTitle}
          borderRadius={16}
          style={styles.applyButtonStyle}
          onPress={handleApply}
        />
      </BottomSheetView>
    </BottomSheetModal>
  );
});

export default BottomSheetSelector;
