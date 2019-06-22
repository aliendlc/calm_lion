import React from 'react';
import { Button, View, Text, StyleSheet, Modal, TouchableHighlight, Alert } from 'react-native';
// import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { ThemeProvider, Icon} from 'react-native-elements';

const styles = StyleSheet.create({
  center: {
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  bold: {
    fontWeight: 'bold'
  },
  subHeading: {
    margin: 30,
    fontSize: 20,
    color: '#9CCF31',
    fontWeight: 'bold',

  },
  category: {
      fontSize: 16,
      fontWeight: 'bold',
      color: 'red'
  },
  container: {
    flex: 2,
    justifyContent: 'space-between',
    alignItems: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
    margin: 30
  },
  modal: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    textAlign: 'center'
  },
});

class ShowPhoto extends React.Component {
  static navigationOptions = {
    title: 'Photo'
         };
    constructor(props) {
         super(props);
         this.state = {
             modalVisible: false,
             success: false
           };
    }
    setModalVisible(visible) {
         this.setState({modalVisible: visible});
    }
    handleDelete = (id) => {
           fetch(`http://localhost:3000/photos/${id}`, {
              method: 'DELETE'
          }).then(data => {

            return data.json()
            setState(prevState => {
                success: !prevState
            })
          }).then( doThis => {
           this.props.navigation.navigate('MyPhotos')
          }).catch( err => console.log('this is error from handleDelete:', err))
    }
    wait = () => {
      setState(prevState => {
          success: !prevState
      },
      this.props.navigation.navigate('MyPhotos')
    )
    }
       render() {
         const { navigation } = this.props;
         const photo = navigation.getParam('photo')
           return (
            <View style={styles.container}>
                   <Text style={styles.category}>Description</Text>
                   <View>
                       <Text style={styles.bold}>{photo.description}</Text>
                   </View>
                   <Text style={styles.category}>Film / Collection</Text>
                   <View>
                       <Text style={styles.bold}>{photo.film}</Text>
                   </View>
                   <Text style={styles.category}>Camera</Text>
                   <View>
                       <Text style={styles.bold}>{photo.camera}</Text>
                   </View>
                   <Text style={styles.category}>Date</Text>
                   <View>
                       <Text style={styles.bold}>{photo.date}</Text>
                   </View>
                   <Text style={styles.category}>Location</Text>
                   <View>
                       <Text style={styles.bold}>Latitude: {photo.latitude}</Text>
                       <Text style={styles.bold}>Longitude: {photo.longitude}</Text>

                  </View>

                  <Text style={styles.category}>Photo Type</Text>
                  <View>
                      <Text style={styles.bold}>{photo.type}</Text>
                  </View>
                  <Text style={styles.category}>ISO</Text>
                  <View>
                      <Text style={styles.bold}>{photo.iso}</Text>
                  </View>
                  <Text style={styles.category}>Aperture</Text>
                  <View>
                      <Text style={styles.bold}>{photo.Aperture}</Text>
                  </View>
                  <Text style={styles.category}>Shutter Speed</Text>
                  <View>
                      <Text style={styles.bold}>{photo.shutter}</Text>
                  </View>
                  <Button
                      title="Delete"
                      onPress={()=> this.handleDelete(photo.photo_id)}
                  />
                  <Button
                      style={{marginBottom: 60}}
                      title="Update"
                      onPress={()=>this.props.navigation.navigate('Update', {photo})}
                  />
            </View>
          );
      }
}
export default ShowPhoto;