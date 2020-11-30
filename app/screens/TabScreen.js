import React from 'react'
import {View} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs'
import { MaterialCommunityIcons} from 'react-native-vector-icons'
import SongScreen from './SongScreen';
import ListScreen from './ListScreen';
import LoginScreen from './LoginScreen'
import colors from '../config/colors'
const SongStack = createStackNavigator()
const ListStack = createStackNavigator()
const LoginStack = createStackNavigator()
const Tab = createMaterialBottomTabNavigator()

export default function TabScreen() {
    return (
		<Tab.Navigator initialRouteName='Songs' barStyle={{backgroundColor: colors.primary}}>
			<Tab.Screen
				name='Song'
				component={SongStackScreen}
				options={{
					tabBarLabel: 'Songs',
					tabBarIcon: () => (
						<MaterialCommunityIcons
							name='music'
							color={colors.text}
							size={26}
						/>
					),
				}}
			/>
			<Tab.Screen
				name='List'
				component={ListStackScreen}
				options={{
					tabBarLabel: 'Lists',
					tabBarIcon: () => (
						<MaterialCommunityIcons
							name='heart'
							color={colors.text}
							size={26}
						/>
					),
				}}
			/>
			<Tab.Screen
				name='Log In'
				component={LoginStackScreen}
				options={{
					tabBarLabel: 'Login',
					tabBarColor: '#512598',
					tabBarIcon: () => (
						<MaterialCommunityIcons
							name='account'
							color={colors.text}
							size={26}
						/>
					),
				}}
			/>
		</Tab.Navigator>
	);
}


const SongStackScreen = ({ navigation }) => (
	<SongStack.Navigator
		screenOptions={{
			headerStyle: {
				backgroundColor: colors.primary,
			},
			headerTintColor: colors.text,
			headerTitleStyle: {
				fontWeight: 'bold',
				fontSize: 22,
			},
		}}>
		<SongStack.Screen
			name='Song'
			component={SongScreen}
			options={{
				title: 'Songs',
				headerLeft: () => (
					<View style={{marginLeft: 10}}>
						<MaterialCommunityIcons name='menu' color={colors.text} size={28} onPress={() => navigation.openDrawer()}/>
					</View>
				) 
			}}
		/>
	</SongStack.Navigator>
);
const ListStackScreen = ({ navigation }) => (
	<ListStack.Navigator
		screenOptions={{
			headerStyle: {
				backgroundColor: colors.primary,
			},
			headerTintColor: colors.text,
			headerTitleStyle: {
				fontWeight: 'bold',
				fontSize: 22,
			},
		}}>
		<ListStack.Screen
			name='List'
			component={ListScreen}
			options={{
				title: 'Lists',
				headerLeft: () => <MaterialCommunityIcons name='menu' color={colors.text} size={28} onPress={() => navigation.openDrawer()} />
			}}
		/>
	</ListStack.Navigator>
);
const LoginStackScreen = ({ navigation }) => (
	<LoginStack.Navigator
		screenOptions={{
			headerStyle: {
				backgroundColor: colors.primary,
			},
			headerTintColor: colors.text,
			headerTitleStyle: {
				fontWeight: 'bold',
				fontSize: 22,
			},
		}}>
		<LoginStack.Screen
			name='List'
			component={LoginScreen}
			options={{
				title: 'Please Log In',
				headerLeft: () => (
					<MaterialCommunityIcons
						name='menu'
						color={colors.text}
						size={28}
						onPress={() => navigation.openDrawer()}
					/>
				),
			}}
		/>
	</LoginStack.Navigator>
);