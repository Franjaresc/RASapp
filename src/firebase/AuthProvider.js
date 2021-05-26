import React, { createContext, useState } from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { Alert } from 'react-native';

export const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: async (email, password) => {
          try {
            await auth().signInWithEmailAndPassword(email, password);
          } catch (e) {
            Alert.alert(
              "Información",
              e.message,
              [
                { text: "Aceptar", onPress: () => console.log("OK Pressed") }
              ]
            );
          }
        },
        register: async (email, password, name, ocupation) => {
          try {
            await auth().createUserWithEmailAndPassword(email, password)
              .then(() => {

                firestore().collection('users').doc(auth().currentUser.uid)
                  .set({
                    name: name,
                    email: email,
                    createdAt: firestore.Timestamp.fromDate(new Date()),
                    ocupation: ocupation,
                  })
                  .catch((e) => {
                    Alert.alert(
                      "Información",
                      e.message,
                      [
                        { text: "Aceptar", onPress: () => console.log("OK Pressed") }
                      ]
                    );
                  })
              })
              .catch(e => {
                Alert.alert(
                  "Información",
                  e.message,
                  [
                    { text: "Aceptar", onPress: () => console.log("OK Pressed") }
                  ]
                );
              });
          } catch (e) {
            Alert.alert(
              "Información",
              e.message,
              [
                { text: "Aceptar", onPress: () => console.log("OK Pressed") }
              ]
            );
          }
        },
        logout: async () => {
          try {
            await auth().signOut();
          } catch (e) {
            Alert.alert(
              "Información",
              e.message,
              [
                { text: "Aceptar", onPress: () => console.log("OK Pressed") }
              ]
            );
          }
        },
        sendPassword: async (email) => {
          try {
            await auth().sendPasswordResetEmail(email)
              .then(() => {
                Alert.alert(
                  "Información",
                  "Correo enviado satisfactoriamente",
                  [
                    { text: "Aceptar", onPress: () => console.log("OK Pressed") }
                  ]
                );
              }).catch(e => {
                Alert.alert(
                  "Información",
                  e.message,
                  [
                    { text: "Aceptar", onPress: () => console.log("OK Pressed") }
                  ]
                );
                
              });
          } catch (e) {
            Alert.alert(
              "Información",
              e.message,
              [
                { text: "Aceptar", onPress: () => console.log("OK Pressed") }
              ]
            );
          }
        },
        
      }}>
      {children}
    </AuthContext.Provider>
  )

}
