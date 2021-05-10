import React, { Component } from 'react'
import Styles from '../styles/Styles.js'
import {
  TouchableOpacity,
  Text,
  View,
  TextInput,
} from 'react-native'


const Login = ({navigation}) => {
  const onPressSignUp = () => {
    navigation.navigate('SignUp')
  };
  const onPressLogin = () => {
    navigation.navigate('SignUp')
  };
  const onPressForgetPassword = () => {
    navigation.navigate('SignUp')
  };
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
          onPress={onPressLogin}
        >
          <Text>INGRESAR</Text>
        </TouchableOpacity>
        <View style={Styles.containerHorizontal}>
          <Text>
            ¿Usuario nuevo?
          </Text>
          <TouchableOpacity
            style={Styles.buttonWithoutBackgroudColor}
            onPress={onPressSignUp}
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
            onPress={onPressForgetPassword}
          >
            <Text style={Styles.buttonWithoutBackgroudColorText}>Recuperar contraseña</Text>
          </TouchableOpacity>
        </View>
        
      </View>
  );
};

export default Login;