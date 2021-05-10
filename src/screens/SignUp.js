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
} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { AuthContext } from '../../firebase/AuthProvider'

const SignUp = ({ navigation }) => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const { register } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: 'Medico', value: 'medico' },
    { label: 'Estudiante', value: 'estudiante' }
  ]);

  const onPressSignUp = () => {
    if(password==confirmPassword){
      register(email, password, name, value)
    }else{
      Alert.alert(
        "Error",
        "Las contraseñas no coinciden",
        [
          {
            text: "Cancelar",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "Aceptar", onPress: () => console.log("OK Pressed") }
        ]
      );
    }
  };

  return (
    <ScrollView contentContainerStyle={Styles.containerScrollView}>
      <View style={Styles.container}>


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
          placeholder="Confirmación Contraseña"
        />
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          placeholder="Ocupation"
          searchable={false}
          containerStyle={Styles.dropDownPicker}
        />


        <TouchableOpacity
          style={Styles.button}
          onPress={onPressSignUp}
        >
          <Text>REGISTRARSE</Text>
        </TouchableOpacity>


      </View>
    </ScrollView>
  );
};

export default SignUp;