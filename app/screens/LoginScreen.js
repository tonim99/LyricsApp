import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground } from 'react-native';

import colors from '../../app/config/colors';

// const url = 'http://localhost:3000/';
// const userLogin = () => {
//     fetch(`${url}login`, {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//             Authorization: `bearer ${JWT_TOKEN}`,
//         },
//         body: JSON.stringify({ username, password })
//     })
// }
export default function LoginScreen({ navigation }, username, password) {
//     const url = 'http://localhost:3000/'
//     const userLogin = () => {
//         fetch(`${url}login`, {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify({ username, password })
//         })
//     }
	return (
		<ImageBackground
			style={styles.background}
			source={require('../assets/headerResized.png')}>
			<View style={styles.container}>
				<Text style={styles.login}>Log In</Text>
				<TextInput style={styles.input} placeholder='Username' />
				<TextInput
					style={styles.input}
					placeholder='Password'
					secureTextEntry
				/>
				<View style={styles.buttonContainer}>
					<TouchableOpacity
						style={styles.button}
						onPress={() => navigation.push('Login')}>
						<Text style={styles.buttonText}>Log In</Text>
					</TouchableOpacity>
					{/* <TouchableOpacity style={styles.button}>
						<Text
							style={styles.buttonText}
							onPress={() => navigation.push('CreateAccount')}>
							Create Account
						</Text>
					</TouchableOpacity> */}
				</View>
			</View>
		</ImageBackground>
	);
}
// alert('sign up')
const styles = StyleSheet.create({
	background: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	container: {
		alignItems: 'center',
		justifyContent: 'center',
		width: '75%'
	},
	login: {
		color: colors.text,
		fontSize: 32,
		fontWeight: 'bold',
	},
	input: {
		width: '75%',
		padding: 15,
		backgroundColor: colors.text,
		margin: 5,
	},
	buttonContainer: {
		width: '50%',
	},
	button: {
		paddingTop: 15,
		paddingBottom: 15,
		paddingLeft: 40,
		paddingRight: 40,
		borderRadius: 10,
		backgroundColor: colors.secondary,
	},
	buttonText: {
		fontSize: 22,
		color: colors.background,
	},
});
