// import React from 'react';
// import {
// 	StyleSheet,
// 	Text,
// 	View,
// 	TouchableOpacity,
// 	SectionList,
// 	SafeAreaView,
// } from 'react-native';
// import { v4 as uuid } from 'uuid';
// export default function List({ lists, deleteList }) {
// 	console.log('LISTS', lists);
// 	return (
// 		<SafeAreaView style={styles.list}>
// 			<SectionList
// 				sections={[{ title: 'Set Lists', data: lists.text }]}
// 				renderItem={({ list }) => (
// 					<View style={styles.listView}>
// 						<Text style={styles.listText}>{list.text}</Text>
// 						<Text style={styles.delete} onPress={() => deleteList(item.id)}>
// 							X
// 						</Text>
// 					</View>
// 				)}
// 				renderSectionHeader={({ section }) => <Text>{section.title}</Text>}
// 				keyExtractor={(item) => item.id}
// 			/>
// 		</SafeAreaView>
// 	);
// }

// const styles = StyleSheet.create({
// 	listView: {
// 		padding: 15,
// 		margin: 10,
// 		backgroundColor: '#1d1f2e',
// 		borderColor: '#ffffff',
// 		borderWidth: 1,
// 	},
// 	listText: {
// 		color: '#ffffff',
// 		fontSize: 24,
// 		fontWeight: 'bold',
// 		textAlign: 'center',
// 	},
// 	delete: {
// 		color: '#ffffff',
// 		textAlign: 'right',
// 		fontWeight: 'bold',
// 	},
// });
