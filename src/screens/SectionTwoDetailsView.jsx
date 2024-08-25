import {StyleSheet, Text, View, Image, Button} from 'react-native';
import React from 'react';

const SectionTwoDetailsView = ({navigation, route}) => {
  const {item} = route.params;
  console.log(item);

  return (
    <View style={{flex: 1, backgroundColor: '#F2E8C6', alignItems: 'center'}}>
      <Image source={item.image} style={styles.img} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <View style={styles.button}>
        <Button title="Buy Now" color={'#800000'} />
      </View>
    </View>
  );
};

export default SectionTwoDetailsView;

const styles = StyleSheet.create({
  img: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20,
  },
  description: {
    fontSize: 12,
    fontWeight: '500',
    marginTop: 10,
    marginHorizontal: 20,
    marginBottom: 100,
  },
  button: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
