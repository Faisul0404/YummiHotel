import React from 'react'
import { Text, View, SafeAreaView, StyleSheet } from 'react-native'

export default function Products() {
  return (
   <SafeAreaView style={{flex:1, backgroundColor: '#F2E8C6'}}>
          <View style={style.container} >
            <Text>Products</Text>
          </View>
   </SafeAreaView>
  )
}

const style = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },

})