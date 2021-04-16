import * as React from 'react';

import {Text,View,StyleSheet, Image} from 'react-native';

/* FUNCION DE NUESTRA PANTALLA DE POst */
export default function ScreenPost(){
  return(
      <>
     <View style={[styles.container, {
        // Try setting `flexDirection` to `"row"`.
        flexDirection: "column"}]}>
        {/* VISTA CATEGORI 1 */}
        <Text>Laravel > Ver Más</Text>

        <View style={{flex:1, justifyContent:"center", flexDirection:"row", alignItems:"center"}}>

            <View style={{flex:1,flexDirection:"row",justifyContent:"center"}}><Image style={styles.imageCategory}  source={require('../../../assets/images/anillo1.jpg')}/></View>
            <View style={{flex:1,flexDirection:"row",justifyContent:"center"}}><Image style={styles.imageCategory}  source={require('../../../assets/images/anillo2.jpg')}/></View>
            <View style={{flex:1,flexDirection:"row",justifyContent:"center"}}><Image style={styles.imageCategory}  source={require('../../../assets/images/anillo3.jpg')}/></View>
           
        </View>
        <Text>GIT > Ver Más</Text>

        <View style={{flex:1, justifyContent:"center", flexDirection:"row", alignItems:"center"}}>
        <View style={{flex:1,flexDirection:"row",justifyContent:"center"}}><Image style={styles.imageCategory}  source={require('../../../assets/images/anillo1.jpg')}/></View>
        <View style={{flex:1,flexDirection:"row",justifyContent:"center"}}><Image style={styles.imageCategory}  source={require('../../../assets/images/anillo2.jpg')}/></View>
        <View style={{flex:1,flexDirection:"row",justifyContent:"center"}}><Image style={styles.imageCategory}  source={require('../../../assets/images/anillo3.jpg')}/></View>

        </View>
        <Text>Aplicaciones  > Ver Más</Text>
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