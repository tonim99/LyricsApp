import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function Search() {
    const [text, setText] = useState('')
    const changeHandler = (val) => {
        setText(val)
    }
	return (
		<View style={styles.input}>
			<TextInput 
              placeholder='search' 
              onChangeText={changeHandler}
            />
		</View>
	);
}

const styles = StyleSheet.create({
	input: {
        marginBottom: 10,
        paddingHorizontal: 8, 
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#fff',
	},
});
