import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FoodOverviewScreen from './screens/FoodOverviewScreen';
import FoodDetailScreen from './screens/FoodDetailScreen';


const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions= {{
        headerStyle:{backgroundColor: 'purple'}, 
        headerTintColor: 'pink',
        contentStyle: {backgroundColor: 'lightblue'}
        }}
      >
        <Stack.Screen 
        name="Categories" 
        component={CategoriesScreen}
        options={{
          title: 'All Categories',
        }} />
        <Stack.Screen name="FoodOverview" component={FoodOverviewScreen} />
        <Stack.Screen name="FoodDetail" component={FoodDetailScreen} />
      </Stack.Navigator>
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
