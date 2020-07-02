import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button} from 'react-native';

const ListItem = ({item, deleteItem}) => {
    return (
        <TouchableOpacity style={styles.listItem}>
            <View style={styles.listItemView}>
            <Text style={styles.listItemText}>
                {item.text}
            </Text>
             <Button style={{backgroundColor : "firebrick"}} title="X" onPress={() => deleteItem(item.id)} />
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    listItem : {
        padding: 15,
        backgroundColor: '#f8f8f8',
        borderWidth: 1,
        borderColor : '#eee'
        
    },
    listItemView : {
        flexDirection : "row",
        justifyContent: 'space-between',
        alignItems: "center"
    },
    listItemText : {
        fontSize: 18
    }
});


export default ListItem;