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
       // const { navigation } = this.props;
       // const email = navigation.getParam('email')
       constructor(props) {
       super(props);
       this.state = {
           email: '',
           password: '',
           token: ''
         };
       }
       // shoState = () => {
       //    let email = this.props.navigation.state.params
       //    console.log(email);
       // }
       // componentWillMount(){
       //   fetch('http://localhost:3000/authenticate', {
       //       body: JSON.stringify(user),
       //       method: 'GET',
       //       headers: {
       //           'Accept': 'application/json, text/plain, */*',
       //           'Content-Type': 'application/json'
       //       }
       //     }).then( token => {
       //           return token.json()
       //       }).then( jData => {
       //           console.log(jData, '.then Jdata');
       //           if ('auth_token' in jData){
       //               console.log('HURRAY');
       //               this.setState({ token: jData.auth_token})
       //               console.log(email);
       //               this.props.navigation.navigate('Home', {email})
       //           }else {
       //               alert('incorrect input')
       //           }
       //           console.log(this.state);
       //       }).catch( err => console.log(err));
       // }
       render() {
           return (

                <View>
                    <Button title="Sign Up"
                      style = {styles.button}
                      onPress={() => this.shoState()}
                     />
                </View>
            );
        }
}
export default Home;
