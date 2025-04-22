import { View } from 'react-native';
import styles from './Divider.style';
import Colors from '@/src/constants/Colors';

interface DividerProps {
  color?: string;
  marginVertical?: number;
  marginHorizontal?: number;
}
const AppDivider = (props: DividerProps) => {
  const {
    color = Colors.light.black_25,
    marginVertical,
    marginHorizontal,
  } = props;
  return (
    <View
      style={[
        styles.divider,
        { backgroundColor: color, marginVertical, marginHorizontal },
      ]}
    />
  );
};

export default AppDivider;
