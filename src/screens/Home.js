import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function Home({ navigation }) {

  const [iconColor, setIconColor] = useState("black");

  return (
    <SafeAreaView style={{flex:1, backgroundColor: 'gold'}}> 
        <View >
         <TouchableOpacity 
         onPressIn={()=> setIconColor('red')}
         onPressOut={()=> setIconColor('black')}
         onPress={()=> navigation.navigate('Welcome')} >
          <AntDesign name = 'arrowleft' size={30} color={iconColor} />
         </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}


const style = StyleSheet.create({

})