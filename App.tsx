import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './src/screens/home/home';
import ToDoListScreen from './src/screens/tasks/tasks-list';
import Info from './src/screens/info/info';

import { Provider } from 'react-redux';
import store from './src/store/store';
import { StatusBar } from 'react-native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

export default function App() {
	return (
		<Provider store={store}>
			<StatusBar />
			<NavigationContainer>
				<Tab.Navigator
					tabBarOptions={{
						keyboardHidesTabBar: true
					}}
				>
					<Tab.Screen
						name="Home"
						component={HomeScreen}
						options={{
							tabBarIcon: ({ focused, color, size }) => (
								<MaterialCommunityIcon name="home-circle" size={28} color={color} />
							)
						}}
					/>
					<Tab.Screen
						name="Todo"
						component={ToDoListScreen}
						options={{
							tabBarIcon: ({ focused, color, size }) => (
								<MaterialCommunityIcon name="check-circle" size={28} color={color} />
							)
						}}
					/>
					<Tab.Screen
						name="Info"
						component={Info}
						options={{
							tabBarIcon: ({ focused, color, size }) => (
								<MaterialCommunityIcon name="information" size={28} color={color} />
							)
						}}
					/>
				</Tab.Navigator>
			</NavigationContainer>
		</Provider>
	);
}
