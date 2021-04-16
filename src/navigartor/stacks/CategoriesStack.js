import * as  React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CategoriesScreen from '../screens/Categories/CategoryScreen';


const Stack = createStackNavigator();

export const  CategoriesStack = () =>{
    return(
        <Stack.Navigator>
            <Stack.Screen name="Categorias" component={CategoriesScreen} />
        </Stack.Navigator>
    );
}