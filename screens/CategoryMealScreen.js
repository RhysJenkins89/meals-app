import React from "react"
import {View, Text, Button, FlatList, StyleSheet} from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/mealItem";

const CategoryMealScreen = (props) => {
  const catID = props.navigation.getParam("categoryID");

  const selectedCategory = CATEGORIES.find((cat) => {
    return (
      cat.id === catID
    )
  });

  const displayedMeals = MEALS.filter((meal) => {
     return (
       meal.categoryIds.indexOf(catID) >= 0
     )
  })

  const renderMealItem = (itemData) => {
    return (
      <MealItem title={itemData.item.title} onSelectMeal={() => {}}/>
    )
  }

  return (
    <View style={styles.screen}>
      <FlatList 
        data={displayedMeals}
        renderItem={renderMealItem}
        style={{width: "100%"}}
      />
    </View>
  )
};

CategoryMealScreen.navigationOptions = (navigationData) => {
  const catID = navigationData.navigation.getParam("categoryID");

  const selectedCategory = CATEGORIES.find((cat) => {
    return (
      cat.id === catID
    )
  });

  return {
    headerTitle: selectedCategory.title
  }
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default CategoryMealScreen;