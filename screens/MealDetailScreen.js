import React from "react"
import {View, Text, Button, StyleSheet} from "react-native";

const MealDetailScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>Meal Detail screen.</Text>
      <Button title="Home" onPress={() => {
        props.navigation.popToTop();
      }}/>
    </View>
  )
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default MealDetailScreen;