import { StyleSheet, Text, View, ScrollView, Image, Pressable } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { FOODS } from '../data/dummy-data';
import FoodIngredients from '../components/FoodIngredients';
import { MaterialCommunityIcons } from '@expo/vector-icons';


export default function FoodDetailScreen({route, navigation}) {

    const foodId = route.params.foodId;
    const selectedFood = FOODS.find((food)=>food.id === foodId);

    //console.log(selectedFood)

    const pressHandler = () =>{
        console.log('Pressed!!');
    };

  useLayoutEffect(()=>{
    navigation.setOptions({
        headerRight: ()=> {
        return (
            <Pressable onPress={pressHandler} style={({pressed})=>(pressed ? styles.pressed : null)}>
                <MaterialCommunityIcons name="star-shooting-outline" size={30} color="white" />
            </Pressable>
        );
      },
    });
  },[navigation]);
  

  return (
    <ScrollView style={styles.rootContainer} >
        <Image style={styles.image} source={{uri: selectedFood.imageUrl}}/>
        <Text style={styles.title}>{selectedFood.title}</Text>
        <View style={styles.details}>
          <Text style={styles.detailItem}>{selectedFood.complexity}</Text>
          <Text style={styles.detailItem}>{selectedFood.affordability}</Text>
        </View>
        <View style={styles.listContainer}>
            <View style={styles.subtitleContainer}>
                <Text style={styles.subtitle}>Ingredients</Text>
            </View>
            <FoodIngredients data={selectedFood.ingredients}/>
        </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    rootContainer:{
        marginBottom: 50,
    },
    image:{
        width: '%100',
        height: 300,
    },
    title:{
        textAlign: 'center',
        fontSize: 27,
        fontWeight: 'bold',
        marginTop: 5,
    },
    details:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 5,
    },
      detailItem:{
        marginHorizontal: 10,
        fontSize: 16,
        color: 'red'
    },
    listContainer:{
        width: '%100',
        paddingHorizontal: 10,

    },
    subtitleContainer:{
        alignItems: 'center',
        borderBottomWidth: 2,
        borderBottomColor: 'purple',
        marginVertical: 5,

    },
    subtitle:{
        color: 'purple',
        fontSize: 24,
        fontWeight: 'bold'
    },
    pressed:{
        opacity : 0.5
    },
})