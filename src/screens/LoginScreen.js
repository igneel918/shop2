import { StatusBar } from 'expo-status-bar'
import { useDispatch, useSelector } from 'react-redux'
import React, {useEffect, useState} from 'react'
import { StyleSheet, Text, View, Button, TextInput } from 'react-native'
import { loginInitiate } from '../redux/action/actions'



const LoginScreen = ({navigation}) => {
    const [state, setState] = useState({
        email: "",
        password: "",
    })

    const currentUser = useSelector((state)=>state.user);
    
    const dispatch = useDispatch();

    const { email, password } = state;
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!email || !password){
            console.log('error');
            return null;
            
        };
        console.log(state.email);
        dispatch(loginInitiate(email,password));
        setState({email:"",password:""});

     };



    
    
    return (
        <View style = {styles.container}>
            <StatusBar styel = 'light'/>
            <Text>Welcome</Text>
            <View style = {styles.inputContainer}> 
                <TextInput 
                    placeholder='Email'
                    autoFocus
                    type = 'email'
                    value = {email}
                    onChangeText={(text) => {
                        setState({...state, email:text})}}
                />
                <TextInput 
                    placeholder='Password'
                    secureTextEntry
                    type = 'password'
                    value = {password}
                    onChangeText={(text) => setState({...state, password:text})}
                />
                <View style = {styles.change1}>
                <Button title = "Login" onPress={handleSubmit}/>
                </View>
                <View style = {styles.change2}>
                <Button title = 'Register' onPress = {() => navigation.navigate('register')} />
                </View>
                <View style = {{height: 100}}/>
            </View>
        </View> 
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: 'white',
    },
    change1: {
        width: 200,
        marginTop: 10,
    },
    change2: {
        width: 200,
        marginTop: 10,
    },
})



  
  export default LoginScreen