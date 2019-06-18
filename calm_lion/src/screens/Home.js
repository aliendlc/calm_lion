import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Input, Button } from 'react-native-elements'

const styles = StyleSheet.create({
  center: {
    textAlign: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  subHeading: {
    margin: 30,
    fontSize: 40,
  },
  button: {
     margin: 10,
  }

});

class Home extends React.Component {
      static navigationOptions = {
        title: 'Home'
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

                <View>
                    <Button title="Sign Up"
                      style = {styles.button}
                      onPress={() => this.props.navigation.navigate('SignIn')}
                     />
                </View>
            );
        }
}
export default Home;
