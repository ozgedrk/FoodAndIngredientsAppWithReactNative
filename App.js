import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FoodOverviewScreen from './screens/FoodOverviewScreen';
import FoodDetailScreen from './screens/FoodDetailScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavouritesScreen from './screens/FavouritesScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {Ionicons} from '@expo/vector-icons';
import FavouritesContextProvider from './store/favouritescontext';
import { Provider } from 'react-redux';
import { store } from './store/redux/store';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
function DrawerNavigator(){
  return(
    <Drawer.Navigator
    screenOptions={{
      headerStyle: {backgroundColor: 'pink'},
      headerTintColor: 'white',
    }}>
      <Drawer.Screen name="Categories" component={CategoriesScreen} options={{
        title: 'All Categories',
        drawerIcon: () => (
          <Ionicons name="list" size={30} color="purple" />
        ),
      }}/>
      <Drawer.Screen name="Favourites" component={FavouritesScreen} options={{
        title: 'Favourites',
        drawerIcon: () => (
          <MaterialCommunityIcons name="star-shooting-outline" size={30} color="purple" />
        ),
      }} />
    </Drawer.Navigator>
  )
}
export default function App() {
  return (
    <NavigationContainer>
  <Provider store={store} >
      {/* <FavouritesContextProvider> */}

      <Stack.Navigator
      screenOptions= {{
        headerStyle:{backgroundColor: 'purple'}, 
        headerTintColor: 'pink',
        contentStyle: {backgroundColor: 'lightblue'}
        }}
      >
        {/* <Stack.Screen 
        name="Categories" 
        component={CategoriesScreen}
        options={{
          title: 'All Categories',
        }}
        /> */}
        <Stack.Screen 
        name="Drawer" 
        component={DrawerNavigator}
        options={{
          headerShown: false,
        }} 
        />
        <Stack.Screen 
        name="FoodOverview" 
        component={FoodOverviewScreen} 
        />
        <Stack.Screen 
        name="FoodDetail" 
        component={FoodDetailScreen}
        options={{
          title: 'Ingredient',
        }} 
        />
      </Stack.Navigator>
              
      {/* </FavouritesContextProvider> */}

    </Provider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
