import { StyleSheet, Text, View, Pressable,Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function FoodItem({
    id, 
    title, 
    imageUrl, 
    affordability,
    complexity
}) {

  const navigation = useNavigation();
  const FoodItemHandler = ()=>{
    navigation.navigate('FoodDetail', {
      foodId:id,
    });
  }
  return (
    <View style={styles.FoodItem}>
      <Pressable
                style={({ pressed }) =>(pressed ? styles.buttonPressed : null )} 
                onPress={FoodItemHandler}>
        <View style={styles.innerView}>
          <View>
            <Image source={{uri:imageUrl}} style={styles.image}/>
            <Text style={styles.title}>{title}</Text>
          </View>
          <View style={styles.details}>
            <Text style={styles.detailItem}>{complexity}</Text>
            <Text style={styles.detailItem}>{affordability}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  FoodItem:{
    margin: 15,
    backgroundColor: 'white',
    elevation: 4,
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    borderRadius: 15,
  },
  innerView:{

  },
  image:{
    width: '%100',
    height: 300,
    borderRadius: 15,
    margin: 15
  },
  title:{
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    margin: 8,
  },
  details:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
  },
  detailItem:{
    marginHorizontal: 10,
    fontSize: 12,
  },
  buttonPressed: {
    opacity: 0.5,
  },
})