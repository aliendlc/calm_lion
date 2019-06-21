import React from 'react';
import { View, Text, StyleSheet, Picker, Modal, TouchableHighlight, Alert } from 'react-native';
import { ThemeProvider, Button, Input, Icon } from 'react-native-elements';

const styles = StyleSheet.create({
  center: {
    textAlign: 'center',
  },
  container: {
    flex: 2,
    justifyContent: 'space-between',
    alignItems: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
    margin: 30
  },
  subHeading: {
    margin: 30,
    fontSize: 40,
    color: '#B4D3AA',
    fontWeight: 'bold',

  },
  modal: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    textAlign: 'center'
  },
  margin: {
      marginTop: 40
  },
  picker: {
      height: 50,
      margin: 50,
      width: 100
  },
  category: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#B24629'
  },
  details: {
      fontSize: 20,
      color: '#84D2DE',
      fontWeight: 'bold',
  },
  button: {
      backgroundColor: "#EA8F3C"
  }

});

class NewEntry extends React.Component {
      static navigationOptions = {
        title: 'Log Photo'
       };
      constructor(props) {
      super(props);
      this.state = {
          type: '',
          iso: '',
          film: '',
          aperture: '',
          shutter: '',
          modalVisible: false,
          location: ''
        };
     };
     setModalVisible(visible) {
    this.setState({modalVisible: visible});
    }

      render() {
           return (
                <View style = {styles.container}>
                      <Text style={styles.subHeading}>Log Photo!</Text>
                      <Text style={styles.category}>Film</Text>
                      <Input
                      autoCapitalize = 'none'
                      onChangeText={(film) => this.setState({ film: film })}
                      placeholder='film roll'
                      />
                      <Text style={styles.category}>Location</Text>
                      <Input
                      autoCapitalize = 'none'
                      placeholder='Location'
                      />
                      <TouchableHighlight
                           onPress={() => {
                             this.setModalVisible(true);
                           }}>
                           <Text style={styles.details}>Choose Details</Text>
                     </TouchableHighlight>
                      <Text style={styles.category}>Photo Type</Text>
                      <View>
                          <Text>{this.state.type}</Text>
                      </View>
                      <Text style={styles.category}>ISO</Text>
                      <View>
                          <Text>{this.state.iso}</Text>
                      </View>
                      <Text style={styles.category}>Aperture</Text>
                      <View>
                          <Text>{this.state.aperture}</Text>
                      </View>
                      <Text style={styles.category}>Shutter Speed</Text>
                      <View>
                          <Text>{this.state.shutter}</Text>
                      </View>
                      <Modal
                          animationType="slide"
                          transparent={false}
                          visible={this.state.modalVisible}
                          onRequestClose={() => {
                            Alert.alert('Modal has been closed.');
                          }}>
                          <View style={styles.modal}>
                              <View>
                                  <Picker
                                      title="Type"
                                      selectedValue={this.state.type}
                                      style = {styles.picker}
                                      onValueChange={(itemValue) =>
                                        this.setState({type: itemValue})
                                      }>
                                      <Picker.Item label="Type" value="None" />
                                      <Picker.Item label="B & W" value="B & W" />
                                      <Picker.Item label="color" value="color" />
                                   </Picker>
                              </View>
                              <View>
                                <Picker
                                    label="ISO"
                                    selectedValue={this.state.iso}
                                    style = {styles.picker}
                                    onValueChange={(itemValue) =>
                                      this.setState({iso: itemValue})
                                    }>
                                    <Picker.Item label="ISO" value="None" />
                                    <Picker.Item label="100" value="100" />
                                    <Picker.Item label="200" value="200" />
                                 </Picker>
                              </View>
                              <View>
                                 <Picker
                                     title="Aperture"
                                     selectedValue={this.state.aperture}
                                     style = {styles.picker}
                                     onValueChange={(itemValue) =>
                                       this.setState({aperture: itemValue})
                                     }>
                                     <Picker.Item label="Aperture" value="None" />
                                     <Picker.Item label="100" value="100" />
                                     <Picker.Item label="200" value="200" />
                                  </Picker>
                              </View>
                              <View>
                                  <Picker
                                      title="Shutter Speed"
                                      selectedValue={this.state.shutter}
                                      style={{height: 50, margin: 50, width: 100, paddingBottom: 55}}
                                      onValueChange={(itemValue) =>
                                        this.setState({shutter: itemValue})
                                      }>
                                      <Picker.Item label="Shutter" value="None" />
                                      <Picker.Item label="100" value="100" />
                                      <Picker.Item label="200" value="200" />
                                      <Picker.Item label="300" value="300" />
                                      <Picker.Item label="400" value="400" />
                                   </Picker>
                              </View>
                              <View>
                                <TouchableHighlight
                                  style={{marginTop:65}}
                                  onPress={() => {
                                    this.setModalVisible(!this.state.modalVisible);
                                  }}>
                                  <Icon
                                    size={60}
                                    name='md-aperture'
                                    type='ionicon'
                                  />
                                </TouchableHighlight>
                              </View>
                            </View>
                        </Modal>
                        <Button
                            title="Submit Photo"
                            style={styles.button}
                        />
                </View>
            );
      }
  }
export default NewEntry;
