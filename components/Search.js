import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Alert, TouchableOpacity } from 'react-native';

export default function Search({_handleSearch, navigation, onChangeSearch}) {
    const [text, setText] = useState('')
    const changeHandler = (val) => {
        setText(val)
    }
	return (
		<View>
			<TextInput
				placeholder='Search'
				placeholderTextColor='#ffffff'
				style={styles.input}
				onChangeText={changeHandler}
			/>
			<TouchableOpacity style={styles.btn} 
			// onPress={() => onChangeSearch(text)}
			>
				<Text style={styles.btnText}>Search for Lyrics</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	input: {
		alignItems: 'center',
		margin: 10,
		height: 60,
		padding: 8,
		fontSize: 16,
		color: '#ffffff',
		borderTopColor: '#1d1f2e',
		borderRightColor: '#1d1f2e',
		borderLeftColor: '#1d1f2e',
		borderBottomColor: '#ffffff',
		borderWidth: 2,
		borderStyle: 'solid',
	},
	btn: {
		backgroundColor: '#ffda1f',
		padding: 9,
		margin: 10,
	},
	btnText: {
		color: 'black',
		fontSize: 20,
		textAlign: 'center',
	},
});
