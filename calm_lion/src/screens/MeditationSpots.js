import React from 'react';
import { View, Text } from 'react-native';
import { Button, ThemeProvider } from 'react-native-elements'
class MeditationSpots extends React.Component {
  static navigationOptions = {
    title: 'MeditationSpots'
   };
   // constructor(props) {
   // super(props);
   // this.state = {
   //     email: '',
   //     password: '',
   //     token: ''
   //   };
   // }
   render() {
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
export default MeditationSpots;
