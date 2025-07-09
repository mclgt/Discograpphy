import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'; 
import HomeScreen from './HomeScreen';
import AddScreen from './AddScreen';
import SearchScreen from './SearchScreen';
import StatsScreen from './StatsScreen';
import CategoryScreen from './CategoryScreen';

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
   <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'Home') iconName = 'home-outline';
            else if (route.name === 'Search') iconName = 'search-outline';
            else if (route.name === 'Add') iconName = 'add-outline';
            else if(route.name === 'My stats') iconName = 'stats-chart-outline';
            else if(route.name === 'Categories') iconName = 'file-tray-stacked-outline';
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Add" component={AddScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="My stats" component={StatsScreen} />
        <Tab.Screen name="Categories" component={CategoryScreen} />
      </Tab.Navigator>
      </NavigationContainer>
  );
}