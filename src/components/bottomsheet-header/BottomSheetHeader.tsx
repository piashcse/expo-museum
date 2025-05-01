import { View } from 'react-native';
import Icon from '@expo/vector-icons/MaterialIcons';
import styles from './BottomSheetHeader.style';
import { useBottomSheet } from '@gorhom/bottom-sheet';
import PrimaryTextView from '../primary-text-view/PrimaryTextView';

const BottomSheetHeader = ({ title }: { title: string }) => {
  const bottomSheet = useBottomSheet();
  return (
    <View style={styles.container}>
      <PrimaryTextView fontSize={18} fontFamily={'semiBold'}>
        {title}
      </PrimaryTextView>
      <Icon
        name={'close'}
        size={24}
        onPress={() => {
          bottomSheet.close();
        }}
      />
    </View>
  );
};

export default BottomSheetHeader;
