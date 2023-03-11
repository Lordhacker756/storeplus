import React from 'react';
import {FlatList} from 'react-native-gesture-handler';
import {View, Image} from 'react-native';
import {SIZES, constants} from '../../constants';

const ITEM_WIDTH = 120;

const WalkthroughGallery = () => {
  // Row 1
  const [rowImages, setRowImages] = React.useState([
    ...constants.walkthrough_01_01_images,
    ...constants.walkthrough_01_02_images,
  ]);

  const [currentPostion, setCurrentPostion] = React.useState(0);

  // Row 2
  const [row2Images, setRow2Images] = React.useState([
    ...constants.walkthrough_01_01_images,
    ...constants.walkthrough_01_02_images,
  ]);

  const [currentPostion2, setCurrentPostion2] = React.useState(0);

  // Refs

  const row1FlatListRef = React.useRef();
  const row2FlatListRef = React.useRef();

  return (
    <View>
      {/* Slider 1 */}
      <FlatList
        ref={row1FlatListRef}
        decelerationRate="fast"
        horizontal
        showsHorizontalScrollIndicator={false}
        listKey="Slider1"
        keyExtractor={(_, index) => `Slider1_${index}`}
        data={rowImages}
        renderItem={({item, index}) => {
          return (
            <View
              style={{
                width: ITEM_WIDTH,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={item}
                style={{
                  width: 110,
                  height: 110,
                }}
              />
            </View>
          );
        }}
        onMomentumScrollEnd={event => {
          const position = Math.round(
            event.nativeEvent.contentOffset.x / ITEM_WIDTH,
          );
          setCurrentPostion(position);
        }}
      />
      {/* Slider 2 */}
    </View>
  );
};

export default WalkthroughGallery;
