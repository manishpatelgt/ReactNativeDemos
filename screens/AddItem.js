import React ,  { useState } from 'react';
import { View, StyleSheet, TextInput, Button } from 'react-native';

const AddItem = ({ title, addItem}) => {
    const[text, setText] = useState('');
    const onChange  = (textValue) =>  setText(textValue);
    return (
        <View>
            <TextInput placeholder="Add Item.." style={styles.input} onChangeText={onChange} />
            <Button style={styles.btnText} title="Add Item" onPress={() => addItem(text)} />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 60,
        padding: 8,
        fontSize: 16
    },
    btnText: {
        backgroundColor: '#c2bad8'
    }
});


export default AddItem;