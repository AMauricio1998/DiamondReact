import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import infoScreen from '../screens/info/infoScreen';

/* Const para crear nuestro stack navigator */

const Stack = createStackNavigator();

/* Declaración De Nuestro Componente */

export const infoStack = () =>{
    /* nuestros stack */

    return(
        <Stack.Navigator >
            <Stack.Screen name="Info" component={infoScreen} />
        </Stack.Navigator>
    );
}