import { StyleSheet, Text, View, ScrollView, Image, Pressable } from 'react-native'
import React, { useLayoutEffect, useContext } from 'react'
import { FOODS } from '../data/dummy-data';
import FoodIngredients from '../components/FoodIngredients';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FavouritesContext } from '../store/favouritescontext';
import { useDispatch, useSelector } from 'react-redux';
import { addFavourite, removeFavourite } from '../store/redux/favourites';

export default function FoodDetailScreen({route, navigation}) {

   const favouriteFoodsIds = useSelector((state)=>state.favouriteFoods.ids)

    const favouriteFoodContext = useContext(FavouritesContext)
    const foodId = route.params.foodId;
    const selectedFood = FOODS.find((food)=>food.id === foodId);

    // const foodIsFavourite = favouriteFoodContext.ids.includes(foodId);

    const dispatch = useDispatch()
    const foodIsFavourite = favouriteFoodsIds.includes(foodId);

    //console.log(selectedFood)

    const pressHandler = () =>{
        console.log('Pressed!!');
    };

    function changeFavourite(){
        if (foodIsFavourite) {
            dispatch(removeFavourite({id:foodId}))
            // favouriteFoodContext.removeFavourite(foodId);
        }
        else
        {
            dispatch(addFavourite({id:foodId}))
            // favouriteFoodContext.addFavourite(foodId);
        }
    }
  useLayoutEffect(()=>{
    navigation.setOptions({
        headerRight: ()=> {
        return (
            <Pressable onPress={pressHandler} style={({pressed})=>(pressed ? styles.pressed : null)}>
                <MaterialCommunityIcons 
                name={foodIsFavourite ? 'star-shooting' : 'star-shooting-outline'} 
                size={30} 
                color="white" 
                onPress={changeFavourite}/>
            </Pressable>
        );
      },
    });
  },[navigation, changeFavourite]);
  

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