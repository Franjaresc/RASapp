import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Login from './src/screens/Login.js'
import SignUp from './src/screens/SignUp.js';
class App extends Component {

  constructor(props) {
    super(props)
    Stack = createStackNavigator();
  }
  render() {
    return (
      <SafeAreaProvider>
        <NavigationContainer>
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
        </NavigationContainer>
      </SafeAreaProvider>
    )
  }
}

export default App;