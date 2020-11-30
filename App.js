import 'react-native-gesture-handler';
import React, { useState, useEffect, useContext, createContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, FlatList, Alert, Button } from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { v4 as uuid } from 'uuid';
// import { Provider as UserProvider, Provider } from './components/context'
// import Header from './components/Header';
// import List from './components/List';
// import CreateList from './components/CreateList';
// import Search from './components/Search';
import Login from './app/screens/Login';
import WelcomeScreen from './app/screens/WelcomeScreen'
import Signup from './app/screens/Signup';
import Songs from './app/screens/Songs'
import colors from './app/config/colors'
// function HomeScreen({navigation}) {
// 	return (
// 		<View>
// 			<Text>Home Screen</Text>
// 			<Button title="Go to Details"
// 				onPress={() => navigation.navigate('Details')}
// 			/>
// 		</View>
// 	);
// }
// function DetailScreen() {
// 	return (
// 		<View>
// 			<Text>Detail Screen</Text>
// 		</View>
// 	);
// }
const Stack = createStackNavigator();

export default function App() {
	const url = 'http://localhost:3000/';
	//   const AuthStack = createStackNavigator();
  const [searchQuery, setSearchQuery] = useState('');
  // const [songs, setSongs] = useState([])
	// const onChangeSearch = (query) => setSearchQuery(query);
	// const _handleSearch = (query) => setSearchQuery(query);
	const [lists, setLists] = useState([
		{
			id: uuid(),
			text: 'Set List 1',
		},
		{
			id: uuid(),
			text: 'Set List 2',
		},
		{
			id: uuid(),
			text: 'Set List 3',
		},
	]);
	const deleteList = (id) => {
		setLists((prevLists) => {
			return prevLists.filter((item) => item.id !== id);
		});
	};
	const newList = (text) => {
		!text
			? Alert.alert('Try Again', 'Please Enter A List Name', { text: 'Okay' })
			: setLists((prevLists) => {
					return [...prevLists, { id: uuid(), text }];
			  });
	};
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
    		<Stack.Navigator 
				initialRouteName="Songs"
				screenOptions={{
					headerStyle: {
					backgroundColor: colors.primary
					},
					headerTintColor: colors.text,
					headerTitleStyle: {
					fontWeight: 'bold',
					fontSize: 22
					}
				}}
			>
				<Stack.Screen
					name='Songs'
					component={Songs}
					options={{ title: 'Songs' }}
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
			</Stack.Navigator>
		</NavigationContainer>
	);
}
const theme = {
	...DefaultTheme,
	roundness: 0,
	colors: {
		...DefaultTheme.colors,
		primary: '#440bd4',
		background: '#1d1f2e',
		placeholder: '#ffffff',
		text: '#ffffff',
	},
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#1d1f2e',
	},
});
