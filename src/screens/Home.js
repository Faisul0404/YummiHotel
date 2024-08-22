import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Headline from '../components/Headline';
import SectionOne from '../components/SectionOne';
import SectionTwo from '../components/SectionTwo';
import SectionThree from '../components/SectionThree';

export default function Home() {
  const [iconColor, setIconColor] = useState('black');

  return (
    <>
      <View style={{flex: 1, backgroundColor: '#F2E8C6'}}>
        <View>
          <Headline />
          <SectionOne />
          <SectionTwo />
          <SectionThree />
        </View>

        <View style={style.moreButton}>
          <Text onPress={() => navigation.navigate('Detail')}>
            more details
          </Text>
        </View>
      </View>
    </>
  );
}

const style = StyleSheet.create({
  img: {
    width: '50%',
    height: undefined,
    aspectRatio: 1,
  },
  moreButton: {
    // flex: 1,
    borderRadius: 20,
    color: 'red',
    fontSize: 18,
    backgroundColor: 'cyan',
    padding: 10,
    paddingTop: 10,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 110,
    marginHorizontal: 100,
  },
});
