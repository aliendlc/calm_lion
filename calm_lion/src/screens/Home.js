import React from 'react';
import { View, Text } from 'react-native';
import { Button, ThemeProvider } from 'react-native-elements'
class Home extends React.Component {
  static navigationOptions = {
    title: 'Home'
   };
   render() {
       console.log('HEre is the console log');
       return (

            <ThemeProvider>
              <Button title="Go to Profile screen"
                onPress={() => this.props.navigation.navigate('Profile')}
               />
               <Text>Hello</Text>
            </ThemeProvider>
        );
    }     
}
export default Home;
