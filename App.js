import 'react-native-gesture-handler';
import React, { useState, useEffect, useContext, createContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, FlatList, Alert, Button } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { MaterialCommunityIcons } from 'react-native-vector-icons'
import { v4 as uuid } from 'uuid';
import Icon from 'react-native-vector-icons'
import LoginScreen from './app/screens/LoginScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import SignupScreen from './app/screens/SignupScreen';
import TabScreen from './app/screens/TabScreen'

import colors from './app/config/colors';

const Drawer = createDrawerNavigator()
// const SongStackScreen = ({ navigation }) => (
// 	<SongStack.Navigator
// 		screenOptions={{
// 			headerStyle: {
// 				backgroundColor: colors.primary,
// 			},
// 			headerTintColor: colors.text,
// 			headerTitleStyle: {
// 				fontWeight: 'bold',
// 				fontSize: 22,
// 			},
// 		}}>
// 		<SongStack.Screen
// 			name='Song'
// 			component={Song}
// 			options={{
// 				title: 'Songs',
// 				headerLeft: () => <Text style={styles.text} onPress={() => navigation.openDrawer()}>Nav</Text>,
// 			}}
// 		/>
// 	</SongStack.Navigator>
// );
// const ListStackScreen = ({ navigation }) => (
// 	<ListStack.Navigator
// 		screenOptions={{
// 			headerStyle: {
// 				backgroundColor: colors.primary,
// 			},
// 			headerTintColor: colors.text,
// 			headerTitleStyle: {
// 				fontWeight: 'bold',
// 				fontSize: 22,
// 			},
// 		}}>
// 		<ListStack.Screen
// 			name='List'
// 			component={List}
// 			options={{
// 				title: 'Lists',
// 				headerLeft: () => (
// 					<Text style={styles.text} onPress={() => navigation.openDrawer()}>
// 						Nav
// 					</Text>
// 				),
// 			}}
// 		/>
// 	</ListStack.Navigator>
// );
export default function App() {
	// const url = 'http://localhost:3000/';
	// const [searchQuery, setSearchQuery] = useState('');
	
	// const deleteList = (id) => {
	// 	setLists((prevLists) => {
	// 		return prevLists.filter((item) => item.id !== id);
	// 	});
	// };
	// const newList = (text) => {
	// 	!text
	// 		? Alert.alert('Try Again', 'Please Enter A List Name', { text: 'Okay' })
	// 		: setLists((prevLists) => {
	// 				return [...prevLists, { id: uuid(), text }];
	// 		  });
	// };
	// const getLists = () => {
	// 	return fetch(`${url}/setlists`)
	// 		.then((res) => res.json())
	// 		.then((data) => {
	// 			console.log(data);
	// 			return data.name;
	// 		})
	// 		.catch((error) => {
	// 			console.error(error);
	// 		});
	// };
	// getLists()
	//   useEffect(() => {
	//     const getSongs = () => {
	// 			return fetch(`${url}/songs`)
	// 				.then((res) => res.json())
	// 				.then((data) => {
	// 					console.log('data', data);
	// 					setSongs(data);
	// 				})
	// 				.catch((error) => {
	// 					console.error(error);
	// 				});
	// 		};
	// 		getSongs();
	// }, [])

	//  console.log('songs', songs)

	// fetch(`${url}/songs/search/artist/${searchQuery}`)
	// 	.then((res) => res.json())
	// 	.then((data) => console.log('artist search', data));

	return (
		<NavigationContainer>
			<Drawer.Navigator initialRouteName='Song'>
				<Drawer.Screen name='Song' component={TabScreen} />
				
				{/* <Drawer.Screen name='List' component={ListStackScreen} /> */}
			</Drawer.Navigator>
			{/* <Stack.Navigator
				initialRouteName='Song'
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
				<Stack.Screen
					name='Song'
					component={Song}
					options={{ title: 'Song' }}
				/>
				<Stack.Screen
					name='List'
					component={List}
					options={{ title: 'List' }}
				/>
				<Stack.Screen
					name='Welcome'
					component={WelcomeScreen}
					options={{ title: 'Welcome' }}
				/>
				<Stack.Screen
					name='Log In'
					component={Login}
					options={{ title: 'Log In' }}
				/>
				<Stack.Screen
					name='Sign Up'
					component={Signup}
					options={{ title: 'Sign Up' }}
				/>
			</Stack.Navigator> */}
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.background,
	},
	text: {
		color: colors.text,
		marginLeft: 20,
		fontSize: 18
	}
});
