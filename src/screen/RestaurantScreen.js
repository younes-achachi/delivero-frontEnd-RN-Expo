import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';
import { ArrowLeftIcon } from 'react-native-heroicons/solid';
import { urlFor } from '../../sanity';
import { StarIcon, MapPinIcon } from 'react-native-heroicons/solid';
import { QuestionMarkCircleIcon, ChevronRightIcon } from 'react-native-heroicons/outline';
import SanityClient from '@sanity/client';
import DishRow from '../components/DisheRow';
import BasketIcon from '../components/BasketIcon';
import { useDispatch } from 'react-redux';
import { setRestaurant } from '../../features/restaurantSlice';
import { XCircleIcon } from 'react-native-heroicons/outline';
const RestaurantScreen = () => {
	const navigation = useNavigation();
	const dispatch = useDispatch();
	const { params: { id, imgUrl, title, rating, genre, address, short_description, dish, long, lat } } = useRoute();

	useEffect(() => {
		dispatch(setRestaurant({ id, imgUrl, title, rating, genre, address, short_description, dish, long, lat }));
	}, []);
	useLayoutEffect(() => {
		navigation.setOptions({ headerShown: false });
	}, []);
	console.log(dish, 'ID', id, imgUrl);
	return (
		<React.Fragment>
			<BasketIcon />

			<ScrollView>
				<View className="relative ">
					<Image className="w-full h-56 bg-gray-300 p-4" source={{ uri: urlFor(imgUrl.asset._ref).url() }} />
					<TouchableOpacity
						onPress={() => {
							navigation.goBack();
						}}
						style={{ backgroundColor: '#F2F3F5' }}
						className="absolute top-14 left-5 p-2 bg-color rounded-full"
					>
						<ArrowLeftIcon color="#00CCBB" size={20} />
					</TouchableOpacity>
				</View>
				<View style={{ backgroundColor: 'white' }} className="mb-[130px]">
					<View className="px-4  pt-4">
						<Text className="text-3xl font-bold">{title}</Text>
						<View className="flex-row space-x-2 my-1 ">
							<View className="flex-row space-x-1 items-center">
								<StarIcon color="green" size={20} opacity={0.5} />
								<Text className="text-xs text-gray-500">
									{rating}
									<Text className="text-green-500"> · {genre}</Text>
								</Text>
							</View>
							<View className="flex-row items-center space-x-1">
								<MapPinIcon size={22} color="gray" opacity={0.4} />
								<Text className="text-xs text-gray-500">Nearby · {address}</Text>
							</View>
						</View>
						<Text className="text-gray-500 mt-2 pb-4">{short_description}</Text>
					</View>
					<TouchableOpacity
						style={{ borderColor: '#F2F3F5' }}
						className="flex-row items-center space-x-2 p-4 border-y border-white-300"
					>
						<QuestionMarkCircleIcon size={20} color="gray" opacity={0.6} />
						<Text className="pl-2 flex-1 text-md font-bold">Have a food allergy?</Text>
						<ChevronRightIcon size={20} color="gray" opacity={0.6} />
					</TouchableOpacity>
					<View className="mb-36">
						<Text className="px-4 pt-6 mb-3 font-bold text-xl">Menu</Text>
						{/* Dishes Row */}
						{dish ? (
							dish.map(
								(dish) =>
									dish ? (
										<DishRow
											key={dish._id}
											id={dish._id}
											name={dish.name}
											description={dish.short_description}
											price={dish.price}
											image={dish.image}
										/>
									) : (
										undefined
									)
							)
						) : (
							undefined
						)}
					</View>
				</View>
			</ScrollView>
		</React.Fragment>
	);
};

export default RestaurantScreen;
