import * as React from 'react';
 import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
 import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text,View,StyleSheet, Image} from 'react-native';
import ComponentSlider from '../../../components/slider/ComponentSlider';

/* FUNCION DE NUESTRA PANTALLA DE POst */
export default function ScreenPost(){
  return(
      <>
     <View style={[styles.container, {
        // Try setting `flexDirection` to `"row"`.
        flexDirection: "column"}]}>
        {/* VISTA CATEGORI 1 */}
        <ComponentSlider/>
        <Text>Envios</Text>
        <View style={{flex:1, justifyContent:"center", flexDirection:"row", alignItems:"center"}}>

            <View style={{flex:1,flexDirection:"row",justifyContent:"center"}}><Image style={styles.imageCategory}  source={require('../../../assets/images/anillo1.jpg')}/></View>
            <View style={{flex:1,flexDirection:"row",justifyContent:"center"}}><Image style={styles.imageCategory}  source={require('../../../assets/images/anillo2.jpg')}/></View>
            <View style={{flex:1,flexDirection:"row",justifyContent:"center"}}><Image style={styles.imageCategory}  source={require('../../../assets/images/anillo3.jpg')}/></View>
           
        </View>
        
        <Text>Mis compras</Text>
        <View style={{flex:1, justifyContent:"center", flexDirection:"row", alignItems:"center"}}>
            <View style={{flex:1,flexDirection:"row",justifyContent:"center"}}><Image style={styles.imageCategory}  source={require('../../../assets/images/anillo1.jpg')}/></View>
            <View style={{flex:1,flexDirection:"row",justifyContent:"center"}}><Image style={styles.imageCategory}  source={require('../../../assets/images/anillo2.jpg')}/></View>
            <View style={{flex:1,flexDirection:"row",justifyContent:"center"}}><Image style={styles.imageCategory}  source={require('../../../assets/images/anillo3.jpg')}/></View>
            
        </View>
 
    </View>
    </>
  );
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    padding: 20,
    },
    imageCategory: {
        width: 68,
        height: 68,
      },

})