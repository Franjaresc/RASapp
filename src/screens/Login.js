import React, { useContext, useState } from 'react'
import Styles from '../styles/Styles'
import {
  TouchableOpacity,
  Text,
  View,
  TextInput,
  ScrollView,
} from 'react-native'
import { AuthContext } from '../../firebase/AuthProvider';


const Login = ({ navigation }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { login } = useContext(AuthContext);
  const onPressSignUp = () => {
    navigation.navigate('SignUp')
  };
  const onPressLogin = () => {
    login(email,password)
  };
  const onPressForgetPassword = () => {
    navigation.navigate('SignUp')
  };
  return (
    <ScrollView contentContainerStyle={Styles.containerScrollView}>
      <View style={Styles.container}>
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
    </ScrollView>

  );
};

export default Login;