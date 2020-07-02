import React, { useState } from 'react';
import { View, StyleSheet, StatusBar, FlatList, Alert } from 'react-native';
import { registerRootComponent } from 'expo';


import ListItem from './ListItem'
import AddItem from './AddItem'
import Header from './Header'

const App = () => {

    const number = Math.floor(Math.random() * 500)
    console.log(number)

    const [items, setItems] = useState([
        { id: Math.floor(Math.random() * 100), text: 'Milk' },
        { id: Math.floor(Math.random() * 200), text: 'Eggs' },
        { id: Math.floor(Math.random() * 300), text: 'Bread' },
        { id: Math.floor(Math.random() * 400), text: 'Juice' }
    ])

    const deleteItem = (id) => {
        console.log(id)
        setItems(prevItems => {
            return prevItems.filter(item => item.id != id);
        })
    }

    const addItem = (text) => {
        if (!text) {
            Alert.alert('Error', 'Pleas enter an item', [{
                text: 'OK'
            }],
                { cancelable: false });
        } else {
            setItems(prevItems => {
                return [{ id: Math.floor(Math.random() * 500), text }, ...prevItems];
            });
        }
    }

    return (
        <View style={styles.container}>
            <Header title='Shopping List' />
            <AddItem addItem={addItem} />
            <FlatList data={items}
                renderItem={({ item }) => (<ListItem item={item} deleteItem={deleteItem} />)}
            />

            {/* <FlatList data={items} renderItem={({ item }) => <Text>{item.text}</Text>} /> */}
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