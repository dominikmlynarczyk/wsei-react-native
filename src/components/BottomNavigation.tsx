import React, { FC } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from 'react-native-vector-icons';

import Home from '../screens/Home';
import TodoList from '../screens/TodoList';

const Tab = createBottomTabNavigator();

const BottomTabs: FC = () => {

    return (
        <Tab.Navigator
            initialRouteName="Home"
            tabBarOptions={{
                activeTintColor: '#e91e63'
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: 'Home sdgdfg',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                    )
                }}
            />
            <Tab.Screen
                name="TodoList"
                component={TodoList}
                options={{
                    tabBarLabel: 'TodoList',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account" color={color} size={size} />
                    )
                }}
            />
        </Tab.Navigator>
    );
};

export default BottomTabs;