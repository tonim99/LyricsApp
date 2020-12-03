import React from 'react'
import {View} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs'
import { MaterialCommunityIcons} from 'react-native-vector-icons'
import SongScreen from './SongScreen';
import ListScreen from './ListScreen';
import LoginScreen from './LoginScreen'
import WelcomeScreen from './WelcomeScreen'
import Search from './Search'
import colors from '../config/colors'
const SongStack = createStackNavigator()
const ListStack = createStackNavigator()
const LoginStack = createStackNavigator()
const WelcomeStack = createStackNavigator()
const SearchStack = createStackNavigator()
const Tab = createMaterialBottomTabNavigator()

export default function TabScreen() {
    return (
			<Tab.Navigator
				initialRouteName='Home'
				barStyle={{ backgroundColor: colors.primary }}>
				<Tab.Screen
					name='Home'
					component={WelcomeStackScreen}
					options={{
						tabBarLabel: 'Home',
						tabBarIcon: () => (
							<MaterialCommunityIcons
								name='home'
								color={colors.text}
								size={26}
							/>
						),
					}}
				/>
				<Tab.Screen
					name='Song'
					component={SongStackScreen}
					options={{
						tabBarLabel: 'Songs',
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
					name='List'
					component={ListStackScreen}
					options={{
						tabBarLabel: 'Lists',
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

				<Tab.Screen
					name='Search'
					component={SearchStackScreen}
					options={{
						tabBarLabel: 'Search',
						tabBarColor: '#512598',
						tabBarIcon: () => (
							<MaterialCommunityIcons
								name='magnify'
								color={colors.text}
								size={26}
							/>
						),
					}}
				/>
			</Tab.Navigator>
		);
}
const WelcomeStackScreen = ({ navigation }) => (
	<WelcomeStack.Navigator
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
		<WelcomeStack.Screen
			name='Welcome'
			component={WelcomeScreen}
			options={{
				title: 'Welcome',
				headerLeft: () => (
					<View style={{ marginLeft: 10 }}>
						<MaterialCommunityIcons
							name='menu'
							color={colors.text}
							size={28}
							onPress={() => navigation.openDrawer()}
						/>
					</View>
				),
			}}
		/>
	</WelcomeStack.Navigator>
);
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
				title: 'My Lists',
				headerLeft: () => (
					<View style={{marginLeft: 10}}>
						<MaterialCommunityIcons name='menu' color={colors.text} size={28} onPress={() => navigation.openDrawer()}/>
					</View>
				)
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
			name='Log in'
			component={LoginScreen}
			options={{
				title: 'Please Log In',
				headerLeft: () => (
					<View style={{ marginLeft: 10 }}>
						<MaterialCommunityIcons
							name='menu'
							color={colors.text}
							size={28}
							onPress={() => navigation.openDrawer()}
						/>
					</View>
				),
			}}
		/>
	</LoginStack.Navigator>
);
const SearchStackScreen = ({ navigation }) => (
	<SearchStack.Navigator
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
		<SearchStack.Screen
			name='search'
			component={Search}
			options={{
				title: 'Search',
				headerLeft: () => (
					<View style={{ marginLeft: 10 }}>
						<MaterialCommunityIcons
							name='menu'
							color={colors.text}
							size={28}
							onPress={() => navigation.openDrawer()}
						/>
					</View>
				),
			}}
		/>
	</SearchStack.Navigator>
);