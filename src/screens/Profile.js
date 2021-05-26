import React, { useContext, useEffect, useState } from 'react'
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import { Header } from '../components/Header'
import Styles from '../styles/Styles'
import { AuthContext } from '../firebase/AuthProvider'
import firestore from '@react-native-firebase/firestore';

const Profile = ({ navigation }) => {
    const { user, logout } = useContext(AuthContext);
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [ocupation, setOcupation] = useState();
    const onPressChangeProfile = () => {
        navigation.navigate('Perfil', { screen: 'EdidProfile' });
    };
    const onPressLogout = () => {
        logout()
    };
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
                //onPress={onPressChangeProfile}
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
        </SafeAreaView>

    );
};

export default Profile;
