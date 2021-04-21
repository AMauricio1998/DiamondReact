import React, { PureComponent, Component } from "react";
import {Image, Text, StyleSheet, View ,TouchableOpacity, FlatList, ActivityIndicator, ImageBackground} from "react-native";
 
export default class ComprasCard extends PureComponent{

  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: true
    };
  }

  componentDidMount() {
    fetch('https://cdvlgeda.lucusvirtual.es/api/envios')
      .then((response) => response.json())
      .then((json) => {
        this.setState({ data: json.envio });
      })
      .catch((error) => console.error(error))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  }



    render() {
      const { data, isLoading } = this.state;
          return(
            <ImageBackground source={require('../../../assets/images/diamond1.jpg')} style={styles.backgroundImage} >
            <View style={styles.container}>
              {isLoading ? <ActivityIndicator/> : (
              <FlatList
              data={data}
              keyExtractor={({ id }, index) => id}
              renderItem={({ item }) => (
                <TouchableOpacity style={styles.card}>
                    <Image style={styles.cardImage} source={{uri: 'https://media.istockphoto.com/vectors/order-delivery-status-post-parcel-package-tracking-vector-icons-order-vector-id1205607205'}}/>
                    <Text style={styles.cardText}>id de la venta: {item.id_envio}</Text>
                    <Text style={styles.cardText}>Calle : {item.calle}</Text>
                    <Text style={styles.cardText}>Fecha de entrega : {item.fecha}</Text>
                    <Text style={styles.cardText}>Codigo postal : {item.codigo_postal}</Text>
                </TouchableOpacity>
                )}
              />
            )}
            </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
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
  },
  backgroundImage: {
    flex: 1,
    // width: undefined,
    // height: undefined,
    // flexDirection: 'column',
    // backgroundColor:'transparent',
    // justifyContent: 'flex-start',
}
})