import React, { useEffect, useState } from 'react';
 import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
 import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text,View,StyleSheet, Image, Platform} from 'react-native';
import ComponentSlider from '../../../components/slider/ComponentSlider';
import { CardList } from 'react-native-card-list';

/* FUNCION DE NUESTRA PANTALLA DE POst */
export default function ScreenPost(){
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

  const cards = [
    {
      id: "0",
      title: "Anillos",
      picture: require('../../../assets/images/anillo1.jpg'),
      content: <Text>Anillos de mujer</Text>
    },
    {
      id: "1",
      title: "Relojes",
      picture: require('../../../assets/images/anillo1.jpg'),
      content: <Text>Relojes de hombre</Text>
    },
    {
      id: "2",
      title: "Collar",
      picture: require('../../../assets/images/anillo1.jpg'),
      content: <Text>Collares de mujer</Text>
    }
  ]

  return(
      <>
     <View style={[styles.container, {
        flexDirection: "column"}]}>
        <View style={styles.container1}>
          <CardList cards={cards} />
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
      container1:{
        flex: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
      }
})