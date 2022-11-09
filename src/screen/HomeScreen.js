import { View, Text, Image, SafeAreaView, ScrollView, TextInput } from 'react-native';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import {
	ChevronDownIcon,
	UserIcon,
	MagnifyingGlassIcon,
	AdjustmentsVerticalIcon
} from 'react-native-heroicons/outline';
import { useNavigation } from '@react-navigation/native';
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';
import sanityClient from '../../sanity';
const HomeScreen = () => {
	const navigation = useNavigation();
	const [ featuredCategories, setFeaturedCategories ] = useState([]);
	useLayoutEffect(() => {
		navigation.setOptions({ headerShown: false });
	}, []);
	useEffect(() => {
		sanityClient
			.fetch(
				`*[_type == "featured"]{
					...,
					restaurants[]->{
						...,
					}
				
				}`
			)
			.then((data) => {
				setFeaturedCategories(data);
			});
	}, []);

	return (
		<SafeAreaView className="bg-white pt-5 h-1/5.5">
			<View className="flex-row pb-3 items-center  mx-4 space-x-2">
				<Image
					source={{ uri: 'https://links.papareact.com/wru' }}
					className="h-7 w-7 bg-gray-300 p-4 rounded-full"
				/>
				<View className="flex-1">
					<Text className="font-bold text-gray-400 text-xs"> Deliver Now!</Text>
					<Text className="font-bold text-xl">
						Current Location
						<ChevronDownIcon size={20} color="#00CCBB" />
					</Text>
				</View>

				<UserIcon size={35} color="#00CCBB" />
			</View>
			{/* Search */}
			<View className="flex-row items-center space-x-2 pb-2 mx-2 px-2">
				<View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
					<MagnifyingGlassIcon color="#00CCBB" size={18} />
					<TextInput placeholder="Restaurants and cuisines" />
				</View>
				<AdjustmentsVerticalIcon color="#00CCBB" />
			</View>
			{/* Body */}
			<ScrollView className="bg-gray-100 mb-20">
				{/* Categories */}
				<Categories />
				{/* Featured Rows */}

				{featuredCategories.map(
					(category) =>
						category ? (
							<FeaturedRow
								key={category._id}
								id={category._id}
								title={category.name}
								description={category.short_description}
								restaurants={category.restaurants}
							/>
						) : (
							undefined
						)
				)}
				{/* Tasty Discount */}
			</ScrollView>
		</SafeAreaView>
	);
};

export default HomeScreen;
