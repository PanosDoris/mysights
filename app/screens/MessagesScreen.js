import React, {useState} from 'react';
import { FlatList, StyleSheet } from 'react-native';
import AppListItem from '../components/AppListItem';
import AppScreen from '../components/AppScreen';
import ListItemSeperator from '../components/ListItemSeperator';
import AppListItemDelete from '../components/AppListItemDelete';

const initialMessages = [
    {
        id: 1,
        title: 'T1',
        description: 'D1',
        image: require('../assets/favicon.png')
    }, 
    {
        id: 2,
        title: 'T2',
        description: 'D2',
        image: require('../assets/favicon.png')
    },
    {
        id: 3,
        title: 'T3',
        description: 'D3',
        image: require('../assets/favicon.png')
    }

]
function MessagesScreen(props) {

    // Handle messages.
    const [messages, setMessages] = useState(initialMessages);

    // pull to refresh flatlist.
    const [refreshing, setRefreshing] = useState(false);

    const handleDelete = message => {

        // Actions.
        // Delete Message.
        setMessages(messages.filter(m => m.id !== message.id));
        // Call the Server

    }

    return (

        <AppScreen>

            <FlatList 
            data = {messages}
            keyExtractor={(message) => message.id.toString()}
            renderItem={({item}) =>(
                <AppListItem
                title={item.title}
                subtitle={item.description}
                image={item.image}
                onPress={() => console.log('message selected', item)}
                renderRightActions={() => 
                <AppListItemDelete
                    onPress={() => handleDelete(item)}
                />}
                
                />
            )} 
            ItemSeparatorComponent={ListItemSeperator} 
            refreshing= {refreshing}
            onRefresh={() =>
                {
                    setMessages([
                        {
                            id: 4,
                            title: 'T4',
                            description: 'D4',
                            image: require('../assets/favicon.png')
                        },
                        {
                            id: 5,
                            title: 'T5',
                            description: 'D5',
                            image: require('../assets/favicon.png')
                        },
                        {
                            id: 6,
                            title: 'T6',
                            description: 'D6',
                            image: require('../assets/favicon.png')
                        },
                    ])
                }
            } 
            />

        </AppScreen>

    );
}

const styles = StyleSheet.create({

    
})

export default MessagesScreen;