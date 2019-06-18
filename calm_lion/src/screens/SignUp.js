import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Input } from 'react-native-elements'

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
  }

});

class SignUp extends React.Component {

   render() {
       console.log('HEre is the console log');
       return (
            <View style = {styles.container}>
                  <Text style={styles.subHeading}>Sign Up!</Text>
                  <Text>Email</Text>
                  <Input
                  placeholder='email'
                  />
                  <Text>Password</Text>
                  <Input
                  placeholder='password'
                  />
                  <Text>Email</Text>
                  <Input
                  placeholder='INPUT WITH CUSTOM ICON'
                  />
                  <Text>Email</Text>
                  <Input
                  placeholder='INPUT WITH SHAKING EFFECT'
                  shake={true}
                  />
                  <Text>Email</Text>
                  <Input
                  placeholder='INPUT WITH ERROR MESSAGE'
                  errorStyle={{ color: 'red' }}
                  errorMessage='ENTER A VALID ERROR HERE'
            />

            </View>
        );
    }
}
export default SignUp;
