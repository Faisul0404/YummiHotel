import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
  ScrollView
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const SectionOneData = [
  {
    id: '01',
    headline: 'Product 01',
    tagline: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages',
    img: require('../../assets/hamburger.jpg'),
    sizes: ['XS', 'S', 'M', 'L'],
  },
  {
    id: '02',
    headline: 'Product 02',
    tagline: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages',
    img: require('../../assets/prown_gravy.jpg'),
    sizes: ['XS', 'S', 'M', 'L'],
  },
  {
    id: '03',
    headline: 'Product 03',
    tagline: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages',
    img: require('../../assets/hamburger.jpg'),
    sizes: ['XS', 'S', 'M', 'L'],
  },
  {
    id: '04',
    headline: 'Product 04',
    tagline: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages',
    img: require('../../assets/thai-seafood.jpg'),
    sizes: ['XS', 'S', 'M', 'L'],
  },
  {
    id: '05',
    headline: 'Product 05',
    tagline: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages',
    img: require('../../assets/rice-noodles.jpg'),
    sizes: ['XS', 'S', 'M', 'L'],
  },
  {
    id: '06',
    headline: 'Product 06',
    tagline: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages',
    img: require('../../assets/hamburger.jpg'),
    sizes: ['XS', 'S', 'M', 'L'],
  },
];

export default function SectionOne() {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {SectionOneData.map(item => (
          <TouchableOpacity key={item.id} onPress={() => navigation.navigate('Detail', { item } )}>
            <View style={styles.imgContainer}>
              <Image source={item.img} style={styles.imgStyle} />
              <Text style={styles.headline}>{item.headline}</Text>
              {/* <Text>Sizes: {item.sizes.join(', ')}</Text> */}
              {/* <Text>{item.tagline}</Text> */}
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
