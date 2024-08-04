import React from 'react'
import { StyleSheet, Text, View, Image, Button } from 'react-native';


function Welcome({ navigation }) {
  return (
    <View style={styles.container}>
       <Image source={require('../../assets/salad_2515263.png')} style={styles.imageStyle} />
      <Text style={styles.headline}>Yummie Wheels</Text>
      <Text style={{ color: "black", fontWeight: "900", marginBottom: 20,}}>From Kitchen to Your Doorstep</Text>
      <Button title='start' color={"red"} onPress={() => navigation.navigate('TabNavigator')}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
      },
      imageStyle: {
    width: "50%",
    height: undefined,
    aspectRatio: 1,
  },
  headline: {
    fontSize: 30,
    fontWeight: "bold",
    color: "red",
    fontStyle: "italic",
    marginTop: 20,
  },
})

export default Welcome;