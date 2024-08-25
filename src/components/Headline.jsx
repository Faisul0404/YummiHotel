import {StyleSheet, Text, View, SafeAreaView, Image} from 'react-native';
import React from 'react';

export default function Headline() {
  return (
    <View>
      <SafeAreaView style={styles.container}>
        <View>
          <Image
            source={require('../../assets/salad_2515263.png')}
            style={styles.img}
          />
        </View>
        <View>
          <Text style={styles.headerColor}>Yummi Wheels</Text>
          <Text style={styles.subTitile}>From Kitchen to Your Doorstep</Text>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    gap: 20,
    backgroundColor: '#F2E8C6',
  },
  headerColor: {
    fontWeight: '800',
    fontSize: 30,
    color: '#982B1C',
  },
  subTitile: {
    color: '#982B3C',
  },
  img: {
    width: 70,
    height: undefined,
    aspectRatio: 1,
    marginLeft: 20,
  },
});
