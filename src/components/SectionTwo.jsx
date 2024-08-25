import {Image, StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const items = [
  {
    id: '1',
    title: 'Item 01',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages',
    image: require('../../assets/thai-seafood.jpg'),
    price: 'Rs. 1200.00',
  },
  {
    id: '2',
    title: 'Item 02',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages',
    image: require('../../assets/hamburger.jpg'),
    price: 'Rs. 1500.00',
  },
  {
    id: '3',
    title: 'Item 03',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages',
    image: require('../../assets/prown_gravy.jpg'),
    price: 'Rs. 2200.00',
  },
  {
    id: '4',
    title: 'Item 04',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages',
    image: require('../../assets/thai-seafood.jpg'),
    price: 'Rs. 3999.00',
  },
  {
    id: '5',
    title: 'Item 05',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages',
    image: require('../../assets/rice-noodles.jpg'),
    price: 'Rs. 200.00',
  },
  {
    id: '6',
    title: 'Item 06',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages',
    image: require('../../assets/salad_2515263.png'),
    price: 'Rs. 1200.00',
  },
  {
    id: '7',
    title: 'Item 07',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages',
    image: require('../../assets/thai-seafood.jpg'),
    price: 'Rs. 2340.00',
  },
  {
    id: '8',
    title: 'Item 08',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages',
    image: require('../../assets/prown_gravy.jpg'),
    price: 'Rs. 1200.00',
  },
];

const ItemCard = ({ item }) => {

  const navigation = useNavigation();
  return (
    <View style={styles.cardContainer}>
      <Image source={item.image} style={styles.imgContainer} />
      <TouchableOpacity onPress={() => navigation.navigate('SectionTwoDetails', { item }) }>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description} numberOfLines={3}>{item.description}</Text>
        <Text style={styles.price}>{item.price}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default function SectionTwo() {

  return (
    <>
      <View>
        <Text style={styles.sectionHeader}>Featured Products</Text>
      </View>
      <View>
        <FlatList
          data={items}
          renderItem={({item}) => <ItemCard item = {item} /> }
          keyExtractor={item => item.id}
          contentContainerStyle={styles.listContainer}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  listContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20, // Adds padding at the bottom to ensure the last item is fully visible
    alignItems: 'flex-start', // Centers the list items horizontally
    marginTop: 20,
    marginRight: 120,
  },
  cardContainer: {
    marginBottom: 20,
    flexDirection: 'row',
    gap: 20,
    justifyContent: 'flex-start',
    paddingLeft: 10,
    paddingVertical: 10,
    backgroundColor: '#F2E8C6',
    paddingRight: 100,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,

    elevation: 13,
  },
  imgContainer: {
    width: 100,
    height: undefined,
    aspectRatio: 1,
    borderRadius: 10,
    // marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: 'black',
    textAlign: 'left',
    flexWrap: 'wrap',
    marginRight: 30,
  },
  sectionHeader: {
    fontSize: 26,
    // marginBottom: 20,
    // fontWeight: 'bold',
    // textAlign: 'center',
    marginLeft: 20,
  },
  price: {
    fontSize: 14,
    marginTop: 10,
    fontWeight: 'bold',
  },
});
