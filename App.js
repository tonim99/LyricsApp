import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header'
import Lists from './components/Lists'
import Faves from './components/Faves';
import Search from './components/Search'

export default function App() {
  return (
		<View style={styles.container}>
			<Header />
			<View style={styles.content}>
				<Search />
				<View style={styles.list}>
					<Lists />
				</View>
				<View style={styles.faves}>
					<Faves />
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1d1f2e',
  },
  content: {
    flex: 1,
    padding: 40,
  },
   list: {
    flex: 1, 
    marginTop: 20,
  },
  faves: {
    flex: 1, 
    marginTop: 10,
  },
});
