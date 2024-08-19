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
            source={require('../../assets/prown_gravy.jpg')}
            style={styles.imgStyle}
          />
          <Text style={styles.headline}>Headline</Text>
          <Text>About the product - Tagline</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert("alert 02")}>
        <View style={styles.imgContainer}>
          <Image
            source={require('../../assets/rice-noodles.jpg')}
            style={styles.imgStyle}
          />
          <Text style={styles.headline}>Headline</Text>
          <Text>About the product - Tagline</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert("alert 03")}>
        <View style={styles.imgContainer}>
          <Image
            source={require(`../../assets/hamburger.jpg`)}
            style={styles.imgStyle}
          />
          <Text style={styles.headline}>Headline</Text>
          <Text>About the product - Tagline</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert("alert 04")}>
        <View style={styles.imgContainer}>
          <Image
            source={require('../../assets/thai-seafood.jpg')}
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
