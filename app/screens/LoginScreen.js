import React from 'react';
import { Image, StyleSheet } from 'react-native';

import * as Yup from 'yup';

import AppScreen from '../components/AppScreen';
import {AppForm , AppFormField, AppSubmitbutton} from '../components/forms'

const validationSchema= Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password")
})

function LoginScreen(props) {

    return (
        <AppScreen style ={styles.container}>

            <Image style ={styles.logo} source={require('../assets/favicon.png')}/>

            <AppForm
                initialValues={{email: '', password: ''}}
                onSubmit={values => console.log(values)}
                validationSchema={validationSchema}
            >

                        <AppFormField
                            name = "email"
                            autoCapitalize="none"
                            autoCorrect="false"
                            keyboardType="email-address"
                            textContentType="emailAddress"
                            icon="email"
                            placeHolder="Email"

                        />

                        <AppFormField
                            name="password"
                            autoCapitalize="none"
                            autoCorrect="false"
                            textContentType="password"
                            icon="lock"
                            placeHolder="Password"
                            secureTextEntry = "true"

                        />
                        <AppSubmitbutton title="Login"/>


            </AppForm>
   
            
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    container: {

        padding: 10,
    },
    logo : {
        width: 80,
        height: 80,
        alignSelf: 'center',
        marginTop: 50,
        marginBottom: 20,
    }
    

})

export default LoginScreen;