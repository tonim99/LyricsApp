import React, { useState } from 'react';
import {
	StyleSheet,
	Text,
	View,
	FlatList,
	TouchableOpacity,
	SafeAreaView,
} from 'react-native';
import Search from './Search'
import { v4 as uuid } from 'uuid';
import colors from '../config/colors';

export default function SongScreen({ navigation }) {
	const [songs, setSongs] = useState([
		{
			id: uuid(),
			artist: 'Ani DiFranco',
			track: 'Play God',
		},
		{
			id: uuid(),
			artist: 'Adele',
			track: 'Hello',
		},
		{
			id: uuid(),
			artist: 'Fleetwood Mac',
			track: 'Dreams',
		},
	]);

	return (
		<SafeAreaView style={styles.container}>
			<Search />
			<FlatList
				data={songs}
				renderItem={({ item }) => (
					<TouchableOpacity>
						<Text style={styles.listText}>{item.artist} - {item.track}</Text>
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
		marginLeft: 10,
		marginRight: 10,
		color: colors.text,
		fontSize: 24,
		borderColor: colors.text,
		borderWidth: 1,
		fontWeight: 'bold',
		textAlign: 'left',
	},
	delete: {
		color: colors.text,
		textAlign: 'right',
		fontWeight: 'bold',
	},
});
