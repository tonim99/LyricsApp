import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View, Text, ImageBackground, TouchableOpacity } from 'react-native';



import colors from '../config/colors'

function WelcomeScreen({ navigation }) {
	return (
		<ImageBackground
			style={styles.background}
			source={require('../assets/header.png')}>
			<View style={styles.container}>
				<Text style={styles.welcomeText}>Log In To Create Lists</Text>
			</View>
			<View style={styles.buttonContainer}>
				<TouchableOpacity
					style={styles.button}
					onPress={() => navigation.navigate('Log In')}>
					<Text style={styles.buttonText}>Log In</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.button}
					onPress={() => navigation.navigate('Sign Up')}
                >
					<Text style={styles.buttonText}>Sign Up</Text>
				</TouchableOpacity>
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
		position: 'absolute',
		top: 325,
		alignItems: 'center',
	},
	welcomeText: {
		color: colors.text,
		fontSize: 32,
		fontWeight: 'bold',
	},
	buttonContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '75%',
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
export default WelcomeScreen;
