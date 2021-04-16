import * as React from 'react';
import {Text, View, StyleSheet, Image, ImageBackground} from 'react-native';
import ComponentSlider from '../../../components/slider/ComponentSlider'
//-------------------------------------------------------------------------------------
 /* Declaración De Nuestro función Home Screenjs */
 const image = { uri: "https://static3.abc.es/media/summum/2018/10/31/Diamantes-k7bB--1200x630@abc.jpg" };

export default function HomeScreen(){

    return(
        <>
     <View style={[styles.container1, {
      // Try setting `flexDirection` to `"row"`.
      flexDirection: "column"}]}>

      <ComponentSlider/>

      {/* <View style={{ flex: 1, backgroundColor: "red", justifyContent:"center",}}><Text>Slider</Text></View>       */}
      

      {/* <Text>Relojes</Text> */}
      {/* <View style={{flex:1, backgroundColor:"#000000", justifyContent:"center", flexDirection:"row", alignItems:"center"}}> */}
        {/* <View style={{flex:1,flexDirection:"row",justifyContent:"center"}}><Image style={styles.imageCategory}  source={require('../../../assets/images/reloj1.jpg')}/></View> */}
        {/* <View style={{flex:1,flexDirection:"row",justifyContent:"center"}}><Image style={styles.imageCategory}  source={require('../../../assets/images/reloj2.jpg')}/></View> */}
        {/* <View style={{flex:1,flexDirection:"row",justifyContent:"center"}}><Image style={styles.imageCategory}  source={require('../../../assets/images/reloj3.jpg')}/></View> */}
      {/* </View> */}

      {/* Vista categoria 2 */}
      {/* <Text>Anillos</Text> */}
      {/* <View style={{flex:1, backgroundColor:"#000000", justifyContent:"center", flexDirection:"row", alignItems:"center"}}> */}
        {/* <View style={{flex:1,flexDirection:"row",justifyContent:"center"}}><Image style={styles.imageCategory}  source={require('../../../assets/images/anillo1.jpg')}/></View> */}
        {/* <View style={{flex:1,flexDirection:"row",justifyContent:"center"}}><Image style={styles.imageCategory}  source={require('../../../assets/images/anillo2.jpg')}/></View> */}
        {/* <View style={{flex:1,flexDirection:"row",justifyContent:"center"}}><Image style={styles.imageCategory}  source={require('../../../assets/images/anillo3.jpg')}/></View> */}
      {/* </View> */}
  <View style={styles.container}>
    <ImageBackground source={image} style={styles.image}>
      <Text style={styles.text}>DIAMOND</Text>
    </ImageBackground>
  </View>

      </View>  
        </>
    )
}


 const styles = StyleSheet.create({
     container1: {
     flex: 1,
     padding: 20,
     },
     imageCategory: {
        width: 90,
        height: 160,
      },
      container: {
    flex: 1,
    flexDirection: "column"
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000a0"
  }
     });