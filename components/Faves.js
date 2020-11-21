import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Faves() {
	return (
		<View style={styles.container}>
			<Text>Faves</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#d7d7fe',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
