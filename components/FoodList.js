import { StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react';
import FoodItem from '../components/FoodItem';


export default function FoodList( {items} ) {

    const styles = StyleSheet.create({})
    function  renderFoodItem(itemData){
        //  console.log(itemData.item);
      
          const foodItemProps ={
            id:itemData.item.id,
            title:itemData.item.title,
            imageUrl:itemData.item.imageUrl,
            affordability:itemData.item.affordability,
            complexity:itemData.item.complexity,
          };
          return <FoodItem {...foodItemProps} />;
        }
    

        return (
            <View>
            <FlatList 
            data={items}
            keyExtractor={(item)=>item.id}
            renderItem={renderFoodItem}
            />
            </View>
        );
}

