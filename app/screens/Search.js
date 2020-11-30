import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Alert, TouchableOpacity } from 'react-native';
import { color } from 'react-native-reanimated';
import colors from '../config/colors';
export default function Search({_handleSearch, navigation, onChangeSearch}) {
    const [text, setText] = useState('')
    const changeHandler = (val) => {
        setText(val)
    }
	return (
		<View>
			<TextInput
				placeholder='Search'
				placeholderTextColor={colors.text}
				style={styles.input}
				onChangeText={changeHandler}
			/>
			<TouchableOpacity style={styles.btn} 
			 onPress={() => onChangeSearch(text)}
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
		color: colors.text,
		borderTopColor: colors.background,
		borderRightColor: colors.background,
		borderLeftColor: colors.background,
		borderBottomColor: colors.text,
		borderWidth: 2,
		borderStyle: 'solid',
	},
	btn: {
		backgroundColor: colors.secondary,
		padding: 9,
		margin: 10,
		marginBottom: 50,
	},
	btnText: {
		color: colors.background,
		fontSize: 20,
		textAlign: 'center',
	},
});
