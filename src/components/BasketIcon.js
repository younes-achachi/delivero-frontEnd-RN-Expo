import { Text, View, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';
import { useSelector } from 'react-redux';
import { selectBasketItems, selectBasketItemsById, selectBasketTotal } from '../../features/basketSlice';
import { useNavigation } from '@react-navigation/native';
import Currency from 'react-currency-formatter';

const BasketIcon = () => {
	const navigation = useNavigation();
	const basketTotal = useSelector(selectBasketTotal);
	const items = useSelector(selectBasketItems);
	if (!items.length) return null;
	return (
		<View className="absolute bottom-10 w-full z-50">
			<TouchableOpacity
				onPress={() => navigation.navigate('Basket')}
				className="bg-[#00CCBB] mx-5 rounded-lg flex-row items-center p-3 space-x-1  "
			>
				<Text className=" text-white text-lg font-extrabold  py-1 px-2 bg-[#01A296]">{items.length}</Text>
				<Text className="flex-1 text-white font-extrabold text-lg text-center ">View Basket</Text>
				<Text className="text-lg text-white font-extrabold">
					<Currency quantity={basketTotal} currency="GBP" />
				</Text>
			</TouchableOpacity>
		</View>
	);
};
export default BasketIcon;
