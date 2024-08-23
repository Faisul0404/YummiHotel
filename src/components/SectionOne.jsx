import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';

const SectionOneData = [
  {
    id: '01',
    headline: 'Product 01',
    tagline: 'About the product 01',
    img: require('../../assets/hamburger.jpg'),
  },
  {
    id: '02',
    headline: 'Product 02',
    tagline: 'About the product 02',
    img: require('../../assets/prown_gravy.jpg'),
  },
  {
    id: '03',
    headline: 'Product 03',
    tagline: 'About the product 03',
    img: require('../../assets/hamburger.jpg'),
  },
  {
    id: '04',
    headline: 'Product 04',
    tagline: 'About the product 04',
    img: require('../../assets/thai-seafood.jpg'),
  },
  {
    id: '05',
    headline: 'Product 05',
    tagline: 'About the product 05',
    img: require('../../assets/rice-noodles.jpg'),
  },
  {
    id: '06',
    headline: 'Product 06',
    tagline: 'About the product 06',
    img: require('../../assets/hamburger.jpg'),
  },
];

export default function SectionOne() {
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {SectionOneData.map(item => (
          <TouchableOpacity key={item.id} onPress={() => alert(item.id)}>
            <View style={styles.imgContainer}>
              <Image source={item.img} style={styles.imgStyle} />
              <Text style={styles.headline}>{item.headline}</Text>
              <Text>{item.tagline}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  imgContainer: {
    marginRight: 10,
  },
  imgStyle: {
    width: 200,
    height: undefined,
    aspectRatio: 1,
    borderRadius: 30,
  },
  headline: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingTop: 10,
    paddingBottom: 5,
  },
  subHead: {
    fontFamily: 16,
  },
});
