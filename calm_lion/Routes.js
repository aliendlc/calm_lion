import React, { Component } from "react";
import { createStackNavigator, createAppContainer, createBottomTabNavigator, createSwitchNavigator } from 'react-navigation';
import SignIn from "./src/screens/SignIn";
import SignUp from "./src/screens/SignUp";
import Home from "./src/screens/Home";
import Profile from "./src/screens/Profile";
import MeditationSpots from "./src/screens/MeditationSpots";
import Journal from "./src/screens/Journal"

const LoggedStack = createStackNavigator({
    SignedIn: {
        screen: createBottomTabNavigator({
            Home: {
                screen: Home,
            },
            Profile: { screen: Profile},
            MeditationSpots: { screen: MeditationSpots},
            Journal: { screen: Journal}
        })
    }
})

const AuthStack = createStackNavigator({
      SignIn: {
          screen: SignIn,
      },
      SignUp: {
          screen: SignUp
      },
});

const Lion= createAppContainer(createSwitchNavigator(
    {
        AuthStack: AuthStack,
        LoggedStack: LoggedStack,
    },
    {
        initialRouteName: 'AuthStack'
    }
));

console.log('ROUTES CONSOLE LOG');
export default createAppContainer(Lion);
