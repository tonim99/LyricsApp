import React, { useState } from 'react';
import {
	StyleSheet,
	Text,
	View,
	FlatList,
	TouchableOpacity,
	SafeAreaView,
} from 'react-native';
import CreateList from './CreateList';
import { v4 as uuid } from 'uuid';
import colors from '../config/colors';

export default function ListScreen({ navigation }) {
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

	const deleteList = (id) => {
		setLists((prevLists) => {
			return prevLists.filter((item) => item.id !== id);
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
			<CreateList list={lists}/>
			<FlatList
				data={lists}
				renderItem={({ item }) => (
					<TouchableOpacity>
						<Text style={styles.listText}>{item.text}</Text>
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
