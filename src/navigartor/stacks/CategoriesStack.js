import * as  React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CategoryScreen from '../screens/Categories/CategoryScreen';


const Stack = createStackNavigator();

export const  CategoriesStack = () =>{
    return(
        <Stack.Navigator>
            <Stack.Screen name="Catalogo" component={CategoryScreen} />
        </Stack.Navigator>
    );
}