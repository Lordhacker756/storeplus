import React from 'react';
import {View, Text} from 'react-native';
import {COLORS, constants, FONTS, SIZES} from '../../constants';
import {Animated} from 'react-native';
import {TextButton} from '../../components';
import WalkthroughGallery from './WalkthroughGallery';

const Walkthrough = () => {
  // Storing the scrolled distance value
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const dotPosition = Animated.divide(scrollX, SIZES.width);

  // Dots
  const Dots = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {constants.walkthrough.map((item, index) => {
          const dotColor = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [COLORS.dark08, COLORS.primary, COLORS.dark08],
            extrapolate: 'clamp',
          });
          return (
            <Animated.View
              key={`dot-${index}`}
              style={{
                borderRadius: 5,
                marginHorizontal: 6,
                width: 10,
                height: 10,
                backgroundColor: dotColor,
              }}></Animated.View>
          );
        })}
      </View>
    );
  };

  function renderFooter() {
    return (
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: SIZES.height * 0.2,
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: SIZES.padding,
          paddingVertical: SIZES.height > 700 ? SIZES.padding : 20,
        }}>
        <Dots />

        {/* Buttons */}
        <View
          style={{
            flexDirection: 'row',
            height: 55,
          }}>
          <TextButton
            label="Join Now"
            contentContainerStyle={{
              flex: 1,
              borderRadius: SIZES.radius,
              backgroundColor: COLORS.lightGrey,
            }}
            labelStyle={{
              color: COLORS.primary,
              ...FONTS.h3,
            }}
          />
          <TextButton
            label="Log In"
            contentContainerStyle={{
              flex: 1,
              borderRadius: SIZES.radius,
              marginLeft: SIZES.radius,
              backgroundColor: COLORS.primary,
            }}
            labelStyle={{
              color: COLORS.light,
              ...FONTS.h3,
            }}
          />
        </View>
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.light,
      }}>
      {/* The horizontal gallery */}
      <Animated.FlatList
        data={constants.walkthrough}
        horizontal
        keyExtractor={item => item.id}
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
        showEventThrottle={160}
        // Taking the scrolled distance value and storing it in scrollX
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: false},
        )}
        renderItem={({item, index}) => {
          return (
            <View
              style={{
                width: SIZES.width,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              {/* Walkthough Images */}
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                }}>
                {index === 0 && <WalkthroughGallery />}
              </View>

              {/* Title and Description */}
              <View
                style={{
                  height: SIZES.height * 0.5,
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  paddingHorizontal: SIZES.padding,
                }}>
                <Text
                  style={{
                    ...FONTS.h1,
                    color: COLORS.dark,
                  }}>
                  {item.title}
                </Text>
                <Text
                  style={{
                    marginTop: SIZES.radius,
                    ...FONTS.body3,
                    textAlign: 'center',
                    color: COLORS.grey,
                  }}>
                  {item.sub_title}
                </Text>
              </View>
            </View>
          );
        }}
      />
      {renderFooter()}
    </View>
  );
};

export default Walkthrough;
