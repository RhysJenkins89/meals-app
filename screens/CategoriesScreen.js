import React from "react"
import {View, Text, Button, FlatList, TouchableOpacity, StyleSheet} from "react-native";
import {CATEGORIES} from "../data/dummy-data";
import Colours from "../constants/Colours";

const CategoriesScreen = (props) => {
  const renderGridItem = (itemData) => {
    return (
      <TouchableOpacity 
        onPress={() => {
          props.navigation.navigate({routeName: "CategoryMeals", params: {
            categoryID: itemData.item.id
          }})
        }}
        style={{...styles.gridItem, ...{backgroundColor: itemData.item.colour}}}
      >
        <View>
          <Text style={styles.title} numberOfLines={2}>{itemData.item.title}</Text>
        </View>
      </TouchableOpacity>
    ) 
  };

  return (
    <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2}/>
  )
};

CategoriesScreen.navigationOptions = {
  headerTitle: "Meal categories"
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  gridItem: {
    flex: 1, 
    margin: 15,
    padding: 15,
    height: 150,
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: {width: 2, height: 2},
    shadowRadius: 10
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 18
  }
});

export default CategoriesScreen;