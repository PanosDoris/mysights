import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import defaultStyles from '../config/styles'

function AppTextInput( { icon , ...otherProps}) {
    return (

        <View style = {styles.container}>
            {icon && <MaterialCommunityIcons name={icon} size={20} color={defaultStyles.colors.medium} style={styles.icon}/>}

            <TextInput 
                placeholderTextColor={defaultStyles.colors.medium}
                style = {defaultStyles.text} {...otherProps} 
            />

        </View>
    );
}

const styles = StyleSheet.create({
    
    container :{
        width: '100%',
        backgroundColor : defaultStyles.colors.light,
        borderRadius: 25,
        flexDirection: 'row',
        padding: 15,
        marginVertical: 10,

    },
    icon: {
        marginRight: 10,

    }
})

export default AppTextInput;