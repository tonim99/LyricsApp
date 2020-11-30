import React, { useState, useEffect } from 'react';
import {
	StyleSheet,
	Text,
	View,
	ScrollView,
	SafeAreaView,
	SectionList,
	ActivityIndicator,
	FlatList,
} from 'react-native';
// import { FlatList } from 'react-native-gesture-handler';
// import {  } from 'react-native-paper';
import { v4 as uuid } from 'uuid';

import colors from '../config/colors';
const url = 'http://localhost:3000/';

export default function Songs({ navigation }) {
	const songs=[
		{
			id: uuid(),
			artist: 'Ani Difranco',
		},
		{
			id: uuid(),
			artist: 'Adele',
		},
		{
			id: uuid(),
			artist: 'Fleetwood Mac',
		},
	];
	// const [loading, setLoading] = useState(true);
	// useEffect(() => {
	// 	fetch(`${url}/songs`)
	// 		.then((res) => res.json())
	// 		.then((json) => setSongs(json))
	// 		.catch((error) => alert(error))
	// 		.finally(() => setLoading(false));
	// }, []);
	console.log('songs', songs);
	function Song({ artist }) {
		return (
			<View>
				<Text>{artist}</Text>
			</View>
		)
	}
	return (
		<SafeAreaView style={styles.container}>
			<FlatList
				data={songs}
				renderItem={({ item }) => {
					<Song title={item.artist} />
				}}
			/>
		</SafeAreaView>
	);

}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.background,
		alignItems: 'center',
		justifyContent: 'center',
	},
	text: {
		justifyContent: 'center',
		color: colors.text,
	},
});
