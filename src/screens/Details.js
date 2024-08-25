import { React, useState } from 'react'
import { Text, View, SafeAreaView, TouchableOpacity, Image, StyleSheet } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function Details({ navigation, route }) {

  const [iconColor, setIconColor] = useState("black");
  const {item} = route.params;
  console.log(item);



  return (
    <View style={{flex:1, backgroundColor: '#F2E8C6'}}> 
        {/* <View >
        <TouchableOpacity 
         onPressIn={()=> setIconColor('red')}
         onPressOut={()=> setIconColor('black')}
         onPress={()=> navigation.navigate('Home')} 
         style={{margin: 10}} >
          <AntDesign name = 'arrowleft' size={30} color={iconColor} />
        </TouchableOpacity>
        </View> */}
        <View>
          <Image source={item.img} style={style.img} />
          <Text style= {style.headline} >{item.headline}</Text>
          <Text style={style.tagline} >{item.tagline}</Text>
          <View style={style.sizesContainer} >
          {item.sizes.map((size, index) => (
            <Text key={index} style={style.sizeText} >{size}</Text>
          )) }
          </View>
        </View>
      </View>
  )
};

const style = StyleSheet.create({
  img: {
    width: "100%",
    height: undefined,
    aspectRatio: 1,
  },
  headline: {
    marginTop: 20,
    backgroundColor: "red",
    alignItems: 'center',
    marginHorizontal: 20,
    textAlign: 'center',
    paddingVertical: 10,
    fontSize: 14,
    fontWeight: "500",
    color: 'black',
  },
  tagline: {
    fontSize: 12,
    fontWeight: '300',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginTop: 20,
    marginHorizontal: 20,
  },
  sizeText: {
    fontSize: 18,
    marginVertical: 2,
  },
  sizesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap', // Allows the sizes to wrap if they exceed the width
    justifyContent: 'center',
    gap: 10,
  },
});