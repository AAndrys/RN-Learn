import React from 'react';
import type {PropsWithChildren} from 'react';
import {Image, StyleSheet, Text, useColorScheme, View} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
  price: string;
  image: string;
}>;

const ProductCard = ({
  title,
  price,
  image,
}: SectionProps): React.JSX.Element => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.sectionContainer}>
      {image && (
        <Image
          source={{uri: image}}
          style={{width: '100%', height: 300, objectFit: 'cover'}}
          //   style={StyleSheet.absoluteFill}
        />
      )}

      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        Price: <Text style={styles.highlight}>{price} $</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    height: 450,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default ProductCard;
