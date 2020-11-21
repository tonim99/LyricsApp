import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Lists() {
	return (
		<View style={styles.container}>
			<Text>Lists</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#ffda1f',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
