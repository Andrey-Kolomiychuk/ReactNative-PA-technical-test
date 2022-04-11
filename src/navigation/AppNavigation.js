import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { React } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

import MainScreen from '../screens/MainScreen'
import FavoriteScreen from '../screens/FavoriteScreen'


const Tab = createBottomTabNavigator();

export function AppNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Photos') {
              iconName = focused
                ? 'images'
                : 'images-outline';
            } else if (route.name === 'Favorites') {
              iconName = focused ? 'ios-heart-circle' : 'ios-heart-circle-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen name="Photos" component={ MainScreen } />
        <Tab.Screen name="Favorites" component={ FavoriteScreen } />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

