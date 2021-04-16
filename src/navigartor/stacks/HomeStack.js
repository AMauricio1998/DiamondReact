import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../screens/Home/HomeScreen';

/* Const para crear nuestro stack navigator */

const Stack = createStackNavigator();

/* Declaración De Nuestro Componente */

export const HomeStack = () =>{
    /* nuestros stack */

    return(
        <Stack.Navigator >
            <Stack.Screen name="Inicio" component={HomeScreen} />
        </Stack.Navigator>
    );
}