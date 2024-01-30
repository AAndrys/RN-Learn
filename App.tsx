import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import ProductCard from './src/components/ProductCard';
import {TEMP_PRODUCTS_CARDS} from './src/constants/TEMP_DATA';
import Section from './src/components/Section';

import {styles as productCardStyles} from './src/components/ProductCard';
import AnimatedList from './src/components/AnimatedList';

const App = (): React.JSX.Element => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const ITEM_SIZE = 433;

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />

      <Section title="Welcome to the shop!">Check our sweet images!</Section>

      <AnimatedList
        data={TEMP_PRODUCTS_CARDS}
        itemSize={ITEM_SIZE}
        restStyles={productCardStyles.cardWrapper}>
        {({item}) => <ProductCard {...item} />}
      </AnimatedList>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default App;
