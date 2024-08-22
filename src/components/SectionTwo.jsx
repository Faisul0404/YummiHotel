import {Image, StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';

const items = [
  {
    id: '1',
    title: 'Item 01',
    description: 'Information about item',
    image: require('../../assets/thai-seafood.jpg')
  },
  {
    id: '2',
    title: 'Item 02',
    description: 'Information about item',
    image: require('../../assets/hamburger.jpg')
  },
  {
    id: '3',
    title: 'Item 03',
    description: 'Information about item',
    image: require('../../assets/prown_gravy.jpg')
  },
  {
    id: '4',
    title: 'Item 04',
    description: 'Information about item',
    image: require('../../assets/thai-seafood.jpg')
  },
  {
    id: '5',
    title: 'Item 05',
    description: 'Information about item',
    image: require('../../assets/rice-noodles.jpg')
  },
  {
    id: '6',
    title: 'Item 06',
    description: 'Information about item',
    image: require('../../assets/salad_2515263.png')
  },
  {
    id: '7',
    title: 'Item 07',
    description: 'Information about item',
    image: require('../../assets/thai-seafood.jpg')
  },
  {
    id: '8',
    title: 'Item 08',
    description: 'Information about item',
    image: require('../../assets/prown_gravy.jpg')
  },
];

const ItemCard = ({title, description, image}) => (
    <View style={styles.cardContainer}>
    <Image source={image} style={styles.imgContainer} />
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.description}>{description}</Text>
  </View>
);

export default function SectionTwo() {
  return (
    <View>
      <View>
        <Text style={styles.sectionHeader}> Section 02 </Text>
      </View>
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ItemCard
            title={item.title}
            description={item.description}
            image={item.image}
          />
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
      </View>
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
    alignItems: 'center', // Centers the list items horizontally
    },
    cardContainer: {
      marginBottom: 20,
      alignItems: 'center',
    },
    imgContainer: {
      width: 200,
      height: 200,
      borderRadius: 30,
      marginBottom: 10,
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    description: {
      fontSize: 14,
      color: 'gray',
      textAlign: 'center',
    },
    sectionHeader: {
        fontSize: 24,
        marginBottom: 20,
        fontWeight: "bold",
        textAlign: "center",
    }
  });
  
