import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import ListNavigator from "./ListNavigator";
import UserNavigator from "./UserNavigator";
import ListingPostScreen from "../screens/ListingPostScreen";
import PostButton from "./PostButton";

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
    <Tab.Navigator>
        <Tab.Screen name="Home"
            component={ListNavigator}
            options={{
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="home" color={color} size={size} />
                )
            }}
        />
        <Tab.Screen name="Post"
            component={ListingPostScreen}
            options={({ navigation }) => ({
                tabBarButton: () => (
                    <PostButton
                        onPress={() => navigation.navigate("Post")}
                    />
                ),
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons
                        name="plus-circle"
                        color={color}
                        size={size}
                    />
                ),
            })}
        />

        <Tab.Screen name="User"
            component={UserNavigator}
            options={{
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="account" color={color} size={size} />
                )
            }}
        />

    </Tab.Navigator>
);

export default AppNavigator;
