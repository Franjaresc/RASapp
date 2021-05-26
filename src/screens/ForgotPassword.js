import React, { useContext, useState } from 'react'
import { Alert, Image, SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { AuthContext } from '../firebase/AuthProvider';
import Styles from '../styles/Styles'

const ForgotPassword = () => {
    const { sendPassword } = useContext(AuthContext);
    const [email, setEmail] = useState();
    const onPressForgetPassword = () => {

        if (!(email == null || email == "")) {
            sendPassword(email)
        }
        else {
            Alert.alert(
                "Alerta",
                "Ingrese una direccion de correo",
                [
                    { text: "Aceptar", onPress: () => console.log("OK Pressed") }
                ]
            );
        }

    }
    return (
        <SafeAreaView style={Styles.containerAppStack}>
            <View style={Styles.container}>
                <Image source={require('../assets/Logo.png')} style={Styles.logo} />
                <TextInput
                    style={Styles.textInput}
                    onChangeText={(userEmail) => setEmail(userEmail)}
                    placeholder="Correo electrónico"
                />
                <TouchableOpacity
                    style={Styles.buttonPrimary}
                    onPress={onPressForgetPassword}
                >
                    <Text style={Styles.buttonText}>RECUPERAR CONTRASEÑA</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default ForgotPassword
