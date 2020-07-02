import React, { useState } from 'react';
import { View, StyleSheet, StatusBar, FlatList, Text } from 'react-native';
import { registerRootComponent } from 'expo';

import ListItem from './ListItem'
import Header from './Header'

const App = () => {

    const [items, setItems] = useState([
        { id: 1, text: 'Milk' },
        { id: 2, text: 'Eggs' },
        { id: 3, text: 'Bread' },
        { id: 4, text: 'Juice' }
    ])
    return (
        <View style={styles.container}>
            <Header title='Shopping List' />
            <FlatList data={items} renderItem={({ item }) => <Text>{item.text}</Text>} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight,
    },
});


registerRootComponent(App);