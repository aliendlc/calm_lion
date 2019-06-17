import React, { Component } from "react";
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from "./src/screens/Home";
import Profile from "./src/screens/Profile";
const Project= createStackNavigator({
  Home: {
   screen: Home
  },
  Profile: {
   screen: Profile
  }
});
console.log('ROUTES CONSOLE LOG');
export default createAppContainer(Project);
