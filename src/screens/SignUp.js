import React, {
  useContext,
  useState
} from 'react'
import Styles from '../styles/Styles'
import DropDownPicker from 'react-native-dropdown-picker'
import {
  TouchableOpacity,
  Text,
  View,
  TextInput,
  Alert,
  SafeAreaView,
  Image,
} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { AuthContext } from '../firebase/AuthProvider'

const SignUp = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const { register } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: 'Medico', value: 'Medico' },
    { label: 'Estudiante', value: 'Estudiante' }
  ]);

  const onPressSignUp = () => {
    if (!(email == null || email == "") && !(password == null || password == "")) {
      if (password == confirmPassword) {
        register(email, password, name, value)
      } else {
        Alert.alert(
          "Error",
          "Las contraseñas no coinciden",
          [
            { text: "Aceptar", onPress: () => console.log("OK Pressed") }
          ]
        );
      }
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

  return (
    <SafeAreaView style={Styles.containerAppStack}>
      <ScrollView contentContainerStyle={Styles.containerScrollView}>
        <View style={Styles.container}>

          <Image source={require('../assets/Logo.png')} style={Styles.logo} />
          <TextInput
            style={Styles.textInput}
            onChangeText={(userName) => setName(userName)}
            placeholder="Nombre completo"
          />
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
          <TextInput
            style={Styles.textInput}
            onChangeText={(userPassword) => setConfirmPassword(userPassword)}
            secureTextEntry={true}
            placeholder="Confirmación contraseña"
          />
          <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            placeholder="Ocupación"
            searchable={false}
            containerStyle={Styles.dropDownPicker}
          />


          <TouchableOpacity
            style={Styles.buttonPrimary}
            onPress={onPressSignUp}
          >
            <Text style={Styles.buttonText}>REGISTRARSE</Text>
          </TouchableOpacity>


        </View>
      </ScrollView>
    </SafeAreaView>

  );
};

export default SignUp;