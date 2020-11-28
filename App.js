import React, { useState }from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { DefaultTheme, Provider as PaperProvider, Appbar, Searchbar } from 'react-native-paper'
import Header from './components/Header'
import Lists from './components/Lists'
import Faves from './components/Faves';
import Search from './components/Search'
import Login from './components/Login'
export default function App() {
  const url = 'http://localhost:3000/';

  const [searchQuery, setSearchQuery] = useState('');
  const onChangeSearch = (query) => setSearchQuery(query);
  const _handleSearch = () => console.log('Searching');

  fetch(`${url}/songs`)
  .then(res => res.json())
  .then(data => console.log(data))


  return (
		<PaperProvider theme={theme}>
      <Login />
			<View style={styles.container}>
				{/* <Header /> */}
				<Appbar.Header>
					<Appbar.Action icon='menu' />
					<Appbar.Content title='Title' />
					<Appbar.Action icon='magnify' onPress={_handleSearch} />
				</Appbar.Header>
				<View style={styles.content}>
					{/* <Search /> */}
					<Searchbar
						iconColor='#ffffff'
						placeholder='Search'
						onChangeText={onChangeSearch}
						value={searchQuery}
					/>
					<View style={styles.list}>
						<Lists />
					</View>
					{/* <View style={styles.faves}>
						<Faves />
					</View> */}
				</View>
			</View>
		</PaperProvider>
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
  content: {
    flex: 1,
    padding: 40,
    backgroundColor: '#1d1f2e'
  },
   list: {
    flex: 1, 
    marginTop: 20,
  },
  // faves: {
  //   flex: 1, 
  //   marginTop: 10,
  // },
});
