import React, { useState } from 'react';
import {
	View,
	Text,
	StyleSheet,
	TextInput,
	TouchableOpacity,
} from 'react-native';

export default function CreateList({ newList }) {
	const [text, setText] = useState('');

	const onChange = (val) => setText(val);
	return (
		<View>
			<TextInput
				placeholder='New Setlist'
				placeholderTextColor='#ffffff'
				style={styles.input}
				onChangeText={onChange}
			/>
			<TouchableOpacity style={styles.btn} onPress={() => newList(text)}>
				<Text style={styles.btnText}>Create New</Text>
			</TouchableOpacity>
		</View>
	);
};

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
