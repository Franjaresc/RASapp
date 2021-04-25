import React, { Component } from 'react'
import Styles from '../styles/Styles.js'
import {
  TouchableOpacity,
  Text,
  View,
  TextInput,
} from 'react-native'

class Login extends Component {
  constructor(props) {
    super(props)

  }
  state = {
    email: "",
    password: "",
  }

  onPressLogin = () => {
    
  }
  onPressSignUp = () => {
    
  }
  changeTextInputEmail = (inputUsername) => {
    this.setState({
      email: inputUsername
    })
  }
  changeTextInputPassword = (inputUsername) => {
    this.setState({
      password: inputUsername
    })
  }

  render() {
    return (
      <View style={Styles.container}>
        <TextInput
          style={Styles.textInput}
          onChangeText={this.changeTextInputEmail}
          placeholder="Correo electrónico"
        />
        <TextInput
          style={Styles.textInput}
          onChangeText={this.changeTextInputPassword}
          secureTextEntry={true}
          placeholder="Contraseña"
        />
        <TouchableOpacity
          style={Styles.button}
          onPress={this.onPressLogin}
        >
          <Text>INGRESAR</Text>
        </TouchableOpacity>
        <View style={Styles.containerHorizontal}>
          <Text>
            ¿Usuario nuevo?
          </Text>
          <TouchableOpacity
            style={Styles.buttonWithoutBackgroudColor}
            onPress={this.onPressLogin}
          >
            <Text style={Styles.buttonWithoutBackgroudColorText}>Registrese aquí</Text>
          </TouchableOpacity>
        </View>
        <View style={Styles.containerHorizontal}>
          <Text>
            ¿Olvido la contraseña?
          </Text>
          <TouchableOpacity
            style={Styles.buttonWithoutBackgroudColor}
            onPress={this.onPressLogin}
          >
            <Text style={Styles.buttonWithoutBackgroudColorText}>Recuperar contraseña</Text>
          </TouchableOpacity>
        </View>
        
      </View>
    )
  }
}


export default Login;