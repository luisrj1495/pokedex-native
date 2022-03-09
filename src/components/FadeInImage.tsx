import React, {useState} from 'react';
import {
  ActivityIndicator,
  Animated,
  ImageStyle,
  StyleProp,
  StyleSheet,
  View,
} from 'react-native';
import useAnimation from '../hooks/useAnimation';

const FadeInImage: React.VFC<{
  uri: string;
  style?: StyleProp<ImageStyle>;
}> = ({uri, style}) => {
  const {opacity, fadeIn} = useAnimation();
  const [isLoading, setIsLoading] = useState(true);

  const onLoad = () => {
    setIsLoading(false);
    fadeIn();
  };

  return (
    <View
      style={StyleSheet.flatten([
        {justifyContent: 'center', alignItems: 'center'},
        style,
      ])}>
      {isLoading && (
        <ActivityIndicator
          size={30}
          color="gray"
          style={{position: 'absolute'}}
        />
      )}
      <Animated.Image
        source={{uri}}
        onLoadEnd={onLoad}
        style={StyleSheet.flatten([style, {opacity}])}
      />
    </View>
  );
};

export default FadeInImage;
