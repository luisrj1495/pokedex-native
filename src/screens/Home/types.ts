import {ReactElement} from 'react';
import {StyleProp, TextStyle} from 'react-native';
import {PokemonItemType} from '../../hooks/usePokemos/types';

export type ListPropsType = {
  data: PokemonItemType[];
  onEndReached?: () => void;
  ListFooterComponent?: ReactElement;
  headerText?: string;
  headerStyle?: StyleProp<TextStyle>;
};
