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

export const styles = StyleSheet.create({
  cardWrapper: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 10,
    marginBottom: 20,
    borderRadius: 10,
  },
  sectionContainer: {
    padding: 24,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderRadius: 10,
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
