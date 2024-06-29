import { StyleSheet, Text, View } from 'react-native'
import React , { useContext } from 'react'
import { FavouritesContext } from '../store/favouritescontext'
import { FOODS } from '../data/dummy-data'
import FoodList from '../components/FoodList'
import {  useSelector } from 'react-redux';


export default function FavouritesScreen() {

  // const favouriteFoodContext = useContext(FavouritesContext)

  // const favouriteFoods = FOODS.filter((food)=>favouriteFoodContext.ids.includes(food.id));

  const favouriteFoodIds = useSelector((state)=>state.favouriteFoods.ids);

  const favouriteFoods = FOODS.filter((food)=>favouriteFoodIds.includes(food.id));

  if (favouriteFoods.length === 0) {
    return(
      <View style={styles.container}>
        <Text style={styles.text}>Nothing Added To The Favourites !!!</Text>
      </View>
    )
  }
  return (
    <FoodList  items={favouriteFoods} />
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontSize: 18,
    fontWeight: 'bold',
    color: 'purple'
  },
})