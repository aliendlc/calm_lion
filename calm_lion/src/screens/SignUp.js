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
  }

});

class SignUp extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
        username: '',
        password: '',
        password_confirmation: '',
      };
   }
    create = (username, password, password_confirmation) => {
          const user = {
            username, password
          };
          console.log(this.state);
          console.log(user);
          fetch('http://localhost:3000/users', {
              body: JSON.stringify(user),
              method: 'POST',
              headers: {
                  'Accept': 'application/json, text/plain, */*',
                  'Content-Type': 'application/json'
              }
            }).then( createdUser => {
                  return createdUser.json()
              }).then( jData => {
                  console.log(jData, '.then Jdata');
                  this.props.navigation.navigate('SignIn')
                  console.log(this.state);
              }).catch( err => console.log(err));
    }
    render() {
         return (
              <View style = {styles.container}>
                    <Text style={styles.subHeading}>Sign Up!</Text>
                    <Text>username</Text>
                    <Input
                    autoCapitalize = 'none'
                    onChangeText={(username) => this.setState({ username: username })}
                    placeholder='username'
                    />
                    <Text>Password</Text>
                    <Input
                    autoCapitalize = 'none'
                    placeholder='password'
                    onChangeText={(password) => this.setState({ password:password })}
                    />
                    <Text>Confirm Password</Text>
                    <Input
                    autoCapitalize = 'none'
                    placeholder='Confirm Password'
                    onChangeText={(password_confirmation) => this.setState({ password_confirmation :password_confirmation })}
                    />
                    <Button
                      style = {styles.button}
                      title="Sign Up"
                      onPress={() => this.create(this.state.username, this.state.password, this.state.password_confirmation)}
                     />

              </View>
          );
    }
}
export default SignUp;
