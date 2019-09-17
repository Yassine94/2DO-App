import React from 'react';
import { View, WebView } from 'react-native';
 import { Platform } from 'expo-core';
 import Spinner from 'react-native-loading-spinner-overlay';


export default class AboutScreen extends React.Component {
  state = {
    visible: true,
    url: ""
  }

  static navigationOptions = {
    title: Config.aboutScreenTitle,
  }
  componentDidMount(){
    if (Platform.OS === 'ios') {
      if (Config.aboutiOSURL !== ""){
        this.setState({url: Config.aboutiOSURL});
      }
      else if (Config.aboutWebPage !== ""){
        this.setState({url: Config.aboutWebPage});
      }
    }
    else if (Platform.OS === 'android'){
      if (Config.aboutGooglePlayURL !== ""){
        this.setState({url: Config.aboutGooglePlayURL});
      }
      else if (Config.aboutWebPage !== ""){
        this.setState({url: Config.aboutWebPage});
      }
    }
  }

  showSpinner() {
    this.setState({ visible: true });
  }

  hideSpinner() {
    this.setState({ visible: false });
  }


  render(){
    //console.log(this.state.url);
    return (
      <View style={{ flex: 1 }}>
        <Spinner
          visible={this.state.visible}
          textContent={'Loading...'}
          textStyle={{ color: '#FFF' }}
        />
        <WebView
          originWhitelist={['*']}
          source={{uri: this.state.url}}
          useWebKit={true}  //iOS
          javaScriptEnabled={true}
          domStorageEnabled={true}
          mixedContentMode="always"
          onLoad={() => this.hideSpinner()}
          style={{ flex: 1 }}
        />
      </View>
    )
  }
 }
