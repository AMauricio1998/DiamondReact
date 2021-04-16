/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import {ImageBackground, StyleSheet, Text, View} from 'react-native';
 //navigator Container
 import { NavigationContainer } from '@react-navigation/native';
 //bottomTabNavigator
 import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
 //importamos la libreria iconos

 import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
 import { HomeStack } from '../DiamondReact/src/navigartor/stacks/HomeStack';
 import { CategoriesStack } from '../DiamondReact/src/navigartor/stacks/CategoriesStack';
 import { PostStack } from '../DiamondReact/src/navigartor/stacks/PostStack'
 import { infoStack } from '../DiamondReact/src/navigartor/stacks/infoStack';


const Tab = createBottomTabNavigator();
const image = { uri: "https://reactjs.org/logo-og.png" };


export default function App(){
  return (
    
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Inicio" component={HomeStack}
           options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="diamond" color={'#000000'} size={35} />
            ),
          }}
          />
          <Tab.Screen name="Catalogo" component={CategoriesStack} 
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="image-multiple-outline" color={'#000000'} size={35} />
              ),
            }}
          />
          <Tab.Screen name="Compra" component={PostStack}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name="dump-truck" color={'#000000'} size={35} />
                ),
              }}
          />
            <Tab.Screen name="Perfil" component={infoStack} 
              options={{
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name="account" color={'#000000'} size={35} />
                ),
              }}
          />
        </Tab.Navigator>
        
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
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