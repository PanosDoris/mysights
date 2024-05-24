import React from 'react';
import { Image, View, StyleSheet} from 'react-native';
import AppText from '../components/AppText';
import AppListItem from '../components/AppListItem';
import colors from '../config/colors';

function ListingDetailsScreen(props) {
    return (

        <View>
            <Image style={styles.image} source={require('../assets/favicon.png')}/>
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>List 1 Title</AppText>
                <AppText style={styles.subtitle}>List 1 Subtitle</AppText>

                <View style={styles.userContainer}>

                    <AppListItem
                    image={require('../assets/favicon.png')}
                    title='name'
                    subtitle='comment'
                    
                    />
                    
                </View>


            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    detailsContainer: {
        padding: 20,
    },
    image: {
        width: '100%',
        height: 300
    },
    subtitle: {
        color: colors.secondary,
        fontSize: 20,
        fontWeight: '300',
        marginVertical: 10

    },
    title: {
        fontSize: 24,
        fontWeight: '500'

    },
    userContainer: {
        marginVertical: 40,
    }
})

export default ListingDetailsScreen;