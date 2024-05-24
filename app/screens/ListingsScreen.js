import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import AppScreen from '../components/AppScreen';
import AppCard from '../components/AppCard';
import colors from '../config/colors';

const listings = [
    {
        id: 1,
        title: 'Sightseeing 1',
        info: 'sight info',
        image: require('../assets/favicon.ng')

    },
    {
        id: 2,
        title: 'Sightseeing 2',
        info: 'sight info',
        image: require('../assets/favicon.ng')

    },
    {
        id: 3,
        title: 'Sightseeing 3',
        info: 'sight info',
        image: require('../assets/favicon.ng')

    }
];
function ListingsScreen(props) {
    return (

        <AppScreen style = {styles.screen}>
            <FlatList
            data={lisitngs}
            keyExtractor={listing => listing.id.toString()}
            renderItem={({item}) =>
                <AppCard
                    title = {item.title}
                    subtitle = {item.price}
                    image = {item.image}
                />
            
            }
            />

        </AppScreen>
    );
}

const styles = StyleSheet.create({
    screen : {
        padding: 20,
        backgroundColor: colors.light,
    }
    
})

export default ListingsScreen;