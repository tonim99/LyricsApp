import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TextInput, Alert, TouchableOpacity, SafeAreaView, FlatList } from 'react-native';
import { v4 as uuid } from 'uuid'
import Fetch from 'react-native-fetch'
import colors from '../config/colors';
export default function Search({ navigation }) {
	const [text, setText] = useState('')
	const [shouldShow, setShow] = useState(false)
	const [lyrics, setLyrics] = useState([
		{
			id: uuid(),
			track: 'Play God',
			artist: 'Ani DiFranco',
			lyrics: 'I was done at 16 Showing up for class I was out there in the ring Learning how to kick some ass I was done at 16 Using my momma\'s key It was all on me It was all on me...'
		}
	])
	// const url = 'http://localhost:3000/songs/search/lyrics/dreams';
    const changeHandler = (val) => {
        setText(val)
	}
	// const makeAPICall = () => {
	// 	fetch(`${url}`, {
	// 		method: 'GET'
	// 	})
	// 	.then((res) => res.json())
	// 	.then((resJson) => {
	// 		alert(JSON.stringify(resJson))
	// 		console.log(resJson)
	// 	})
	// 	.catch((error) => {
	// 		alert(JSON.stringify(error))
	// 		console.error(error)
	// 	})
	// }
	return (
		<SafeAreaView style={styles.container}>
			<View>
				<TextInput
					placeholder='Search'
					placeholderTextColor={colors.text}
					style={styles.input}
					onChangeText={changeHandler}
				/>
				<TouchableOpacity
					style={styles.btn}
					onPress={() => setShow(!shouldShow)}>
					<Text style={styles.btnText}>Search for Lyrics</Text>
				</TouchableOpacity>
				{shouldShow ? (
					<FlatList
						data={lyrics}
						renderItem={({ item }) => (
							<TouchableOpacity>
								<Text style={styles.listTrack}>{item.track}</Text>
								<Text style={styles.listArtist}>{item.artist}</Text>
								<Text style={styles.listLyrics}> {item.lyrics}</Text>
							</TouchableOpacity>
						)}
					/>
				) : null}
			</View>
			{/* <Fetch
				url='http://localhost:3000/songs/search/lyrics/dreams'
				method= 'GET'
				onResponse={async (res) => {
					const json = await res.json();
					console.log(json);
				}}
				onError={console.error}
			/> */}
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.background
	},
	input: {
		alignItems: 'center',
		margin: 10,
		height: 60,
		padding: 8,
		fontSize: 16,
		// backgroundColor: colors.background,
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
		// marginBottom: 50,
	},
	btnText: {
		color: colors.background,
		fontSize: 20,
		textAlign: 'center',
	},
	listArtist: {
		color: colors.text,
		fontSize: 16,
		fontStyle: 'italic',
		marginLeft: 10,
		marginTop: 0
	},
	listTrack: {
		color: colors.text,
		fontSize: 26,
		margin: 10,
		fontWeight: 'bold',
		marginBottom: 0
	},
	listLyrics: {
		color: colors.text,
		margin: 10,
		fontSize: 24,
		marginTop: 20
	}
	
});
