import { React, useState } from 'react'
import { Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function Details({ navigation }) {

  const [iconColor, setIconColor] = useState("black");

  return (
    <SafeAreaView style={{flex:1, backgroundColor: '#F2E8C6'}}> 
        <View >
        <TouchableOpacity 
         onPressIn={()=> setIconColor('red')}
         onPressOut={()=> setIconColor('black')}
         onPress={()=> navigation.navigate('Home')} 
         style={{margin: 10}} >
          <AntDesign name = 'arrowleft' size={30} color={iconColor} />
        </TouchableOpacity>
        </View>
      </SafeAreaView>
  )
}