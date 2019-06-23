import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, ThemeProvider } from 'react-native-elements';
const styles = StyleSheet.create({
  center: {
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  subHeading: {
    margin: 30,
    fontSize: 40,
    color: '#9CCF31',
    fontWeight: 'bold',
    textAlign: 'center',

  },
  button :{
    marginRight:40,
    marginLeft:40,
    marginTop:10,
    paddingTop:10,
    paddingBottom:10,
    backgroundColor:'#9CCF31',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#9CCF31'
  },

});

class MyPhotos extends React.Component {
  static navigationOptions = {
    title: 'My Photos'
   };
   constructor(props) {
   super(props);
   this.state = {
       photos: [],
       success: true,
       photo_id: null
     };
   }

   componentDidMount(){
       fetch('http://film-sage.herokuapp.com/photos')
           .then(data => data.json())
       .then(jData => {
           console.log(jData);
           this.setState({
                photos: jData
           })
           console.log(this.state.photos);
       })
   }
   fetchData = () => {
       fetch('http://film-sage.herokuapp.com/photos')
           .then(data => data.json())
       .then(jData => {
           console.log(jData);
           this.setState({
                photos: jData
           })
           console.log(this.state.photos);
       })
   }
   render() {

      return (
         <View>
             <Button
                 onPress={() => this.props.navigation.navigate('Home')}
                 title="Home"
                 type="clear"

             />
             <Button
                 onPress={() => this.props.navigation.navigate('NewEntry')}
                 title="New Photo"
                 type="clear"
             />
            <Text style={styles.subHeading}>My Photos</Text>
            <Button onPress={()=>this.fetchData()} title="Get Photos" type="clear"/>
            {this.state.photos ?  this.state.photos.map((photo, index) =>  <View
                               key={index}
                               >
                                   <Button
                                  style={styles.button}
                                   title={photo.description}
                                   onPress={() =>  this.props.navigation.navigate('ShowPhoto', {photo})}/>
                               </View>
            ): ""}
         </View>
        );
    }
}
export default MyPhotos;
