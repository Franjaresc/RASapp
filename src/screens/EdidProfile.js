import React, { useEffect, useState, useContext } from 'react'
import { SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { Header } from '../components/Header';
import Styles from '../styles/Styles';
import { AuthContext } from '../firebase/AuthProvider'
import firestore from '@react-native-firebase/firestore';

const EdidProfile = ({ navigation }) => {

    const { user } = useContext(AuthContext);
    const [name, setName] = useState('');
    const [nName, setNName] = useState();
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Medico', value: 'Medico' },
        { label: 'Estudiante', value: 'Estudiante' }
    ]);
    const onPressSave = () => {
        if (nName == null || nName == "") {
            updateUserOcupation();
        }
        else {
            updateUser();
        }
    }
    const onPressCancel = () => {
        navigation.navigate('Perfil', { screen: 'PerfilScreen' });
    }
    const updateUser = async () => {
        try {
            await firestore().collection('users')
                .doc(user.uid)
                .update({
                    name: nName,
                })
                .then(() => {
                    firestore()
                        .collection('users')
                        .doc(user.uid)
                        .update({
                            ocupation: value,
                        })
                }).then(() => {
                    console.log('User updated!');
                    navigation.navigate('Perfil', { screen: 'PerfilScreen' });
                });
        } catch (e) {
            console.log(e);
        }
    }
    const updateUserOcupation = async () => {
        try {
            await firestore()
                .collection('users')
                .doc(user.uid)
                .update({
                    ocupation: value,
                })
                .then(() => {
                    console.log('User ocupation updated!');
                    navigation.navigate('Perfil', { screen: 'PerfilScreen' });
                });
        } catch (e) {
            console.log(e);
        }
    }
    useEffect(() => {
        const getUser = async () => {
            try {
                await firestore().collection('users')
                    .doc(user.uid)
                    .onSnapshot(documentSnapshot => {
                        if (documentSnapshot != null) {
                            setName(documentSnapshot.data().name);
                            setValue(documentSnapshot.data().ocupation);
                        }
                    });
            } catch (e) {
                console.log(e);
            }
        }

        getUser();
    }, []);

    return (
        <SafeAreaView style={Styles.containerAppStack}>
            <Header
                title={"Editar Perfil"}
            />
            <View style={Styles.container}>
                <TextInput
                    style={Styles.textInput}
                    onChangeText={(userName) => setNName(userName)}
                    placeholder={name}
                />
                <DropDownPicker
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                    placeholder={value}
                    searchable={false}
                    containerStyle={Styles.dropDownPicker}
                />
                <View style={Styles.containerHorizontal}>
                    <TouchableOpacity
                        style={Styles.buttonSecundary}
                        onPress={onPressSave}
                    >
                        <Text>GUARDAR</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={Styles.buttonSecundary}
                        onPress={onPressCancel}
                    >
                        <Text>CANCELAR</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>

    );
};

export default EdidProfile;
