import React from 'react';
import {
  StyleSheet, Text, View,
  Dimensions, SafeAreaView, Image, TouchableNativeFeedback, StatusBar, Platform, TouchableHighlight, Button, Alert
} from 'react-native';

export default function App() {
  console.log("App executed");
  console.log(require('./assets/icon.png'));
  console.log(Dimensions.get("window"))

  const handlePress = () => console.log("Text clicked!!!")

  return (
    <SafeAreaView style={styles.container}>

      <Text numberOfLines={1} onPress={handlePress}>Hello React Native</Text>

      {/* <Image source={require(""./assets/icon.png")}/> */}

      <TouchableNativeFeedback>
        <View style={{ width: '50%', height: 100, backgroundColor: "dodgerblue" }} />
      </TouchableNativeFeedback>

      <TouchableHighlight onPress={() => console.log("Image tapped")}>
        <Image
          resizeMode={"center"}
          source={{
            width: 200,
            height: 200,
            uri: "https://i.picsum.photos/id/1003/1181/1772.jpg?hmac=oN9fHMXiqe9Zq2RM6XT-RVZkojgPnECWwyEF1RvvTZk"
          }} />

      </TouchableHighlight>

      <View style={{ margin: 10 }}>
        <Button style={{ marginTop: 50 }} title="Normal button" onPress={() => console.log("Button pressed!")} />
      </View>

      <View style={{ margin: 10 }}>
        <Button title="Show me default alert" onPress={() => alert('Testing')} />
      </View>
      <View style={{ margin: 10 }}>
        <Button title="Show me custom alert" onPress={() => Alert.alert("My Title",
          "My Message",
          [{ text: "Yes", onPress: () => console.log("Yes pressed!") },
          { text: "No", onPress: () => console.log("No pressed!") }])} />

      </View>
      {/* <Button title = "Show me prompt alert" onPress ={() => Alert.prompt("My Title","My Message", (text) => console.log(text))}/>
    <View style={{margin:10}}>
      </View> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection : "column",
    backgroundColor: '#fff',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    alignItems: 'flex-end'
  },
});

