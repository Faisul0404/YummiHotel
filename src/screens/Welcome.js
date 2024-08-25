import React from 'react';
import {StyleSheet, Text, View, Image, Button, ImageBackground, TouchableOpacity} from 'react-native';

function Welcome({navigation}) {
  return (
    <ImageBackground style={{flex:1, }} source={require('../../assets/backgroundImage/bg01.jpg')} >
    <View style={styles.container}>
      <Image
        source={require('../../assets/salad_2515263.png')}
        style={styles.imageStyle}
      />
      <Text style={styles.headline}>Yummie Wheels</Text>
      <Text style={{color: 'black', fontWeight: '900', marginBottom: 20}}>
        From Kitchen to Your Doorstep
      </Text>
      <View style={styles.button} >
      {/* <Button
        title="start"
        color={'white'}
        onPress={() => navigation.navigate('TabNavigator')}
      /> */}
      <TouchableOpacity onPress={() => navigation.navigate('TabNavigator')} style={styles.button} >
        <Text  style={styles.buttonText}>Start</Text>
      </TouchableOpacity>
      </View>
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyle: {
    width: '50%',
    height: undefined,
    aspectRatio: 1,
  },
  headline: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'red',
    fontStyle: 'italic',
    marginTop: 20,
  },
  button: {
    backgroundColor: 'red',
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 5,
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '300',
    color: 'white',
  },
});

export default Welcome;
