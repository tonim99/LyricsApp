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

export function DrawerContent(props) {
    return (
			<View style={{ flex: 1 }}>
				<DrawerContentScrollView {...props}>
					<View style={styles.drawerContent}>
						<Drawer.Section>
							<DrawerItem
								icon={({ color, size }) => (
									<Icon
										name='home-outline'
										color={colors.background}
										size={28}
									/>
								)}
								label='Home'
								onPress={() => {}}
							/>
							<DrawerItem
								icon={({ color, size }) => (
									<Icon
										name='account-outline'
										color={colors.background}
										size={28}
									/>
								)}
								label='Log In'
								onPress={() => {}}
							/>
							<DrawerItem
								icon={({ color, size }) => (
									<Icon name='music' color={colors.background} size={28} />
								)}
								label='Songs'
								onPress={() => {}}
							/>
							<DrawerItem
								icon={({ color, size }) => (
									<Icon
										name='heart-outline'
										color={colors.background}
										size={28}
									/>
								)}
								label='Lists'
								onPress={() => {}}
							/>
							<DrawerItem
								icon={({ color, size }) => (
									<Icon
										name='magnify'
										color={colors.background}
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
						icon={({ color, size }) => (
							<Icon name='exit-to-app' color={colors.background} size={22} />
						)}
						label='Sign Out'
						onPress={() => {}}
					/>
				</Drawer.Section>
			</View>
		);
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1
    },

})