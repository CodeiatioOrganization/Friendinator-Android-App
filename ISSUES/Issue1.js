import React from 'react'
import {
  View,
  Button,
  TextInput,
  StyleSheet
} from 'react-native'

export default class SignUp extends React.Component {

  render() {
    return (
      <View style={styles.container}>


        <TextInput
          style={styles.input}
          placeholder='Email'
          autoCapitalize="none"
          placeholderTextColor='#eaceff'
          onChangeText={val => this.onChangeText('email', val)}
        />
		<TextInput
          style={styles.input}
          placeholder='Password'
          secureTextEntry={true}
          autoCapitalize="none"
          placeholderTextColor='#eaceff'
          onChangeText={val => this.onChangeText('password', val)}
        />
       
      </View>
    )
  }
}

const styles = StyleSheet.create({
  input: {
    width: 350,
    height: 55,
    backgroundColor: '#f1f1f1',
    margin: 10,
    padding: 10,
    color: '#633e7d',
    borderRadius: 14,
    fontSize: 18,
    fontWeight: '500',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})