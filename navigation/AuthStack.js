import React, { useContext, useState, useEffect } from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../src/screens/Login';
import SignUp from '../src/screens/SignUp';

const Stack = createStackNavigator();

const AuthStack = () => {
    return(
        <Stack.Navigator headerMode="none" initialRouteName="Login">
            <Stack.Screen
              name="Login"
              component={Login}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUp}
            />
          </Stack.Navigator>
    )
}
export default AuthStack;