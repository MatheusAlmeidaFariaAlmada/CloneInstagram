import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home} from '../screens/Home';
import {Login} from '../screens/Login';

const Stack = createStackNavigator();

export const Routes = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name=" " component={Login} options={{
                headerShown: false,
            }} />
            <Stack.Screen name="Home" component={Home} options={{
                headerShown: false,
            }} />
        </Stack.Navigator>
    )
}