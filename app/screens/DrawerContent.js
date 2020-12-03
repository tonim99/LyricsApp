import React from 'react'
import {View, StyleSheet} from 'react-native'
import {
    DrawerContentScrollView, 
    DrawerItem
} from '@react-navigation/drawer'
import {
    Title, 
    Caption,
    Paragraph, 
    Drawer, 
    Text, 
    TouchableRipple, 
    Switch
} from 'react-native-paper'
import colors from '../config/colors'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import SongScreen from './SongScreen'

export function DrawerContent(props, {navigation}) {
    return (
			<View style={styles.drawer}>
				<DrawerContentScrollView {...props}>
					<View style={styles.drawerContent}>
						<Drawer.Section>
							<DrawerItem
                                style={styles.item}
								icon={() => (
									<Icon
										name='home-outline'
										color={colors.selectedText}
										size={28}
									/>
								)}
                                label='Home'
								onPress={() =>{}}
							/>
							<DrawerItem
								icon={() => (
									<Icon
										name='account-outline'
										color={colors.selectedText}
										size={28}
									/>
								)}
								label='Log In'
								onPress={() => {}}
							/>
							<DrawerItem
								icon={() => (
									<Icon name='heart-outline' color={colors.selectedText} size={28} />
								)}
								label='Songs'
								onPress={() => {}}
							/>
							<DrawerItem
								icon={() => (
									<Icon
										name='music'
										color={colors.selectedText}
										size={28}
									/>
								)}
								label='Lists'
								onPress={() => {}}
							/>
							<DrawerItem
								icon={() => (
									<Icon
										name='magnify'
										color={colors.selectedText}
										size={28}
									/>
								)}
								label='Search'
								onPress={() => {}}
							/>
						</Drawer.Section>
					</View>
				</DrawerContentScrollView>
				<Drawer.Section>
					<DrawerItem
						icon={() => (
							<Icon name='exit-to-app' color={colors.selectedText} size={22} />
						)}
						label='Sign Out'
						onPress={() => {}}
					/>
				</Drawer.Section>
			</View>
		);
}

const styles = StyleSheet.create({
    drawer: {
        flex: 1,
        backgroundColor: '#fff'
    },
})