import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Rasopathies from '../screens/Rasopathies'
import Profile from '../screens/Profile';
import EdidProfile from '../screens/EdidProfile';
import { createStackNavigator } from '@react-navigation/stack';
import { Image } from 'react-native';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export const AppStack = () => {
  return (
    <SafeAreaProvider>
      <Tab.Navigator

        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, tintColor }) => {
            if (route.name === 'RASopatías') {
              return <Image
                source={require('../assets/ListIcon.png')}
                style={{ height: 25, width: 25, tintColor: tintColor }}
              />;
            } else if (route.name === 'Perfil') {
              return <Image
                            source={require('../assets/UserIcon.png')}
                            style={{ height: 35, width: 35, tintColor: tintColor }}
                        />;
            }
          },
        })}
        tabBarOptions={{
          activeTintColor: '#67AB6A',
          inactiveTintColor: '#4158A0',
        }}

      >
        <Tab.Screen
          name="RASopatías"
          component={Rasopathies}
        />
        <Tab.Screen
          name="Perfil"
          component={PerfilScreens}
        />
      </Tab.Navigator>

    </SafeAreaProvider>
  );
}
export const PerfilScreens = () => {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="Perfil">
      <Stack.Screen
        name="PerfilScreen"
        component={Profile}
      />
      <Stack.Screen
        name="EdidProfile"
        component={EdidProfile}
      />
    </Stack.Navigator>
  )
}

export const TabScreens = () => {

}

