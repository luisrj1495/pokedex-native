import {StyleProp, ViewStyle} from 'react-native';

export type SearchInputPropsType = {
  style?: StyleProp<ViewStyle>;
  value: string;
  onChange: (value: string) => void;
};
