import * as React from 'react';
import { useState } from 'react'
import { StatusBar } from "expo-status-bar";
import {Text, StyleSheet,View, Image, FlatList} from 'react-native';

export default function CategoryScreen(){
  const [images, setimages] = useState([
    require('../../../assets/images/collar.jpg'),
    require('../../../assets/images/collar1.jpg'),
    require('../../../assets/images/collar111.jpg'),
    require('../../../assets/images/reloj2.jpg'),
    require('../../../assets/images/relog11.jpg'),
    require('../../../assets/images/reloj3.jpg'),
    require('../../../assets/images/collar.jpg'),
    require('../../../assets/images/collar.jpg'),
    require('../../../assets/images/collar.jpg')
  ]);
     return (
    <FlatList
    data={images}
    key={"2"}
    numColumns={2}
    renderItem={({ item }) => (
      <View style={styles.container}>
        <Image
          source={item}
          style={{
            width: 170,
            height: 200,
            borderWidth: 2,
            borderColor: "#212F3C",
            resizeMode: "contain",
            margin: 5,
          }}
          keyExtractor={(item) => item.id}
        />
        
      </View>
    )}
  />
  );
}


const styles = StyleSheet.create({
    container: {
    flex: 1,
    padding: 1,
    },
    });