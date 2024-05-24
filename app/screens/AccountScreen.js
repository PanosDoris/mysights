import React from 'react';
import { StyleSheet, View, FlatList, Icon } from 'react-native';
import AppScreen from '../components/AppScreen';
import AppListItem from '../components/AppListItem';
import colors from '../config/colors';
import ListItemSeperator from '../components/ListItemSeperator';


const menuItems = [
    {
        title: 'My Sights',
        icon: {
            name : 'format-list-bulleted',
            backgroundColor: colors.primary

        }

    },
    {
        title: 'My Messages',
        icon: {
            name : 'email',
            backgroundColor: colors.secondary

        }

    }
]
function AccountScreen(props) {
    return (

        <AppScreen style = {styles.screen}>

            <View style = {styles.container}>

                <AppListItem
                title = "Panos Doris"
                subtitle = "programmer"
                image = {require('../assets/favicon.png')}

                />

            </View>

            <View style = {styles.container}>

                    <FlatList 
                    data = {menuItems}
                    keyExtractor={menuItem => item.title}
                    ItemSeparatorComponent={ListItemSeperator}
                    renderItem={({ item }) =>
                        <AppListItem
                        title = {item.title}
                        IconComponent = {
                            <Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor}/>
                        }
                        />
                    }
                    />

            </View>

            <AppListItem
            title = 'Log out'
            IconComponent = {
                <Icon name='logout' backgroundColor = "#ffe66d"/>
            }/>

        </AppScreen>

    );
}

const styles = StyleSheet.create({
    container : {
        marginVertical: 20,
    },
    screen: {
        backgroundColo: colors.light,

    }
    
})
export default AccountScreen;