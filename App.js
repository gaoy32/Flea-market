import Amplify from 'aws-amplify'
import config from './aws-exports'

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./navigation/AppNavigator"

import { View, Text} from "react-native";

Amplify.configure(config)

export default function App() {
  return (
    <NavigationContainer>
       <AppNavigator />
    </NavigationContainer>
    // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    //   <Text>Home Screen</Text>
    // </View>
  );
}
