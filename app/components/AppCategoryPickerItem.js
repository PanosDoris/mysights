import React from 'react';
import { StyleSheet, View } from 'react-native';

import AppIcon from "./AppIcon"
import AppText from './AppText';


function AppCategoryPickerItem({item ,  onPress}) {
    return <View style={styles.container}>

       <AppIcon name={item.icon} backgrounColor={item.backgrounColor} size={80}></AppIcon>
       <AppText style={styles.label}>{item.label}</AppText>
    </View>;
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
        paddingVertical: 15,
        alignItems: 'center',
        widt: '33%',

    },
    label: {
        marginTop: 5,
        textAlign: 'center',
    }
    
})

export default AppCategoryPickerItem;