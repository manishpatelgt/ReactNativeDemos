import React from 'react';
import { registerRootComponent } from 'expo';

import {
    StyleSheet, Text, View, Platform, StatusBar, SafeAreaView, Button
  } from 'react-native';

  export default class App extends React.Component{
    
    /*
   Initialize state object
   with variable 'number'
   set to 0 and variable name
   with value of empty string
   */
  state= {number: 0};
//temp
     render() { 
    return(
      <SafeAreaView style={styles.container}>
      <View style={styles.fixToText} >
               <Button title='Decrement'
                       color='#f194ff'
                       onPress={() => this.decrement()}
                  />
               <Text>
                   {/*
                    Text will be automatically
                    updated whenever state.number
                    has changed value
                    */}
                   Value = {this.state.number}
               </Text>
               <Button title='Increment'
                       color='#64B5F6'
                       onPress={() => this.increment()}/>
           </View>
          </SafeAreaView>
    )
  }

    //Declaration of decrement function
 decrement() {
        //To update the state we need invoke this.setState
        //with new value for variable 'number'
        this.setState({number: this.state.number - 1});
    }
 increment() {
        this.setState({number: this.state.number + 1});
    }
}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    fixToText: {
        flex: 1,
        padding: 20,
        alignItems: "center",
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
  });

  registerRootComponent(App);