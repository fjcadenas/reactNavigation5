import React from 'react';
import {View, Text} from 'react-native';

function Home({navigation}) {
  return (
    <View>
      <Text>Hello world</Text>
      <Text onPress={() => navigation.navigate('Auth')}>LOGOUT</Text>
    </View>
  );
}

export default Home;
