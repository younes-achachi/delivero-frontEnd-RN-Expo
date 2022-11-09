import { View, Text, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectRestaurant } from '../../features/restaurantSlice';
import { XCircleIcon } from 'react-native-heroicons/solid';
import { Bar } from 'react-native-progress';
import MapView, { Marker } from 'react-native-maps';
const DeliveryScreen = () => {
	const date = new Date(Date.now()).getSeconds().toString();
	const navigation = useNavigation();
	const restaurant = useSelector(selectRestaurant);

	return (
		<View className="bg-[#00CCBB] flex-1">
			<SafeAreaView className=" z-50">
				<View className="flex-row justify-between items-center p-5">
					<TouchableOpacity onPress={() => navigation.navigate('Home')}>
						<XCircleIcon color="white" size={30} />
					</TouchableOpacity>
					<Text className="font-light text-white text-lg">Order Help</Text>
				</View>
				<View className="bg-white mx-5 my-4 rounded-md p-6 z-50 shadow-md">
					<View className="flex-row justify-between">
						<View>
							<Text className="text-lg to-gray-400">Estimated Arrival</Text>
							<Text className="text-4xl font-bold">45-55</Text>
						</View>
						<Image className="h-20 w-20" source={{ uri: 'https://links.papareact.com/fls' }} />
					</View>
					<Bar size={30} color="#00CCBB" indeterminate={true} />
				</View>
			</SafeAreaView>
			<MapView
				initialRegion={{
					latitude: restaurant.lat,
					longitude: restaurant.long,
					latitudeDelta: 0.005,
					longitudeDelta: 0.005
				}}
				className="flex-1 mt-10 z-0"
				mapType="mutedStandar"
			>
				<Marker
					coordinate={{
						latitude: restaurant.lat,
						longitude: restaurant.long
					}}
					title={restaurant.title}
				/>
			</MapView>
			<SafeAreaView className="flex-row bg-white items-center space-x-5 h-28">
				<Image
					className="h-12 w-12 bg-gray-300 p-4 rounded-full ml-5"
					source={require('../../assets/WP_20180619_10_57_37_Pro.jpeg')}
				/>
				<View className="flex-1">
					<Text className="text-lg"> Achachi Younes</Text>
					<Text className="text-gray-400">Your Rider</Text>
				</View>
				<TouchableOpacity>
					<Text className="text-[#00CCBB] text-lg mr-5 font-bold">Call</Text>
				</TouchableOpacity>
			</SafeAreaView>
		</View>
	);
};

export default DeliveryScreen;
