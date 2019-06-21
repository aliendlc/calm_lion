import React from 'react';
import { View, Text, StyleSheet, FormLabel, FormInput, FormValidationMessage } from 'react-native';
import { Input, Button,  } from 'react-native-elements'

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

class SignIn extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
        email: '',
        password: '',
        token: ''
      };
    }
    signIn = (email, password) => {
        const user = {
          email, password
        };
        console.log(this.state);
        console.log(user);
        fetch('http://localhost:3000/authenticate', {
            body: JSON.stringify(user),
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
          }).then( token => {
                return token.json()
            }).then( jData => {
                console.log(jData, '.then Jdata');
                if ('auth_token' in jData){
                    console.log('HURRAY');
                    this.setState({ token: jData.auth_token})
                    console.log(email);
                    this.props.navigation.navigate('Home', {email})
                }else {
                    alert('not able to verify')
                }
                console.log(this.state);
            }).catch( err => console.log(err));
    }

   render() {
       console.log('HEre is the console log');
       return (
            <View style = {styles.container}>
                  <Text style={styles.subHeading}>Sign In</Text>
                  <Text>Email</Text>
                  <Input
                  autoCapitalize = 'none'
                  onChangeText={(email) => this.setState({ email: email })}
                  placeholder='email'
                  />
                  <Text>Password</Text>
                  <Input
                  autoCapitalize = 'none'
                  onChangeText={(password) => this.setState({ password:password })}
                  placeholder='password'
                  />
                  <Button
                    style = {styles.button}
                    title="Sign in"
                    onPress={() => this.signIn(this.state.email, this.state.password)}
                   />
                   <Button title="Sign Up"
                     style = {styles.button}
                     onPress={() => this.props.navigation.navigate('SignUp')}
                    />
              </View>
        );
    }
}
export default SignIn;
