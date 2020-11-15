import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ListingsScreen from '../screens/ListingsScreen';
import ListingDetailsScreen from '../screens/ListingDetailsScreen'

const Stack = createStackNavigator();

const ListNavigator = () => (
    <Stack.Navigator mode="modal" screens={{headerShown: false}}>
        <Stack.Screen name="Listings" component={ListingsScreen}/>
        <Stack.Screen name="ListingDetails" component={ListingDetailsScreen}/>
    </Stack.Navigator>
); // return object

export default ListNavigator;
