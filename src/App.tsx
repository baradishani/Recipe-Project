/* eslint-disable prettier/prettier */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import RecipeDetails from './screens/RecipeDetails';

export type RootStackParamList = {
  Home: undefined,
  RecipeDetails: { recipe: Recipe }
}

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'List of recipes',
          }} />
        <Stack.Screen
          name="RecipeDetails"
          component={RecipeDetails}
          options={{
            title: 'Product Details',
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

