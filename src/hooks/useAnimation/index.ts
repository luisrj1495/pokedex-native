import {useRef} from 'react';
import {Animated} from 'react-native';

const useAnimation = () => {
  const opacity = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(opacity, {
      toValue: 1,
      useNativeDriver: true,
      duration: 1000,
    }).start();
  };
  const fadeOut = () => {
    Animated.timing(opacity, {
      useNativeDriver: true,
      toValue: 0,
      duration: 1000,
    }).start();
  };

  return {opacity, fadeIn, fadeOut};
};

export default useAnimation;
