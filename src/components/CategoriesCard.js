import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import { urlFor } from '../../sanity';
const Categories = ({ imgUrl, title }) => {
	return (
		<TouchableOpacity className="relative mr-2">
			{/* CategoriesCard */}
			<Image source={{ uri: urlFor(imgUrl.asset._ref).url() }} className="h-20 w-20 rounded" />
			<Text className="absolute bottom-1 text-white font-bold left-1">{title}</Text>
		</TouchableOpacity>
	);
};

export default Categories;
