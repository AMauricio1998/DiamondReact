import * as React from 'react';
import {Text, View,StyleSheet,Image, ImageBackground} from 'react-native';

export default function infoScreen(){

    return(
        <>
        <ImageBackground source={require('../../../assets/images/diamond1.jpg')} style={styles.backgroundImage} >
        
     <View style={[styles.container, {
      // Try setting `flexDirection` to `"row"`.
      flexDirection: "column"}]}>
        {/* <Text>Informacion</Text> */}
      
      <View style={{flex:1, backgroundColor:"#0000", justifyContent:"center", flexDirection:"row", alignItems:"center"}}>
        <View style={{flex:1,flexDirection:"row",justifyContent:"center"}}>
            <Image style={styles.imageInfo} source={require('../../../assets/images/diamond.png')}/>
        </View>
      </View>
           
    </View>
            <Text style={styles.Text}>Por favor comunicarte al siguiente correo:</Text>
            <Text style={styles.Text}>al221910354@gmail.com</Text>
            <Text style={styles.Text}>version 1.5</Text>  
    </ImageBackground>
        </>
    )
}


const styles = StyleSheet.create({
    Text:{
        textAlign: 'center',
        backgroundColor: "#ffff",
    },
    container: {
    flex: 1,
    padding: 80,
    },
    imageInfo: {
        width: 100,
        height: 100,
      },
      backgroundImage: {
    flex: 1,
    // width: undefined,
    // height: undefined,
    // flexDirection: 'column',
    // backgroundColor:'transparent',
    // justifyContent: 'flex-start',
}
    });