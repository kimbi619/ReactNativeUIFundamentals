import { ActivityIndicator, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { FontAwesome, Octicons } from '@expo/vector-icons';

import Ripple from 'react-native-material-ripple'
import { useNavigation } from '@react-navigation/native';

const Login = ({ route }) => {
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')
    const [isloading, setIsloading] = useState(false)

   
    const navigation = useNavigation()

    useEffect(() => {
      setInterval(() => {
        console.log("hello from login!!!")
      }, 1000);
    }, [])
    

    const login = async( ) => {
        setIsloading(true)
        const data = {
            "username": username,
            "password": password
        }
    }

    
    
    const handleContactAdmin = () => {
    }

  return (
    <View style={styles.container}>
      { console.log("Hi there") }
    {/* <Image style={ styles.logo } source={require('../assets/img/logo_text.png')} /> */}

    <View style={styles.formInputWrapper}>
        <Octicons name="person" size={20} color="#0005" />
        <TextInput
            value={username}
            onChangeText={(username) =>{setUsername(username)}}
            placeholder={"Nom d'utilisateur"}
            style={styles.input}
            cursorColor={'#000'}
            />
    </View>
    <View style={styles.formInputWrapper}>
        <Octicons name="shield-lock" size={20} color="#0005" />
        <TextInput
            value={password}
            cursorColor={'#000'}
            onChangeText={(password) => {setPassword(password)}}
            placeholder={'Mot de passe'}
            secureTextEntry={true}
            style={styles.input}
        />
    </View>
    {
        message.length > 0 && (
            <View style={styles.alert_message }>
                <Text style={styles.danger}>{message}</Text>
            </View>
        )
    }
    

    
    <Ripple 
        rippleColor="rgb(0, 0, 0)"
        rippleOpacity={0.05}
        rippleDuration={300}
        rippleCentered={true}
        rippleFades={false}
        rippleContainerBorderRadius={20} 
        style= {styles.login} 
        onPress={login}>
        <Text style={styles.buttonText}>Connexion</Text>
        { isloading && <Text style={[styles.buttonText, {marginLeft: 8}]}><ActivityIndicator  color={'#fff'} /></Text> }
    </Ripple>

    <View style={styles.auth_questions}>
        <Text style={styles.question_text}>Vous n'avez pas de compte ?</Text>
        <Ripple 
            rippleColor="rgb(0, 0, 0)"
            rippleOpacity={0.05}
            rippleDuration={300}
            rippleCentered={true}
            rippleFades={false}
            rippleContainerBorderRadius={20} 
            style= {[styles.login, styles.other_auth]} 
            onPress={() => navigation.navigate('Signup')}>
            <Text  style={[styles.buttonText, styles.other_auth_text]}>Créer un compte</Text>
        </Ripple>
        
    </View>
    
    <View style={styles.loginIssueWrapper}>
        <Text style={styles.loginIssueMainText} >Rencontrez-vous un problème avec votre compte ?</Text>
        <TouchableOpacity activeOpacity={.7} onPress={handleContactAdmin}><Text style={[styles.loginIssueButton]}>Contacter l'administrateur</Text></TouchableOpacity>
    </View>
  </View>
  )
}

export default Login



const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor : '#fff',
    },
    logo: {
        width: '50%',
        height: 110,
        marginBottom: 20
    },
    formInputWrapper: {
        backgroundColor: '#fff',
        width: '90%',
        backgroundColor: '#F7F9EF',
        marginBottom: 20,
        // padding: 20,
        borderRadius: 6,
        height: 55,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    
    inputLabel: {
        
    },
    input: {
        height: '100%',
        marginLeft: 10,
        width: '90%'
    },
    


    login: {
        padding: 15,
        backgroundColor: '#17469F',
        alignItems: 'center',
        borderRadius: 10,
        width: '90%',
        marginTop: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    loading_animations: {
        color: '#fff',
        marginLeft: 10,
        fontSize: 18,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
    },
    loginIssueWrapper: {
        width: '90%',
        alignItems: 'center',
        marginTop: 20,
    },
    loginIssueMainText: {
    },
    loginIssueButton: {
        fontWeight: '800',
        fontSize: 16,
        marginTop: 5
    },
    danger: {
        color: '#ff264a',
        fontSize: 16
    },
    alert_message: {
        backgroundColor: '#ff264a55',
        borderColor: '#ff264a',
        borderWidth: 1,
        borderRadius: 4,
        width: '90%',
        padding: 10,
        marginVertical: 5,
    },
    auth_questions: {
        marginTop: 20,
        width: '90%',
    },
    question_text: {
        fontSize: 16,
        marginRight: 5,
        marginTop: 10
    },
    other_auth: {
        width: '100%',
        marginTop: 7,
        borderColor: '#17469F',
        backgroundColor: '#fff',
        borderWidth: 1,
        paddingVertical: 10,

    },
    other_auth_text: {
        color: '#17469F'
    }
  });