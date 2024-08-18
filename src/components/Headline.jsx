import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';

export default function Headline() {
  return (
    <View>
      <SafeAreaView style={{backgroundColor: '#F2E8C6'}}>
        <View style={styles.container}>
          {/* <Image source={require('../../assets/pexels-xmtnguyen-699953.jpg')} style={style.img} /> */}
          <Text style={styles.headerColor}>Yummi Wheels</Text>
          <Text>From Kitchen to Your Doorstep</Text>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'top',
  },
  headerColor: {
    fontWeight: '800',
    fontSize: 30,
    color: '#982B1C',
  },
});
