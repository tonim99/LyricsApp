import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function Login() {
	return (
		<View style={styles.container}>
			<Text style={styles.login}>Login</Text>
			<TextInput style={styles.input} placeholder='Username' />
			<TextInput style={styles.input} placeholder='Password' secureTextEntry />
			<View style={styles.buttonContainer}>
				<TouchableOpacity style={styles.button} onPress={() => alert('log in')}>
					<Text style={styles.buttonText}>Log In</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.button}>
					<Text style={styles.buttonText} onPress={() => alert('sign up')}>
						Sign Up
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#440bd4',
	},
	login: {
		fontSize: 30,
		margin: 10,
		color: '#fff',
	},
	input: {
		width: '75%',
		padding: 10,
		backgroundColor: '#fff',
		margin: 5,
	},
	buttonContainer: {
		flexDirection: 'row',
        justifyContent: 'space-between',
        width: '75%'
	},
	button: {
        backgroundColor: '#ffda1f',
        marginTop: 5,
		padding: 10,
		width: '47%',
	},
	buttonText: {
		fontSize: 18,
		textAlign: 'center',
	},
});
