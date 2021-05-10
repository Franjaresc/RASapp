import React, { useState } from 'react'
import Styles from '../styles/Styles.js'
import DropDownPicker from 'react-native-dropdown-picker'

import {
  TouchableOpacity,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

const SignUp = ({ navigation }) => {
  const [state, setState] = useState({
    name: '',
    email: '',
    cEmail: '',
    password: '',
    cPassword: '',
    ocupation: '',
  });
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: 'Medico', value: 'medico' },
    { label: 'Estudiante', value: 'estudiante' }
  ]);

  const onPressSignUp = () => {
    navigation.navigate('Rasopathies')
  };
  const handleChangeText = (name, value) => {
    setState({ ...state, [name]: value })
  }

  return (
    <ScrollView contentContainerStyle={Styles.containerScrollView}>
      <View style={Styles.container}>


        <TextInput
          style={Styles.textInput}
          onChangeText={(value) => handleChangeText('name', value)}
          placeholder="Nombre completo"
        />
        <TextInput
          style={Styles.textInput}
          onChangeText={(value) => handleChangeText('email', value)}
          secureTextEntry={true}
          placeholder="Correo electrónico"
        />
        <TextInput
          style={Styles.textInput}
          onChangeText={(value) => handleChangeText('cEmail', value)}
          secureTextEntry={true}
          placeholder="Confirmación correo Electrónico"
        />
        <TextInput
          style={Styles.textInput}
          onChangeText={(value) => handleChangeText('password', value)}
          secureTextEntry={true}
          placeholder="Contraseña"
        />
        <TextInput
          style={Styles.textInput}
          onChangeText={(value) => handleChangeText('cPassword', value)}
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