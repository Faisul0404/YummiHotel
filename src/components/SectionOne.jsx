import {StyleSheet, Text, View, Image, TouchableOpacity, Alert} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';

export default function SectionOne() {
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <TouchableOpacity onPress={() => alert("alert 01")}>
        <View style={styles.imgContainer}>
          <Image
            source={require('../../assets/pexels-xmtnguyen-699953.jpg')}
            style={styles.imgStyle}
          />
          <Text style={styles.headline}>Headline</Text>
          <Text>About the product - Tagline</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert("alert 02")}>
        <View style={styles.imgContainer}>
          <Image
            source={require('../../assets/rice-noodles-with-chicken-vegetables.jpg')}
            style={styles.imgStyle}
          />
          <Text style={styles.headline}>Headline</Text>
          <Text>About the product - Tagline</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert("alert 03")}>
        <View style={styles.imgContainer}>
          <Image
            source={require('../../assets/big-sandwich-hamburger-burger-with-beef-red-onion-tomato-fried-bacon.jpg')}
            style={styles.imgStyle}
          />
          <Text style={styles.headline}>Headline</Text>
          <Text>About the product - Tagline</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert("alert 04")}>
        <View style={styles.imgContainer}>
          <Image
            source={require('../../assets/thai-food-noodles-spicy-boil-with-seafood-pork-hot-pot.jpg')}
            style={styles.imgStyle}
          />
          <Text style={styles.headline}>Headline</Text>
          <Text>About the product - Tagline</Text>
        </View>
        </TouchableOpacity>
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
