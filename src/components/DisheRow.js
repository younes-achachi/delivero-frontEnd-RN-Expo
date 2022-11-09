import { StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Currency from 'react-currency-formatter';
import { urlFor } from '../../sanity';
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/solid';
import {
	addToBasket,
	removeFromBasket,
	selectBasketItems,
	selectBasketItemsById,
	selectBasketTotal
} from '../../features/basketSlice';
import { useDispatch, useSelector } from 'react-redux';
import BasketIcon from './BasketIcon';

const Dishes = ({ id, name, description, price, image }) => {
	const [ isPressed, setIsPressed ] = useState(false);
	const items = useSelector(selectBasketItems);
	const dispatch = useDispatch();
	const itemsById = useSelector((state) => selectBasketItemsById(state, id));

	const addItemToBasket = () => dispatch(addToBasket({ id, name, description, price, image }));
	const removeItemsFromBasket = () => {
		if (!items.length) {
			return;
		}
		dispatch(removeFromBasket({ id }));
	};
	return (
		<React.Fragment>
			<TouchableOpacity
				onPress={() => {
					setIsPressed(!isPressed);
				}}
				className={`bg-white p-4 `}
				style={{ borderWidth: 1, borderColor: '#F3F3F4', borderBottomWidth: isPressed ? '0px' : '1px' }}
			>
				<View className="flex-row">
					<View className="flex-1 pr-2">
						<Text className="text-lg mb-1">{name}</Text>
						<Text className="text-gray-400">{description}</Text>
						<Text className="text-gray-400 mt-2">
							<Currency quantity={price} currency="GBP" />
						</Text>
					</View>
					<View>
						<Image
							className="w-20  h-20 bg-gray-300 p-4 border border-gray-100"
							source={{ uri: urlFor(image.asset._ref).url() }}
						/>
					</View>
				</View>
			</TouchableOpacity>
			{isPressed ? (
				<View className="flex-row  items-center space-x-2 pb-3">
					<TouchableOpacity disabled={!itemsById.length} onPress={removeItemsFromBasket}>
						<MinusCircleIcon color={itemsById.length > 0 ? '#00CCBB' : 'gray'} size={40} />
					</TouchableOpacity>
					<Text>{itemsById.length}</Text>
					<TouchableOpacity onPress={addItemToBasket}>
						<PlusCircleIcon color="#00CCBB" size={40} />
					</TouchableOpacity>
				</View>
			) : (
				undefined
			)}
		</React.Fragment>
	);
};

export default Dishes;
