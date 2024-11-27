import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';

// Define the ParamList for the stack
export type RootStackParamList = {
  Home: undefined; // No parameters expected for HomeScreen
  Details: { place: { id: string; name: string; visited: boolean } }; // Parameters for DetailsScreen
};

// Create a typed Stack Navigator
const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
