import React from 'react';
import { Image, ImageBackground , StyleSheet,  Text,  View} from 'react-native';

import AppButton from '../components/AppButton';

function WelcomeScreen(props) {
    return (

        <ImageBackground 
        blurRadius={10}
         style={styles.background}
         source={require("../assets/splash.png")}>

            <View style={styles.logoContainer} > 
                <Image style={styles.logo} source={require("../assets/favicon.png")}/>
                <Text style={styles.tagline}>My Sights</Text>

            </View>

            <View style={styles.buttonsContainer}>
                <AppButton title='Login' onPress={() => console.log('tapped')}/>
                <AppButton title='Register' onPress={() => console.log('tapped')} color='secondary'/>
            </View>


         </ImageBackground>
    );
}
const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    buttonsContainer :{
        width: '100%',
        padding: 20,

    },
    logo :{
        width: 100,
        height: 100,
        position: 'absolute',
        top: 70,
    },
    logoContainer :{
        position: 'absolute',
        top: 70,
        alignItems: 'center'
    },
    tagline :{
        fontSize: 25,
        fontWeight: 'bold',
        paddingfVertical: 20,
    },

})

export default WelcomeScreen;