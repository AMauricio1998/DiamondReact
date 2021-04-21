import React, { PureComponent, Component } from "react";
import {Image, Text, StyleSheet, View ,TouchableOpacity, FlatList, ActivityIndicator, ImageBackground} from "react-native";
 
export default class infoScreen extends PureComponent{

  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: true
    };
  }

  componentDidMount() {
    fetch('https://cdvlgeda.lucusvirtual.es/api/usuarios')
      .then((response) => response.json())
      .then((json) => {
        this.setState({ data: json.usuarios });
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
                    <Image style={styles.cardImage} source={{uri: 'https://live.mrf.io/statics/i/ps/www.movilzona.es/app/uploads/2019/05/Foto-de-Perfil-en-WhatsApp-696x364.jpg?width=1200&enable=upscale'}}/>
                    <Text style={styles.cardText}>Nombre: {item.nombre} {item.app} {item.app}</Text>
                    <Text style={styles.cardText}>Tipo de usuario: {item.tipo} </Text>
                    <Text style={styles.cardText}>Contacto : {item.tel}</Text>
                    <Text style={styles.cardText}>Email : {item.email}</Text>
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
          height: 3,
      }
  },
  cardImage: {
      borderRadius: 9,
      borderWidth: 0.5,
      borderColor:'#000',
    width: '100%',
    height: 450,
    resizeMode: 'cover',
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