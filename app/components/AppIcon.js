import React from 'react';
import { StyleSheet, View } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import colors from '../config/colors';

function AppIcon({
    name,
    size = 40,
    backgrounColor = colors.black,
    iconColor = colors.white,

}) {
    return (

        <View style = {styles.icon}>
            <MaterialCommunityIcons name={name} color={iconColor} size={size * 0.5}/>
        </View>
    );
}

const styles = StyleSheet.create({
    icon: {
        width: size,
        height: size,
        borderRadius: size/2,
        backgrounColor,
        justifyContent: 'center',
        alignItems: 'center',

    }
    
})
export default AppIcon;