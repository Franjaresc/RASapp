import React, { Component } from 'react'
import Styles from '../styles/Styles.js'
import {
  TouchableOpacity,
  Text,
  View,
  TextInput,
} from 'react-native'

class SignUp extends Component {
  constructor(props) {
    super(props)

  }
  state = {
    nombre: "",
    email: "",
    cEmail: "",
    password: "",
    cPassword: "",
    occupation: "",
  }

  onPressSignUp = () => {
    
  }
  changeTextInputName = (input) => {
    this.setState({
      nombre: input
    })
  }
  changeTextInputEmail = (input) => {
    this.setState({
      email: input
    })
  }
  changeTextInputCEmail = (input) => {
    this.setState({
      cEmail: input
    })
  }
  changeTextInputPassword = (input) => {
    this.setState({
      password: input
    })
  }
  changeTextInputCPassword = (input) => {
    this.setState({
      cPassword: input
    })
  }
  changeTextInputOccupation = (input) => {
    this.setState({
      occupation: input
    })
  }

  render() {
    return (
      <View style={Styles.container}>
        <TextInput
          style={Styles.textInput}
          onChangeText={this.changeTextInputName}
          placeholder="Nombre completo"
        />
        <TextInput
          style={Styles.textInput}
          onChangeText={this.changeTextInputEmail}
          secureTextEntry={true}
          placeholder="Correo electrónico"
        />
        <TextInput
          style={Styles.textInput}
          onChangeText={this.changeTextInputCEmail}
          secureTextEntry={true}
          placeholder="Confirmación correo Electrónico"
        />
        <TextInput
          style={Styles.textInput}
          onChangeText={this.changeTextInputPassword}
          secureTextEntry={true}
          placeholder="Contraseña"
        />
        <TextInput
          style={Styles.textInput}
          onChangeText={this.changeTextInputCPassword}
          secureTextEntry={true}
          placeholder="Confirmación Contraseña"
        />
        <TextInput
          style={Styles.textInput}
          onChangeText={this.changeTextInputOccupation}
          secureTextEntry={true}
          placeholder="Correo Electrónico"
        />
        <TouchableOpacity
          style={Styles.button}
          onPress={this.onPressLogin}
        >
          <Text>REGISTRARSE</Text>
        </TouchableOpacity>
        
        
      </View>
    )
  }
}


export default SignUp;