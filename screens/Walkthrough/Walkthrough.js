import React from 'react';
import {View, Text} from 'react-native';
import {COLORS} from '../../constants';
import Animated from 'react-native-reanimated';

const Walkthrough = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.light,
      }}>
      {/* The horizontal gallery */}
      <Animated.FlatList />
    </View>
  );
};

export default Walkthrough;
