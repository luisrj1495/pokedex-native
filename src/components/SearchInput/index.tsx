import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {styles} from './styles';

import {SearchInputPropsType} from './types';

const SearchInput: React.VFC<SearchInputPropsType> = ({
  style = {},
  value,
  onChange,
}) => {
  return (
    <View style={StyleSheet.flatten([styles.container, style])}>
      <View style={styles.textBackground}>
        <TextInput
          placeholder="Search Pokemon"
          style={styles.input}
          autoCapitalize="none"
          autoCorrect={false}
          autoFocus
          value={value}
          onChangeText={onChange}
        />
        <Icon size={20} name="search-outline" color="black" />
      </View>
    </View>
  );
};

export default SearchInput;
