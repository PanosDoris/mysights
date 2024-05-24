import React from 'react';
import { Image, StyleSheet, TouchableHighlight, View } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable'
import {MaterialCommunityIcons} from '@expo/vector-icons';

import colors from '../config/colors';
import AppText from '../components/AppText';

function AppListItem( title, subtitle, image, IconComponent, onPress, renderRightActions) {
    return (

        <Swipeable renderRightActions={renderRightActions}>

            <TouchableHighlight
                underlayColor={colors.light}
                onPress={onPress}>

                    <View style={styles.container}>
                        {IconComponent}

                        {image && <Image style={styles.image} source={require(image)}/>}

                        <View style={styles.detailsContainer}>
                            <AppText style={styles.title} numberOfLine={1}>{title}</AppText>
                            {subtitle && <AppText style={styles.subtitle} numberOfLine={2}>{subtitle}</AppText>}
                        </View>
                        <MaterialCommunityIcons style={ colors.medium} name="chevron-right" size={25}/>

                    </View>
                
            </TouchableHighlight>

        </Swipeable>
       

    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 15,
        backgroundColor: colors.white,
        alignItems: 'center',
    },
    detailsContainer: {
        marginLeft: 10,
        justifyContent: 'center',
        flex: 1,
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 30,
    },
    subtitle: {
        color: colors.medium,
    },
    title: {
        fontSize: 24,
        fontWeight: '500',
    }
    
})

export default AppListItem;