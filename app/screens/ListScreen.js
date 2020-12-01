import React, { useState } from 'react';
import {
	StyleSheet,
	Text,
	View,
	FlatList,
	TouchableOpacity,
	SafeAreaView,
	TextInput,
	Alert
} from 'react-native';
import { v4 as uuid } from 'uuid';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import colors from '../config/colors';

export default function ListScreen({ navigation }) {
	const [text, setText] = useState('');
	const [lists, setLists] = useState([
		{
			id: uuid(),
			text: 'Set List 1',
		},
		{
			id: uuid(),
			text: 'Set List 2',
		},
		{
			id: uuid(),
			text: 'Set List 3',
		},
	]);
	const onChange = (val) => setText(val);
	const deleteList = (id) => {
		setLists((prevLists) => {
			return prevLists.filter((item) => item.id != id);
		});
	};
	const newList = (text) => {
		!text
			? Alert.alert('Try Again', 'Please Enter A List Name', { text: 'Okay' })
			: setLists((prevLists) => {
					return [...prevLists, { id: uuid(), text }];
			  });
	};
	return (
		<SafeAreaView style={styles.container}>
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
			<FlatList
				data={lists}
				renderItem={({ item }) => (
					<TouchableOpacity>
						<Text style={styles.listText}>
							{item.text}{'                                        '}
							<Icon
								onPress={()=>deleteList(item.id)}
								name='delete'
								color={colors.selectedText}
								size={24}
							/>
						</Text>
					</TouchableOpacity>
				)}
			/>
		</SafeAreaView>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.background,
	},
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
	listText: {
		padding: 15,
		margin: 10,
		color: colors.text,
		fontSize: 24,
		borderColor: colors.text,
		borderWidth: 1,
		fontWeight: 'bold',
		textAlign: 'center',
	},
	delete: {
		color: colors.text,
		textAlign: 'right',
		fontWeight: 'bold',
	},
});
