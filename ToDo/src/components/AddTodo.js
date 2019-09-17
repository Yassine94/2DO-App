import React from 'react';
import { StyleSheet, View, Keyboard } from 'react-native';
import { Button, Input, Icon} from 'react-native-elements';
import Config from '../config/Settings';

export default class AddTodo extends React.Component {
  state = {
    inputText: ""
  }

  render(){
    return (
      <View style={styles.container}>
        <Input
          containerStyle = {{flex: 1}}
          placeholder = "Help memory and organize tasks :)"
          leftIcon = {{type: 'font-awesome', name: 'th-list', size: 20}}
          leftIconContainerStyle = {{paddingRight: 10}}
          onChangeText={(text)=> this.setState({inputText: text})}
          value={this.state.inputText}
          returnKeyType="done"
          onSubmitEditing={this.onEnterPress}
        />
        <Button
          icon={<Icon name="add-circle" size={25} color="white" />}
          buttonStyle={{backgroundColor: Config.themeButtonColor}}
          onPress={this.onAddPress}  
        />
      </View>
    );
  }

  // Enter press
  onEnterPress = (event) => {
    this.onAddPress();
  }

  // Add Button
  onAddPress = () => {
    // Checking empty string
    const cleanString = this.state.inputText.trim();

    if (cleanString.length == 0){
     // console.log("Empty String");
    }
    else{
      // Add in database
      this.setState({inputText: ""});
      this.props.onTodoAdd(cleanString);
      Keyboard.dismiss();
    }

  };
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  }
});
