import React, { useContext, useState } from 'react'
import Styles from '../styles/Styles'
import {
  TouchableOpacity,
  Text,
  View,
  TextInput,
  ScrollView,
  SafeAreaView,
  Alert,
  Image,
} from 'react-native'
import { AuthContext } from '../firebase/AuthProvider';


const Login = ({ navigation }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { login, sendPassword } = useContext(AuthContext);
  const onPressSignUp = () => {
    navigation.navigate('SignUp')
  };
  const onPressLogin = () => {
    if (!(email == null || email == "") && !(password == null || password == "")) {
      login(email, password)
    }
    else {
      Alert.alert(
        "Alerta",
        "Digite email y contraseña",
        [
          { text: "Aceptar", onPress: () => console.log("OK Pressed") }
        ]
      );
    }
  };
  const onPressForgetPassword = () => {
    navigation.navigate('ForgotPassword')
  };
  return (
    <SafeAreaView style={Styles.containerAppStack}>
      <ScrollView contentContainerStyle={Styles.containerScrollView}>
        <View style={Styles.container}>
          <Image source={require('../assets/Logo.png')} style={Styles.logo}/>
          <TextInput
            style={Styles.textInput}
            onChangeText={(userEmail) => setEmail(userEmail)}
            placeholder="Correo electrónico"
          />
          <TextInput
            style={Styles.textInput}
            onChangeText={(userPassword) => setPassword(userPassword)}
            secureTextEntry={true}
            placeholder="Contraseña"
          />
          <TouchableOpacity
            style={Styles.buttonPrimary}
            onPress={onPressLogin}
          >
            <Text style={Styles.buttonText}>INGRESAR</Text>
          </TouchableOpacity>
          <View style={Styles.containerHorizontal}>
            <Text style={Styles.bodyText}>
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
            <Text style={Styles.bodyText}>
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
      </ScrollView>
    </SafeAreaView>


  );
};

export default Login;