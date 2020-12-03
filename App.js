import 'react-native-gesture-handler';
import React, { useState, useEffect, useContext, createContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, FlatList, Alert, Button } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { MaterialCommunityIcons } from 'react-native-vector-icons'
import Search from './app/screens/Search'
import TabScreen from './app/screens/TabScreen'
import { DrawerContent } from './app/screens/DrawerContent'

import colors from './app/config/colors';

const Drawer = createDrawerNavigator()

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
			<Drawer.Navigator drawerContent={props => <DrawerContent {...props}/>}>
				<Drawer.Screen name='Main' component={TabScreen} />
			</Drawer.Navigator>
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
