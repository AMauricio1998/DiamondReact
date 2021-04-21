import React, { PureComponent, Component } from "react";
import {Image, Text, StyleSheet, View ,TouchableOpacity, FlatList, ActivityIndicator} from "react-native";
 
export default class ComprasCard extends PureComponent{

  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: true
    };
  }

  componentDidMount() {
    fetch('https://cdvlgeda.lucusvirtual.es/api/categories')
      .then((response) => response.json())
      .then((json) => {
        this.setState({ data: json.productos });
      })
      .catch((error) => console.error(error))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  }



    render() {
      const { data, isLoading } = this.state;
          return(
            <View style={styles.container}>
              {isLoading ? <ActivityIndicator/> : (
              <FlatList
              data={data}
              keyExtractor={({ id }, index) => id}
              renderItem={({ item }) => (
                <TouchableOpacity style={styles.card}>
                    <Image style={styles.cardImage} source={{uri: item.photo}}/>
                    <Text style={styles.cardText}>Nombre: {item.name}</Text>
                    <Text style={styles.cardText}>Descripcion : {item.description}</Text>
                    <Text style={styles.cardText}>Precio : {item.price}</Text>
                </TouchableOpacity>
                )}
              />
            )}
            </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
  },
  cardText:{
      fontSize:16,
      padding: 10,
      fontFamily: 'serif',
  },
  card:{
      backgroundColor: '#fff',
      marginBottom: 10,
      marginLeft: '2%',
      width: '96%',
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
  cardImage: {
      borderRadius: 9,
      borderWidth: 0.5,
      borderColor:'#000',
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  loader: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})