import React, { useState } from 'react';
import {
	View,
	Text,
	StyleSheet,
	TextInput,
	TouchableOpacity,
} from 'react-native';

import colors from '../config/colors';
export default function CreateList(props) {
	const [text, setText] = useState('');
	const onChange = (val) => setText(val);
	
	return (
		<View>
			<TextInput
				placeholder='New Setlist'
				placeholderTextColor={colors.text}
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
	},
	btnText: {
		color: colors.background,
		fontSize: 20,
		textAlign: 'center',
	},
});
