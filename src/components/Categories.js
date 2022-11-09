import { View, Text, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import CategoryCard from './CategoriesCard';
import sanityClient from '../../sanity';
import { urlFor } from '../../sanity';
const Categories = () => {
	const [ category, setCategory ] = useState([]);
	useEffect(() => {
		sanityClient
			.fetch(
				`*[_type == "category" ]{
			...,
			
		}`
			)
			.then((data) => {
				setCategory(data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);
	return (
		<ScrollView
			horizontal
			contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
			showsHorizontalScrollIndicator={false}
		>
			{category ? (
				category.map((data) => (
					<CategoryCard id={data._id} key={data._id} imgUrl={data.image} title={data.name} />
				))
			) : (
				undefined
			)}
		</ScrollView>
	);
};

export default Categories;
