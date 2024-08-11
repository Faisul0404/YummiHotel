import React, { useState } from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function Home({ navigation }) {

  const [iconColor, setIconColor] = useState("black");

  return (
    <SafeAreaView style={{flex:1, backgroundColor: 'gold'}}> 
        <View >
        <TouchableOpacity 
         onPressIn={()=> setIconColor('red')}
         onPressOut={()=> setIconColor('black')}
         onPress={()=> navigation.navigate('Welcome')} 
         style={{margin: 10}} >
          <AntDesign name = 'arrowleft' size={30} color={iconColor} />
        </TouchableOpacity>
        </View>
        <View style={style.container}>
          <Image source={require('../../assets/pexels-xmtnguyen-699953.jpg')} style={style.img} />
          <Text style={style.headerColor}>Home</Text>
          <Text>Test One</Text>

          <View style={style.moreButton} >
     <Text onPress={() => navigation.navigate('Detail')}  >more details</Text>
     </View>
        </View>
    </SafeAreaView>
  )
}


const style = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: "50%",
    height: undefined,
    aspectRatio: 1,
  }, 
  headerColor: {
    fontWeight: "800",
        fontSize: 30,
        color: 'blue',
  },
  moreButton: {
    borderRadius: 10,
    color: "red",
    fontSize: 18,
    backgroundColor: "cyan",
    padding: 10,
    paddingTop: 10,
  },
})