import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import SignOut from '../screens/SignOut';
import { Feather } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import { navigationRef } from './navigationRef';



 

const Stack = createStackNavigator();  


function StackScreen() {
  
    return (
        <NavigationContainer
        ref={navigationRef} 
        // onReady={()=>{
        //     return 
        // }} 
        >
            <Stack.Navigator 
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.primary,
        },
        headerTintColor: 'white',
      }}>

        <Stack.Screen 
            name = 'login'
            component = {LoginScreen}
            options = {{title: 'Login Screen'}}
        />

        <Stack.Screen 
            name = 'register'
            component = {RegisterScreen}
            options = {{title: 'Register Screen'}}
        />

        <Stack.Screen 
            name = 'signout'
            component = {SignOut}
            options = {{title: 'Signout Screen'}}
        />


            </Stack.Navigator>
        </NavigationContainer>

    )
    
}


export default StackScreen;
