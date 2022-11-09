import { View, Text, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { ArrowRightIcon } from 'react-native-heroicons/outline';
import RestaurantCard from './RestaurantCard';
import sanityClient from '../../sanity';
const FeaturedRow = ({ title, id, description, featuredCategories }) => {
	const [ resto, setResto ] = useState([]);
	useEffect(() => {
		sanityClient
			.fetch(
				`*[_type == "featured" && _id == $id ]{
						...,
					
						restaurants[]->{
							...,
							dishe[]->,
							type->{
								name
							}
						
					},
				
				}[0]`,
				{ id }
			)
			.then(({ restaurants }) => {
				setResto(restaurants);
			});
	}, []);

	return (
		<View>
			<View className="mt-4 flex-row items-center justify-between px-4 ">
				<Text className="font-bold text-lg">{title}</Text>
				<ArrowRightIcon color="#00CCBB" />
			</View>
			<Text className="text-xs text-gray-500 px-4">{description}</Text>
			<ScrollView
				horizontal
				contentContainerStyle={{ paddingHorizontal: 15 }}
				showsHorizontalScrollIndicator={false}
				className="pt-4 "
			>
				{/* Restaurant Card...*/}
				{resto ? (
					resto.map(
						(resto) =>
							resto ? (
								<RestaurantCard
									imgUrl={resto.image ? resto.image : undefined}
									title={resto.title}
									genre={resto.genre}
									key={resto._id}
									id={resto._id}
									rating={resto.rating}
									address={resto.address}
									short_description={resto.short_description}
									dish={resto.dishe}
									long={resto.long}
									lat={resto.lat}
								/>
							) : (
								undefined
							)
					)
				) : (
					undefined
				)}
			</ScrollView>
		</View>
	);
};

export default FeaturedRow;
