import React, { useEffect, useState } from 'react';
import { StatusBar } from "expo-status-bar";
import {Text, ActivityIndicator, StyleSheet,View, Image, FlatList, TouchableOpacity } from 'react-native';
import ComponentSlider from '../../../components/slider/ComponentSlider';

export default function CategoryScreen(){
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
  fetch('https://cdvlgeda.lucusvirtual.es/api/categories')
  .then((response) => response.json())
  .then((json) => setData(json.productos))
  .then(console.log(setData))

  .catch((error) => console.error(error))
  .finally(() => setLoading(false));
  }, []);

     return (

       <View style={styles.container}>
               
         {isLoading ? <ActivityIndicator/> :(
    <FlatList
          data={data}
          key={"2"}
          numColumns={2}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.card}>
      <Image
          source={{uri:item.photo}}
          style={{
            width: 170,
            height: 100,
            borderWidth: 2,
            borderColor: "#212F3C",
            resizeMode: "contain",
            margin: 5,
            marginBottom: 10,
          }}
          keyExtractor={(item) => item.id}
      />
      <Text style={styles.cardText}>Precio : {item.price}</Text>
      </TouchableOpacity>
        
                )}
    />
         )}
  </View>
  );
}


const styles = StyleSheet.create({
    container: {
    flex: 1,
    padding: 1,
    },
    cardText:{
      fontSize:16,
      padding: 10,
      fontFamily: 'serif',
  },
  card:{
    backgroundColor: '#fff',
    marginBottom: 10,
    marginLeft: '0%',
    width: '50%',
    borderRadius: 9,
    borderWidth: 0.5,
    borderColor:'#000',
    shadowColor: '#000',
    shadowOpacity: 1,
    shadowOffset: {
        width: 3,
        height: 3
    }
},
    });