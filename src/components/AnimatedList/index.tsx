import React, {useRef} from 'react';
import {Animated, TextStyle, ViewStyle} from 'react-native';

import uuid from 'react-native-uuid';

interface AnimatedListProps {
  children: (props: {item: any}) => React.ReactNode;
  data: any[];
  itemSize: number;
  restStyles?: ViewStyle | TextStyle;
}

const AnimatedList = ({
  children,
  data,
  itemSize,
  restStyles = {},
}: AnimatedListProps): React.JSX.Element => {
  const scrollY = useRef(new Animated.Value(0)).current;

  const handleOnScroll = Animated.event(
    [{nativeEvent: {contentOffset: {y: scrollY}}}],
    {useNativeDriver: true},
  );

  const ChildComponent = children as React.ElementType;

  return (
    <Animated.FlatList
      data={data}
      onScroll={handleOnScroll}
      keyExtractor={() => uuid.v4().toString()}
      contentContainerStyle={{padding: 20}}
      renderItem={({item, index}) => {
        const inputRange = [-1, 0, itemSize * index, itemSize * (index + 2)];

        const opacityInputRange = [
          -1,
          0,
          itemSize * index,
          itemSize * (index + 1),
        ];

        const scale = scrollY.interpolate({
          inputRange,
          outputRange: [1, 1, 1, 0],
          extrapolate: 'clamp',
        });

        const opacity = scrollY.interpolate({
          inputRange: opacityInputRange,
          outputRange: [1, 1, 1, 0],
          extrapolate: 'clamp',
        });

        return (
          <Animated.View
            style={{
              opacity,
              transform: [{scale}],
              ...restStyles,
            }}>
            <ChildComponent item={item} />
          </Animated.View>
        );
      }}
    />
  );
};

export default AnimatedList;
