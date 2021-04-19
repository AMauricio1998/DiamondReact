import React, { useEffect, useState } from 'react';
import { StatusBar } from "expo-status-bar";
import {Text, ActivityIndicator, StyleSheet,View, Image, FlatList} from 'react-native';

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
      <Text>{item.name}, {item.description}</Text>,
      <Image
          source={{uri:item.photo}}
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
    });