import React, { useState } from 'react';
import { StyleSheet,  View,  TouchableWithoutFeedback, Modal, Button, FlatList } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import defaultStyles from '../config/styles'
import AppText from './AppText';
import AppScreen from './AppScreen';
import AppPickerItem from './AppPickerItem';

function AppPicker( { icon , items, numberOfColumns=1, onSelectItem, selecteditem,  placeholder, PickerItemComponent = AppPickerItem}) {

    const [modalVisible , setModalVisible] =useState(false);
    return (


        <React.Fragment>

            <TouchableWithoutFeedback onPress={()=> setModalVisible(true)}>

                <View style = {styles.container}>
                    {icon && <MaterialCommunityIcons name={icon} size={20} color={defaultStyles.colors.medium} style={styles.icon}/>}

                    {selecteditem ? <AppText style={styles.text}>{selecteditem.label}</AppText> : <AppText style={styles.placeholder}>{placeholder}</AppText>}

                    <MaterialCommunityIcons name="chevron-down" size={20} color={defaultStyles.colors.medium} />

                </View>

            </TouchableWithoutFeedback>

            <Modal visible = {modalVisible} animationType='slide'>
                <AppScreen>

                    <Button title='Close' onPress={()=>setModalVisible(false)}/>
                    <FlatList
                    data={items}
                    numColumns={numberOfColumns}
                    keyExtractor={item => item.value.toString()}
                    renderItem={({item})=>
                        <PickerItemComponent
                            item={item}
                            label = {item.label}
                            onPress={()=>{
                                setModalVisible(false);
                                onSelectItem(item);

                            }}/>
                    }
                    
                    />

                </AppScreen>

            </Modal>

        </React.Fragment>

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

    },
    placeholder : {
        color: defaultStyles.colors.medium,
        flex: 1,
    },
    text : {
        flex: 1,
    }

})

export default AppPicker;