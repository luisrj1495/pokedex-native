import React from 'react';
import {Text, StyleSheet, FlatList} from 'react-native';

import Item from './Item';

import {globalStyles} from '../../theme/app';

import {ListPropsType} from './types';

const List: React.VFC<ListPropsType> = ({
  data,
  onEndReached,
  ListFooterComponent,
  headerText,
  headerStyle = {}
}) => {
  return (
    <FlatList
      numColumns={2}
      ListHeaderComponent={
        headerText === undefined ? undefined : (
          <Text
            style={StyleSheet.flatten([
              globalStyles.title,
              headerStyle
              ,
            ])}>
            {headerText}
          </Text>
        )
      }
      style={{marginHorizontal: 10}}
      data={data}
      renderItem={props => <Item pokemon={props.item} />}
      keyExtractor={pokemon => pokemon.id}
      onEndReached={onEndReached}
      onEndReachedThreshold={0.4}
      showsVerticalScrollIndicator={false}
      ListFooterComponent={ListFooterComponent}
    />
  );
};

export default List;
