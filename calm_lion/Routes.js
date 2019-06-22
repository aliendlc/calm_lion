import React, { Component } from "react";
import { createStackNavigator, createAppContainer, createBottomTabNavigator, createSwitchNavigator,  } from 'react-navigation';
import SignIn from "./src/screens/SignIn";
import SignUp from "./src/screens/SignUp";
import Home from "./src/screens/Home";
import Profile from "./src/screens/Profile";
import MyPhotos from "./src/screens/MyPhotos";
import NewEntry from "./src/screens/NewEntry";
import ShowPhoto from "./src/screens/ShowPhoto";
import Update from "./src/screens/Update";

const LoggedStack = createStackNavigator({
    SignedIn: {
        screen: createBottomTabNavigator({
            Home: {
                screen: Home,
            },
            // Profile: { screen: Profile},
            MyPhotos: {
              screen: MyPhotos
            },
            NewEntry: { screen: NewEntry}
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

const MyPhotosStack = createStackNavigator({
      MyPhotos: {
          screen: MyPhotos,
      },
      ShowPhoto: {
          screen: ShowPhoto
      },
      Update: {
          screen: Update
      },
});

const Lion= createAppContainer(createSwitchNavigator(
    {
        AuthStack: AuthStack,
        LoggedStack: LoggedStack,
        MyPhotosStack: MyPhotosStack
    },
    {
        initialRouteName: 'LoggedStack'
    }
));

console.log('ROUTES CONSOLE LOG');
export default createAppContainer(Lion);
