
import * as React from 'react';
import { createStackNavigator} from '@react-navigation/stack';
import ScreenPost from '../screens/Posts/PostScreen';

const Stack = createStackNavigator();

export const PostStack = () =>{
    return(
        <Stack.Navigator>
            <Stack.Screen name="Compras" component={ScreenPost} />
        </Stack.Navigator>
    )
}