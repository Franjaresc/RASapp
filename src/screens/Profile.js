import React, { useContext, useEffect, useState } from 'react'
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import { Header } from '../components/Header'
import Styles from '../styles/Styles'
import { AuthContext } from '../firebase/AuthProvider'
import firestore from '@react-native-firebase/firestore';
import PopUp from '../components/PopUp'
import { TextInput } from 'react-native'
import { Alert } from 'react-native'

const Profile = ({ navigation }) => {
    const { user, logout, changePassword } = useContext(AuthContext);
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [ocupation, setOcupation] = useState();
    const [showPopUp, setShowPopUp] = useState(false);
    const [oldPassword, setOldPassword] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();

    const onPressChangeProfile = () => {
        navigation.navigate('Perfil', { screen: 'EdidProfile' });
    };
    const onPressLogout = () => {
        logout()
    };
    const onPressChangePassword = () => {
        setShowPopUp(true)
    };
    const onPressCancel = () => {
        setShowPopUp(false)
    }
    const onPressConfirmNewPassword = () => {
        if (password == confirmPassword) {
            changePassword(oldPassword,password)
        } else {
            Alert.alert(
                "Error",
                "Las contraseñas no coinciden",
                [
                    { text: "Aceptar", onPress: () => console.log("OK Pressed") }
                ]
            );
        }

        setShowPopUp(false)
    }

    useEffect(() => {
        const getUser = async () => {
            try {
                await firestore().collection('users')
                    .doc(user.uid)
                    .onSnapshot(documentSnapshot => {
                        if (documentSnapshot != null) {
                            setName(documentSnapshot.data().name);
                            setEmail(documentSnapshot.data().email);
                            setOcupation(documentSnapshot.data().ocupation);
                        }
                    });
            } catch (e) {
                console.log(e);
            }
        };

        getUser();
    }, []);
    return (
        <SafeAreaView style={Styles.containerAppStack}>
            <Header
                title={"Perfil"}
            />
            <View style={Styles.container}>
                <Text style={Styles.text}>
                    {name}
                </Text>
                <Text style={Styles.text}>
                    {email}
                </Text>
                <Text style={Styles.text}>
                    {ocupation}
                </Text>
                <TouchableOpacity
                    style={Styles.buttonPrimary}
                    onPress={onPressChangeProfile}
                >
                    <Text style={Styles.buttonText}>EDITAR PERFIL</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={Styles.buttonPrimary}
                    onPress={onPressChangePassword}
                >
                    <Text style={Styles.buttonText}>CAMBIAR CONTRASEÑA</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={Styles.buttonPrimary}
                    onPress={onPressLogout}
                >
                    <Text style={Styles.buttonText}>CERRAR SESIÓN</Text>
                </TouchableOpacity>

            </View>
            <PopUp isVisible={showPopUp}
                setVisible={setShowPopUp}
                style={Styles.popUp}
            >
                <Text style={Styles.titlePopUp}>Cambio de contraseña</Text>
                <TextInput
                    style={Styles.textInput}
                    onChangeText={(userPassword) => setOldPassword(userPassword)}
                    secureTextEntry={true}
                    placeholder="Contraseña actual"
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
                <View style={Styles.containerHorizontal}>
                    <TouchableOpacity
                        style={Styles.buttonSecundary}
                        onPress={onPressConfirmNewPassword}
                    >
                        <Text style={Styles.buttonText}>GUARDAR</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={Styles.buttonSecundary}
                        onPress={onPressCancel}
                    >
                        <Text style={Styles.buttonText}>CANCELAR</Text>
                    </TouchableOpacity>
                </View>
            </PopUp>
        </SafeAreaView>

    );
};

export default Profile;
