import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	TouchableOpacity,
	ImageBackground,
} from 'react-native';

import colors from '../config/colors';

export default function Signup({ navigation }) {

    	return (
		<ImageBackground
			style={styles.background}
			source={require('../assets/header.png')}>
			<View style={styles.container}>
				<Text style={styles.signup}>Sign Up</Text>
				<TextInput style={styles.input} placeholder='Username' />
				<TextInput
					style={styles.input}
					placeholder='Password'
					secureTextEntry
				/>
				<View style={styles.buttonContainer}>
					<TouchableOpacity
						style={styles.button}
						onPress={() => navigation.push('Signup')}>
						<Text style={styles.buttonText}>Sign Up</Text>
					</TouchableOpacity>
				</View>
			</View>
		</ImageBackground>
	);
}

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
	signup: {
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
		fontSize: 20,
		color: colors.background,
	},
});
