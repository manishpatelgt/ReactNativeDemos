import React from 'react';
import { registerRootComponent } from 'expo';

import {
    StyleSheet, Text, View, Platform, StatusBar, SafeAreaView
  } from 'react-native';

  export default function App(){
    console.log("Flex Demo.js executed now");
  
    return(
      <SafeAreaView style={styles.container}>
    
         <View style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: "center",
            justifyContent: "center"
          }}>
          <View style={{
            width: 100, height: 100,
            backgroundColor: '#9575CD'
          }}/>
          <View style={{
            width: 100, height: 100,
            backgroundColor: '#7E57C2'
          }}/>
          <View style={{
            width: 100, height: 100,
            backgroundColor: '#673AB7'
          }}/>
          </View> 
          </SafeAreaView>
    )
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
  });

  registerRootComponent(App);