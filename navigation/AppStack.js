import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Rasopathies from '../src/screens/Rasopathies'


const Tab = createBottomTabNavigator();

const AppStack = () => {
  return (
    <SafeAreaProvider>
      <Tab.Navigator>
        <Tab.Screen
        name="Rasopathies"
        component={Rasopathies}
        
        >
        </Tab.Screen>
      </Tab.Navigator>
    </SafeAreaProvider>
  );
}
export default AppStack;