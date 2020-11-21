import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
	return (
		<View style={styles.header}>
			<Text style={styles.menu}>Hamburger</Text>
			<Text style={styles.title}>Title</Text>
			<Text style={styles.search}>Search</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	header: {
		flex: .09,
		flexDirection: 'row',
		height: 80,
		paddingTop: 38,
		backgroundColor: '#440BD4',
		justifyContent: 'space-between',
	},
	menu: {
		color: '#fff',
		alignSelf: 'center',
		paddingLeft: 10,
	},
	title: {
		color: '#fff',
		fontWeight: 'bold',
		alignSelf: 'center',
		fontSize: 20,
	},
	search: {
		color: '#fff',
		alignSelf: 'center',
		paddingRight: 10,
	},
});
