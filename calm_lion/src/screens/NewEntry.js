import React from 'react';
import { View, Text, StyleSheet, Picker, Modal, TouchableHighlight, Alert } from 'react-native';
import { ThemeProvider, Button, Input, Icon, Theme } from 'react-native-elements';

const theme = {
  Button: {
    titleStyle: {
      color: '#F4B30F',
    },
  },
};
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
                                    <Picker.Item label="ISO" value="None"/>
                                    <Picker.Item label="50" value="50"/>
                                    <Picker.Item label="64" value="64"/>
                                    <Picker.Item label="80" value="80"/>
                                    <Picker.Item label="100" value="100"/>
                                    <Picker.Item label="125" value="125"/>
                                    <Picker.Item label="160" value="160"/>
                                    <Picker.Item label="200" value="200"/>
                                    <Picker.Item label="250" value="250"/>
                                    <Picker.Item label="320" value="320"/>
                                    <Picker.Item label="400" value="400"/>
                                    <Picker.Item label="500" value="500"/>
                                    <Picker.Item label="640" value="640"/>
                                    <Picker.Item label="800" value="800"/>
                                    <Picker.Item label="1000" value="1000"/>
                                    <Picker.Item label="1250" value="1250"/>
                                    <Picker.Item label="1600" value="1600"/>
                                    <Picker.Item label="2000" value="2000"/>
                                    <Picker.Item label="2500" value="2500"/>
                                    <Picker.Item label="3200" value="3200"/>
                                    <Picker.Item label="4000" value="4000"/>
                                    <Picker.Item label="6400" value="6400"/>
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
                                     <Picker.Item label="Aperture" value="None"/>
                                     <Picker.Item label="1.4" value="1.4"/>
                                     <Picker.Item label="2" value="2"/>
                                     <Picker.Item label="2.8" value="2.8"/>
                                     <Picker.Item label="3.2" value="3.2"/>
                                     <Picker.Item label="3.5" value="3.5"/>
                                     <Picker.Item label="4" value="4"/>
                                     <Picker.Item label="4.5" value="4.5"/>
                                     <Picker.Item label="5" value="5" />
                                     <Picker.Item label="5.6" value="5.6"/>
                                     <Picker.Item label="6.3" value="6.3"/>
                                     <Picker.Item label="7.1" value="7.1"/>
                                     <Picker.Item label="8" value="8"/>
                                     <Picker.Item label="9" value="9"/>
                                     <Picker.Item label="10" value="10"/>
                                     <Picker.Item label="11" value="11"/>
                                     <Picker.Item label="13" value="13"/>
                                     <Picker.Item label="14" value="14"/>
                                     <Picker.Item label="16" value="16"/>
                                     <Picker.Item label="18" value="18"/><Picker.Item label="20" value="20"/>
                                     <Picker.Item label="22" value="22"/>
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
                                      <Picker.Item label="Shutter" value="None"/>
                                      <Picker.Item label="30" value="30"/>
                                      <Picker.Item label="15" value="15"/>
                                      <Picker.Item label="8" value="8"/>
                                      <Picker.Item label="4" value="4"/>
                                      <Picker.Item label="2" value="2" />
                                      <Picker.Item label="1" value="1"/>
                                      <Picker.Item label="1/1.3" value="1/1.3"/>
                                      <Picker.Item label="1/1.6" value="1/1.6"/>
                                      <Picker.Item label="1/2" value="1/2"/>
                                      <Picker.Item label="1/2.5" value="1/2.5"/>
                                      <Picker.Item label="1/3" value="1/3"/>
                                      <Picker.Item label="22" value="22"/>
                                      <Picker.Item label="1/2.5" value="1/2.5"/>
                                      <Picker.Item label="1/3" value="1/3"/>
                                      <Picker.Item label="1/4" value="1/4"/>
                                      <Picker.Item label="1/5" value="1/5"/>
                                      <Picker.Item label="1/6" value="1/6"/>
                                      <Picker.Item label="1/8" value="1/8"/>
                                      <Picker.Item label="1/10" value="1/10"/>
                                      <Picker.Item label="1/13" value="1/13"/>
                                      <Picker.Item label="1/15" value="1/15"/>
                                      <Picker.Item label="1/20" value="1/20"/>
                                      <Picker.Item label="1/25" value="1/25"/>
                                      <Picker.Item label="1/30" value="1/30"/>
                                      <Picker.Item label="1/40" value="1/40"/>
                                      <Picker.Item label="1/50" value="1/50"/>
                                      <Picker.Item label="1/60" value="1/60"/>
                                      <Picker.Item label="1/80" value="1/80"/>
                                      <Picker.Item label="1/10" value="1/10"/>
                                      <Picker.Item label="1/13" value="1/13"/>
                                      <Picker.Item label="1/15" value="1/15"/>
                                      <Picker.Item label="1/20" value="1/20"/>
                                      <Picker.Item label="1/25" value="1/25"/>
                                      <Picker.Item label="1/30" value="1/30"/>
                                      <Picker.Item label="1/40" value="1/40"/>
                                      <Picker.Item label="1/50" value="1/50"/>
                                      <Picker.Item label="1/60" value="1/60"/>
                                      <Picker.Item label="1/80" value="1/80"/>
                                      <Picker.Item label="1/100" value="1/100"/>
                                      <Picker.Item label="1/125" value="1/125"/>
                                      <Picker.Item label="1/160" value="1/160"/>
                                      <Picker.Item label="1/200" value="1/200"/>
                                      <Picker.Item label="1/250" value="1/250"/>
                                      <Picker.Item label="1/320" value="1/320"/>
                                      <Picker.Item label="1/400" value="1/400"/>
                                      <Picker.Item label="1/500" value="1/500"/>
                                      <Picker.Item label="1/640" value="1/640"/>
                                      <Picker.Item label="1/800" value="1/800"/>
                                      <Picker.Item label="1/1000" value="1/1000"/>
                                      <Picker.Item label="1/1250" value="1/1250"/>
                                      <Picker.Item label="1/1600" value="1/1600"/>
                                      <Picker.Item label="1/2000" value="1/2000"/>
                                      <Picker.Item label="1/2500" value="1/2500"/>
                                      <Picker.Item label="1/3200" value="1/3200"/>
                                      <Picker.Item label="1/4000" value="1/4000"/>
                                      <Picker.Item label="1/5000" value="1/5000"/>
                                      <Picker.Item label="1/6400" value="1/6400"/>
                                      <Picker.Item label="1/8000" value="1/8000"/>

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
                        <ThemeProvider theme={theme}>
                          <Button
                              title="Submit Photo"

                          />
                        </ThemeProvider>
                </View>
            );
      }
  }
export default NewEntry;
