import * as React from 'react';
import { StatusBar } from "expo-status-bar";
import {Text, StyleSheet,View, Image} from 'react-native';

export default function CategoryScreen(){
     return (
    <View style={styles.container}>
     
        <StatusBar style="auto" />
         
        <Text>....................</Text>
 
        <Image
          style={{ width: 100, height: 100 }}
          source={{ uri: "https://reactjs.org/logo-og.png" }}
        />
       
    </View>
  );
}


